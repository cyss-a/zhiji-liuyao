const BRAND_LOGO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAFOklEQVR4AcXBXWjddx3H8ffn9/ufc5LzkOdlWZs2SVu7FevWgihqfWRzgk4KOnY19EIv1AsVneLF2lOhUy82vXC7EUaLV0JBhjCfOqEMnYJM3HRYal3aJctDk9MkzcM5/4ff1yQz0pZdnP/xwtdLIQT+HxwdMSy5ZqE1ZVhGJyJysnjW0umnYf0SILLCgLldX8RXj4gcHHlYi/TKE7B+CQEClCwS3niKEL9p5ODIIVv5sxHPg4RGv4LbfxorDECICdfPk4cjj2SBbb6G7z0m17VPlA8CBskieUTk0bWXbekK6exZU3EEu/EXhKA0Sh6OHHz1PlF5JyDC4q/IZs5CiCHqw/c/IHJw5OKI9n5TGnwQol5wJVQ7ip84gaI+8ojISa6baOTzYuRzgAGOTkR0TIDoVEQHLLlm2dIFSJdQ5TC+570CkYcjp2z5RUv/+Q1s/hzWOE+Y+iHJzE8MjDwcOWSrr1iYfgZCDFEPlN8BBjReIFv5o5GDo20Z2cyzmBl0jRMdeFKFie+K6r1syRaeIw9Hm8Laa0Y8CxJ+95eQrwHCDX4SEGpOEpI5o02ONoW1vyNAXRO4rjHxH75ySCgCA5pXaZejXfEcW1Qa5RYqgq+wxbI12uVok1nGW4xbWIqFDbb5Cu1ytElRjS2WzHOzbO1vptDEANc1RrsibmJpA4vnDFdCpVFJRXaoawwDbGMSsxZSCSwjzP8MM6HKAVQYFv9lmKUQYnAFpAIgdkRssqRB+uYzZquvIt5irtvU90Gi4Ycl34OrHiGTUGgRbrxsvud9yhq/Ntv4F0i4oeOAEdYvWlh+EVt7DYvnwTKQg+KduN7344c+LamEY1My9SOz1VfBDDMDDIUNaPyW9PK3LWxcNhWGpfIhDAiLvwQMsxgM1PsBVNpNcuW0pa/XCY3zWGsGWYowZBmKpwnXzpFefcrA8Ccef4ww82xdGO6uR4n2fE0aeLBOYQDbuITSG9jKH1D5nrq6J7Dl36NkEbrH61H/x6S+Y3UVBghXvo+1phGg4giu/6O4gU/gBu5HtXdjrgttTEI8h2pH6xHyIA9myNeQryJflRt8iFA9atmV05Askl39AX78JKrcg639g2zmDK58iLD6Cjb7U8wyFNVwI4/ie48JHDdz5YMk1y+YAMvWcFIJlQ+yJSw+D2TscKVR+bHHIeqBbJ3sjSdxw4+AK0CySHL5W2YzZ8Ay1D1BtO97+N4PCRy3y+bPmTBwJVz5gByb3NBxtjUnSWfPGhg7XGmX/J6vY4qw+Bqh8RtUvpttSQNjU/VdROMnpMKQeBvp4vMWrv8OEBr8OHIV/MmTJ3HFkVMha9TZeB02LhOal+oq7a4r6jvFJhWGToVkoU5zElpTEM9zC0tR1FdX8a5TUsQOS+YsnT1Tt4VfsEXlAxR2f1nIoxAC2ywlmf6xsfwSILZYoQ+5KpYuQbbKzdTzHtS9jzB/DixFbHJF6BpDvoIl16F1FcwwQOWDRHsfk3yNLY4diiiMflXa9QUs6gUMkiWsNQXZKtt8GSSE4ar3Eg0dV7T/CVS9D0MQmtj6RezGy9CcBAvgu3HDD1MYPyH5GjsibiGi/gdkfR8hrF80mpNYaCJfRqU9qHy30umnjeWXCAs/x/d9GFfaKzf2HUI8a7b6V6w1hYUW8lXUvR9XOyq5MreLeBtSAV85LCqHuZ2/4zNkK3+CeJ5s6YL5/vvFJlccEQMjtMuRkyvtFdUjbAkLzwGBTjg64Ac/xbZ4jhDPGR1wdMBVDkvDn0VDD+GKd4oORHQouuMR8T/4NykpNPo6wx3JAAAAAElFTkSuQmCC';


let state = {
  tab: 'divine',
  records: [],
  settings: {
    music: false,
    musicVol: 40,
    sound: true,
    soundVol: 80
  },
  todayCast: null,
  // casting flow state
  castMethod: 'coins',   // coins | numbers | time
  castMode: 'manual',    // manual | auto  (only for coins)
  castLines: [],         // rolled lines bottom->top (each 6/7/8/9)
  castMatter: '',        // captured at confirm time
  castDate: '',          // captured at confirm time
  rolling: false,        // guard against double-tap during animation
  currentRecord: null,
  // number casting inputs
  num1: '',
  num2: '',
  // time casting inputs (defaults filled on render)
  timeYear: '',
  timeMonth: '',
  timeDay: '',
  timeHour: ''
};

// 从加密保险库读取数据（需在解锁之后调用）
async function loadData() {
  try {
    const v = await CryptoVault.loadVault();
    if (v) {
      if (Array.isArray(v.records)) state.records = v.records;
      if (v.settings && typeof v.settings === 'object') {
        state.settings = Object.assign({}, state.settings, v.settings);
      }
    }
  } catch (e) {
    console.warn('读取加密数据失败', e);
  }
}

