// 知几六爻 · 本地口令加密保险库
// 使用 Web Crypto：PBKDF2(SHA-256, 20万次) 派生 AES-256-GCM 密钥，
// 所有本地数据（卦例、设置）以密文形式保存在本机，口令不离开设备。
const CryptoVault = (function () {
  'use strict';
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const PBKDF2_ITER = 200000;
  const SALT_KEY = 'zjly_salt_v1';
  const VERIFY_KEY = 'zjly_verify_v1';
  const VAULT_KEY = 'zjly_vault_v1';
  const VERIFY_TOKEN = 'ZHIJI_OK_2026';
  let sessionKey = null;

  function bufToB64(buf) {
    const bytes = new Uint8Array(buf);
    let bin = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(bin);
  }
  function b64ToBuf(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }
  function getSubtle() {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error('当前浏览器不支持 Web Crypto，无法加密');
    }
    return window.crypto.subtle;
  }

  async function deriveKey(passphrase, salt) {
    const subtle = getSubtle();
    const baseKey = await subtle.importKey('raw', enc.encode(passphrase), 'PBKDF2', false, ['deriveKey']);
    return subtle.deriveKey(
      { name: 'PBKDF2', salt: salt, iterations: PBKDF2_ITER, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  // 首次使用：建立口令
  async function setup(passphrase) {
    if (!passphrase || passphrase.length < 4) throw new Error('口令至少 4 位');
    const salt = crypto.getRandomValues(new Uint8Array(16));
    localStorage.setItem(SALT_KEY, bufToB64(salt));
    sessionKey = await deriveKey(passphrase, salt);
    const verify = await _encrypt(VERIFY_TOKEN);
    localStorage.setItem(VERIFY_KEY, verify);
    localStorage.removeItem(VAULT_KEY);
  }

  // 后续使用：输入口令解锁；返回 true/false
  async function unlock(passphrase) {
    const saltB64 = localStorage.getItem(SALT_KEY);
    if (!saltB64) return false;
    const key = await deriveKey(passphrase, b64ToBuf(saltB64));
    const verify = localStorage.getItem(VERIFY_KEY);
    if (!verify) return false;
    try {
      const token = await _decrypt(verify, key);
      if (token !== VERIFY_TOKEN) return false;
      sessionKey = key;
      return true;
    } catch (e) {
      return false;
    }
  }

  function isUnlocked() { return sessionKey !== null; }
  function lock() { sessionKey = null; }

  async function _encrypt(plain, key) {
    const k = key || sessionKey;
    if (!k) throw new Error('未解锁');
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await getSubtle().encrypt({ name: 'AES-GCM', iv: iv }, k, enc.encode(plain));
    return bufToB64(iv) + '|' + bufToB64(ct);
  }
  async function _decrypt(blob, key) {
    const k = key || sessionKey;
    if (!k) throw new Error('未解锁');
    const parts = String(blob).split('|');
    if (parts.length !== 2) throw new Error('密文格式错误');
    const pt = await getSubtle().decrypt({ name: 'AES-GCM', iv: b64ToBuf(parts[0]) }, k, b64ToBuf(parts[1]));
    return dec.decode(pt);
  }

  async function saveVault(obj) {
    const json = JSON.stringify(obj);
    localStorage.setItem(VAULT_KEY, await _encrypt(json));
  }
  async function loadVault() {
    const blob = localStorage.getItem(VAULT_KEY);
    if (!blob) return null;
    return JSON.parse(await _decrypt(blob));
  }
  function hasVault() {
    return !!localStorage.getItem(SALT_KEY);
  }

  // 修改口令：用旧口令解密保险库，再以新口令重新加密
  async function changePassphrase(oldP, newP) {
    if (!oldP || !newP || newP.length < 4) throw new Error('新口令至少 4 位');
    const saltB64 = localStorage.getItem(SALT_KEY);
    const oldKey = await deriveKey(oldP, b64ToBuf(saltB64));
    const blob = localStorage.getItem(VAULT_KEY);
    let data = null;
    if (blob) {
      const verify = localStorage.getItem(VERIFY_KEY);
      const token = await _decrypt(verify, oldKey);
      if (token !== VERIFY_TOKEN) throw new Error('原口令错误');
      data = JSON.parse(await _decrypt(blob, oldKey));
    }
    await setup(newP);
    if (data) await saveVault(data);
  }

  return { setup, unlock, isUnlocked, lock, saveVault, loadVault, hasVault, changePassphrase };
})();
