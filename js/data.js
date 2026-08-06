const HEXAGRAMS = [
  {
    name: '乾为天', symbol: '䷀', palace: '乾宫', element: '金',
    judgment: '乾：元亨利贞。',
    meaning: '天行健，君子以自强不息。乾为纯阳之卦，象征天、君、父、刚健、开创。',
    lines: [
      { position: '初九', text: '潜龙，勿用。' },
      { position: '九二', text: '见龙在田，利见大人。' },
      { position: '九三', text: '君子终日乾乾，夕惕若，厉无咎。' },
      { position: '九四', text: '或跃在渊，无咎。' },
      { position: '九五', text: '飞龙在天，利见大人。' },
      { position: '上九', text: '亢龙有悔。' }
    ],
    useLine: '用九：见群龙无首，吉。',
    auspicious: '大吉',
    advice: {
      love: '乾卦刚健，主主动追求。单身者宜展现诚意，主动邀约；恋爱中需避免过于强势，多倾听对方。',
      wealth: '财运亨通，利于开创与拓展。可积极进取，但忌贪大求全，见好即收方为上策。',
      work: '事业大有可为，得上级赏识，宜展现能力、担当重任。切忌骄傲自满，保持谦逊。',
      health: '阳气旺盛，精力充沛。注意勿过劳，防范心脑血管与头部不适，保持规律作息。'
    }
  },
  {
    name: '坤为地', symbol: '䷁', palace: '坤宫', element: '土',
    judgment: '坤：元亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞吉。',
    meaning: '地势坤，君子以厚德载物。坤为纯阴之卦，象征地、母、柔顺、包容、承载。',
    lines: [
      { position: '初六', text: '履霜，坚冰至。' },
      { position: '六二', text: '直方大，不习无不利。' },
      { position: '六三', text: '含章可贞，或从王事，无成有终。' },
      { position: '六四', text: '括囊，无咎无誉。' },
      { position: '六五', text: '黄裳，元吉。' },
      { position: '上六', text: '龙战于野，其血玄黄。' }
    ],
    useLine: '用六：利永贞。',
    auspicious: '吉',
    advice: {
      love: '以柔克刚，包容体谅。感情宜循序渐进，不宜急躁。女性占婚多吉，男性则需主动付出。',
      wealth: '厚积薄发，静待时机。不宜冒进投资，宜守成积累，待时而动。',
      work: '稳扎稳打，团队协作。坤德载物，宜辅佐他人、做好内务，厚德自然得人心。',
      health: '宜静养，调养脾胃，忌生冷。注意腹部与消化系统，保持情绪平和。'
    }
  },
  {
    name: '水雷屯', symbol: '䷂', palace: '坎宫', element: '水',
    judgment: '屯：元亨利贞，勿用有攸往，利建侯。',
    meaning: '云雷屯，君子以经纶。屯为难生之象，象征事物初生、艰难初创。',
    lines: [
      { position: '初九', text: '磐桓，利居贞，利建侯。' },
      { position: '六二', text: '屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。' },
      { position: '六三', text: '即鹿无虞，惟入于林中。君子几不如舍，往吝。' },
      { position: '六四', text: '乘马班如，求婚媾，往吉无不利。' },
      { position: '九五', text: '屯其膏，小贞吉，大贞凶。' },
      { position: '上六', text: '乘马班如，泣血涟如。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情初萌，障碍较多。宜耐心培养，不可急躁强求，时机成熟自然水到渠成。',
      wealth: '创业维艰，资金难求。小步试错，勿大举投资，先立根基再图发展。',
      work: '万事开头难，宜积蓄力量，广结人脉。可寻求合作与贵人扶持。',
      health: '注意突发小病，及早调理。初生之气脆弱，避免过度劳累与受凉。'
    }
  },
  {
    name: '山水蒙', symbol: '䷃', palace: '离宫', element: '火',
    judgment: '蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
    meaning: '山下出泉，蒙。君子以果行育德。蒙为启蒙之象，象征幼稚、求知、教育。',
    lines: [
      { position: '初六', text: '发蒙，利用刑人，用说桎梏，以往吝。' },
      { position: '九二', text: '包蒙，吉。纳妇吉，子克家。' },
      { position: '六三', text: '勿用取女，见金夫，不有躬，无攸利。' },
      { position: '六四', text: '困蒙，吝。' },
      { position: '六五', text: '童蒙，吉。' },
      { position: '上九', text: '击蒙，不利为寇，利御寇。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情尚处蒙昧，需多了解对方。避免被表象迷惑，宜虚心求教、冷静观察。',
      wealth: '投资理财多向行家请教，避免盲目决策。学习阶段不宜大额投入。',
      work: '初入新境，宜拜师学艺，积累经验。戒骄戒躁，厚积薄发。',
      health: '注意养护，多学习健康知识。小儿或老人更需细心照料。'
    }
  },
  {
    name: '水天需', symbol: '䷄', palace: '坤宫', element: '土',
    judgment: '需：有孚，光亨，贞吉，利涉大川。',
    meaning: '云上于天，需。君子以饮食宴乐。需为等待之象，象征需求、期待、守时待机。',
    lines: [
      { position: '初九', text: '需于郊，利用恒，无咎。' },
      { position: '九二', text: '需于沙，小有言，终吉。' },
      { position: '九三', text: '需于泥，致寇至。' },
      { position: '六四', text: '需于血，出自穴。' },
      { position: '九五', text: '需于酒食，贞吉。' },
      { position: '上六', text: '入于穴，有不速之客三人来，敬之终吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '耐心等待，水到渠成。感情不宜催促，给对方空间，时机成熟自然明朗。',
      wealth: '时机未至，守成待机。可做准备，莫急出手，待大势明朗再行动。',
      work: '项目需等待，蓄力准备，来日可发。此时宜充实自己、维护关系。',
      health: '调养为主，静待康复。慢性病需耐心，勿焦虑急躁。'
    }
  },
  {
    name: '天水讼', symbol: '䷅', palace: '离宫', element: '火',
    judgment: '讼：有孚，窒惕，中吉，终凶。利见大人，不利涉大川。',
    meaning: '天与水违行，讼。君子以作事谋始。讼为争讼之象，象征口舌、是非、诉讼。',
    lines: [
      { position: '初六', text: '不永所事，小有言，终吉。' },
      { position: '九二', text: '不克讼，归而逋，其邑人三百户，无眚。' },
      { position: '六三', text: '食旧德，贞厉，终吉。或从王事，无成。' },
      { position: '九四', text: '不克讼，复即命渝，安贞吉。' },
      { position: '九五', text: '讼，元吉。' },
      { position: '上九', text: '或锡之鞶带，终朝三褫之。' }
    ],
    auspicious: '凶',
    advice: {
      love: '易生口舌，宜忍让沟通，避免争执。冷战或争吵都会伤感情，退一步海阔天空。',
      wealth: '财讼相缠，保守为宜。莫贪小利，避免合同纠纷与借贷风险。',
      work: '谨防小人，避免卷入是非纠纷。必要时可请上级或法律人士介入。',
      health: '情绪波动大，注意心脑血管与肝胆。保持心态平和，少动肝火。'
    }
  },
  {
    name: '地水师', symbol: '䷆', palace: '坎宫', element: '水',
    judgment: '师：贞，丈人吉，无咎。',
    meaning: '地中有水，师。君子以容民畜众。师为众人之象，象征军队、团队、组织。',
    lines: [
      { position: '初六', text: '师出以律，否臧凶。' },
      { position: '九二', text: '在师中，吉无咎，王三锡命。' },
      { position: '六三', text: '师或舆尸，凶。' },
      { position: '六四', text: '师左次，无咎。' },
      { position: '六五', text: '田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。' },
      { position: '上六', text: '大君有命，开国承家，小人勿用。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情需有人斡旋，可听取长辈或朋友意见。避免独断专行，多商量。',
      wealth: '团队求财，分配需公平。合伙生意要有明确规矩，否则易生嫌隙。',
      work: '领导得力则吉，忌独断专行。用人唯贤，团结下属，可成大事。',
      health: '注意泌尿系统与肾脏，多喝温水。避免久坐，适度运动。'
    }
  },
  {
    name: '水地比', symbol: '䷇', palace: '坤宫', element: '土',
    judgment: '比：吉。原筮元永贞，无咎。不宁方来，后夫凶。',
    meaning: '地上有水，比。先王以建万国，亲诸侯。比为亲比之象，象征亲近、团结、合作。',
    lines: [
      { position: '初六', text: '有孚比之，无咎。有孚盈缶，终来有它吉。' },
      { position: '六二', text: '比之自内，贞吉。' },
      { position: '六三', text: '比之匪人。' },
      { position: '六四', text: '外比之，贞吉。' },
      { position: '九五', text: '显比，王用三驱，失前禽。邑人不诫，吉。' },
      { position: '上六', text: '比之无首，凶。' }
    ],
    auspicious: '吉',
    advice: {
      love: '相亲相爱，互相扶持。此卦利感情发展，宜多陪伴、多沟通。',
      wealth: '合伙有利，贵人相助。与人合作比单打独斗更易获利。',
      work: '团结同事，借力使力，事半功倍。良好的人际关系是升职关键。',
      health: '人际关系和顺，心情舒畅有益健康。多参与社交活动，保持乐观。'
    }
  },
  {
    name: '风天小畜', symbol: '䷈', palace: '巽宫', element: '木',
    judgment: '小畜：亨。密云不雨，自我西郊。',
    meaning: '风行天上，小畜。君子以懿文德。小畜为小有蓄积之象，象征积蓄、等待、小有成就。',
    lines: [
      { position: '初九', text: '复自道，何其咎，吉。' },
      { position: '九二', text: '牵复，吉。' },
      { position: '九三', text: '舆说辐，夫妻反目。' },
      { position: '六四', text: '有孚，血去惕出，无咎。' },
      { position: '九五', text: '有孚挛如，富以其邻。' },
      { position: '上九', text: '既雨既处，尚德载。妇贞厉，月几望，君子征凶。' }
    ],
    auspicious: '小吉',
    advice: {
      love: '小有积蓄感情，尚待时日。需防口角与误会，多包容。',
      wealth: '小有进账，积少成多。不宜大额投资，稳健理财为上。',
      work: '小有成就，宜继续积累。注意与同事或合作伙伴的沟通，避免反目。',
      health: '小恙无碍，注意休息。注意呼吸道与皮肤保养。'
    }
  },
  {
    name: '天泽履', symbol: '䷉', palace: '艮宫', element: '土',
    judgment: '履：履虎尾，不咥人，亨。',
    meaning: '上天下泽，履。君子以辨上下，定民志。履为履行之象，象征谨慎、礼节、实践。',
    lines: [
      { position: '初九', text: '素履，往无咎。' },
      { position: '九二', text: '履道坦坦，幽人贞吉。' },
      { position: '六三', text: '眇能视，跛能履，履虎尾咥人，凶。武人为于大君。' },
      { position: '九四', text: '履虎尾，愬愬，终吉。' },
      { position: '九五', text: '夬履，贞厉。' },
      { position: '上九', text: '视履考祥，其旋元吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '谨守礼节，循序渐进。感情平安发展，不宜冒进或轻浮。',
      wealth: '谨慎理财，规避风险。稳守即安，莫贪非分之财。',
      work: '如履薄冰，谨慎行事，可保无咎。遵守规则，尊重上级。',
      health: '步步为营，勿冒险伤身。注意安全，防止意外。'
    }
  },
  {
    name: '地天泰', symbol: '䷊', palace: '坤宫', element: '土',
    judgment: '泰：小往大来，吉亨。',
    meaning: '天地交，泰。后以财成天地之道，辅相天地之宜，以左右民。泰为通泰之象，象征顺利、和谐、兴盛。',
    lines: [
      { position: '初九', text: '拔茅茹，以其汇，征吉。' },
      { position: '九二', text: '包荒，用冯河，不遐遗，朋亡，得尚于中行。' },
      { position: '九三', text: '无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。' },
      { position: '六四', text: '翩翩，不富以其邻，不戒以孚。' },
      { position: '六五', text: '帝乙归妹，以祉元吉。' },
      { position: '上六', text: '城复于隍，勿用师。自邑告命，贞吝。' }
    ],
    auspicious: '大吉',
    advice: {
      love: '天地交泰，感情融洽。利谈婚论嫁，家庭和睦，彼此扶持。',
      wealth: '财运大开，宜积极拓展。合作生财，贵人多助。',
      work: '事业顺利，上下一心，大展宏图。可谋求晋升与发展。',
      health: '阴阳平衡，身心康泰。保持良好作息，预防为主。'
    }
  },
  {
    name: '天地否', symbol: '䷋', palace: '乾宫', element: '金',
    judgment: '否：否之匪人，不利君子贞，大往小来。',
    meaning: '天地不交，否。君子以俭德辟难，不可荣以禄。否为闭塞之象，象征不顺、阻隔、小人当道。',
    lines: [
      { position: '初六', text: '拔茅茹，以其汇，贞吉亨。' },
      { position: '六二', text: '包承，小人吉，大人否亨。' },
      { position: '六三', text: '包羞。' },
      { position: '九四', text: '有命无咎，畴离祉。' },
      { position: '九五', text: '休否，大人吉。其亡其亡，系于苞桑。' },
      { position: '上九', text: '倾否，先否后喜。' }
    ],
    auspicious: '凶',
    advice: {
      love: '沟通受阻，易生误会。宜冷静，给彼此空间，等待转机。',
      wealth: '财运不济，宜守不宜攻。避免投资，减少开支。',
      work: '小人当道，低调自保，韬光养晦。不宜锋芒太露。',
      health: '注意呼吸系统，保持室内空气流通。情绪易低落，需自我调节。'
    }
  },
  {
    name: '天火同人', symbol: '䷌', palace: '离宫', element: '火',
    judgment: '同人：同人于野，亨。利涉大川，利君子贞。',
    meaning: '天与火，同人。君子以类族辨物。同人为和同之象，象征志同道合、团结合作。',
    lines: [
      { position: '初九', text: '同人于门，无咎。' },
      { position: '六二', text: '同人于宗，吝。' },
      { position: '九三', text: '伏戎于莽，升其高陵，三岁不兴。' },
      { position: '九四', text: '乘其墉，弗克攻，吉。' },
      { position: '九五', text: '同人，先号咷而后笑，大师克相遇。' },
      { position: '上九', text: '同人于郊，无悔。' }
    ],
    auspicious: '吉',
    advice: {
      love: '志同道合，感情升温。宜共同活动，培养共同兴趣。',
      wealth: '合作生财，广结善缘。合伙经营或团队项目有利。',
      work: '团队协作，目标一致，可成大事。注意避免内部派系之争。',
      health: '心情开朗，身体自安。多参与集体活动，有益身心。'
    }
  },
  {
    name: '火天大有', symbol: '䷍', palace: '乾宫', element: '金',
    judgment: '大有：元亨。',
    meaning: '火在天上，大有。君子以遏恶扬善，顺天休命。大有为丰盛之象，象征大有收获、光明昌隆。',
    lines: [
      { position: '初九', text: '无交害，匪咎，艰则无咎。' },
      { position: '九二', text: '大车以载，有攸往，无咎。' },
      { position: '九三', text: '公用亨于天子，小人弗克。' },
      { position: '九四', text: '匪其彭，无咎。' },
      { position: '六五', text: '厥孚交如，威如，吉。' },
      { position: '上九', text: '自天祐之，吉无不利。' }
    ],
    auspicious: '大吉',
    advice: {
      love: '情投意合，收获满满。宜进一步发展，谈婚论嫁皆吉。',
      wealth: '财源广进，收获颇丰。可分享成果，广结善缘。',
      work: '大有成就，得上级信任。宜把握机遇，但忌骄纵。',
      health: '精力充沛，但忌骄纵。注意饮食节制，防上火。'
    }
  },
  {
    name: '地山谦', symbol: '䷎', palace: '兑宫', element: '金',
    judgment: '谦：亨，君子有终。',
    meaning: '地中有山，谦。君子以裒多益寡，称物平施。谦为谦虚之象，象征谦逊、退让、受益。',
    lines: [
      { position: '初六', text: '谦谦君子，用涉大川，吉。' },
      { position: '六二', text: '鸣谦，贞吉。' },
      { position: '九三', text: '劳谦，君子有终，吉。' },
      { position: '六四', text: '无不利，撝谦。' },
      { position: '六五', text: '不富以其邻，利用侵伐，无不利。' },
      { position: '上六', text: '鸣谦，利用行师，征邑国。' }
    ],
    auspicious: '吉',
    advice: {
      love: '谦虚待人，感情长久。避免锋芒毕露，多体谅包容。',
      wealth: '谦受益，满招损。低调理财，不炫耀，财源自然稳固。',
      work: '谦逊有功，得上级赏识。有功不居，反而更容易被提拔。',
      health: '心态平和，身体安康。戒骄戒躁，养生重在养心。'
    }
  },
  {
    name: '雷地豫', symbol: '䷏', palace: '震宫', element: '木',
    judgment: '豫：利建侯行师。',
    meaning: '雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。豫为愉悦之象，象征欢乐、预备、顺势。',
    lines: [
      { position: '初六', text: '鸣豫，凶。' },
      { position: '六二', text: '介于石，不终日，贞吉。' },
      { position: '六三', text: '盱豫，悔，迟有悔。' },
      { position: '九四', text: '由豫，大有得。勿疑，朋盍簪。' },
      { position: '六五', text: '贞疾，恒不死。' },
      { position: '上六', text: '冥豫，成有渝，无咎。' }
    ],
    auspicious: '吉',
    advice: {
      love: '心情愉悦，感情甜蜜。宜共享欢乐，但勿耽溺享乐。',
      wealth: '乐极生悲，宜节制消费。形势虽好，不可懈怠。',
      work: '形势喜人，但不可懈怠。宜提前规划，防患未然。',
      health: '心情舒畅，注意劳逸结合。避免过度娱乐伤身。'
    }
  },
  {
    name: '泽雷随', symbol: '䷐', palace: '震宫', element: '木',
    judgment: '随：元亨利贞，无咎。',
    meaning: '泽中有雷，随。君子以向晦入宴息。随为随从之象，象征顺应、随和、适时。',
    lines: [
      { position: '初九', text: '官有渝，贞吉。出门交有功。' },
      { position: '六二', text: '系小子，失丈夫。' },
      { position: '六三', text: '系丈夫，失小子。随有求得，利居贞。' },
      { position: '九四', text: '随有获，贞凶。有孚在道以明，何咎。' },
      { position: '九五', text: '孚于嘉，吉。' },
      { position: '上六', text: '拘系之，乃从维之，王用亨于西山。' }
    ],
    auspicious: '吉',
    advice: {
      love: '顺势而为，随遇而安。感情自然发展，不可强求。',
      wealth: '跟随趋势，不可逆势操作。灵活应变，小利可求。',
      work: '顺应时势，灵活应变，无往不利。注意选择跟随的对象。',
      health: '作息随顺天时，早睡早起。顺应身体节律，勿逆天而行。'
    }
  },
  {
    name: '山风蛊', symbol: '䷑', palace: '巽宫', element: '木',
    judgment: '蛊：元亨，利涉大川。先甲三日，后甲三日。',
    meaning: '山下有风，蛊。君子以振民育德。蛊为腐败生新之象，象征积弊、整治、革新。',
    lines: [
      { position: '初六', text: '干父之蛊，有子考无咎，厉终吉。' },
      { position: '九二', text: '干母之蛊，不可贞。' },
      { position: '九三', text: '干父之蛊，小有悔，无大咎。' },
      { position: '六四', text: '裕父之蛊，往见吝。' },
      { position: '六五', text: '干父之蛊，用誉。' },
      { position: '上九', text: '不事王侯，高尚其事。' }
    ],
    auspicious: '平',
    advice: {
      love: '积弊需清，坦诚沟通，去腐生新。旧有问题需面对解决。',
      wealth: '整顿财务，剔除不良投资。改革后方能重生。',
      work: '革除旧弊，重整旗鼓，可转危为安。宜果断处理历史遗留问题。',
      health: '注意慢性病，宜调理根治。改变不良生活习惯。'
    }
  },
  {
    name: '地泽临', symbol: '䷒', palace: '坤宫', element: '土',
    judgment: '临：元亨利贞，至于八月有凶。',
    meaning: '泽上有地，临。君子以教思无穷，容保民无疆。临为监临之象，象征接近、督导、机遇。',
    lines: [
      { position: '初九', text: '咸临，贞吉。' },
      { position: '九二', text: '咸临，吉无不利。' },
      { position: '六三', text: '甘临，无攸利。既忧之，无咎。' },
      { position: '六四', text: '至临，无咎。' },
      { position: '六五', text: '知临，大君之宜，吉。' },
      { position: '上六', text: '敦临，吉无咎。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情临近佳境，宜把握当下。真诚相待，自然亲近。',
      wealth: '机会来临，审慎把握。此时积极进取，但勿冒进。',
      work: '领导岗位，宜亲民爱民。督导下属，以德服人。',
      health: '身体转好，仍需调养。注意季节变化，防患于未然。'
    }
  },
  {
    name: '风地观', symbol: '䷓', palace: '乾宫', element: '金',
    judgment: '观：盥而不荐，有孚顒若。',
    meaning: '风行地上，观。先王以省方观民设教。观为观察之象，象征瞻仰、考察、自省。',
    lines: [
      { position: '初六', text: '童观，小人无咎，君子吝。' },
      { position: '六二', text: '闚观，利女贞。' },
      { position: '六三', text: '观我生进退。' },
      { position: '六四', text: '观国之光，利用宾于王。' },
      { position: '九五', text: '观我生，君子无咎。' },
      { position: '上九', text: '观其生，君子无咎。' }
    ],
    auspicious: '平',
    advice: {
      love: '观察对方，勿急于表白。深入了解后再做决定。',
      wealth: '多看少动，洞察先机。投资前需充分调研。',
      work: '登高望远，制定长远计划。善于观察形势，把握大局。',
      health: '观察身体信号，防患未然。定期体检，关注细节。'
    }
  },
  {
    name: '火雷噬嗑', symbol: '䷔', palace: '巽宫', element: '木',
    judgment: '噬嗑：亨。利用狱。',
    meaning: '雷电，噬嗑。先王以明罚敕法。噬嗑为咬合之象，象征刑罚、决断、解决问题。',
    lines: [
      { position: '初九', text: '屦校灭趾，无咎。' },
      { position: '六二', text: '噬肤灭鼻，无咎。' },
      { position: '六三', text: '噬腊肉，遇毒，小吝无咎。' },
      { position: '九四', text: '噬乾胏，得金矢，利艰贞吉。' },
      { position: '六五', text: '噬乾肉，得黄金，贞厉无咎。' },
      { position: '上九', text: '何校灭耳，凶。' }
    ],
    auspicious: '平',
    advice: {
      love: '有问题需正面解决，不可逃避。矛盾宜早化解，否则积重难返。',
      wealth: '纠纷需理清，方可获利。注意合同与法律风险。',
      work: '矛盾宜化解，必要时果断处理。依规办事，公正严明。',
      health: '注意口腔、牙齿，饮食有节。防食物中毒，注意肠胃。'
    }
  },
  {
    name: '山火贲', symbol: '䷕', palace: '艮宫', element: '土',
    judgment: '贲：亨，小利有攸往。',
    meaning: '山下有火，贲。君子以明庶政，无敢折狱。贲为文饰之象，象征修饰、外表、礼仪。',
    lines: [
      { position: '初九', text: '贲其趾，舍车而徒。' },
      { position: '六二', text: '贲其须。' },
      { position: '九三', text: '贲如濡如，永贞吉。' },
      { position: '六四', text: '贲如皤如，白马翰如，匪寇婚媾。' },
      { position: '六五', text: '贲于丘园，束帛戋戋，吝终吉。' },
      { position: '上九', text: '白贲，无咎。' }
    ],
    auspicious: '小吉',
    advice: {
      love: '注重仪表与修养，桃花渐开。但勿只重外表，内在更重要。',
      wealth: '小利可图，大利难图。宜文饰包装，提升形象。',
      work: '文饰外表，更需充实内在。适合从事文化、艺术、宣传工作。',
      health: '注意皮肤、外貌相关调理。保持内外兼修。'
    }
  },
  {
    name: '山地剥', symbol: '䷖', palace: '乾宫', element: '金',
    judgment: '剥：不利有攸往。',
    meaning: '山附于地，剥。上以厚下安宅。剥为剥落之象，象征衰退、剥蚀、损耗。',
    lines: [
      { position: '初六', text: '剥床以足，蔑贞凶。' },
      { position: '六二', text: '剥床以辨，蔑贞凶。' },
      { position: '六三', text: '剥之，无咎。' },
      { position: '六四', text: '剥床以肤，凶。' },
      { position: '六五', text: '贯鱼，以宫人宠，无不利。' },
      { position: '上九', text: '硕果不食，君子得舆，小人剥庐。' }
    ],
    auspicious: '凶',
    advice: {
      love: '感情剥蚀，宜守不宜进。避免争吵，防止关系进一步恶化。',
      wealth: '财运衰退，保守为上。减少投资，防止亏损扩大。',
      work: '根基动摇，宜稳固根本。不宜跳槽或大规模变动。',
      health: '体力渐衰，宜静养补益。注意脾胃与肌肉骨骼。'
    }
  },
  {
    name: '地雷复', symbol: '䷗', palace: '坤宫', element: '土',
    judgment: '复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
    meaning: '雷在地中，复。先王以至日闭关，商旅不行，后不省方。复为回复之象，象征复苏、回归、新生。',
    lines: [
      { position: '初九', text: '不远复，无祗悔，元吉。' },
      { position: '六二', text: '休复，吉。' },
      { position: '六三', text: '频复，厉无咎。' },
      { position: '六四', text: '中行独复。' },
      { position: '六五', text: '敦复，无悔。' },
      { position: '上六', text: '迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情复苏，旧情可温，新缘可启。真诚悔过，关系可修复。',
      wealth: '否极泰来，小额尝试。之前亏损者有望逐步回血。',
      work: '东山再起，宜从小处着手。总结经验，重新出发。',
      health: '阳气初生，注意保暖养生。慢性病有望好转。'
    }
  },
  {
    name: '天雷无妄', symbol: '䷘', palace: '巽宫', element: '木',
    judgment: '无妄：元亨利贞。其匪正有眚，不利有攸往。',
    meaning: '天下雷行，物与无妄。先王以茂对时，育万物。无妄为无妄之灾之象，象征真诚、自然、不测。',
    lines: [
      { position: '初九', text: '无妄，往吉。' },
      { position: '六二', text: '不耕获，不菑畲，则利有攸往。' },
      { position: '六三', text: '无妄之灾，或系之牛，行人之得，邑人之灾。' },
      { position: '九四', text: '可贞，无咎。' },
      { position: '九五', text: '无妄之疾，勿药有喜。' },
      { position: '上九', text: '无妄，行有眚，无攸利。' }
    ],
    auspicious: '吉',
    advice: {
      love: '顺其自然，不可强求。真诚相待，瓜熟蒂落。',
      wealth: '正财可求，偏财莫贪。脚踏实地，勿走捷径。',
      work: '脚踏实地，勿走捷径。守正道则吉，投机取巧反受灾。',
      health: '无妄之灾，出门注意安全。小病勿药自愈，但需防范意外。'
    }
  },
  {
    name: '山天大畜', symbol: '䷙', palace: '艮宫', element: '土',
    judgment: '大畜：利贞，不家食吉，利涉大川。',
    meaning: '天在山中，大畜。君子以多识前言往行，以畜其德。大畜为大蓄积之象，象征积蓄、蓄养、待机。',
    lines: [
      { position: '初九', text: '有厉，利已。' },
      { position: '九二', text: '舆说輹。' },
      { position: '九三', text: '良马逐，利艰贞。曰闲舆卫，利有攸往。' },
      { position: '六四', text: '童牛之牿，元吉。' },
      { position: '六五', text: '豶豕之牙，吉。' },
      { position: '上九', text: '何天之衢，亨。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情深厚，宜谈婚论嫁。彼此已有充分了解和积累。',
      wealth: '积蓄丰厚，可谋大事。蓄力已久，此时出手有利。',
      work: '蓄力已足，可担当大任。之前积累的人脉和能力将发挥作用。',
      health: '体质强健，精力充沛。继续保持良好习惯。'
    }
  },
  {
    name: '山雷颐', symbol: '䷚', palace: '巽宫', element: '木',
    judgment: '颐：贞吉。观颐，自求口实。',
    meaning: '山下有雷，颐。君子以慎言语，节饮食。颐为颐养之象，象征养生、自求、节制。',
    lines: [
      { position: '初九', text: '舍尔灵龟，观我朵颐，凶。' },
      { position: '六二', text: '颠颐，拂经，于丘颐，征凶。' },
      { position: '六三', text: '拂颐，贞凶，十年勿用，无攸利。' },
      { position: '六四', text: '颠颐，吉。虎视眈眈，其欲逐逐，无咎。' },
      { position: '六五', text: '拂经，居贞吉，不可涉大川。' },
      { position: '上九', text: '由颐，厉吉，利涉大川。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情需滋养，多沟通多陪伴。不宜只看表面，要用心经营。',
      wealth: '开源节流，量入为出。不宜大额支出，稳健为上。',
      work: '注重积累，不可急于求成。养精蓄锐，等待时机。',
      health: '饮食有节，言语谨慎。颐养天年，注意脾胃与口腔。'
    }
  },
  {
    name: '泽风大过', symbol: '䷛', palace: '震宫', element: '木',
    judgment: '大过：栋桡，利有攸往，亨。',
    meaning: '泽灭木，大过。君子以独立不惧，遁世无闷。大过为大有过越之象，象征压力、非常、承担。',
    lines: [
      { position: '初六', text: '藉用白茅，无咎。' },
      { position: '九二', text: '枯杨生稊，老夫得其女妻，无不利。' },
      { position: '九三', text: '栋桡，凶。' },
      { position: '九四', text: '栋隆，吉，有它吝。' },
      { position: '九五', text: '枯杨生华，老妇得其士夫，无咎无誉。' },
      { position: '上六', text: '过涉灭顶，凶，无咎。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情压力较大，需共同承担。避免一方承担过多。',
      wealth: '风险偏高，谨慎杠杆。不宜激进投资，注意风险控制。',
      work: '压力过大，宜寻求支援。任务过重时及时沟通，避免独撑。',
      health: '注意脊椎、骨骼，避免重负。劳逸结合，防止过劳。'
    }
  },
  {
    name: '坎为水', symbol: '䷜', palace: '坎宫', element: '水',
    judgment: '习坎：有孚，维心亨，行有尚。',
    meaning: '水洊至，习坎。君子以常德行，习教事。坎为险阻之象，象征险难、坎坷、智慧。',
    lines: [
      { position: '初六', text: '习坎，入于坎窞，凶。' },
      { position: '九二', text: '坎有险，求小得。' },
      { position: '六三', text: '来之坎坎，险且枕，入于坎窞，勿用。' },
      { position: '六四', text: '樽酒，簋贰，用缶，纳约自牖，终无咎。' },
      { position: '九五', text: '坎不盈，祗既平，无咎。' },
      { position: '上六', text: '系用徽纆，寘于丛棘，三岁不得，凶。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情多波折，需坚定信心。困难重重，但用心可渡。',
      wealth: '财来财去，宜守成。避免冒险，小财可求。',
      work: '险中求进，需有充分准备。步步为营，切勿冒进。',
      health: '注意肾水、泌尿系统。防水湿寒气，保持腰部保暖。'
    }
  },
  {
    name: '离为火', symbol: '䷝', palace: '离宫', element: '火',
    judgment: '离：利贞，亨。畜牝牛，吉。',
    meaning: '明两作，离。大人以继明照于四方。离为光明之象，象征文明、美丽、依附。',
    lines: [
      { position: '初九', text: '履错然，敬之无咎。' },
      { position: '六二', text: '黄离，元吉。' },
      { position: '九三', text: '日昃之离，不鼓缶而歌，则大耋之嗟，凶。' },
      { position: '九四', text: '突如其来如，焚如，死如，弃如。' },
      { position: '六五', text: '出涕沱若，戚嗟若，吉。' },
      { position: '上九', text: '王用出征，有嘉折首，获匪其丑，无咎。' }
    ],
    auspicious: '吉',
    advice: {
      love: '热情似火，宜温柔持久。避免忽冷忽热，多给对方安全感。',
      wealth: '光明行业有利，忌投机。适合文化、科技、传媒类投资。',
      work: '展现才华，宜文书、创意工作。注意防小人嫉妒。',
      health: '注意心脏、眼睛，勿熬夜。防上火，保持情绪稳定。'
    }
  },
  {
    name: '泽山咸', symbol: '䷞', palace: '兑宫', element: '金',
    judgment: '咸：亨，利贞，取女吉。',
    meaning: '山上有泽，咸。君子以虚受人。咸为感应之象，象征交感、恋爱、沟通。',
    lines: [
      { position: '初六', text: '咸其拇。' },
      { position: '六二', text: '咸其腓，凶，居吉。' },
      { position: '九三', text: '咸其股，执其随，往吝。' },
      { position: '九四', text: '贞吉悔亡。憧憧往来，朋从尔思。' },
      { position: '九五', text: '咸其脢，无悔。' },
      { position: '上六', text: '咸其辅颊舌。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感应相通，恋情甜蜜，大利感情。彼此心意相通，宜进一步发展。',
      wealth: '以情动人，可获贵人支持。人际关系带来财运。',
      work: '团队感应良好，合作愉快。善于沟通者事半功倍。',
      health: '情绪感应强，宜保持平和。注意心脏与神经系统。'
    }
  },
  {
    name: '雷风恒', symbol: '䷟', palace: '震宫', element: '木',
    judgment: '恒：亨，无咎，利贞，利有攸往。',
    meaning: '雷风，恒。君子以立不易方。恒为恒久之象，象征持久、稳定、坚持。',
    lines: [
      { position: '初六', text: '浚恒，贞凶，无攸利。' },
      { position: '九二', text: '悔亡。' },
      { position: '九三', text: '不恒其德，或承之羞，贞吝。' },
      { position: '九四', text: '田无禽。' },
      { position: '六五', text: '恒其德，贞妇人吉，夫子凶。' },
      { position: '上六', text: '振恒，凶。' }
    ],
    auspicious: '吉',
    advice: {
      love: '恒久不变，感情稳定长久。宜细水长流，忌朝三暮四。',
      wealth: '稳健经营，持之以恒。复利效应将显现。',
      work: '坚守岗位，日久见功。适合长期深耕，不宜频繁跳槽。',
      health: '养生贵在坚持，规律作息。慢性病调理需有耐心。'
    }
  },
  {
    name: '天山遁', symbol: '䷠', palace: '乾宫', element: '金',
    judgment: '遁：亨，小利贞。',
    meaning: '天下有山，遁。君子以远小人，不恶而严。遁为退避之象，象征隐退、避让、保存。',
    lines: [
      { position: '初六', text: '遁尾，厉，勿用有攸往。' },
      { position: '六二', text: '执之用黄牛之革，莫之胜说。' },
      { position: '九三', text: '系遁，有疾厉，畜臣妾吉。' },
      { position: '九四', text: '好遁，君子吉，小人否。' },
      { position: '九五', text: '嘉遁，贞吉。' },
      { position: '上九', text: '肥遁，无不利。' }
    ],
    auspicious: '平',
    advice: {
      love: '暂时退避，给彼此空间。争吵时不宜紧逼，冷处理为佳。',
      wealth: '见好就收，不宜恋战。此时撤退保全利润。',
      work: '形势不利，宜低调退守。避免与小人正面冲突。',
      health: '宜静养，远离纷扰。注意呼吸系统与皮肤。'
    }
  },
  {
    name: '雷天大壮', symbol: '䷡', palace: '坤宫', element: '土',
    judgment: '大壮：利贞。',
    meaning: '雷在天上，大壮。君子以非礼弗履。大壮为强盛之象，象征壮盛、冲动、守正。',
    lines: [
      { position: '初九', text: '壮于趾，征凶，有孚。' },
      { position: '九二', text: '贞吉。' },
      { position: '九三', text: '小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。' },
      { position: '九四', text: '贞吉悔亡。藩决不羸，壮于大舆之輹。' },
      { position: '六五', text: '丧羊于易，无悔。' },
      { position: '上六', text: '羝羊触藩，不能退，不能遂，无攸利，艰则吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情冲动，宜以礼自持。避免强势，多尊重对方。',
      wealth: '势头强劲，但忌冒进。力量虽大，亦需谋略。',
      work: '气势如虹，仍需守正。不可恃强凌弱，依规办事。',
      health: '精力旺盛，注意勿过度消耗。防运动损伤与头部外伤。'
    }
  },
  {
    name: '火地晋', symbol: '䷢', palace: '乾宫', element: '金',
    judgment: '晋：康侯用锡马蕃庶，昼日三接。',
    meaning: '明出地上，晋。君子以自昭明德。晋为晋升之象，象征上进、光明、发展。',
    lines: [
      { position: '初六', text: '晋如摧如，贞吉。罔孚，裕无咎。' },
      { position: '六二', text: '晋如愁如，贞吉。受兹介福，于其王母。' },
      { position: '六三', text: '众允，悔亡。' },
      { position: '九四', text: '晋如鼫鼠，贞厉。' },
      { position: '六五', text: '悔亡，失得勿恤，往吉无不利。' },
      { position: '上九', text: '晋其角，维用伐邑，厉吉无咎，贞吝。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情渐入佳境，光明在前。主动表达，关系升温。',
      wealth: '事业上升带动财运。收入有望增加，但需继续努力。',
      work: '晋升有望，宜展现能力。得上级提携，前景光明。',
      health: '身体好转，阳气上升。继续保持积极心态。'
    }
  },
  {
    name: '地火明夷', symbol: '䷣', palace: '坎宫', element: '水',
    judgment: '明夷：利艰贞。',
    meaning: '明入地中，明夷。君子以莅众，用晦而明。明夷为光明受伤之象，象征晦暗、挫折、隐忍。',
    lines: [
      { position: '初九', text: '明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。' },
      { position: '六二', text: '明夷，夷于左股，用拯马壮，吉。' },
      { position: '九三', text: '明夷于南狩，得其大首，不可疾贞。' },
      { position: '六四', text: '入于左腹，获明夷之心，于出门庭。' },
      { position: '六五', text: '箕子之明夷，利贞。' },
      { position: '上六', text: '不明晦，初登于天，后入于地。' }
    ],
    auspicious: '凶',
    advice: {
      love: '感情受挫，宜隐忍守正。此时不宜强求，先保全自己。',
      wealth: '财运晦暗，保守为宜。避免投资，等待时机。',
      work: '小人暗算，韬光养晦。暂时收敛锋芒，保存实力。',
      health: '注意心脏，避免情绪激动。防止意外伤害，注意休息。'
    }
  },
  {
    name: '风火家人', symbol: '䷤', palace: '巽宫', element: '木',
    judgment: '家人：利女贞。',
    meaning: '风自火出，家人。君子以言有物而行有恒。家人为家庭之象，象征家庭、亲情、内务。',
    lines: [
      { position: '初九', text: '闲有家，悔亡。' },
      { position: '六二', text: '无攸遂，在中馈，贞吉。' },
      { position: '九三', text: '家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。' },
      { position: '六四', text: '富家，大吉。' },
      { position: '九五', text: '王假有家，勿恤，吉。' },
      { position: '上九', text: '有孚威如，终吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '家庭和睦，感情安稳。宜多陪伴家人，经营家庭。',
      wealth: '家宅安宁，财源自稳。家庭理财宜稳健。',
      work: '内部团结，家和万事兴。团队如家庭，互相支持。',
      health: '家庭和睦有益身心。注意家人健康，互相照顾。'
    }
  },
  {
    name: '火泽睽', symbol: '䷥', palace: '艮宫', element: '土',
    judgment: '睽：小事吉。',
    meaning: '上火下泽，睽。君子以同而异。睽为乖睽之象，象征分歧、背离、求同存异。',
    lines: [
      { position: '初九', text: '悔亡，丧马勿逐，自复。见恶人，无咎。' },
      { position: '九二', text: '遇主于巷，无咎。' },
      { position: '六三', text: '见舆曳，其牛掣，其人天且劓，无初有终。' },
      { position: '九四', text: '睽孤，遇元夫，交孚，厉无咎。' },
      { position: '六五', text: '悔亡，厥宗噬肤，往何咎。' },
      { position: '上九', text: '睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧。匪寇婚媾，往遇雨则吉。' }
    ],
    auspicious: '平',
    advice: {
      love: '意见相左，求同存异。沟通是关键，不可固执己见。',
      wealth: '小财可求，大利难图。合作中有分歧，需协调。',
      work: '分歧难免，宜沟通化解。寻找共同点，搁置争议。',
      health: '注意上火、炎症。情绪易急躁，需降火平心。'
    }
  },
  {
    name: '水山蹇', symbol: '䷦', palace: '兑宫', element: '金',
    judgment: '蹇：利西南，不利东北。利见大人，贞吉。',
    meaning: '山上有水，蹇。君子以反身修德。蹇为艰难之象，象征蹇难、阻滞、修德。',
    lines: [
      { position: '初六', text: '往蹇来誉。' },
      { position: '六二', text: '王臣蹇蹇，匪躬之故。' },
      { position: '九三', text: '往蹇来反。' },
      { position: '六四', text: '往蹇来连。' },
      { position: '九五', text: '大蹇朋来。' },
      { position: '上六', text: '往蹇来硕，吉，利见大人。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情受阻，反求诸己。先从自身找原因，再沟通。',
      wealth: '行路难，宜守不宜攻。资金周转困难时寻求帮助。',
      work: '困难重重，宜求助贵人。不要硬闯，寻找迂回之路。',
      health: '腿脚、关节需注意。避免长途跋涉，注意保暖。'
    }
  },
  {
    name: '雷水解', symbol: '䷧', palace: '震宫', element: '木',
    judgment: '解：利西南。无所往，其来复吉。有攸往，夙吉。',
    meaning: '雷雨作，解。君子以赦过宥罪。解为解脱之象，象征解除、缓解、释放。',
    lines: [
      { position: '初六', text: '无咎。' },
      { position: '九二', text: '田获三狐，得黄矢，贞吉。' },
      { position: '六三', text: '负且乘，致寇至，贞吝。' },
      { position: '九四', text: '解而拇，朋至斯孚。' },
      { position: '六五', text: '君子维有解，吉。有孚于小人。' },
      { position: '上六', text: '公用射隼于高墉之上，获之，无不利。' }
    ],
    auspicious: '吉',
    advice: {
      love: '误会消除，感情转好。敞开心扉，问题迎刃而解。',
      wealth: '困境解除，财路渐开。之前受阻之事有望松动。',
      work: '难题得解，宜乘势而上。宽恕他人，团队更团结。',
      health: '病气渐散，注意休息。适当运动，舒展筋骨。'
    }
  },
  {
    name: '山泽损', symbol: '䷨', palace: '艮宫', element: '土',
    judgment: '损：有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。',
    meaning: '山下有泽，损。君子以惩忿窒欲。损为减损之象，象征损失、节制、先损后益。',
    lines: [
      { position: '初九', text: '已事遄往，无咎，酌损之。' },
      { position: '九二', text: '利贞，征凶。弗损，益之。' },
      { position: '六三', text: '三人行则损一人，一人行则得其友。' },
      { position: '六四', text: '损其疾，使遄有喜，无咎。' },
      { position: '六五', text: '或益之十朋之龟，弗克违，元吉。' },
      { position: '上九', text: '弗损，益之，无咎，贞吉，利有攸往。得臣无家。' }
    ],
    auspicious: '吉',
    advice: {
      love: '有所牺牲，换来长久。感情需要双方付出，计较太多反伤感情。',
      wealth: '先损后益，投资需有耐心。短期可能小有损失，长期可获回报。',
      work: '适当让步，换取大局。退一步海阔天空。',
      health: '减食少欲，有益健康。戒除不良习惯，身体自安。'
    }
  },
  {
    name: '风雷益', symbol: '䷩', palace: '巽宫', element: '木',
    judgment: '益：利有攸往，利涉大川。',
    meaning: '风雷，益。君子以见善则迁，有过则改。益为增益之象，象征受益、成长、施惠。',
    lines: [
      { position: '初九', text: '利用为大作，元吉，无咎。' },
      { position: '六二', text: '或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。' },
      { position: '六三', text: '益之用凶事，无咎。有孚中行，告公用圭。' },
      { position: '六四', text: '中行告公从，利用为依迁国。' },
      { position: '九五', text: '有孚惠心，勿问，元吉。有孚惠我德。' },
      { position: '上九', text: '莫益之，或击之，立心勿恒，凶。' }
    ],
    auspicious: '大吉',
    advice: {
      love: '感情受益，彼此成长。互相扶持，关系更上一层楼。',
      wealth: '财运上升，宜把握机遇。合作与投资多有收益。',
      work: '获益良多，宜广结善缘。帮助他人也是帮助自己。',
      health: '身心受益，多运动。良好习惯带来健康回报。'
    }
  },
  {
    name: '泽天夬', symbol: '䷪', palace: '坤宫', element: '土',
    judgment: '夬：扬于王庭，孚号。有厉，告自邑，不利即戎，利有攸往。',
    meaning: '泽上于天，夬。君子以施禄及下，居德则忌。夬为决断之象，象征果断、裁决、去除。',
    lines: [
      { position: '初九', text: '壮于前趾，往不胜为咎。' },
      { position: '九二', text: '惕号，莫夜有戎，勿恤。' },
      { position: '九三', text: '壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。' },
      { position: '九四', text: '臀无肤，其行次且。牵羊悔亡，闻言不信。' },
      { position: '九五', text: '苋陆夬夬，中行无咎。' },
      { position: '上六', text: '无号，终有凶。' }
    ],
    auspicious: '平',
    advice: {
      love: '果断决策，莫要拖泥带水。不适合的关系宜早做决断。',
      wealth: '决断时机，及时止盈止损。犹豫不决反受其害。',
      work: '需要果断，但勿伤和气。处理问题要公正公开。',
      health: '注意头部、皮肤。及时就医，不要拖延。'
    }
  },
  {
    name: '天风姤', symbol: '䷫', palace: '乾宫', element: '金',
    judgment: '姤：女壮，勿用取女。',
    meaning: '天下有风，姤。后以施命诰四方。姤为邂逅之象，象征相遇、意外、阴长阳消。',
    lines: [
      { position: '初六', text: '系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。' },
      { position: '九二', text: '包有鱼，无咎，不利宾。' },
      { position: '九三', text: '臀无肤，其行次且，厉，无大咎。' },
      { position: '九四', text: '包无鱼，起凶。' },
      { position: '九五', text: '以杞包瓜，含章，有陨自天。' },
      { position: '上九', text: '姤其角，吝，无咎。' }
    ],
    auspicious: '平',
    advice: {
      love: '邂逅有缘，但需谨慎分辨。避免露水情缘，防遇人不淑。',
      wealth: '意外之财，不可贪恋。投机取巧风险大。',
      work: '机遇偶发，把握得当则吉。注意人际关系中的暗流。',
      health: '注意风寒，预防流感。避免受凉，保护关节。'
    }
  },
  {
    name: '泽地萃', symbol: '䷬', palace: '兑宫', element: '金',
    judgment: '萃：亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。',
    meaning: '泽上于地，萃。君子以除戎器，戒不虞。萃为聚集之象，象征聚会、团结、萃取。',
    lines: [
      { position: '初六', text: '有孚不终，乃乱乃萃。若号，一握为笑，勿恤，往无咎。' },
      { position: '六二', text: '引吉，无咎，孚乃利用禴。' },
      { position: '六三', text: '萃如嗟如，无攸利。往无咎，小吝。' },
      { position: '九四', text: '大吉，无咎。' },
      { position: '九五', text: '萃有位，无咎。匪孚，元永贞，悔亡。' },
      { position: '上六', text: '赍咨涕洟，无咎。' }
    ],
    auspicious: '吉',
    advice: {
      love: '聚会相亲，良缘在人群之中。多参加社交活动，扩大交际圈。',
      wealth: '众人聚财，合作有利。团队项目有望获利。',
      work: '团队凝聚，宜开会集思。团结协作，事半功倍。',
      health: '人多的地方注意防护。注意呼吸系统传染病。'
    }
  },
  {
    name: '地风升', symbol: '䷭', palace: '震宫', element: '木',
    judgment: '升：元亨。用见大人，勿恤，南征吉。',
    meaning: '地中生木，升。君子以顺德，积小以高大。升为上升之象，象征晋升、成长、进步。',
    lines: [
      { position: '初六', text: '允升，大吉。' },
      { position: '九二', text: '孚乃利用禴，无咎。' },
      { position: '九三', text: '升虚邑。' },
      { position: '六四', text: '王用亨于岐山，吉无咎。' },
      { position: '六五', text: '贞吉，升阶。' },
      { position: '上六', text: '冥升，利于不息之贞。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情升温，稳步发展。彼此关系更上一层楼。',
      wealth: '收入稳步上升。可谋求加薪或拓展收入来源。',
      work: '步步高升，宜积极进取。积累小胜，终成大势。',
      health: '身体渐强，循序渐进锻炼。不可急于求成。'
    }
  },
  {
    name: '泽水困', symbol: '䷮', palace: '兑宫', element: '金',
    judgment: '困：亨，贞大人吉，无咎。有言不信。',
    meaning: '泽无水，困。君子以致命遂志。困为困穷之象，象征困顿、艰难、守志。',
    lines: [
      { position: '初六', text: '臀困于株木，入于幽谷，三岁不觌。' },
      { position: '九二', text: '困于酒食，朱绂方来，利用享祀，征凶，无咎。' },
      { position: '六三', text: '困于石，据于蒺藜，入于其宫，不见其妻，凶。' },
      { position: '九四', text: '来徐徐，困于金车，吝，有终。' },
      { position: '九五', text: '劓刖，困于赤绂，乃徐有说，利用祭祀。' },
      { position: '上六', text: '困于葛藟，于臲卼，曰动悔有悔，征吉。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情困顿，需共渡难关。此时更要相互扶持，不可互相指责。',
      wealth: '资金周转困难，宜节流。避免借贷，先渡过难关。',
      work: '处境艰难，坚守正道。困境中更能看出人品与能力。',
      health: '注意水分补充，泌尿健康。避免脱水，保持心情舒畅。'
    }
  },
  {
    name: '水风井', symbol: '䷯', palace: '震宫', element: '木',
    judgment: '井：改邑不改井，无丧无得，往来井井。汔至亦未繘井，羸其瓶，凶。',
    meaning: '木上有水，井。君子以劳民劝相。井为水井之象，象征源泉、滋养、守常。',
    lines: [
      { position: '初六', text: '井泥不食，旧井无禽。' },
      { position: '九二', text: '井谷射鲋，瓮敝漏。' },
      { position: '九三', text: '井渫不食，为我心恻。可用汲，王明并受其福。' },
      { position: '六四', text: '井甃，无咎。' },
      { position: '九五', text: '井洌，寒泉食。' },
      { position: '上六', text: '井收勿幕，有孚元吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情如井水，需不断汲取维护。平淡中见真情。',
      wealth: '财源稳定，细水长流。守好本职工作，收入自然稳定。',
      work: '坚守岗位，默默耕耘。日久见功，不要急于求成。',
      health: '多喝水，注意饮水卫生。肾脏与泌尿系统需保养。'
    }
  },
  {
    name: '泽火革', symbol: '䷰', palace: '坎宫', element: '水',
    judgment: '革：已日乃孚，元亨利贞，悔亡。',
    meaning: '泽中有火，革。君子以治历明时。革为变革之象，象征改革、更新、除旧布新。',
    lines: [
      { position: '初九', text: '巩用黄牛之革。' },
      { position: '六二', text: '已日乃革之，征吉，无咎。' },
      { position: '九三', text: '征凶，贞厉。革言三就，有孚。' },
      { position: '九四', text: '悔亡，有孚改命，吉。' },
      { position: '九五', text: '大人虎变，未占有孚。' },
      { position: '上六', text: '君子豹变，小人革面，征凶，居贞吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情需变革，旧貌换新颜。打破僵局，关系才能重生。',
      wealth: '变革中求财，时机成熟。适合转型、跳槽、创业。',
      work: '改革有利，宜果断推进。但需充分准备，获得支持。',
      health: '改变不良习惯，有益健康。勇于开始新的养生计划。'
    }
  },
  {
    name: '火风鼎', symbol: '䷱', palace: '离宫', element: '火',
    judgment: '鼎：元吉亨。',
    meaning: '木上有火，鼎。君子以正位凝命。鼎为鼎新之象，象征稳定、烹饪、重器、变革后的安定。',
    lines: [
      { position: '初六', text: '鼎颠趾，利出否，得妾以其子，无咎。' },
      { position: '九二', text: '鼎有实，我仇有疾，不我能即，吉。' },
      { position: '九三', text: '鼎耳革，其行塞，雉膏不食。方雨亏悔，终吉。' },
      { position: '九四', text: '鼎折足，覆公餗，其形渥，凶。' },
      { position: '六五', text: '鼎黄耳金铉，利贞。' },
      { position: '上九', text: '鼎玉铉，大吉，无不利。' }
    ],
    auspicious: '大吉',
    advice: {
      love: '感情进入新阶段，宜订婚、成家。关系稳定，前景光明。',
      wealth: '鼎新革故，财源稳固。适合建立长期稳定的收入模式。',
      work: '事业定型，可担当重任。稳固基础，谋求长远发展。',
      health: '注意消化，饮食有节。调理肠胃，保持营养均衡。'
    }
  },
  {
    name: '震为雷', symbol: '䷲', palace: '震宫', element: '木',
    judgment: '震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
    meaning: '洊雷，震。君子以恐惧修省。震为震动之象，象征惊雷、变动、警醒。',
    lines: [
      { position: '初九', text: '震来虩虩，后笑言哑哑，吉。' },
      { position: '六二', text: '震来厉，亿丧贝，跻于九陵，勿逐，七日得。' },
      { position: '六三', text: '震苏苏，震行无眚。' },
      { position: '九四', text: '震遂泥。' },
      { position: '六五', text: '震往来厉，亿无丧有事。' },
      { position: '上六', text: '震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情有震动，冷静应对。突发状况考验感情基础。',
      wealth: '市场震荡，谨慎操作。避免恐慌性决策。',
      work: '突发变故，处变不惊。做好应急预案，稳住阵脚。',
      health: '注意神经系统，保持镇定。防惊悸失眠，注意休息。'
    }
  },
  {
    name: '艮为山', symbol: '䷳', palace: '艮宫', element: '土',
    judgment: '艮：艮其背，不获其身，行其庭，不见其人，无咎。',
    meaning: '兼山，艮。君子以思不出其位。艮为止息之象，象征停止、节制、守静。',
    lines: [
      { position: '初六', text: '艮其趾，无咎，利永贞。' },
      { position: '六二', text: '艮其腓，不拯其随，其心不快。' },
      { position: '九三', text: '艮其限，列其夤，厉熏心。' },
      { position: '六四', text: '艮其身，无咎。' },
      { position: '六五', text: '艮其辅，言有序，悔亡。' },
      { position: '上九', text: '敦艮，吉。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情宜止，莫要强求。有时退一步反而是前进。',
      wealth: '见好就收，适可而止。不可贪心，落袋为安。',
      work: '知止而后有定，不宜冒进。该停则停，避免越界。',
      health: '注意休息，避免久坐久站。保护腰椎颈椎，适度活动。'
    }
  },
  {
    name: '风山渐', symbol: '䷴', palace: '艮宫', element: '土',
    judgment: '渐：女归吉，利贞。',
    meaning: '山上有木，渐。君子以居贤德善俗。渐为渐进之象，象征逐步、有序、稳定。',
    lines: [
      { position: '初六', text: '鸿渐于干，小子厉，有言，无咎。' },
      { position: '六二', text: '鸿渐于磐，饮食衎衎，吉。' },
      { position: '九三', text: '鸿渐于陆，夫征不复，妇孕不育，凶。利御寇。' },
      { position: '六四', text: '鸿渐于木，或得其桷，无咎。' },
      { position: '九五', text: '鸿渐于陵，妇三岁不孕，终莫之胜，吉。' },
      { position: '上九', text: '鸿渐于陆，其羽可用为仪，吉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '循序渐进，感情稳定发展。不宜急于求成，水到渠成。',
      wealth: '渐入佳境，稳步增收。长期投资开始见效。',
      work: '循序渐进，终有大成。一步一个脚印，不要急躁。',
      health: '逐步调理，不可急于求成。慢性病需耐心调养。'
    }
  },
  {
    name: '雷泽归妹', symbol: '䷵', palace: '兑宫', element: '金',
    judgment: '归妹：征凶，无攸利。',
    meaning: '泽上有雷，归妹。君子以永终知敝。归妹为嫁娶之象，象征少女从长男，动而不当。',
    lines: [
      { position: '初九', text: '归妹以娣，跛能履，征吉。' },
      { position: '九二', text: '眇能视，利幽人之贞。' },
      { position: '六三', text: '归妹以须，反归以娣。' },
      { position: '九四', text: '归妹愆期，迟归有时。' },
      { position: '六五', text: '帝乙归妹，其君之袂不如其娣之袂良，月几望，吉。' },
      { position: '上六', text: '女承筐无实，士刲羊无血，无攸利。' }
    ],
    auspicious: '凶',
    advice: {
      love: '感情仓促，不宜急于求成。仓促决定恐留后患。',
      wealth: '急功近利，反受其害。投资需谨慎，避免盲目跟风。',
      work: '位置不当，宜调整心态。不要勉强承担不合适的角色。',
      health: '注意妇科/男科健康。保持规律生活，避免过度疲劳。'
    }
  },
  {
    name: '雷火丰', symbol: '䷶', palace: '坎宫', element: '水',
    judgment: '丰：亨，王假之，勿忧，宜日中。',
    meaning: '雷电皆至，丰。君子以折狱致刑。丰为丰盛之象，象征盛大、光明、巅峰。',
    lines: [
      { position: '初九', text: '遇其配主，虽旬无咎，往有尚。' },
      { position: '六二', text: '丰其蔀，日中见斗，往得疑疾，有孚发若，吉。' },
      { position: '九三', text: '丰其沛，日中见沬，折其右肱，无咎。' },
      { position: '九四', text: '丰其蔀，日中见斗，遇其夷主，吉。' },
      { position: '六五', text: '来章，有庆誉，吉。' },
      { position: '上六', text: '丰其屋，蔀其家，闚其户，阒其无人，三岁不觌，凶。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情丰盛，共享美好时光。但日中则昃，勿忘经营。',
      wealth: '财运丰盛，但日中则昃。巅峰时需防下滑，做好储备。',
      work: '事业鼎盛，宜把握巅峰。同时要培养接班人，防患于未然。',
      health: '精力旺盛，注意防晒。避免过度消耗，保持规律。'
    }
  },
  {
    name: '火山旅', symbol: '䷷', palace: '离宫', element: '火',
    judgment: '旅：小亨，旅贞吉。',
    meaning: '山上有火，旅。君子以明慎用刑，而不留狱。旅为行旅之象，象征旅途、变动、不安。',
    lines: [
      { position: '初六', text: '旅琐琐，斯其所取灾。' },
      { position: '六二', text: '旅即次，怀其资，得童仆贞。' },
      { position: '九三', text: '旅焚其次，丧其童仆，贞厉。' },
      { position: '九四', text: '旅于处，得其资斧，我心不快。' },
      { position: '六五', text: '射雉一矢亡，终以誉命。' },
      { position: '上九', text: '鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。' }
    ],
    auspicious: '平',
    advice: {
      love: '聚少离多，需多联络。异地恋更要用心维系。',
      wealth: '他乡求财，小有收获。外出发展有机会，但需节俭。',
      work: '出差、变动中求发展。适应新环境，谨慎行事。',
      health: '旅途劳顿，注意休息。防止水土不服，饮食卫生。'
    }
  },
  {
    name: '巽为风', symbol: '䷸', palace: '巽宫', element: '木',
    judgment: '巽：小亨，利有攸往，利见大人。',
    meaning: '随风，巽。君子以申命行事。巽为顺从之象，象征谦逊、进入、渗透。',
    lines: [
      { position: '初六', text: '进退，利武人之贞。' },
      { position: '九二', text: '巽在床下，用史巫纷若，吉无咎。' },
      { position: '九三', text: '频巽，吝。' },
      { position: '六四', text: '悔亡，田获三品。' },
      { position: '九五', text: '贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。' },
      { position: '上九', text: '巽在床下，丧其资斧，贞凶。' }
    ],
    auspicious: '小吉',
    advice: {
      love: '柔顺待人，感情和顺。但不可过度退让，失去自我。',
      wealth: '小利可图，随风而动。适合灵活经营，快进快出。',
      work: '服从安排，顺势而行。适合执行类工作，不宜强出头。',
      health: '注意风邪，保护关节。防风保暖，避免受风。'
    }
  },
  {
    name: '兑为泽', symbol: '䷹', palace: '兑宫', element: '金',
    judgment: '兑：亨，利贞。',
    meaning: '丽泽，兑。君子以朋友讲习。兑为喜悦之象，象征言语、喜悦、交流。',
    lines: [
      { position: '初九', text: '和兑，吉。' },
      { position: '九二', text: '孚兑，吉，悔亡。' },
      { position: '六三', text: '来兑，凶。' },
      { position: '九四', text: '商兑未宁，介疾有喜。' },
      { position: '九五', text: '孚于剥，有厉。' },
      { position: '上六', text: '引兑。' }
    ],
    auspicious: '吉',
    advice: {
      love: '喜悦相通，感情甜蜜。多沟通、多表达，关系更亲密。',
      wealth: '口才生财，沟通获利。适合销售、谈判、演讲类工作。',
      work: '人际关系佳，宜谈判合作。以和为贵，事半功倍。',
      health: '心情愉悦，身体自安。注意呼吸系统，保持乐观。'
    }
  },
  {
    name: '风水涣', symbol: '䷺', palace: '离宫', element: '火',
    judgment: '涣：亨。王假有庙，利涉大川，利贞。',
    meaning: '风行水上，涣。先王以享于帝立庙。涣为涣散之象，象征离散、化解、疏通。',
    lines: [
      { position: '初六', text: '用拯马壮，吉。' },
      { position: '九二', text: '涣奔其机，悔亡。' },
      { position: '六三', text: '涣其躬，无悔。' },
      { position: '六四', text: '涣其群，元吉。涣有丘，匪夷所思。' },
      { position: '九五', text: '涣汗其大号，涣王居，无咎。' },
      { position: '上九', text: '涣其血，去逖出，无咎。' }
    ],
    auspicious: '吉',
    advice: {
      love: '消除隔阂，感情涣然冰释。坦诚沟通，误会可解。',
      wealth: '分散投资，降低风险。资金宜灵活配置，不宜集中。',
      work: '团队涣散，需凝聚人心。明确目标，加强沟通。',
      health: '注意水肿、湿气。适当运动排汗，饮食清淡。'
    }
  },
  {
    name: '水泽节', symbol: '䷻', palace: '坎宫', element: '水',
    judgment: '节：亨。苦节不可贞。',
    meaning: '泽上有水，节。君子以制数度，议德行。节为节制之象，象征节约、节度、适可而止。',
    lines: [
      { position: '初九', text: '不出户庭，无咎。' },
      { position: '九二', text: '不出门庭，凶。' },
      { position: '六三', text: '不节若，则嗟若，无咎。' },
      { position: '六四', text: '安节，亨。' },
      { position: '九五', text: '甘节，吉。往有尚。' },
      { position: '上六', text: '苦节，贞凶，悔亡。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情需有节制，不可过度。保持适当距离，关系更长久。',
      wealth: '节俭生财，过度则苦。合理规划，量入为出。',
      work: '把握分寸，适可而止。过度节制反会错失机会。',
      health: '饮食有节，作息规律。不可过度节食或纵欲。'
    }
  },
  {
    name: '风泽中孚', symbol: '䷼', palace: '艮宫', element: '土',
    judgment: '中孚：豚鱼吉，利涉大川，利贞。',
    meaning: '泽上有风，中孚。君子以议狱缓死。中孚为诚信之象，象征真诚、信用、内心。',
    lines: [
      { position: '初九', text: '虞吉，有他不燕。' },
      { position: '九二', text: '鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。' },
      { position: '六三', text: '得敌，或鼓或罢，或泣或歌。' },
      { position: '六四', text: '月几望，马匹亡，无咎。' },
      { position: '九五', text: '有孚挛如，无咎。' },
      { position: '上九', text: '翰音登于天，贞凶。' }
    ],
    auspicious: '吉',
    advice: {
      love: '诚信为本，感情可托。彼此信任是长久关系的基石。',
      wealth: '信用生财，守约有利。诚信经营，财源稳固。',
      work: '以诚信待人，事业稳固。承诺必践，赢得口碑。',
      health: '心态平和，信赖自愈力。保持内心安宁，有益健康。'
    }
  },
  {
    name: '雷山小过', symbol: '䷽', palace: '兑宫', element: '金',
    judgment: '小过：亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。',
    meaning: '山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。小过为小有过越之象，象征小的偏差、谨慎。',
    lines: [
      { position: '初六', text: '飞鸟以凶。' },
      { position: '六二', text: '过其祖，遇其妣。不及其君，遇其臣，无咎。' },
      { position: '九三', text: '弗过防之，从或戕之，凶。' },
      { position: '九四', text: '无咎，弗过遇之。往厉必戒，勿用永贞。' },
      { position: '六五', text: '密云不雨，自我西郊，公弋取彼在穴。' },
      { position: '上六', text: '弗遇过之，飞鸟离之，凶，是谓灾眚。' }
    ],
    auspicious: '平',
    advice: {
      love: '小有过错，及时弥补。勿因小事积累成大矛盾。',
      wealth: '小利可求，大事勿为。稳健操作，不可贪婪。',
      work: '小步前进，大错不犯。细节决定成败。',
      health: '小恙无碍，注意休息。及时调理，防止小病加重。'
    }
  },
  {
    name: '水火既济', symbol: '䷾', palace: '坎宫', element: '水',
    judgment: '既济：亨，小利贞，初吉终乱。',
    meaning: '水在火上，既济。君子以思患而豫防之。既济为已成之象，象征完成、安定、守成。',
    lines: [
      { position: '初九', text: '曳其轮，濡其尾，无咎。' },
      { position: '六二', text: '妇丧其茀，勿逐，七日得。' },
      { position: '九三', text: '高宗伐鬼方，三年克之，小人勿用。' },
      { position: '六四', text: '繻有衣袽，终日戒。' },
      { position: '九五', text: '东邻杀牛，不如西邻之禴祭，实受其福。' },
      { position: '上六', text: '濡其首，厉。' }
    ],
    auspicious: '吉',
    advice: {
      love: '感情已成，宜防微杜渐。不要因为稳定而忽视经营。',
      wealth: '已有成就，守成为上。继续稳健理财，防微杜渐。',
      work: '事业有成，警惕骄躁。保持警惕，防患于未然。',
      health: '注意水火平衡，饮食调和。防止旧病复发。'
    }
  },
  {
    name: '火水未济', symbol: '䷿', palace: '离宫', element: '火',
    judgment: '未济：亨，小狐汔济，濡其尾，无攸利。',
    meaning: '火在水上，未济。君子以慎辨物居方。未济为未成之象，象征未竟、努力、希望。',
    lines: [
      { position: '初六', text: '濡其尾，吝。' },
      { position: '九二', text: '曳其轮，贞吉。' },
      { position: '六三', text: '未济，征凶，利涉大川。' },
      { position: '九四', text: '贞吉悔亡，震用伐鬼方，三年有赏于大国。' },
      { position: '六五', text: '贞吉，无悔。君子之光，有孚吉。' },
      { position: '上九', text: '濡其首，厉。' }
    ],
    auspicious: '平',
    advice: {
      love: '感情未稳，尚需努力。不要急于求成，耐心经营。',
      wealth: '机会未熟，耐心等待。继续努力，终有所成。',
      work: '事业未成，继续奋斗。坚持不懈，未来可期。',
      health: '注意心肾不交，调整作息。保持身心平衡。'
    }
  }
];

const KNOWLEDGE = {
  categories: [
    { id: 'basics', title: '爻', subtitle: '六爻入门', count: 7 },
    { id: 'six-relations', title: '亲', subtitle: '六亲详解', count: 6 },
    { id: 'six-gods', title: '神', subtitle: '六神详解', count: 6 },
    { id: 'methods', title: '法', subtitle: '起卦方法', count: 4 }
  ],
  articles: [
    { id: 1, category: 'basics', title: '什么是六爻？', summary: '六爻预测的起源与基本原理' },
    { id: 2, category: 'basics', title: '八卦与六十四卦', summary: '从八卦到六十四卦的演变' },
    { id: 3, category: 'basics', title: '阳爻与阴爻', summary: '理解 — 与 - - 的含义' },
    { id: 4, category: 'basics', title: '本卦、变卦、互卦', summary: '卦象的三种形态' },
    { id: 5, category: 'basics', title: '动爻与变爻', summary: '动爻是解卦的关键' },
    { id: 6, category: 'basics', title: '世爻与应爻', summary: '判断事情主体的依据' },
    { id: 7, category: 'basics', title: '纳甲装卦', summary: '将干支纳入卦中的方法' },
    { id: 8, category: 'six-relations', title: '父母爻', summary: '代表长辈、文书、房屋' },
    { id: 9, category: 'six-relations', title: '兄弟爻', summary: '代表同辈、竞争、破财' },
    { id: 10, category: 'six-relations', title: '子孙爻', summary: '代表晚辈、福神、解忧' },
    { id: 11, category: 'six-relations', title: '妻财爻', summary: '代表妻妾、钱财、物产' },
    { id: 12, category: 'six-relations', title: '官鬼爻', summary: '代表官职、灾祸、丈夫' },
    { id: 13, category: 'six-relations', title: '六亲生克', summary: '六亲之间的作用关系' },
    { id: 14, category: 'six-gods', title: '青龙', summary: '吉神，主喜庆、财喜' },
    { id: 15, category: 'six-gods', title: '朱雀', summary: '主口舌、文书、消息' },
    { id: 16, category: 'six-gods', title: '勾陈', summary: '主田土、牢狱、迟滞' },
    { id: 17, category: 'six-gods', title: '螣蛇', summary: '主虚惊、怪异、缠绕' },
    { id: 18, category: 'six-gods', title: '白虎', summary: '主刑伤、疾病、凶险' },
    { id: 19, category: 'six-gods', title: '玄武', summary: '主暗昧、盗贼、阴私' },
    { id: 20, category: 'methods', title: '铜钱摇卦法', summary: '最传统、最常用的起卦方法' },
    { id: 21, category: 'methods', title: '数字起卦法', summary: '用随机数字起卦的简便方法' },
    { id: 22, category: 'methods', title: '时间起卦法', summary: '以年月日时起卦' },
    { id: 23, category: 'methods', title: '动爻与变卦', summary: '如何由动爻得到变卦' }
  ],
  content: {
    1: `
      <h3 class="font-serif font-bold text-base text-gold">六爻预测概述</h3>
      <p>六爻预测，又称"纳甲筮法"，是传统术数中体系最完整、流传最广的预测方法之一，源于《易经》的卦爻思想，经汉代京房等人发展成熟。</p>
      <p>其核心是：取三枚铜钱连摇六次，自下而上（初、二、三、四、五、上）排出一个六画"别卦"，再为每一爻配上干支、五行、六亲、六神，结合"世爻""应爻"与"动变"，推断所问之事的吉凶趋势。</p>
      <h3 class="font-serif font-bold text-base text-gold mt-3">与梅花易数的区别</h3>
      <p>六爻讲究"纳甲装卦"，信息层次更细，尤重"用神"与"六亲生克"；梅花易数重体用与卦象类比，起卦更灵活。二者同源而用异。</p>
    `,
    2: `
      <h3 class="font-serif font-bold text-base text-gold">八卦</h3>
      <p>乾☰、兑☱、离☲、震☳、巽☴、坎☵、艮☶、坤☷，分别代表天、泽、火、雷、风、水、山、地。每卦由三爻组成，阳爻"—"、阴爻"- -"。</p>
      <h3 class="font-serif font-bold text-base text-gold mt-3">六十四卦</h3>
      <p>八卦两两相重（上卦+下卦）即得六十四卦。如乾上乾下为"乾为天"䷀，坤上震下为"地雷复"䷗。</p>
      <p>六十四卦按八宫归类（乾、坎、艮、震、巽、离、坤、兑各领八卦），用于确定卦宫、寻世应，是装卦的基础。</p>
    `,
    3: `
      <h3 class="font-serif font-bold text-base text-gold">阴阳之辨</h3>
      <p>阳爻"—"为连续之象，阴爻"- -"为中断之象。古人以蓍草或铜钱之奇偶、背字定阴阳。</p>
      <h3 class="font-serif font-bold text-base text-gold mt-3">四营之数</h3>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>老阳（9，○）：阳极，主变，将化为阴</li>
        <li>少阳（7，—）：阳之静，不变</li>
        <li>少阴（8，- -）：阴之静，不变</li>
        <li>老阴（6，×）：阴极，主变，将化为阳</li>
      </ul>
      <p class="mt-2">老阳、老阴为"动爻"，少阳、少阴为"静爻"。</p>
    `,
    4: `
      <h3 class="font-serif font-bold text-base text-gold">三种卦象</h3>
      <p><b>本卦</b>：摇卦所得的原始卦，代表事情的当下状态。</p>
      <p><b>变卦</b>（之卦）：动爻阴阳反转后形成的新卦，代表事态发展的结果与归宿。</p>
      <p><b>互卦</b>：取下卦二三四爻为下卦、三四五爻为上卦组成，揭示事情过程中的内在联系。</p>
      <p class="mt-2">例：本卦为乾䷀，若"初九"发动，则初爻阳变阴，变卦即成"天风姤"䷫。</p>
    `,
    5: `
      <h3 class="font-serif font-bold text-base text-gold">动爻是解卦的关键</h3>
      <p>老阳（9）、老阴（6）称为动爻，主变化；少阳、少阴为静爻，不变。</p>
      <p>动爻阴阳互换后得"变爻"，仅动爻之位改变，其余静爻不动，由此组成变卦。</p>
      <p class="mt-2">古诀云："动为事之端，变为事之终。"动爻是切入卦象、把握变化机枢的要点。若无动爻，则为"静卦"，主事平稳、暂无明显转折。</p>
    `,
    6: `
      <h3 class="font-serif font-bold text-base text-gold">世应之用</h3>
      <p><b>世爻</b>代表问卦者自身；<b>应爻</b>代表所占之事或对方、环境。</p>
      <p>世应二爻在卦中相隔固定位数（由卦宫决定：游魂、归魂各有定规），用以判断双方关系、成败远近。</p>
      <p class="mt-2">一般而言，世爻旺相、应爻休囚多吉；世衰应旺则多阻。占彼此之事，先看世应强弱对比。</p>
    `,
    7: `
      <h3 class="font-serif font-bold text-base text-gold">纳甲装卦</h3>
      <p>纳甲，即把天干地支纳入六爻各爻，使每爻配地支与五行，由西汉京房创立，故又称"京房纳甲"。</p>
      <p>乾纳甲壬、坤纳乙癸，其余六卦分纳庚辛丙丁戊己。装卦步骤为：定卦宫 → 寻世应 → 纳地支 → 安六亲 → 配六神。</p>
      <p class="mt-2">例：乾卦自初爻而上依次纳子水、寅木、辰土、午火、申金、戌土。装卦后，卦象才具备生克判断的"骨架"。</p>
    `,
    8: `
      <h3 class="font-serif font-bold text-base text-gold">父母爻</h3>
      <p>"生我者"为父母。按五行：以本宫属性为准，生我之五行即父母。</p>
      <p><b>类象</b>：长辈、师长、文书、契约、房屋、车船、学业、证件、辛苦劳碌。</p>
      <p class="mt-2">占问考试、合同、文书、长辈健康，多以父母爻为"用神"。父母旺相则文书顺遂、长辈安康。</p>
    `,
    9: `
      <h3 class="font-serif font-bold text-base text-gold">兄弟爻</h3>
      <p>"同我者"为兄弟，五行与卦宫相同。</p>
      <p><b>类象</b>：同辈、朋友、同事、竞争者、破财、劫财、帮忙。占财时，兄弟为"劫财之神"，旺则易破耗；占合作、朋情可看兄弟。</p>
      <p class="mt-2">若问求财而兄弟持世或发动，多主开销大、难聚财，须兼看妻财方能定论。</p>
    `,
    10: `
      <h3 class="font-serif font-bold text-base text-gold">子孙爻</h3>
      <p>"我生者"为子孙，为卦宫所生五行。</p>
      <p><b>类象</b>：晚辈、子女、学生、福神、解忧、医药、娱乐、技术、宠物。</p>
      <p class="mt-2">子孙为"剥官之神""医药之星"：占病、求子、休闲娱乐以子孙为用；占功名则子孙动而克官，反为不利。</p>
    `,
    11: `
      <h3 class="font-serif font-bold text-base text-gold">妻财爻</h3>
      <p>"我克者"为妻财，为我所克之五行。</p>
      <p><b>类象</b>：妻妾（女问夫则看官鬼）、钱财、物产、饮食、利润、女性。</p>
      <p class="mt-2">占财运、生意、男问妻室，以妻财为用神。财旺生官利求官，财空破则求财艰难。</p>
    `,
    12: `
      <h3 class="font-serif font-bold text-base text-gold">官鬼爻</h3>
      <p>"克我者"为官鬼，克卦宫之五行。</p>
      <p><b>类象</b>：官职、功名、丈夫（女问）、疾病、灾祸、官方、束缚、疑虑。</p>
      <p class="mt-2">占工作、功名、女问姻缘，以官鬼为用神；但官鬼亦主疾病灾厄，临身须防身体与是非，需结合六神细辨。</p>
    `,
    13: `
      <h3 class="font-serif font-bold text-base text-gold">六亲生克</h3>
      <p>六亲依五行关系划分：生我（父母）、我生（子孙）、同我（兄弟）、我克（妻财）、克我（官鬼）。</p>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>生克有"贪生忘克""合处逢生"等权变</li>
        <li>用神宜旺相、得生扶；忌神宜休囚、受克</li>
        <li>原神（生用神者）旺则吉，仇神（生忌神者）动则凶</li>
      </ul>
      <p class="mt-2">断卦以"用神"为核心，看其在月日之旺衰、动静、生克，综合定吉凶。</p>
    `,
    14: `
      <h3 class="font-serif font-bold text-base text-gold">青龙</h3>
      <p>居东方，属木，为吉神。主喜庆、婚姻、财喜、仁慈、酒色、舒展。</p>
      <p>青龙临用神多主好事将近、春风得意；临妻财主进财，临子孙主添丁纳福。</p>
    `,
    15: `
      <h3 class="font-serif font-bold text-base text-gold">朱雀</h3>
      <p>居南方，属火。主口舌、文书、消息、考试、争吵、信息传播。</p>
      <p>临父母主文书动，临兄弟主口舌争讼，临官鬼须防是非官非。</p>
    `,
    16: `
      <h3 class="font-serif font-bold text-base text-gold">勾陈</h3>
      <p>居中央，属土。主田土、田园、迟滞、牵连、牢狱、稳定。</p>
      <p>占田宅、产业、官司拖延，以勾陈为象；办事勾陈临之，多主过程缓慢、纠缠不清。</p>
    `,
    17: `
      <h3 class="font-serif font-bold text-base text-gold">螣蛇</h3>
      <p>附中央，属土（一说火）。主虚惊、怪异、缠绕、疑虑、多梦、变化莫测。</p>
      <p>螣蛇临鬼，主怪病虚惊、胡思乱想；临兄弟，主纠缠不清之事。</p>
    `,
    18: `
      <h3 class="font-serif font-bold text-base text-gold">白虎</h3>
      <p>居西方，属金，为凶神。主刑伤、血光、疾病、丧事、凶险、刚猛。</p>
      <p>白虎临官鬼，防疾病血光；临金爻、动而克用，尤须谨慎。然占武职、医疗，白虎亦可显威。</p>
    `,
    19: `
      <h3 class="font-serif font-bold text-base text-gold">玄武</h3>
      <p>居北方，属水。主暗昧、盗贼、阴私、暧昧、失脱、桃花。</p>
      <p>玄武临财，主暗中来财或财物遗失；临官鬼，防私情、盗失、不明之事。</p>
    `,
    20: `
      <h3 class="font-serif font-bold text-base text-gold">铜钱摇卦法（最常用）</h3>
      <p><b>准备</b>：三枚铜钱（或硬币），净手静心，诚心默念所问之事。</p>
      <p><b>摇法</b>：双手合钱摇动，掷于洁净桌面，看"背面（阳）"朝上之数：</p>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>三背（全阳）= 老阳，记"○"或"9"，阳极将变阴</li>
        <li>两背一字 = 少阳，记"7"，阳静不变</li>
        <li>两字一背 = 少阴，记"8"，阴静不变</li>
        <li>三字（全阴）= 老阴，记"×"或"6"，阴极将变阳</li>
      </ul>
      <p class="mt-2"><b>成卦</b>：自下而上（初、二、三、四、五、上）连摇六次，得一别卦。老阳老阴为动爻，动则变出变卦。</p>
      <p class="mt-2 text-gold">须知：一事一卦，心念专一；不可对同一事反复摇问。</p>
    `,
    21: `
      <h3 class="font-serif font-bold text-base text-gold">数字起卦法</h3>
      <p>取任意数字（随机、手机号、时间等），以数配卦：</p>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>上卦：上数除以 8 取余（余0为坤），对应八卦</li>
        <li>下卦：下数除以 8 取余，对应八卦</li>
        <li>动爻：总数除以 6 取余，定第几爻发动</li>
      </ul>
      <p class="mt-2">此法简便快捷，适合无铜钱时应急起卦，重在"心诚、念专、因事而占"。</p>
    `,
    22: `
      <h3 class="font-serif font-bold text-base text-gold">时间起卦法</h3>
      <p>以问卦之年、月、日、时（农历或干支时辰）起数：</p>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>上卦：（年+月+日）之和 ÷ 8 取余</li>
        <li>下卦：（年+月+日+时）之和 ÷ 8 取余</li>
        <li>动爻：总和 ÷ 6 取余</li>
      </ul>
      <p class="mt-2">此法为邵雍《梅花易数》所传，讲究"不动不占，不因事不占"，以心感物、触机而发。</p>
    `,
    23: `
      <h3 class="font-serif font-bold text-base text-gold">由动爻得变卦</h3>
      <p>变卦的求法：将本卦中的动爻阴阳反转，静爻不变，即得变卦。</p>
      <p>例：本卦"九二"发动，则二爻阳变阴，其余不动，组合成新卦即为变卦。</p>
      <ul class="list-disc pl-5 space-y-1 text-secondary">
        <li>本卦 = 事情的现状</li>
        <li>动爻 = 变化的机枢（哪一步在变）</li>
        <li>变卦 = 事情的结果与归宿</li>
      </ul>
      <p class="mt-2">综合判断：先看用神在本卦的旺衰动静，再看其落到变卦后之吉凶归宿，方得全貌。</p>
    `
  }
};

const CATEGORIES = {
  general:{ key: 'general',label: '综合', short: '综', color: 'text-gold',  bg: 'bg-gold/10',  border: 'border-gold/20' },
  love:   { key: 'love',   label: '感情', short: '感', color: 'text-red',   bg: 'bg-red/10',   border: 'border-red/20' },
  wealth: { key: 'wealth', label: '财运', short: '财', color: 'text-gold',  bg: 'bg-gold/10',  border: 'border-gold/20' },
  work:   { key: 'work',   label: '工作', short: '工', color: 'text-green', bg: 'bg-green/10', border: 'border-green/20' },
  health: { key: 'health', label: '健康', short: '健', color: 'text-blue',  bg: 'bg-blue/10',  border: 'border-blue/20' }
};

// 六十四卦二进制对照表（按《周易》文王卦序，index 与 HEXAGRAMS 一致）
// 每个字符串为自下而上的六爻：'1'=阳爻，'0'=阴爻（初爻在最左）
const HEX_BINARY = [
  '111111', // 0 乾为天
  '000000', // 1 坤为地
  '100010', // 2 水雷屯
  '010001', // 3 山水蒙
  '111010', // 4 水天需
  '010111', // 5 天水讼
  '010000', // 6 地水师
  '000010', // 7 水地比
  '111011', // 8 风天小畜
  '110111', // 9 天泽履
  '111000', // 10 地天泰
  '000111', // 11 天地否
  '101111', // 12 天火同人
  '111101', // 13 火天大有
  '001000', // 14 地山谦
  '000100', // 15 雷地豫
  '100110', // 16 泽雷随
  '011001', // 17 山风蛊
  '110000', // 18 地泽临
  '000011', // 19 风地观
  '100101', // 20 火雷噬嗑
  '101001', // 21 山火贲
  '000001', // 22 山地剥
  '100000', // 23 地雷复
  '100111', // 24 天雷无妄
  '111001', // 25 山天大畜
  '100001', // 26 山雷颐
  '011110', // 27 泽风大过
  '010010', // 28 坎为水
  '101101', // 29 离为火
  '001110', // 30 泽山咸
  '011100', // 31 雷风恒
  '001111', // 32 天山遁
  '111100', // 33 雷天大壮
  '000101', // 34 火地晋
  '101000', // 35 地火明夷
  '101011', // 36 风火家人
  '110101', // 37 火泽睽
  '001010', // 38 水山蹇
  '010100', // 39 雷水解
  '110001', // 40 山泽损
  '100011', // 41 风雷益
  '111110', // 42 泽天夬
  '011111', // 43 天风姤
  '000110', // 44 泽地萃
  '011000', // 45 地风升
  '010110', // 46 泽水困
  '011010', // 47 水风井
  '101110', // 48 泽火革
  '011101', // 49 火风鼎
  '100100', // 50 震为雷
  '001001', // 51 艮为山
  '001011', // 52 风山渐
  '110100', // 53 雷泽归妹
  '101100', // 54 雷火丰
  '001101', // 55 火山旅
  '011011', // 56 巽为风
  '110110', // 57 兑为泽
  '010011', // 58 风水涣
  '110010', // 59 水泽节
  '110011', // 60 风泽中孚
  '001100', // 61 雷山小过
  '101010', // 62 水火既济
  '010101'  // 63 火水未济
];