// 将所有用户数据加密写入保险库
async function saveData() {
  try {
    await CryptoVault.saveVault({ records: state.records, settings: state.settings });
  } catch (e) {
    console.warn('保存加密数据失败', e);
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('opacity-0');
  setTimeout(() => toast.classList.add('opacity-0'), 2000);
}

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function getDailyHexagram() {
  const today = getTodayStr();
  const key = `daily-${today}`;
  const idx = hashString(key) % HEXAGRAMS.length;
  const hex = HEXAGRAMS[idx];
  return { date: today, hexagram: hex };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// --- 农历 / 传统节日 / 周年纪念 ---
// 农历节日（库未覆盖的部分在此补全：中元、重阳、小年等）
const LUNAR_FESTIVALS = {
  '1-1': '春节',
  '1-15': '元宵节',
  '2-2': '龙抬头',
  '5-5': '端午节',
  '7-7': '七夕节',
  '7-15': '中元节',
  '8-15': '中秋节',
  '9-9': '重阳节',
  '12-8': '腊八节',
  '12-23': '小年'
};

// 公历纪念日（仅中国相关，不收录外国节日）
const ANNIVERSARIES = [
  { m: 10, d: 1,  y: 1949, name: '中华人民共和国成立' },
  { m: 8,  d: 1,  y: 1927, name: '中国人民解放军建军' },
  { m: 7,  d: 1,  y: 1921, name: '中国共产党成立' },
  { m: 9,  d: 3,  y: 1945, name: '抗日战争胜利' },
  { m: 7,  d: 27, y: 1953, name: '抗美援朝战争胜利' }
];

function getDateInfo(date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = '星期' + weekdays[date.getDay()];
  const greg = `${y}年${m}月${d}日`;

  // 农历与节日（依赖 lunar-javascript CDN，未加载时优雅降级）
  let lunar = '';
  let festival = '';
  if (typeof Lunar !== 'undefined') {
    try {
      const lo = Solar.fromYmd(y, m, d).getLunar();
      lunar = `农历${lo.getMonthInChinese()}月${lo.getDayInChinese()}`;
      const myFest = LUNAR_FESTIVALS[lo.getMonth() + '-' + lo.getDay()];
      const libFest = lo.getFestivals();
      festival = myFest || (libFest && libFest[0]) || lo.getJieQi() || '';
    } catch (e) { /* 农历库异常时忽略 */ }
  }

  // 公历周年纪念
  let anniversary = '';
  const ann = ANNIVERSARIES.find(a => a.m === m && a.d === d);
  if (ann) anniversary = `${ann.name} ${y - ann.y} 周年`;

  return { greg, weekday, lunar, festival, anniversary };
}

function getCategoryColor(key) {
  return CATEGORIES[key]?.color || 'text-primary';
}

function getCategoryLabel(key) {
  return CATEGORIES[key]?.label || '';
}

// --- Coin casting ---
// 单枚铜钱：背(阳) / 字(阴)
function rollCoin() {
  return Math.random() < 0.5 ? 'back' : 'character';
}

// 三枚铜钱一次摇卦 → 一个爻
// 三背=老阳(9,动) 两背一字=少阳(7) 一字两背=少阴(8) 三字=老阴(6,动)
function rollThreeCoins() {
  const coins = [rollCoin(), rollCoin(), rollCoin()];
  const backs = coins.filter(c => c === 'back').length; // 0..3
  const map = { 3: 9, 2: 7, 1: 8, 0: 6 };
  return { coins, value: map[backs] };
}

function castByCoins() {
  return Array.from({ length: 6 }, () => rollThreeCoins().value);
}

// 梅花易数八卦爻象（自下而上）：乾兑离震巽坎艮坤
const TRIGRAM_LINES = [
  [1,1,1], // 乾 0
  [1,1,0], // 兑 1
  [1,0,1], // 离 2
  [1,0,0], // 震 3
  [0,1,1], // 巽 4
  [0,1,0], // 坎 5
  [0,0,1], // 艮 6
  [0,0,0]  // 坤 7
];

function hourToZhi(hour) {
  // 23-1 子(0), 1-3 丑(1), ..., 21-23 亥(11)
  return Math.floor(((hour + 1) % 24) / 2);
}

function markMovingLine(lines, pos) {
  // pos: 0-5 自下而上
  const out = lines.slice();
  out[pos] = out[pos] === 1 ? 9 : 6;
  return out;
}

function castByNumbers() {
  const num1 = parseInt(document.getElementById('num1')?.value, 10);
  const num2 = parseInt(document.getElementById('num2')?.value, 10);
  if (!Number.isFinite(num1) || !Number.isFinite(num2) || num1 < 1 || num2 < 1) {
    showToast('请输入两个 1-999 的数字');
    return null;
  }
  const upperIdx = ((num1 - 1) % 8 + 8) % 8;
  const lowerIdx = ((num2 - 1) % 8 + 8) % 8;
  const upper = TRIGRAM_LINES[upperIdx];
  const lower = TRIGRAM_LINES[lowerIdx];
  const lines = [...lower, ...upper]; // 下卦三爻 + 上卦三爻，自下而上
  const movingPos = ((num1 + num2) % 6 || 6) - 1;
  return markMovingLine(lines, movingPos);
}

function castByTime() {
  const year = parseInt(document.getElementById('time-year')?.value, 10);
  const month = parseInt(document.getElementById('time-month')?.value, 10);
  const day = parseInt(document.getElementById('time-day')?.value, 10);
  const hour = parseInt(document.getElementById('time-hour')?.value, 10);
  if (![year, month, day, hour].every(Number.isFinite)) {
    showToast('请填写完整的年、月、日、时');
    return null;
  }
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour < 0 || hour > 23) {
    showToast('请检查时间数值是否有效');
    return null;
  }
  const yearZhi = ((year - 4) % 12 + 12) % 12; // 1984 甲子 -> 子(0)
  const hourZhi = hourToZhi(hour);
  const totalUpper = yearZhi + month + day;
  const upperIdx = ((totalUpper - 1) % 8 + 8) % 8;
  const totalLower = totalUpper + hourZhi;
  const lowerIdx = ((totalLower - 1) % 8 + 8) % 8;
  const upper = TRIGRAM_LINES[upperIdx];
  const lower = TRIGRAM_LINES[lowerIdx];
  const lines = [...lower, ...upper];
  const movingPos = (totalLower % 6 || 6) - 1;
  return markMovingLine(lines, movingPos);
}

// 爻的元信息
function getLineMeta(value) {
  switch (value) {
    case 9: return { name: '老阳', yang: true, moving: true, symbol: '○' };
    case 7: return { name: '少阳', yang: true, moving: false, symbol: '—' };
    case 8: return { name: '少阴', yang: false, moving: false, symbol: '- -' };
    case 6: return { name: '老阴', yang: false, moving: true, symbol: '×' };
    default: return { name: '', yang: true, moving: false, symbol: '—' };
  }
}

// 由爻值得到爻位名称（自下而上）
function getYaoName(index, yang) {
  const prefix = yang ? '九' : '六';
  const num = index === 0 ? '初' : index === 5 ? '上' : ['二', '三', '四', '五'][index - 1];
  return num + prefix;
}

// 六个爻值 → 本卦（自下而上二进制，查《周易》文王卦序）
function linesToHexagram(lines) {
  const pattern = lines.map(n => (n % 2 === 1 ? '1' : '0')).join(''); // 7,9→1 阳; 6,8→0 阴
  const idx = HEX_BINARY.indexOf(pattern);
  return HEXAGRAMS[idx < 0 ? 0 : idx];
}

// 六个爻值 → 变卦（动爻阴阳反转；无动爻则变卦=本卦）
function linesToChangedHexagram(lines) {
  const changed = lines.map(n => {
    if (n === 6) return '1'; // 老阴变阳
    if (n === 9) return '0'; // 老阳变阴
    return n % 2 === 1 ? '1' : '0';
  });
  const pattern = changed.join('');
  const idx = HEX_BINARY.indexOf(pattern);
  const moving = lines.map((n, i) => (n === 6 || n === 9 ? i : -1)).filter(i => i >= 0);
  return { hex: HEXAGRAMS[idx < 0 ? 0 : idx], moving, hasChange: moving.length > 0 };
}

function getMethodName(method) {
  const map = { coins: '铜钱摇卦', numbers: '数字起卦', time: '时间起卦' };
  return map[method] || '铜钱摇卦';
}

// --- Daily almanac (algorithmic 黄历参考) ---
const GAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const ZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const ZODIAC = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];
const ZHI_ELEMENT = ['水','土','木','木','土','火','火','土','金','金','土','水'];

const JIANCHU_NAMES = ['建','除','满','平','定','执','破','危','成','收','开','闭'];
const JIANCHU_YIJI = {
  '建': { yi: ['祭祀','出行','上任','教牛马'], ji: ['动土','开仓','嫁娶'] },
  '除': { yi: ['祭祀','会友','出行','沐浴','治病'], ji: ['安葬','动土'] },
  '满': { yi: ['嫁娶','祭祀','祈福','开市','求嗣'], ji: ['动土','栽种'] },
  '平': { yi: ['修饰垣墙','平治道途'], ji: ['嫁娶','出行'] },
  '定': { yi: ['冠带','安床','嫁娶','会亲友'], ji: ['词讼','出行'] },
  '执': { yi: ['祭祀','捕捉','畋猎'], ji: ['开市','立券'] },
  '破': { yi: ['求医','治病','服药','破屋坏垣'], ji: ['嫁娶','出行'] },
  '危': { yi: ['安床','祈福','祭祀'], ji: ['嫁娶','出行'] },
  '成': { yi: ['开市','嫁娶','入学','上官','安床','出行'], ji: ['诉讼'] },
  '收': { yi: ['嫁娶','祭祀','求财','签约'], ji: ['安葬','出行'] },
  '开': { yi: ['祭祀','祈福','求嗣','嫁娶','开市','出行'], ji: ['安葬'] },
  '闭': { yi: ['祭祀','祈福','求嗣','修仓'], ji: ['开市','出行'] }
};

const CLOTHING_GUIDE = {
  '木': { lucky: ['绿','青','黑','蓝'], avoid: ['白','金','银'], desc: '木日宜穿绿、青等木行色，水生木亦吉；金克木，慎用白、金、银。' },
  '火': { lucky: ['红','紫','粉','橙'], avoid: ['黑','蓝','灰'], desc: '火日宜穿红、紫等火行色，木生火亦吉；水克火，慎用黑、蓝、灰。' },
  '土': { lucky: ['黄','棕','咖','米色'], avoid: ['绿','青'], desc: '土日宜穿黄、棕等土行色，火生土亦吉；木克土，慎用绿、青。' },
  '金': { lucky: ['白','金','银','米'], avoid: ['红','紫','粉'], desc: '金日宜穿白、金、银等金行色，土生金亦吉；火克金，慎用红、紫。' },
  '水': { lucky: ['黑','蓝','灰'], avoid: ['黄','棕','咖'], desc: '水日宜穿黑、蓝、灰等水行色，金生水亦吉；土克水，慎用黄、棕、咖。' }
};

function gregorianToJDN(y, m, d) {
  if (m < 3) { y -= 1; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524;
}

function getDayGanZhi(date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const jdn = gregorianToJDN(y, m, d);
  const idx = ((Math.floor(jdn) + 49) % 60 + 60) % 60;
  return { gan: GAN[idx % 10], zhi: ZHI[idx % 12], idx };
}

// 简化的月支映射：寅月≈二月，依此类推；用于十二值日建除。
function getMonthZhi(date) {
  const monthMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0]; // Jan丑..Dec子
  return monthMap[date.getMonth()];
}

function getJianChu(date) {
  const monthZhi = getMonthZhi(date);
  const dayZhi = ZHI.indexOf(getDayGanZhi(date).zhi);
  let offset = dayZhi - monthZhi;
  offset = ((offset % 12) + 12) % 12;
  return JIANCHU_NAMES[offset];
}

function getYiJi(jianChu) {
  return JIANCHU_YIJI[jianChu] || { yi: ['诸事不宜'], ji: ['诸事谨慎'] };
}

function getClothingGuide(date) {
  const gz = getDayGanZhi(date);
  const element = ZHI_ELEMENT[ZHI.indexOf(gz.zhi)];
  const guide = CLOTHING_GUIDE[element];
  const zodiac = ZODIAC[ZHI.indexOf(gz.zhi)];
  return {
    gz: gz.gan + gz.zhi,
    zodiac,
    element,
    text: `${gz.gan}${gz.zhi}属${element}，${guide.desc} 幸运色：${guide.lucky.join('、')}；慎用色：${guide.avoid.join('、')}。`,
    lucky: guide.lucky,
    avoid: guide.avoid
  };
}

function renderAlmanac(date) {
  const jianChu = getJianChu(date);
  const yiJi = getYiJi(jianChu);
  const cloth = getClothingGuide(date);
  const chip = txt => `<span class="px-2 py-0.5 rounded text-xs border">${txt}</span>`;
  return `
    <div class="mt-4 pt-4 border-t border-border space-y-3 text-sm">
      <div class="flex items-center justify-between">
        <span class="text-secondary">今日干支</span>
        <span class="font-serif font-bold text-primary">${cloth.gz} · ${cloth.zodiac} · ${cloth.element}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-secondary">十二值日</span>
        <span class="font-serif font-bold text-gold">${jianChu}日</span>
      </div>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-5">宜</span>
          ${yiJi.yi.map(x => `<span class="px-2 py-0.5 rounded bg-red/10 text-red text-xs border border-red/20">${x}</span>`).join('')}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-5">忌</span>
          ${yiJi.ji.map(x => `<span class="px-2 py-0.5 rounded bg-muted/20 text-secondary text-xs border border-border">${x}</span>`).join('')}
        </div>
      </div>
      <div class="bg-card rounded-xl p-3 border border-border">
        <div class="text-xs text-secondary mb-1">穿衣指南</div>
        <p class="text-sm leading-relaxed">${cloth.text}</p>
      </div>
    </div>
  `;
}

// --- Rendering ---
function renderHeader(title, subtitle = '') {
  return `
    <header class="pt-safe text-center pt-7 pb-5 px-4">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-full brand-ring mb-3">
        <img src="${BRAND_LOGO}" alt="知几" class="h-7 w-auto" style="filter: drop-shadow(0 1px 2px rgba(156,122,46,0.35));">
      </div>
      <h1 class="text-2xl font-serif font-bold tracking-[0.2em] text-primary">${title}</h1>
      ${subtitle ? `<p class="text-sm text-secondary mt-1.5 tracking-wide">${subtitle}</p>` : ''}
      <div class="ink-divider mx-auto mt-3"></div>
    </header>
  `;
}

function renderTopBar() {
  return `
    <div class="flex items-center justify-between px-4 py-2.5 text-primary">
      <div class="flex items-center gap-2 text-base font-serif font-bold tracking-widest">
        <span class="brand-seal">知</span>
        <span>知几六爻</span>
      </div>
      <div class="text-xs text-secondary tracking-wide">掌上起卦 · 问事于知几</div>
    </div>
  `;
}

function renderHexagramSymbol(symbol, size = 'text-6xl') {
  return `<div class="hexagram-symbol ${size} text-gold my-2">${symbol}</div>`;
}

function renderHome() {
  const daily = getDailyHexagram();
  const hex = daily.hexagram;
  const dateInfo = getDateInfo(new Date(daily.date + 'T00:00:00'));

  return `
    ${renderTopBar()}
    ${renderHeader('知几六爻', '—— 掌上起卦 · 问事于知几 ——')}
    <main class="px-4 space-y-5 fade-in">
      <!-- Daily Card -->
      <section class="bg-card rounded-2xl p-5 shadow-sm border border-border">
        <div class="text-center pb-3 mb-3 border-b border-border">
          <div class="text-lg font-serif font-bold text-primary">${dateInfo.greg}<span class="text-sm font-normal text-secondary ml-1.5">${dateInfo.weekday}</span></div>
          <div class="text-sm text-gold mt-0.5 tracking-wide">${dateInfo.lunar}</div>
          ${(dateInfo.festival || dateInfo.anniversary) ? `
            <div class="flex flex-wrap items-center justify-center gap-2 mt-2">
              ${dateInfo.festival ? `<span class="px-2.5 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-bold border border-gold/20">${dateInfo.festival}</span>` : ''}
              ${dateInfo.anniversary ? `<span class="px-2.5 py-0.5 rounded-full bg-red/10 text-red text-xs font-bold border border-red/20">${dateInfo.anniversary}</span>` : ''}
            </div>` : ''}
        </div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="w-1 h-4 bg-gold rounded-full"></span>
            <h2 class="font-serif font-bold text-lg">每日一问</h2>
          </div>
        </div>
        <div class="text-center py-3 border-t border-border">
          ${renderHexagramSymbol(hex.symbol)}
          <div class="flex items-center justify-center gap-2 mt-2">
            <h3 class="text-xl font-serif font-bold">${hex.name}</h3>
            <span class="px-2 py-0.5 rounded text-xs bg-red/10 text-red border border-red/20">${hex.auspicious}</span>
          </div>
          <p class="text-sm text-secondary mt-2 leading-relaxed">${hex.judgment} ${hex.meaning}</p>
          ${renderAlmanac(new Date(daily.date + 'T00:00:00'))}
        </div>
      </section>

      <!-- Start Button -->
      <button id="start-cast" class="w-full py-3.5 rounded-full bg-red text-white text-lg font-serif tracking-widest shadow-md btn-press">
        开始起卦
      </button>

      <!-- Categories -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="font-serif font-bold text-lg">今日宜问</h2>
          <span class="text-xs text-secondary">点击直接起卦</span>
        </div>
        <div class="grid grid-cols-4 gap-3">
          ${Object.values(CATEGORIES).filter(cat => cat.key !== 'general').map(cat => `
            <button class="cat-btn flex flex-col items-center justify-center py-4 rounded-xl bg-card border border-border btn-press" data-category="${cat.key}">
              <span class="text-2xl font-serif font-bold ${cat.color}">${cat.short}</span>
              <span class="text-xs text-secondary mt-1">${cat.label}</span>
            </button>
          `).join('')}
        </div>
      </section>
    </main>
  `;
}

function renderRecords() {
  const records = state.records.slice().reverse();
  const empty = records.length === 0;

  return `
    ${renderTopBar()}
    ${renderHeader('卦象记录')}
    <main class="px-4 fade-in">
      ${empty ? `
        <div class="flex flex-col items-center justify-center pt-24 text-center">
          <div class="text-6xl text-muted font-serif mb-4">无</div>
          <p class="text-secondary">暂无卦象记录</p>
          <p class="text-sm text-muted mt-2">点击首页「开始起卦」体验</p>
        </div>
      ` : `
        <div class="space-y-3 pb-4">
          ${records.map((r, i) => `
            <div class="bg-card rounded-xl p-4 border border-border record-item" data-index="${state.records.length - 1 - i}">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-2xl text-gold font-serif">${r.hexagram.symbol}</span>
                  ${(r.changedHexagram && r.hasChange && r.changedHexagram.symbol !== r.hexagram.symbol) ? `<span class="text-lg text-muted">→</span><span class="text-2xl text-gold/70 font-serif">${r.changedHexagram.symbol}</span>` : ''}
                  <div>
                    <div class="font-serif font-bold">${r.hexagram.name}</div>
                    <div class="text-xs text-secondary">${formatDateTime(r.datetime)} · ${getMethodName(r.method)}${(r.moving && r.moving.length) ? ' · 动' + r.moving.length : ''}</div>
                  </div>
                </div>
                <span class="px-2 py-0.5 rounded text-xs bg-red/10 text-red border border-red/20">${r.hexagram.auspicious}</span>
              </div>
              <div class="text-sm text-secondary line-clamp-2">${r.matter ? '所问：' + r.matter + ' · ' : ''}${r.hexagram.advice[r.category] || r.hexagram.meaning}</div>
            </div>
          `).join('')}
        </div>
      `}
    </main>
  `;
}

function renderKnowledge() {
  return `
    ${renderTopBar()}
    ${renderHeader('六爻知识', '系统学习六爻理论与实战')}
    <main class="px-4 fade-in space-y-5">
      <section class="grid grid-cols-2 gap-3">
        ${KNOWLEDGE.categories.map(cat => `
          <button class="knowledge-cat bg-card rounded-xl p-4 border border-border text-center btn-press" data-cat="${cat.id}">
            <div class="text-3xl font-serif text-gold mb-1">${cat.title}</div>
            <div class="text-sm font-bold text-primary">${cat.subtitle}</div>
            <div class="text-xs text-secondary mt-1">${cat.count} 篇</div>
          </button>
        `).join('')}
      </section>

      <section class="bg-card rounded-2xl p-4 border border-border">
        <h3 class="font-serif font-bold text-lg mb-3">推荐阅读</h3>
        <div class="divide-y divide-border">
          ${KNOWLEDGE.articles.slice(0, 6).map(article => {
            const cat = KNOWLEDGE.categories.find(c => c.id === article.category);
            return `
              <button class="article-item w-full flex items-center justify-between py-3 btn-press" data-id="${article.id}">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center font-serif">${cat.title}</span>
                  <div class="text-left">
                    <div class="text-sm font-bold">${article.title}</div>
                    <div class="text-xs text-secondary">${cat.subtitle}</div>
                  </div>
                </div>
                <span class="text-muted">›</span>
              </button>
            `;
          }).join('')}
        </div>
      </section>
    </main>
  `;
}

function renderKnowledgeCategory(catId) {
  const cat = KNOWLEDGE.categories.find(c => c.id === catId);
  const articles = KNOWLEDGE.articles.filter(a => a.category === catId);
  return `
    ${renderTopBar()}
    <header class="pt-safe pt-4 pb-3 px-4 flex items-center gap-3">
      <button id="back-knowledge" class="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-secondary btn-press">‹</button>
      <div>
        <h1 class="text-xl font-serif font-bold">${cat.subtitle}</h1>
        <p class="text-xs text-secondary">${cat.count} 篇文章</p>
      </div>
    </header>
    <main class="px-4 fade-in">
      <div class="bg-card rounded-2xl border border-border divide-y divide-border">
        ${articles.map(article => `
          <button class="article-item w-full text-left p-4 btn-press" data-id="${article.id}">
            <div class="font-bold">${article.title}</div>
            <div class="text-xs text-secondary mt-1">${article.summary}</div>
          </button>
        `).join('')}
      </div>
    </main>
  `;
}

function renderArticle(id) {
  const article = KNOWLEDGE.articles.find(a => a.id === id);
  const content = KNOWLEDGE.content[id] || `<h3>${article.title}</h3><p>${article.summary}</p><p class="text-secondary">正文内容整理中，敬请期待。</p>`;
  return `
    ${renderTopBar()}
    <header class="pt-safe pt-4 pb-3 px-4 flex items-center gap-3">
      <button id="back-knowledge" class="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-secondary btn-press">‹</button>
      <h1 class="text-xl font-serif font-bold truncate">${article.title}</h1>
    </header>
    <main class="px-4 pb-8 fade-in">
      <article class="bg-card rounded-2xl p-5 border border-border leading-relaxed text-sm space-y-3">
        ${content}
      </article>
    </main>
  `;
}

function renderProfile() {
  const today = getTodayStr();
  const todayCount = state.records.filter(r => r.datetime.startsWith(today)).length;
  const monthStr = today.slice(0, 7);
  const monthCount = state.records.filter(r => r.datetime.startsWith(monthStr)).length;
  const totalCount = state.records.length;

  return `
    ${renderTopBar()}
    ${renderHeader('我 的')}
    <main class="px-4 fade-in space-y-5">
      <section class="bg-card rounded-2xl p-4 border border-border">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold">起卦统计</h3>
        </div>
        <div class="grid grid-cols-3 divide-x divide-border text-center">
          <div>
            <div class="text-2xl font-serif font-bold text-green">${todayCount} 次</div>
            <div class="text-xs text-secondary mt-1">今日起卦</div>
          </div>
          <div>
            <div class="text-2xl font-serif font-bold text-gold">${monthCount} 次</div>
            <div class="text-xs text-secondary mt-1">本月起卦</div>
          </div>
          <div>
            <div class="text-2xl font-serif font-bold text-red">${totalCount} 次</div>
            <div class="text-xs text-secondary mt-1">累计起卦</div>
          </div>
        </div>
      </section>

      <section class="bg-card rounded-2xl p-4 border border-border space-y-4">
        <h3 class="font-serif font-bold">音效设置</h3>
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-secondary">背景音乐</span>
            <button id="toggle-music" class="toggle ${state.settings.music ? 'on' : ''}"></button>
          </div>
          <input type="range" id="music-vol" min="0" max="100" value="${state.settings.musicVol}">
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-secondary">音效</span>
            <button id="toggle-sound" class="toggle ${state.settings.sound ? 'on' : ''}"></button>
          </div>
          <input type="range" id="sound-vol" min="0" max="100" value="${state.settings.soundVol}">
        </div>
      </section>

      <section class="bg-card rounded-2xl p-4 border border-border space-y-3">
        <h3 class="font-serif font-bold">安全与隐私</h3>
        <p class="text-xs text-secondary leading-relaxed">你的卦例与设置均以 AES-256-GCM 加密保存在本机，口令不离开设备，遗忘后无法恢复。</p>
        <button id="btn-change-pwd" class="w-full py-2.5 rounded-xl border border-gold text-gold font-serif tracking-widest">修改口令</button>
        <button id="btn-lock" class="w-full py-2.5 rounded-xl border border-border text-secondary tracking-widest">锁定应用</button>
      </section>

      <section class="bg-card rounded-2xl p-4 border border-border space-y-3">
        <h3 class="font-serif font-bold">关于</h3>
        <div class="flex items-center justify-between text-sm">
          <span class="text-secondary">应用</span>
          <span>知几六爻</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-secondary">版本</span>
          <span>1.0.0</span>
        </div>
      </section>

      <div class="text-center text-xs text-muted py-4">
        <p>知几其神，卦象自有定数</p>
      </div>
    </main>
  `;
}

// --- Casting flow ---
function renderCastForm(category = null) {
  const cat = category ? CATEGORIES[category] : null;
  const today = getTodayStr();
  const matterLabel = cat && cat.key !== 'general' ? `你想问的${cat.label}问题` : '你想要问的问题';
  const matterPlaceholder = cat && cat.key !== 'general' ? `在此输入与${cat.label}相关的问题（可留空）` : '在此输入你想要问的问题（可留空）';
  const now = new Date();
  const timeDefault = state.castDate ? new Date(state.castDate + 'T00:00:00') : now;
  const timeYear = state.timeYear || timeDefault.getFullYear();
  const timeMonth = state.timeMonth || (timeDefault.getMonth() + 1);
  const timeDay = state.timeDay || timeDefault.getDate();
  const timeHour = state.timeHour || now.getHours();
  const methodBtn = (m, label) => `
    <button class="method-btn px-3 py-2.5 rounded-xl border text-sm transition ${state.castMethod === m ? 'border-gold bg-gold/10 text-gold font-bold' : 'border-border text-secondary'}" data-method="${m}">${label}</button>`;
  const modeBtn = (m, label) => `
    <button class="mode-btn px-3 py-2.5 rounded-xl border text-sm transition ${state.castMode === m ? 'border-gold bg-gold/10 text-gold font-bold' : 'border-border text-secondary'}" data-mode="${m}">${label}</button>`;
  return `
    ${renderTopBar()}
    <header class="pt-safe pt-4 pb-3 px-4 flex items-center gap-3">
      <button id="close-cast" class="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-secondary btn-press">✕</button>
      <h1 class="text-xl font-serif font-bold">${cat && cat.key !== 'general' ? '问' + cat.label : '每日一问'}</h1>
    </header>
    <main class="px-4 fade-in space-y-5">
      <section class="bg-card rounded-2xl p-5 border border-border space-y-4">
        <div>
          <label class="block text-sm font-bold mb-2">${matterLabel}</label>
          <input type="text" id="cast-matter" placeholder="${matterPlaceholder}" 
            value="${state.castMatter}"
            class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm">
        </div>
        <div>
          <label class="block text-sm font-bold mb-2">起卦方式</label>
          <div class="grid grid-cols-3 gap-2">
            ${methodBtn('coins', '铜钱摇卦')}
            ${methodBtn('numbers', '数字起卦')}
            ${methodBtn('time', '时间起卦')}
          </div>
          <div id="coins-mode" class="mt-3 ${state.castMethod === 'coins' ? '' : 'hidden'}">
            <label class="block text-sm font-bold mb-2">摇卦方式</label>
            <div class="grid grid-cols-2 gap-2">
              ${modeBtn('manual', '手动摇六下')}
              ${modeBtn('auto', '一键自动摇')}
            </div>
            <p class="text-xs text-secondary mt-2">手动：每点一次摇一爻，自下而上共六爻；自动：一键摇出六爻。</p>
          </div>
          <div id="numbers-input" class="mt-3 ${state.castMethod === 'numbers' ? '' : 'hidden'}">
            <label class="block text-sm font-bold mb-2">数字</label>
            <p class="text-xs text-secondary mb-2">默念所问之事，输入两个心中自然浮现的数字（1-999）</p>
            <div class="grid grid-cols-2 gap-3">
              <input type="number" id="num1" min="1" max="999" placeholder="第一个数" value="${state.num1 || ''}" 
                class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm">
              <input type="number" id="num2" min="1" max="999" placeholder="第二个数" value="${state.num2 || ''}" 
                class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm">
            </div>
          </div>
          <div id="time-input" class="mt-3 ${state.castMethod === 'time' ? '' : 'hidden'}">
            <label class="block text-sm font-bold mb-2">时间</label>
            <p class="text-xs text-secondary mb-2">默认当前时间，可手动修改为起卦时刻（公历）</p>
            <div class="grid grid-cols-4 gap-2">
              <input type="number" id="time-year" placeholder="年" value="${timeYear}" 
                class="w-full px-3 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm text-center">
              <input type="number" id="time-month" min="1" max="12" placeholder="月" value="${timeMonth}" 
                class="w-full px-3 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm text-center">
              <input type="number" id="time-day" min="1" max="31" placeholder="日" value="${timeDay}" 
                class="w-full px-3 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm text-center">
              <input type="number" id="time-hour" min="0" max="23" placeholder="时" value="${timeHour}" 
                class="w-full px-3 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm text-center">
            </div>
          </div>
        </div>
        <div>
          <label class="block text-sm font-bold mb-2">起卦日期</label>
          <input type="date" id="cast-date" value="${state.castDate || today}" 
            class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:outline-none focus:border-gold text-sm">
        </div>
      </section>
      <button id="confirm-cast" class="w-full py-3.5 rounded-full bg-red text-white text-lg font-serif tracking-widest shadow-md btn-press">
        确认起卦
      </button>
    </main>
  `;
}

// 爻值 → 三枚铜钱朝向（用于显示）
function valueToCoins(value) {
  switch (value) {
    case 9: return ['back', 'back', 'back'];
    case 7: return ['back', 'back', 'character'];
    case 8: return ['back', 'character', 'character'];
    case 6: return ['character', 'character', 'character'];
    default: return ['back', 'character', 'back'];
  }
}

function renderCoinsHtml(value) {
  const faces = value == null ? ['init', 'init', 'init'] : valueToCoins(value);
  const spinning = state.rolling ? 'coin-spin' : '';
  return ['0', '1', '2'].map(i => {
    const f = faces[i];
    const isBack = f === 'back';
    const showBackClass = isBack ? 'coin-show-back' : '';
    return `
      <div class="coin-wrapper ${spinning}" id="coin-wrapper-${i}">
        <div class="coin-box">
          <div class="coin ${showBackClass}" id="coin-${i}">
            <div class="coin-face coin-face-front coin-front"></div>
            <div class="coin-face coin-face-back coin-back-img"></div>
          </div>
        </div>
        <div class="coin-shadow"></div>
      </div>
    `;
  }).join('');
}

// 摇卦界面（铜钱起卦专用）
function renderCastShake(category = null) {
  const cat = category ? CATEGORIES[category] : null;
  const rolled = state.castLines;
  const count = rolled.length;
  const done = count >= 6;
  const lastVal = count > 0 ? rolled[count - 1] : null;

  let yaoHtml = '';
  for (let i = 5; i >= 0; i--) {
    if (i < count) {
      const meta = getLineMeta(rolled[i]);
      const yaoName = getYaoName(i, meta.yang);
      yaoHtml += `
        <div class="flex items-center gap-2 py-1.5">
          <span class="w-9 text-xs text-secondary text-right shrink-0">${yaoName}</span>
          <div class="flex-1 flex justify-center">
            <div class="yao ${meta.yang ? 'yang' : 'yin'} ${meta.moving ? 'yao-moving' : ''}"></div>
          </div>
          <span class="w-14 text-right text-xs shrink-0 ${meta.moving ? 'text-red font-bold' : 'text-muted'}">${meta.name}${meta.moving ? '·动' : ''}</span>
        </div>`;
    } else {
      yaoHtml += `
        <div class="flex items-center gap-2 py-1.5 opacity-40">
          <span class="w-9 text-xs text-secondary text-right shrink-0">${['初', '二', '三', '四', '五', '上'][i]}？</span>
          <div class="flex-1 flex justify-center"><div class="yao yang" style="opacity:.25"></div></div>
          <span class="w-14 text-right text-xs text-muted shrink-0">待摇</span>
        </div>`;
    }
  }

  let actionBtn;
  if (done) {
    actionBtn = `<button id="shake-action" class="w-full py-3.5 rounded-full bg-red text-white text-lg font-serif tracking-widest shadow-md btn-press">查看卦象</button>`;
  } else if (state.castMode === 'auto') {
    actionBtn = `<button id="shake-action" class="w-full py-3.5 rounded-full bg-gold text-white text-lg font-serif tracking-widest shadow-md btn-press" ${state.rolling ? 'disabled' : ''}>${state.rolling ? '摇卦中…' : '一键自动摇卦（6爻）'}</button>`;
  } else {
    actionBtn = `<button id="shake-action" class="w-full py-3.5 rounded-full bg-gold text-white text-lg font-serif tracking-widest shadow-md btn-press" ${state.rolling ? 'disabled' : ''}>${state.rolling ? '摇卦中…' : '摇第 ' + (count + 1) + ' 爻'}</button>`;
  }

  return `
    ${renderTopBar()}
    <header class="pt-safe pt-4 pb-3 px-4 flex items-center gap-3">
      <button id="back-shake" class="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-secondary btn-press">‹</button>
      <h1 class="text-xl font-serif font-bold">铜钱摇卦</h1>
    </header>
    <main class="px-4 fade-in space-y-4 pb-8">
      <section class="bg-card rounded-2xl p-4 border border-border text-center">
        <div class="text-sm text-secondary">${cat ? '所问：' + (state.castMatter || cat.label) : (state.castMatter || '未填写事项')}</div>
        <div class="text-xs text-muted mt-1">${state.castDate} · ${state.castMode === 'auto' ? '自动摇卦' : '手动摇卦'}</div>
        <div class="cast-tray my-5">
          <div class="flex items-center justify-center gap-5 py-6">
            ${renderCoinsHtml(lastVal)}
          </div>
        </div>
        <div class="text-sm font-serif font-bold text-gold">已摇 ${count} / 6 爻</div>
      </section>

      <section class="bg-card rounded-2xl p-4 border border-border">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold text-sm">卦爻（自下而上）</h3>
        </div>
        ${yaoHtml}
      </section>

      ${actionBtn}
    </main>
  `;
}

function buildRecord(lines, hex, changed) {
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  return {
    id: Date.now().toString(),
    matter: state.castMatter,
    method: state.castMethod,
    category: state.castCategory || 'work',
    date: state.castDate,
    datetime: `${state.castDate} ${time}`,
    lines: lines.slice(),
    hexagram: hex,
    changedHexagram: changed.hex,
    hasChange: changed.hasChange,
    moving: changed.moving
  };
}

function finishShake() {
  const lines = state.castLines;
  const hex = linesToHexagram(lines);
  const changed = linesToChangedHexagram(lines);
  state.currentRecord = buildRecord(lines, hex, changed);
  state.castLines = [];
  state.rolling = false;
  state.view = 'cast-result';
  render();
}

function manualShakeOne() {
  if (state.rolling) return;
  state.rolling = true;
  render(); // 触发铜钱旋转动画
  setTimeout(() => {
    const { value } = rollThreeCoins();
    state.castLines.push(value);
    state.rolling = false;
    render(); // 显示本爻结果
  }, 1000);
}

function autoShakeSequence() {
  if (state.rolling) return;
  const step = () => {
    if (state.castLines.length >= 6) {
      state.rolling = false;
      render();
      return;
    }
    state.rolling = true;
    render(); // 触发铜钱旋转动画
    setTimeout(() => {
      const { value } = rollThreeCoins();
      state.castLines.push(value);
      state.rolling = false;
      render(); // 显示本爻结果
      setTimeout(step, 380);
    }, 1000);
  };
  step();
}

function bindCastShake() {
  document.getElementById('back-shake')?.addEventListener('click', () => {
    state.castLines = [];
    state.rolling = false;
    state.view = 'cast-form';
    render();
  });
  const btn = document.getElementById('shake-action');
  btn?.addEventListener('click', () => {
    if (state.rolling) return;
    const count = state.castLines.length;
    if (count >= 6) { finishShake(); return; }
    if (state.castMode === 'auto') autoShakeSequence();
    else manualShakeOne();
  });
}

function loveAnalysis(hex, moving) {
  const map = {
    '乾宫': '乾卦刚健，问感情宜主动争取。单身者可展现诚意、主动邀约；恋爱中需避免过于强势，多倾听对方。',
    '坤宫': '坤卦柔顺，问感情以包容、循序渐进为贵。女性占婚多吉，男性则需主动付出、以柔克刚。',
    '坎宫': '坎卦多险陷，感情中易有波折、暧昧或疑虑。宜坦诚沟通，防隐瞒与第三者，切勿急躁。',
    '离宫': '离卦光明但易燥，感情来得快去得也快。宜保持理性，防口舌争执，给对方空间。',
    '震宫': '震卦主动，感情多有突发机遇，也易冲动。喜欢就争取，但勿因一时情绪做决定。',
    '巽宫': '巽卦为风，感情宜柔和渗透、暗中观察。适合培养默契，不宜逼问或硬碰硬。',
    '艮宫': '艮卦为止，感情目前宜守不宜攻。若对方态度不明，耐心等待胜过步步紧逼。',
    '兑宫': '兑卦喜悦，桃花、口福之象。感情多愉悦，但也多口舌是非，宜真诚相待，少说气话。'
  };
  let s = `本卦${hex.name}属${hex.palace}，五行${hex.element}，主${hex.meaning.replace(/\.$/, '')}。` + (map[hex.palace] || '');
  if (moving.length > 0) s += ` 卦中${moving.length}爻发动，说明感情关系或双方心态将出现调整，关键看动爻所提示的时机。`;
  else s += ' 当前六爻皆静，感情状态相对稳定，宜维持现有节奏，不必急于改变。';
  return s;
}

function wealthAnalysis(hex, moving) {
  const map = {
    '乾宫': '乾卦开拓，财运可积极进取，利于投资、创业或争取加薪。但忌贪大求全、孤注一掷，见好即收为上策。',
    '坤宫': '坤卦厚载，财运宜守成积累、以静制动。不宜冒进投机，宜储蓄理财、深耕主业。',
    '坎宫': '坎卦多险，财运起伏较大，有险中求财之象。宜谨慎核实，防被骗、防资金周转不灵。',
    '离宫': '离卦光明，财运多来自名声、文书、技术与传播。宜快进快出，防虚荣花费与账面浮盈。',
    '震宫': '震卦发动，财运常有突发机会，也易大起大落。见好即收，勿贪恋最后一波。',
    '巽宫': '巽卦渐进，财运宜长线布局、商业合作或渠道拓展。忌赌博式投机，宜细水长流。',
    '艮宫': '艮卦为止，财运目前停滞，宜守旧业、回笼资金。不宜新开项目或大额投资。',
    '兑宫': '兑卦喜悦，多有口福、销售、娱乐之财，但也易因交际享乐而破耗，收支需有度。'
  };
  let s = `本卦${hex.name}属${hex.palace}，五行${hex.element}，主${hex.meaning.replace(/\.$/, '')}。` + (map[hex.palace] || '');
  if (moving.length > 0) s += ` 卦中${moving.length}爻发动，主财运将有变化或到账，需把握时机、及时落袋。`;
  else s += ' 当前六爻皆静，财运平稳，宜按既定计划理财，不宜频繁操作。';
  return s;
}

function workAnalysis(hex, moving) {
  const map = {
    '乾宫': '乾卦开创，事业大有可为，利于担当重任、竞聘升职、展现能力。切忌骄傲自满，保持谦逊。',
    '坤宫': '坤卦承载，事业宜稳扎稳打、做好内务与协调，适合辅佐、执行、团队项目，不宜单打独斗或强出头。',
    '坎宫': '坎卦险陷，工作多波折，需谨慎行事，防小人、合同纠纷与口舌。宜守正、留好凭据。',
    '离宫': '离卦文明，工作靠文书、形象、传播与才华，宜展现专业，防同事间口舌与争功。',
    '震宫': '震卦震动，工作常有突发机会或岗位变动，宜把握时机主动争取，也防冲动决策。',
    '巽宫': '巽卦入，工作宜渗透、协调、策划，顺势力行、以柔克刚，不宜硬碰硬。',
    '艮宫': '艮卦为止，工作宜止息、守位，不宜跳槽或冒进；先稳固现有岗位、补齐短板为上。',
    '兑宫': '兑卦口舌，工作环境多会议、沟通、谈判，宜以和为贵，防人际摩擦影响评价。'
  };
  let s = `本卦${hex.name}属${hex.palace}，五行${hex.element}，主${hex.meaning.replace(/\.$/, '')}。` + (map[hex.palace] || '');
  if (moving.length > 0) s += ` 卦中${moving.length}爻发动，预示岗位职责或工作环境将出现调整，宜提前准备应变方案。`;
  else s += ' 当前六爻皆静，工作状态稳定，宜按既有计划推进，不宜频繁变动方向。';
  return s;
}

function healthAnalysis(hex, moving) {
  const map = {
    '乾宫': '乾属金，宜注意头部、肺与呼吸系统、心脑血管。保持规律作息，防过劳与情绪激动。',
    '坤宫': '坤属土，宜注意脾胃、腹部与消化系统。宜静养、忌生冷饮食，调畅情绪。',
    '坎宫': '坎属水，宜注意肾、泌尿、耳与生殖系统，防水肿、寒湿与腰膝酸软。注意保暖。',
    '离宫': '离属火，宜注意心、眼、血液与睡眠，忌急躁熬夜、辛热动火之物。',
    '震宫': '震属木，宜注意肝胆、足与神经系统，忌暴怒、过量饮酒与过劳。',
    '巽宫': '巽属木，宜注意风疾、呼吸道与神经，宜柔和调理、避风寒。',
    '艮宫': '艮属土，宜注意脾胃、手、背与关节，宜节制饮食、适度活动。',
    '兑宫': '兑属金，宜注意口、肺、呼吸道与皮肤，忌多言伤气、烟尘刺激。'
  };
  let s = `本卦${hex.name}属${hex.palace}，五行${hex.element}，主${hex.meaning.replace(/\.$/, '')}。` + (map[hex.palace] || '');
  if (moving.length > 0) s += ` 卦中${moving.length}爻发动，提示身体某处将有变化或不适显现，宜及早检查、调整起居。`;
  else s += ' 当前六爻皆静，身体大致平稳，宜保持现有良好习惯，定期体检即可。';
  return s;
}

function generalAnalysis(hex, moving) {
  let s = `本卦${hex.name}属${hex.palace}，五行${hex.element}。${hex.meaning}`;
  if (moving.length > 0) s += ` 卦中${moving.length}爻发动，主所占之事将有明显转折，宜审时度势、把握变化。`;
  else s += ' 当前六爻皆静，所占之事发展平稳，宜顺势而为，不宜妄动。';
  return s;
}

function lineMeaningFromText(text, pos, yang) {
  const posNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
  const hasBenefit = /吉|亨|利|无咎/.test(text);
  const hasRisk = /凶|吝|厉|悔|灾|祸/.test(text);
  const hasCaution = /惕|戒|慎|勿|不/.test(text);
  let reading = '';
  if (hasRisk) reading = '多主阻逆、风险或情绪冲突，宜保守退守，不宜冒进。';
  else if (hasCaution) reading = '提示需谨慎戒备、反复斟酌，虽有惊但可无咎。';
  else if (hasBenefit) reading = '多吉顺，主贵人扶助、时机成熟，可顺势推进。';
  else reading = '主事情将发生变化，需结合全卦与用神综合判断。';
  return `${posNames[pos]}为${yang ? '阳' : '阴'}动，${reading}`;
}

function changeImplication(hex, changed, category) {
  const label = (CATEGORIES[category] || CATEGORIES.general).label;
  if (!changed) return '';
  if (changed.auspicious === '大吉' || changed.auspicious === '吉') {
    return `变卦${changed.name}气机转吉，预示${label}经过一番调整后，结果趋向有利。宜把握变化中的机会，主动适应新局面。`;
  }
  if (changed.auspicious === '凶') {
    return `变卦${changed.name}气机转弱，提示${label}在发展过程中可能遇到阻碍，需重新评估策略，避免孤注一掷。`;
  }
  return `变卦${changed.name}显示${label}将进入新的阶段，${changed.meaning.replace(/\.$/, '')}。宜稳扎稳打，顺势而为。`;
}

function generateInterpretation(record) {
  const hex = record.hexagram;
  const catKey = record.category;
  const changed = record.changedHexagram;
  const moving = record.moving || [];
  const lines = record.lines || [];
  const overview = `${hex.name}（${hex.symbol}）属${hex.palace}，五行${hex.element}。卦辞「${hex.judgment}」${hex.meaning}`;
  let categoryAnalysis = '';
  switch (catKey) {
    case 'love': categoryAnalysis = loveAnalysis(hex, moving); break;
    case 'wealth': categoryAnalysis = wealthAnalysis(hex, moving); break;
    case 'work': categoryAnalysis = workAnalysis(hex, moving); break;
    case 'health': categoryAnalysis = healthAnalysis(hex, moving); break;
    default: categoryAnalysis = generalAnalysis(hex, moving);
  }
  let movingAnalysis = '';
  if (moving.length > 0 && lines.length === 6) {
    movingAnalysis = moving.map(i => {
      const line = hex.lines[i];
      const meta = getLineMeta(lines[i]);
      const yaoName = getYaoName(i, meta.yang);
      const meaning = lineMeaningFromText(line.text, i, meta.yang);
      return `<div class="mb-2"><b>${yaoName}（${meta.name}）</b>：${line.text}<br><span class="text-secondary text-xs">断：${meaning}</span></div>`;
    }).join('');
  } else {
    movingAnalysis = '<p>本卦六爻皆静，主当前态势相对平稳，暂无重大转折。所占之事多会按现有轨道发展，宜顺势而为，不宜妄动。</p>';
  }
  let changeTrend = '';
  if (moving.length > 0 && changed && changed.symbol !== hex.symbol) {
    changeTrend = `由本卦${hex.name}之${hex.meaning.replace(/\.$/, '')}，发展为变卦${changed.name}之${changed.meaning.replace(/\.$/, '')}，说明事态将经历一次较明显的转化。${changeImplication(hex, changed, catKey)}`;
  } else {
    changeTrend = '本卦无动爻（静卦），所问之事近期变动不大，宜以现状为基础做规划，不必急于求成。';
  }
  return { overview, categoryAnalysis, movingAnalysis, changeTrend };
}

function renderCastResult(record) {
  const hex = record.hexagram;
  const cat = CATEGORIES[record.category] || CATEGORIES.general;
  const changed = record.changedHexagram;
  const hasChange = !!(record.hasChange && changed && changed.symbol !== hex.symbol);
  const moving = record.moving || [];
  const interp = generateInterpretation(record);

  let movingHtml = '';
  if (moving.length > 0) {
    movingHtml = moving.map(i => {
      const meta = getLineMeta(record.lines[i]);
      const yaoName = getYaoName(i, meta.yang);
      const toYang = meta.yang ? '阴' : '阳';
      return `<div class="flex items-center justify-between text-sm py-1.5">
        <span class="text-secondary">${yaoName}（${meta.name}）</span>
        <span class="text-red font-serif">动 → 变${toYang}</span>
      </div>`;
    }).join('');
  }

  return `
    ${renderTopBar()}
    <header class="pt-safe pt-4 pb-3 px-4 flex items-center gap-3">
      <button id="close-result" class="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-secondary btn-press">✕</button>
      <h1 class="text-xl font-serif font-bold">卦象结果</h1>
    </header>
    <main class="px-4 fade-in space-y-5 pb-8">
      <section class="bg-card rounded-2xl p-6 border border-border text-center">
        ${renderHexagramSymbol(hex.symbol, 'text-7xl')}
        <div class="flex items-center justify-center gap-2 mt-3">
          <h2 class="text-2xl font-serif font-bold">${hex.name}</h2>
          <span class="px-2 py-0.5 rounded text-sm bg-red/10 text-red border border-red/20">${hex.auspicious}</span>
        </div>
        <div class="mt-2 text-sm text-secondary">${formatDateTime(record.datetime)} · ${getMethodName(record.method)}</div>
        ${record.matter ? `<div class="mt-3 text-sm text-primary bg-bg rounded-lg px-3 py-2 inline-block">所问：${record.matter}</div>` : ''}
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold">本卦 · 变卦</h3>
        </div>
        <div class="flex items-center justify-around">
          <div class="text-center">
            ${renderHexagramSymbol(hex.symbol, 'text-5xl')}
            <div class="text-sm font-serif font-bold mt-1">${hex.name}</div>
            <div class="text-xs text-muted">本卦</div>
          </div>
          ${hasChange ? `
          <div class="text-2xl text-gold">→</div>
          <div class="text-center">
            ${renderHexagramSymbol(changed.symbol, 'text-5xl')}
            <div class="text-sm font-serif font-bold mt-1">${changed.name}</div>
            <div class="text-xs text-muted">变卦</div>
          </div>` : `<div class="text-center text-sm text-muted leading-relaxed">无动爻<br>静卦</div>`}
        </div>
        ${movingHtml ? `<div class="mt-3 pt-3 border-t border-border divide-y divide-border">${movingHtml}</div>` : ''}
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold">卦象精解</h3>
        </div>
        <p class="text-sm leading-relaxed text-secondary">${interp.overview}</p>
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 ${cat.color.replace('text-', 'bg-')} rounded-full"></span>
          <h3 class="font-serif font-bold">用神与趋势 · ${cat.label}</h3>
        </div>
        <p class="text-sm leading-relaxed text-secondary">${interp.categoryAnalysis}</p>
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold">动爻解析</h3>
        </div>
        <div class="text-sm leading-relaxed text-secondary">${interp.movingAnalysis}</div>
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1 h-4 bg-gold rounded-full"></span>
          <h3 class="font-serif font-bold">变卦趋势</h3>
        </div>
        <p class="text-sm leading-relaxed text-secondary">${interp.changeTrend}</p>
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <h3 class="font-serif font-bold">卦辞</h3>
        <p class="text-sm leading-relaxed text-secondary">${hex.judgment} ${hex.meaning}</p>
      </section>

      <section class="bg-card rounded-2xl p-5 border border-border space-y-3">
        <div class="flex items-center gap-2">
          <span class="w-1 h-4 ${cat.color.replace('text-', 'bg-')} rounded-full"></span>
          <h3 class="font-serif font-bold">${cat.label}简断</h3>
        </div>
        <p class="text-sm leading-relaxed text-secondary">${hex.advice[record.category] || hex.meaning}</p>
      </section>

      <button id="save-result" class="w-full py-3.5 rounded-full bg-gold text-white text-lg font-serif tracking-widest shadow-md btn-press">
        保存记录
      </button>
    </main>
  `;
}

// --- Main render ---
// --- 加密锁屏 ---
function renderLockScreen() {
  const app = document.getElementById('app');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.classList.add('hidden');
  const isSetup = !CryptoVault.hasVault();
  app.innerHTML = `
    <div class="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full brand-ring mb-5">
        <img src="${BRAND_LOGO}" alt="知几" class="h-9 w-auto" style="filter: drop-shadow(0 1px 2px rgba(156,122,46,0.35));">
      </div>
      <h1 class="text-2xl font-serif font-bold tracking-[0.2em] text-primary">知几六爻</h1>
      <p class="text-sm text-secondary mt-2">${isSetup ? '首次使用，请设置解锁口令' : '输入口令以解锁'}</p>
      <form id="lock-form" class="w-full mt-8 space-y-3">
        <input id="lock-pwd" type="password" autocomplete="${isSetup ? 'new-password' : 'current-password'}" placeholder="${isSetup ? '设置口令（至少 4 位）' : '输入口令'}" class="w-full px-4 py-3 rounded-xl border border-border bg-card text-center text-lg tracking-widest focus:outline-none focus:border-gold">
        ${isSetup ? `<input id="lock-pwd2" type="password" autocomplete="new-password" placeholder="再次输入口令" class="w-full px-4 py-3 rounded-xl border border-border bg-card text-center text-lg tracking-widest focus:outline-none focus:border-gold">` : ''}
        <button type="submit" class="w-full py-3 rounded-xl bg-gold text-white font-serif tracking-[0.2em] text-lg shadow">${isSetup ? '建立密库' : '解锁'}</button>
      </form>
      <p id="lock-err" class="text-red text-sm mt-4 h-5"></p>
      <p class="text-xs text-muted mt-6 leading-relaxed">所有卦例与设置均以 AES-256-GCM 加密保存在本机，<br>口令仅你知晓，遗忘后数据无法恢复。</p>
    </div>
  `;
  const form = document.getElementById('lock-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = document.getElementById('lock-err');
    err.textContent = '';
    const pwd = document.getElementById('lock-pwd').value;
    try {
      if (isSetup) {
        const pwd2 = document.getElementById('lock-pwd2').value;
        if (!pwd || pwd !== pwd2) { err.textContent = '两次输入不一致或为空'; return; }
        await CryptoVault.setup(pwd);
      } else {
        const ok = await CryptoVault.unlock(pwd);
        if (!ok) { err.textContent = '口令错误，请重试'; return; }
      }
      await loadData();
      if (nav) nav.classList.remove('hidden');
      render();
    } catch (ex) {
      err.textContent = ex.message || '操作失败';
    }
  });
  setTimeout(() => { const el = document.getElementById('lock-pwd'); if (el) el.focus(); }, 60);
}

function lockApp() {
  CryptoVault.lock();
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.classList.add('hidden');
  render();
}

function renderChangePwd() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <header class="pt-safe text-center pt-7 pb-5 px-4">
      <h1 class="text-2xl font-serif font-bold tracking-[0.2em] text-primary">修改口令</h1>
      <div class="ink-divider mx-auto mt-3"></div>
    </header>
    <div class="px-6 mt-6 space-y-3">
      <input id="cp-old" type="password" autocomplete="current-password" placeholder="原口令" class="w-full px-4 py-3 rounded-xl border border-border bg-card text-center text-lg tracking-widest focus:outline-none focus:border-gold">
      <input id="cp-new" type="password" autocomplete="new-password" placeholder="新口令（至少 4 位）" class="w-full px-4 py-3 rounded-xl border border-border bg-card text-center text-lg tracking-widest focus:outline-none focus:border-gold">
      <input id="cp-new2" type="password" autocomplete="new-password" placeholder="再次输入新口令" class="w-full px-4 py-3 rounded-xl border border-border bg-card text-center text-lg tracking-widest focus:outline-none focus:border-gold">
      <button id="cp-submit" class="w-full py-3 rounded-xl bg-gold text-white font-serif tracking-[0.2em] text-lg shadow">确认修改</button>
      <button id="cp-back" class="w-full py-3 rounded-xl border border-border text-secondary">返回</button>
      <p id="cp-err" class="text-red text-sm mt-2 h-5 text-center"></p>
    </div>
  `;
  document.getElementById('cp-back').addEventListener('click', () => { state.view = null; render(); });
  document.getElementById('cp-submit').addEventListener('click', async () => {
    const err = document.getElementById('cp-err');
    err.textContent = '';
    const oldP = document.getElementById('cp-old').value;
    const newP = document.getElementById('cp-new').value;
    const newP2 = document.getElementById('cp-new2').value;
    if (newP !== newP2) { err.textContent = '两次新口令不一致'; return; }
    try {
      await CryptoVault.changePassphrase(oldP, newP);
      showToast('口令已修改');
      state.view = null;
      render();
    } catch (ex) {
      err.textContent = ex.message || '修改失败';
    }
  });
}

function render() {
  if (!CryptoVault.isUnlocked()) {
    renderLockScreen();
    return;
  }
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (state.view === 'change-pwd') {
    renderChangePwd();
    updateNav();
    return;
  }

  if (state.view === 'cast-form') {
    app.innerHTML = renderCastForm(state.castCategory);
    bindCastForm();
    updateNav();
    return;
  }

  if (state.view === 'cast-shake') {
    app.innerHTML = renderCastShake(state.castCategory);
    bindCastShake();
    updateNav();
    return;
  }

  if (state.view === 'cast-result') {
    app.innerHTML = renderCastResult(state.currentRecord);
    bindCastResult();
    updateNav();
    return;
  }

  if (state.view === 'knowledge-category') {
    app.innerHTML = renderKnowledgeCategory(state.knowledgeCat);
    bindKnowledgeCategory();
    updateNav();
    return;
  }

  if (state.view === 'article') {
    app.innerHTML = renderArticle(state.articleId);
    bindArticle();
    updateNav();
    return;
  }

  switch (state.tab) {
    case 'divine':
      app.innerHTML = renderHome();
      bindHome();
      break;
    case 'records':
      app.innerHTML = renderRecords();
      bindRecords();
      break;
    case 'knowledge':
      app.innerHTML = renderKnowledge();
      bindKnowledge();
      break;
    case 'profile':
      app.innerHTML = renderProfile();
      bindProfile();
      break;
  }
  updateNav();
  window.scrollTo(0, 0);
}

function updateNav() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === state.tab);
  });
}

// --- Event bindings ---
function bindHome() {
  document.getElementById('start-cast').addEventListener('click', () => {
    state.view = 'cast-form';
    state.castCategory = 'general';
    state.castMatter = '';
    render();
  });
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = 'cast-form';
      state.castCategory = btn.dataset.category;
      state.castMatter = '';
      render();
    });
  });
}

function bindRecords() {
  document.querySelectorAll('.record-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      state.currentRecord = state.records[idx];
      state.view = 'cast-result';
      render();
    });
  });
}

function bindKnowledge() {
  document.querySelectorAll('.knowledge-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      state.knowledgeCat = btn.dataset.cat;
      state.view = 'knowledge-category';
      render();
    });
  });
  document.querySelectorAll('.article-item').forEach(btn => {
    btn.addEventListener('click', () => {
      state.articleId = parseInt(btn.dataset.id, 10);
      state.view = 'article';
      render();
    });
  });
}

function bindKnowledgeCategory() {
  document.getElementById('back-knowledge').addEventListener('click', () => {
    state.view = 'knowledge';
    render();
  });
  document.querySelectorAll('.article-item').forEach(btn => {
    btn.addEventListener('click', () => {
      state.articleId = parseInt(btn.dataset.id, 10);
      state.view = 'article';
      render();
    });
  });
}

function bindArticle() {
  document.getElementById('back-knowledge').addEventListener('click', () => {
    state.view = 'knowledge';
    render();
  });
}

function bindProfile() {
  document.getElementById('toggle-music').addEventListener('click', () => {
    state.settings.music = !state.settings.music;
    saveData();
    render();
  });
  document.getElementById('toggle-sound').addEventListener('click', () => {
    state.settings.sound = !state.settings.sound;
    saveData();
    render();
  });
  document.getElementById('music-vol').addEventListener('input', (e) => {
    state.settings.musicVol = parseInt(e.target.value, 10);
    saveData();
  });
  document.getElementById('sound-vol').addEventListener('input', (e) => {
    state.settings.soundVol = parseInt(e.target.value, 10);
    saveData();
  });
  const cp = document.getElementById('btn-change-pwd');
  if (cp) cp.addEventListener('click', () => { state.view = 'change-pwd'; render(); });
  const lb = document.getElementById('btn-lock');
  if (lb) lb.addEventListener('click', () => { lockApp(); });
}

function bindCastForm() {
  state.castLines = [];
  state.rolling = false;
  let selectedMethod = state.castMethod;
  let selectedMode = state.castMode;

  const methodBtns = document.querySelectorAll('.method-btn');
  const modeBtns = document.querySelectorAll('.mode-btn');
  const coinsMode = document.getElementById('coins-mode');
  const numbersInput = document.getElementById('numbers-input');
  const timeInput = document.getElementById('time-input');

  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      methodBtns.forEach(b => {
        b.classList.remove('border-gold', 'bg-gold/10', 'text-gold', 'font-bold');
        b.classList.add('border-border', 'text-secondary');
      });
      btn.classList.remove('border-border', 'text-secondary');
      btn.classList.add('border-gold', 'bg-gold/10', 'text-gold', 'font-bold');
      selectedMethod = btn.dataset.method;
      state.castMethod = selectedMethod;
      if (coinsMode) coinsMode.classList.toggle('hidden', selectedMethod !== 'coins');
      if (numbersInput) numbersInput.classList.toggle('hidden', selectedMethod !== 'numbers');
      if (timeInput) timeInput.classList.toggle('hidden', selectedMethod !== 'time');
    });
  });

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => {
        b.classList.remove('border-gold', 'bg-gold/10', 'text-gold', 'font-bold');
        b.classList.add('border-border', 'text-secondary');
      });
      btn.classList.remove('border-border', 'text-secondary');
      btn.classList.add('border-gold', 'bg-gold/10', 'text-gold', 'font-bold');
      selectedMode = btn.dataset.mode;
      state.castMode = selectedMode;
    });
  });

  document.getElementById('close-cast').addEventListener('click', () => {
    state.view = null;
    render();
  });

  const matterInput = document.getElementById('cast-matter');
  if (matterInput) matterInput.addEventListener('input', e => { state.castMatter = e.target.value; });

  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  if (num1Input) num1Input.addEventListener('input', e => { state.num1 = e.target.value; });
  if (num2Input) num2Input.addEventListener('input', e => { state.num2 = e.target.value; });

  ['time-year','time-month','time-day','time-hour'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', e => {
      const key = id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      state[key] = e.target.value;
    });
  });

  document.getElementById('confirm-cast').addEventListener('click', () => {
    const matter = document.getElementById('cast-matter').value.trim();
    const date = document.getElementById('cast-date').value || getTodayStr();
    state.castMatter = matter;
    state.castDate = date;

    if (selectedMethod === 'coins') {
      state.castLines = [];
      state.rolling = false;
      state.view = 'cast-shake';
      render();
      return;
    }
    let lines;
    if (selectedMethod === 'numbers') lines = castByNumbers();
    else lines = castByTime();
    if (!lines) return; // invalid input, toast already shown
    const hex = linesToHexagram(lines);
    const changed = linesToChangedHexagram(lines);
    state.currentRecord = buildRecord(lines, hex, changed);
    state.view = 'cast-result';
    render();
  });
}

function bindCastResult() {
  document.getElementById('close-result').addEventListener('click', () => {
    state.view = null;
    state.tab = 'records';
    render();
  });
  document.getElementById('save-result').addEventListener('click', () => {
    state.records.push(state.currentRecord);
    saveData();
    showToast('已保存到记录');
    setTimeout(() => {
      state.view = null;
      state.tab = 'records';
      render();
    }, 500);
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      state.tab = btn.dataset.tab;
      state.view = null;
      render();
    });
  });

  render();

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW 注册失败', err));
  }
});
