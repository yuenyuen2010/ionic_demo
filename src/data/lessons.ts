export interface Flashcard {
  id: string;
  tagalog: string;
  english: string;
  zhTW: string;
  zhCN: string;
  example?: {
    tagalog: string;
    english: string;
    zhTW: string;
    zhCN: string;
  };
}

export interface Category {
  id: string;
  title: string;
  titleKey: string;
  group: string;
  groupKey: string;
  cards: Flashcard[];
}

export const lessons: Category[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    titleKey: 'topics.greetings',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      { 
        id: '1', 
        tagalog: 'Kumusta?', 
        english: 'How are you?', 
        zhTW: '你好嗎？', 
        zhCN: '你好吗？',
        example: {
          tagalog: 'Kumusta ka na?',
          english: 'How are you now?',
          zhTW: '你現在好嗎？',
          zhCN: '你现在好吗？'
        }
      },
      { 
        id: '2', 
        tagalog: 'Mabuti', 
        english: 'Fine / Good', 
        zhTW: '很好', 
        zhCN: '很好',
        example: {
          tagalog: 'Mabuti naman ako.',
          english: 'I am fine.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      { 
        id: '3', 
        tagalog: 'Salamat', 
        english: 'Thank you', 
        zhTW: '謝謝', 
        zhCN: '谢谢',
        example: {
          tagalog: 'Maraming salamat sa tulong.',
          english: 'Many thanks for the help.',
          zhTW: '非常感謝你的幫忙。',
          zhCN: '非常感谢你的帮忙。'
        }
      },
      { 
        id: '4', 
        tagalog: 'Walang anuman', 
        english: 'You\'re welcome', 
        zhTW: '不客氣', 
        zhCN: '不客气',
        example: {
          tagalog: 'Walang anuman, kaibigan.',
          english: 'You are welcome, friend.',
          zhTW: '不客氣，朋友。',
          zhCN: '不客气，朋友。'
        }
      },
      { 
        id: '5', 
        tagalog: 'Magandang umaga', 
        english: 'Good morning', 
        zhTW: '早安', 
        zhCN: '早安',
        example: {
          tagalog: 'Magandang umaga sa inyong lahat.',
          english: 'Good morning to all of you.',
          zhTW: '大家早安。',
          zhCN: '大家早安。'
        }
      },
      { 
        id: '6', 
        tagalog: 'Magandang hapon', 
        english: 'Good afternoon', 
        zhTW: '午安', 
        zhCN: '午安',
        example: {
          tagalog: 'Magandang hapon po.',
          english: 'Good afternoon (polite).',
          zhTW: '午安（禮貌）。',
          zhCN: '午安（礼貌）。'
        }
      },
      { 
        id: '7', 
        tagalog: 'Magandang gabi', 
        english: 'Good evening', 
        zhTW: '晚安', 
        zhCN: '晚安',
        example: {
          tagalog: 'Magandang gabi, lola.',
          english: 'Good evening, grandma.',
          zhTW: '晚安，奶奶。',
          zhCN: '晚安，奶奶。'
        }
      },
      {
        id: '8',
        tagalog: 'Magandang tanghali',
        english: 'Good noon',
        zhTW: '午安 (中午)',
        zhCN: '午安 (中午)',
        example: {
          tagalog: 'Magandang tanghali sa inyo.',
          english: 'Good noon to you.',
          zhTW: '祝你們中午愉快。',
          zhCN: '祝你们中午愉快。'
        }
      },
      {
        id: '9',
        tagalog: 'Magandang araw',
        english: 'Good day',
        zhTW: '美好的一天',
        zhCN: '美好的一天',
        example: {
          tagalog: 'Magandang araw po.',
          english: 'Good day (polite).',
          zhTW: '祝您有美好的一天。',
          zhCN: '祝您有美好的一天。'
        }
      },
      {
        id: '10',
        tagalog: 'Paalam',
        english: 'Goodbye',
        zhTW: '再見',
        zhCN: '再见',
        example: {
          tagalog: 'Paalam, hanggang sa muli.',
          english: 'Goodbye, until next time.',
          zhTW: '再見，下次見。',
          zhCN: '再见，下次见。'
        }
      },
      {
        id: '11',
        tagalog: 'Tao po',
        english: 'Is anybody home? / Knock knock',
        zhTW: '有人在嗎？',
        zhCN: '有人在吗？',
        example: {
          tagalog: 'Tao po! May tao ba dyan?',
          english: 'Hello! Is anybody there?',
          zhTW: '有人在嗎？那裡有人嗎？',
          zhCN: '有人在吗？那里有人吗？'
        }
      },
      {
        id: '12',
        tagalog: 'Tuloy po kayo',
        english: 'Please come in',
        zhTW: '請進',
        zhCN: '请进',
        example: {
          tagalog: 'Tuloy po kayo sa aming bahay.',
          english: 'Please come in to our house.',
          zhTW: '請進來我們家。',
          zhCN: '请进来我们家。'
        }
      },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    titleKey: 'topics.numbers',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      { 
        id: 'n1', 
        tagalog: 'Isa', 
        english: 'One', 
        zhTW: '一', 
        zhCN: '一',
        example: {
          tagalog: 'Isa lang ang kailangan ko.',
          english: 'I only need one.',
          zhTW: '我只需要一個。',
          zhCN: '我只需要一个。'
        }
      },
      { 
        id: 'n2', 
        tagalog: 'Dalawa', 
        english: 'Two', 
        zhTW: '二', 
        zhCN: '二',
        example: {
          tagalog: 'Dalawa ang anak nila.',
          english: 'They have two children.',
          zhTW: '他們有兩個孩子。',
          zhCN: '他们有两个孩子。'
        }
      },
      { 
        id: 'n3', 
        tagalog: 'Tatlo', 
        english: 'Three', 
        zhTW: '三', 
        zhCN: '三',
        example: {
          tagalog: 'Tatlo kami sa grupo.',
          english: 'There are three of us in the group.',
          zhTW: '我們組裡有三個人。',
          zhCN: '我们组里有三个人。'
        }
      },
      { 
        id: 'n4', 
        tagalog: 'Apat', 
        english: 'Four', 
        zhTW: '四', 
        zhCN: '四',
        example: {
          tagalog: 'May apat na gulong ang kotse.',
          english: 'The car has four wheels.',
          zhTW: '汽車有四個輪子。',
          zhCN: '汽车有四个轮子。'
        }
      },
      { 
        id: 'n5', 
        tagalog: 'Lima', 
        english: 'Five', 
        zhTW: '五', 
        zhCN: '五',
        example: {
          tagalog: 'Alas-singko na ng hapon.',
          english: 'It is already five in the afternoon.',
          zhTW: '已經是下午五點了。',
          zhCN: '已经是下午五点了。'
        }
      },
      { 
        id: 'n6', 
        tagalog: 'Anim', 
        english: 'Six', 
        zhTW: '六', 
        zhCN: '六',
        example: {
          tagalog: 'Anim na buwan na.',
          english: 'It has been six months.',
          zhTW: '已經六個月了。',
          zhCN: '已经六个月了。'
        }
      },
      { 
        id: 'n7', 
        tagalog: 'Pito', 
        english: 'Seven', 
        zhTW: '七', 
        zhCN: '七',
        example: {
          tagalog: 'Pito ang araw sa isang linggo.',
          english: 'There are seven days in a week.',
          zhTW: '一週有七天。',
          zhCN: '一周有七天。'
        }
      },
      { 
        id: 'n8', 
        tagalog: 'Walo', 
        english: 'Eight', 
        zhTW: '八', 
        zhCN: '八',
        example: {
          tagalog: 'Walo kaming magkakapatid.',
          english: 'We are eight siblings.',
          zhTW: '我們有八個兄弟姊妹。',
          zhCN: '我们有八个兄弟姐妹。'
        }
      },
      { 
        id: 'n9', 
        tagalog: 'Siyam', 
        english: 'Nine', 
        zhTW: '九', 
        zhCN: '九',
        example: {
          tagalog: 'Siyam na taong gulang siya.',
          english: 'He/She is nine years old.',
          zhTW: '他/她九歲。',
          zhCN: '他/她九岁。'
        }
      },
      { 
        id: 'n10', 
        tagalog: 'Sampu', 
        english: 'Ten', 
        zhTW: '十', 
        zhCN: '十',
        example: {
          tagalog: 'Sampu ang daliri ko.',
          english: 'I have ten fingers.',
          zhTW: '我有十個手指。',
          zhCN: '我有十个手指。'
        }
      },
      {
        id: 'n11',
        tagalog: 'Labing-isa',
        english: 'Eleven',
        zhTW: '十一',
        zhCN: '十一',
        example: {
          tagalog: 'Labing-isa ang manlalaro.',
          english: 'There are eleven players.',
          zhTW: '有十一名球員。',
          zhCN: '有十一名球员。'
        }
      },
      {
        id: 'n12',
        tagalog: 'Labindalawa',
        english: 'Twelve',
        zhTW: '十二',
        zhCN: '十二',
        example: {
          tagalog: 'Labindalawa ang itlog sa tray.',
          english: 'There are twelve eggs in the tray.',
          zhTW: '托盤裡有十二個雞蛋。',
          zhCN: '托盘里有十二个鸡蛋。'
        }
      },
      {
        id: 'n13',
        tagalog: 'Labintatlo',
        english: 'Thirteen',
        zhTW: '十三',
        zhCN: '十三',
        example: {
          tagalog: 'Labintatlo ang paborito niyang numero.',
          english: 'Thirteen is his/her favorite number.',
          zhTW: '十三是他/她最喜歡的數字。',
          zhCN: '十三是他/她最喜欢的数字。'
        }
      },
      {
        id: 'n14',
        tagalog: 'Labing-apat',
        english: 'Fourteen',
        zhTW: '十四',
        zhCN: '十四',
        example: {
          tagalog: 'Labing-apat na araw na ang nakalipas.',
          english: 'Fourteen days have passed.',
          zhTW: '已經過去十四天了。',
          zhCN: '已经过去十四天了。'
        }
      },
      {
        id: 'n15',
        tagalog: 'Labinlima',
        english: 'Fifteen',
        zhTW: '十五',
        zhCN: '十五',
        example: {
          tagalog: 'Labinlima kami sa klase.',
          english: 'We are fifteen in the class.',
          zhTW: '我們班有十五個人。',
          zhCN: '我们班有十五个人。'
        }
      },
      {
        id: 'n16',
        tagalog: 'Labing-anim',
        english: 'Sixteen',
        zhTW: '十六',
        zhCN: '十六',
        example: {
          tagalog: 'Labing-anim na taong gulang na siya.',
          english: 'He/She is sixteen years old.',
          zhTW: '他/她十六歲了。',
          zhCN: '他/她十六岁了。'
        }
      },
      {
        id: 'n17',
        tagalog: 'Labimpito',
        english: 'Seventeen',
        zhTW: '十七',
        zhCN: '十七',
        example: {
          tagalog: 'Labimpito ang bilang ng mga ibon.',
          english: 'The number of birds is seventeen.',
          zhTW: '鳥的數量是十七隻。',
          zhCN: '鸟的数量是十七只。'
        }
      },
      {
        id: 'n18',
        tagalog: 'Labingwalo',
        english: 'Eighteen',
        zhTW: '十八',
        zhCN: '十八',
        example: {
          tagalog: 'Labingwalo ang bisita.',
          english: 'There are eighteen guests.',
          zhTW: '有十八位客人。',
          zhCN: '有十八位客人。'
        }
      },
      {
        id: 'n19',
        tagalog: 'Labinsiyam',
        english: 'Nineteen',
        zhTW: '十九',
        zhCN: '十九',
        example: {
          tagalog: 'Labinsiyam na piso lang.',
          english: 'Only nineteen pesos.',
          zhTW: '只要十九披索。',
          zhCN: '只要十九披索。'
        }
      },
      {
        id: 'n20',
        tagalog: 'Dalawampu',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          tagalog: 'Dalawampu ang estudyante.',
          english: 'There are twenty students.',
          zhTW: '有二十名學生。',
          zhCN: '有二十名学生。'
        }
      },
      {
        id: 'n30',
        tagalog: 'Tatlumpu',
        english: 'Thirty',
        zhTW: '三十',
        zhCN: '三十',
        example: {
          tagalog: 'Tatlumpu ang araw sa Setyembre.',
          english: 'There are thirty days in September.',
          zhTW: '九月有三十天。',
          zhCN: '九月有三十天。'
        }
      },
      {
        id: 'n40',
        tagalog: 'Apatnapu',
        english: 'Forty',
        zhTW: '四十',
        zhCN: '四十',
        example: {
          tagalog: 'Apatnapu na siya.',
          english: 'He/She is forty already.',
          zhTW: '他/她已經四十歲了。',
          zhCN: '他/她已经四十岁了。'
        }
      },
      {
        id: 'n50',
        tagalog: 'Limampu',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          tagalog: 'Limampu ang kalahati ng sandaan.',
          english: 'Fifty is half of one hundred.',
          zhTW: '五十是一百的一半。',
          zhCN: '五十是一百的一半。'
        }
      },
      {
        id: 'n100',
        tagalog: 'Sandaan',
        english: 'One Hundred',
        zhTW: '一百',
        zhCN: '一百',
        example: {
          tagalog: 'Sandaang porsyento.',
          english: 'One hundred percent.',
          zhTW: '百分之百。',
          zhCN: '百分之百。'
        }
      },
      {
        id: 'n1000',
        tagalog: 'Isang Libo',
        english: 'One Thousand',
        zhTW: '一千',
        zhCN: '一千',
        example: {
          tagalog: 'Isang libo ang bayad.',
          english: 'The payment is one thousand.',
          zhTW: '費用是一千。',
          zhCN: '费用是一千。'
        }
      },
    ]
  },
  {
    id: 'common-phrases',
    title: 'Common Phrases',
    titleKey: 'topics.common-phrases',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      { 
        id: 'c1', 
        tagalog: 'Opo / Oo', 
        english: 'Yes', 
        zhTW: '是', 
        zhCN: '是',
        example: {
          tagalog: 'Opo, naiintindihan ko.',
          english: 'Yes, I understand (polite).',
          zhTW: '是的，我明白了（禮貌）。',
          zhCN: '是的，我明白了（礼貌）。'
        }
      },
      { 
        id: 'c2', 
        tagalog: 'Hindi', 
        english: 'No', 
        zhTW: '不', 
        zhCN: '不',
        example: {
          tagalog: 'Hindi ko alam.',
          english: 'I do not know.',
          zhTW: '我不知道。',
          zhCN: '我不知道。'
        }
      },
      { 
        id: 'c3', 
        tagalog: 'Ano ito?', 
        english: 'What is this?', 
        zhTW: '這是什麼？', 
        zhCN: '这是什么？',
        example: {
          tagalog: 'Ano ito? Masarap ba?',
          english: 'What is this? Is it delicious?',
          zhTW: '這是什麼？好吃嗎？',
          zhCN: '这是什么？好吃吗？'
        }
      },
      { 
        id: 'c4', 
        tagalog: 'Magkano ito?', 
        english: 'How much is this?', 
        zhTW: '這個多少錢？', 
        zhCN: '这个多少钱？',
        example: {
          tagalog: 'Magkano ito? Mura lang ba?',
          english: 'How much is this? Is it cheap?',
          zhTW: '這個多少錢？便宜嗎？',
          zhCN: '这个多少钱？便宜吗？'
        }
      },
      { 
        id: 'c5', 
        tagalog: 'Masarap', 
        english: 'Delicious', 
        zhTW: '好吃', 
        zhCN: '好吃',
        example: {
          tagalog: 'Masarap ang luto ni Nanay.',
          english: 'Mom\'s cooking is delicious.',
          zhTW: '媽媽做的菜很好吃。',
          zhCN: '妈妈做的菜很好吃。'
        }
      },
    ]
  },
  {
    id: 'family',
    title: 'Family',
    titleKey: 'topics.family',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      { 
        id: 'f1', 
        tagalog: 'Tatay', 
        english: 'Father', 
        zhTW: '父親', 
        zhCN: '父亲',
        example: {
          tagalog: 'Nasa trabaho ang tatay.',
          english: 'Father is at work.',
          zhTW: '父親在工作。',
          zhCN: '父亲在工作。'
        }
      },
      { 
        id: 'f2', 
        tagalog: 'Nanay', 
        english: 'Mother', 
        zhTW: '母親', 
        zhCN: '母亲',
        example: {
          tagalog: 'Nagluluto si Nanay.',
          english: 'Mother is cooking.',
          zhTW: '母親正在做飯。',
          zhCN: '母亲正在做饭。'
        }
      },
      { 
        id: 'f3', 
        tagalog: 'Kapatid', 
        english: 'Sibling', 
        zhTW: '兄弟姊妹', 
        zhCN: '兄弟姐妹',
        example: {
          tagalog: 'Ilan ang kapatid mo?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      { 
        id: 'f4', 
        tagalog: 'Kuya', 
        english: 'Older Brother', 
        zhTW: '哥哥', 
        zhCN: '哥哥',
        example: {
          tagalog: 'Si Kuya ang nag-aalaga sa akin.',
          english: 'Older brother takes care of me.',
          zhTW: '哥哥照顧我。',
          zhCN: '哥哥照顾我。'
        }
      },
      { 
        id: 'f5', 
        tagalog: 'Ate', 
        english: 'Older Sister', 
        zhTW: '姊姊', 
        zhCN: '姐姐',
        example: {
          tagalog: 'Mabait ang ate ko.',
          english: 'My older sister is kind.',
          zhTW: '我的姊姊很善良。',
          zhCN: '我的姐姐很善良。'
        }
      },
      {
        id: 'f6',
        tagalog: 'Lolo',
        english: 'Grandfather',
        zhTW: '祖父 / 外祖父',
        zhCN: '祖父 / 外祖父',
        example: {
          tagalog: 'Mahal ko ang aking lolo.',
          english: 'I love my grandfather.',
          zhTW: '我愛我的祖父。',
          zhCN: '我爱我的祖父。'
        }
      },
      {
        id: 'f7',
        tagalog: 'Lola',
        english: 'Grandmother',
        zhTW: '祖母 / 外祖母',
        zhCN: '祖母 / 外祖母',
        example: {
          tagalog: 'Nagluluto si Lola ng masarap na pagkain.',
          english: 'Grandma is cooking delicious food.',
          zhTW: '奶奶正在做美味的食物。',
          zhCN: '奶奶正在做美味的食物。'
        }
      },
      {
        id: 'f8',
        tagalog: 'Tito',
        english: 'Uncle',
        zhTW: '叔叔 / 伯伯 / 舅舅',
        zhCN: '叔叔 / 伯伯 / 舅舅',
        example: {
          tagalog: 'Nasa abroad ang tito ko.',
          english: 'My uncle is abroad.',
          zhTW: '我的叔叔在國外。',
          zhCN: '我的叔叔在国外。'
        }
      },
      {
        id: 'f9',
        tagalog: 'Tita',
        english: 'Aunt',
        zhTW: '阿姨 / 姑姑 / 嬸嬸',
        zhCN: '阿姨 / 姑姑 / 婶婶',
        example: {
          tagalog: 'Binigyan ako ng regalo ni Tita.',
          english: 'Auntie gave me a gift.',
          zhTW: '阿姨給了我一份禮物。',
          zhCN: '阿姨给了我一份礼物。'
        }
      },
      {
        id: 'f10',
        tagalog: 'Pinsan',
        english: 'Cousin',
        zhTW: '堂表兄弟姊妹',
        zhCN: '堂表兄弟姐妹',
        example: {
          tagalog: 'Kalaro ko ang aking pinsan.',
          english: 'I am playing with my cousin.',
          zhTW: '我正在和我的堂表兄弟姊妹玩。',
          zhCN: '我正在和我的堂表兄弟姐妹玩。'
        }
      },
      {
        id: 'f11',
        tagalog: 'Anak',
        english: 'Child / Son / Daughter',
        zhTW: '孩子 / 兒子 / 女兒',
        zhCN: '孩子 / 儿子 / 女儿',
        example: {
          tagalog: 'Mabait ang anak nila.',
          english: 'Their child is kind.',
          zhTW: '他們的孩子很乖。',
          zhCN: '他们的孩子很乖。'
        }
      },
      {
        id: 'f12',
        tagalog: 'Asawa',
        english: 'Spouse (Husband/Wife)',
        zhTW: '配偶 (丈夫/妻子)',
        zhCN: '配偶 (丈夫/妻子)',
        example: {
          tagalog: 'Mahal niya ang kanyang asawa.',
          english: 'He/She loves his/her spouse.',
          zhTW: '他/她愛他/她的配偶。',
          zhCN: '他/她爱他/她的配偶。'
        }
      },
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleKey: 'topics.colors',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      { 
        id: 'col1', 
        tagalog: 'Pula', 
        english: 'Red', 
        zhTW: '紅色', 
        zhCN: '红色',
        example: {
          tagalog: 'Pula ang paborito kong kulay.',
          english: 'Red is my favorite color.',
          zhTW: '紅色是我最喜歡的顏色。',
          zhCN: '红色是我最喜欢的颜色。'
        }
      },
      { 
        id: 'col2', 
        tagalog: 'Asul', 
        english: 'Blue', 
        zhTW: '藍色', 
        zhCN: '蓝色',
        example: {
          tagalog: 'Ang langit ay asul.',
          english: 'The sky is blue.',
          zhTW: '天空是藍色的。',
          zhCN: '天空是蓝色的。'
        }
      },
      { 
        id: 'col3', 
        tagalog: 'Dilaw', 
        english: 'Yellow', 
        zhTW: '黃色', 
        zhCN: '黄色',
        example: {
          tagalog: 'Dilaw ang araw.',
          english: 'The sun is yellow.',
          zhTW: '太陽是黃色的。',
          zhCN: '太阳是黄色的。'
        }
      },
      { 
        id: 'col4', 
        tagalog: 'Puti', 
        english: 'White', 
        zhTW: '白色', 
        zhCN: '白色',
        example: {
          tagalog: 'Puti ang damit niya.',
          english: 'His/Her clothes are white.',
          zhTW: '他/她的衣服是白色的。',
          zhCN: '他/她的衣服是白色的。'
        }
      },
      { 
        id: 'col5', 
        tagalog: 'Itim', 
        english: 'Black', 
        zhTW: '黑色', 
        zhCN: '黑色',
        example: {
          tagalog: 'Itim ang pusa.',
          english: 'The cat is black.',
          zhTW: '那隻貓是黑色的。',
          zhCN: '那只猫是黑色的。'
        }
      },
    ]
  },
  {
    id: 'food',
    title: 'Food',
    titleKey: 'topics.food',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      { 
        id: 'fd1', 
        tagalog: 'Kanin', 
        english: 'Rice', 
        zhTW: '米飯', 
        zhCN: '米饭',
        example: {
          tagalog: 'Gusto ko ng kanin.',
          english: 'I want rice.',
          zhTW: '我想要米飯。',
          zhCN: '我想要米饭。'
        }
      },
      { 
        id: 'fd2', 
        tagalog: 'Tubig', 
        english: 'Water', 
        zhTW: '水', 
        zhCN: '水',
        example: {
          tagalog: 'Uminom ka ng tubig.',
          english: 'Drink water.',
          zhTW: '喝水。',
          zhCN: '喝水。'
        }
      },
      { 
        id: 'fd3', 
        tagalog: 'Tinapay', 
        english: 'Bread', 
        zhTW: '麵包', 
        zhCN: '面包',
        example: {
          tagalog: 'Bumili ako ng tinapay.',
          english: 'I bought bread.',
          zhTW: '我買了麵包。',
          zhCN: '我买了面包。'
        }
      },
      { 
        id: 'fd4', 
        tagalog: 'Manok', 
        english: 'Chicken', 
        zhTW: '雞肉', 
        zhCN: '鸡肉',
        example: {
          tagalog: 'Pritong manok ang ulam.',
          english: 'Fried chicken is the dish.',
          zhTW: '菜餚是炸雞。',
          zhCN: '菜肴是炸鸡。'
        }
      },
      { 
        id: 'fd5', 
        tagalog: 'Isda', 
        english: 'Fish', 
        zhTW: '魚', 
        zhCN: '鱼',
        example: {
          tagalog: 'Sariwa ang isda.',
          english: 'The fish is fresh.',
          zhTW: '這魚很新鮮。',
          zhCN: '这鱼很新鲜。'
        }
      },
    ]
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    titleKey: 'topics.pronouns',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'pro1',
        tagalog: 'Ako',
        english: 'I',
        zhTW: '我',
        zhCN: '我',
        example: {
          tagalog: 'Ako ay Pilipino.',
          english: 'I am Filipino.',
          zhTW: '我是菲律賓人。',
          zhCN: '我是菲律宾人。'
        }
      },
      {
        id: 'pro2',
        tagalog: 'Ikaw / Ka',
        english: 'You',
        zhTW: '你',
        zhCN: '你',
        example: {
          tagalog: 'Ikaw ba yan?',
          english: 'Is that you?',
          zhTW: '是你嗎？',
          zhCN: '是你吗？'
        }
      },
      {
        id: 'pro3',
        tagalog: 'Siya',
        english: 'He / She',
        zhTW: '他 / 她',
        zhCN: '他 / 她',
        example: {
          tagalog: 'Siya ang kaibigan ko.',
          english: 'He/She is my friend.',
          zhTW: '他/她是我的朋友。',
          zhCN: '他/她是我的朋友。'
        }
      },
      {
        id: 'pro4',
        tagalog: 'Ko',
        english: 'My / by Me',
        zhTW: '我的',
        zhCN: '我的',
        example: {
          tagalog: 'Gusto ko ito.',
          english: 'I like this (This is liked by me).',
          zhTW: '我喜歡這個。',
          zhCN: '我喜欢这个。'
        }
      },
      {
        id: 'pro5',
        tagalog: 'Mo',
        english: 'Your / by You',
        zhTW: '你的',
        zhCN: '你的',
        example: {
          tagalog: 'Ano ang pangalan mo?',
          english: 'What is your name?',
          zhTW: '你叫什麼名字？',
          zhCN: '你叫什么名字？'
        }
      },
      {
        id: 'pro6',
        tagalog: 'Niya',
        english: 'His / Her / by Him',
        zhTW: '他的 / 她的',
        zhCN: '他的 / 她的',
        example: {
          tagalog: 'Kain niya ito.',
          english: 'This is what he/she ate.',
          zhTW: '这是他/她吃的。',
          zhCN: '这是他/她吃的。'
        }
      },
      {
        id: 'pro7',
        tagalog: 'Sa akin',
        english: 'To me',
        zhTW: '對我來說 / 給我',
        zhCN: '对我来说 / 给我',
        example: {
          tagalog: 'Ibigay mo sa akin.',
          english: 'Give it to me.',
          zhTW: '把它給我。',
          zhCN: '把它给我。'
        }
      },
      {
        id: 'pro8',
        tagalog: 'Sa iyo',
        english: 'To you',
        zhTW: '對你來說 / 給你',
        zhCN: '对你来说 / 给你',
        example: {
          tagalog: 'Para sa iyo ito.',
          english: 'This is for you.',
          zhTW: '這是給你的。',
          zhCN: '这是给你的。'
        }
      }
    ]
  },
  {
    id: 'pseudo-verbs',
    title: 'Pseudo-Verbs',
    titleKey: 'topics.pseudo-verbs',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'pv1',
        tagalog: 'Gusto',
        english: 'Want / Like',
        zhTW: '想要 / 喜歡',
        zhCN: '想要 / 喜欢',
        example: {
          tagalog: 'Gusto ko ng kape.',
          english: 'I want coffee.',
          zhTW: '我想要咖啡。',
          zhCN: '我想要咖啡。'
        }
      },
      {
        id: 'pv2',
        tagalog: 'Ayaw',
        english: 'Don\'t want',
        zhTW: '不想要 / 不喜歡',
        zhCN: '不想要 / 不喜欢',
        example: {
          tagalog: 'Ayaw ko nito.',
          english: 'I don\'t want this.',
          zhTW: '我不想要這個。',
          zhCN: '我不想要这个。'
        }
      },
      {
        id: 'pv3',
        tagalog: 'Kailangan',
        english: 'Need',
        zhTW: '需要',
        zhCN: '需要',
        example: {
          tagalog: 'Kailangan ko ng tulong.',
          english: 'I need help.',
          zhTW: '我需要幫助。',
          zhCN: '我需要帮助。'
        }
      },
      {
        id: 'pv4',
        tagalog: 'Pwede',
        english: 'Can / Allowed',
        zhTW: '可以',
        zhCN: '可以',
        example: {
          tagalog: 'Pwede ba?',
          english: 'Is it allowed?',
          zhTW: '可以嗎？',
          zhCN: '可以吗？'
        }
      }
    ]
  },
  {
    id: 'question-words',
    title: 'Common Question Words',
    titleKey: 'topics.question-words',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'qw1',
        tagalog: 'Ano',
        english: 'What',
        zhTW: '什麼',
        zhCN: '什么',
        example: {
          tagalog: 'Ano ang gusto mo?',
          english: 'What do you want?',
          zhTW: '你想要什麼？',
          zhCN: '你想要什么？'
        }
      },
      {
        id: 'qw2',
        tagalog: 'Sino',
        english: 'Who',
        zhTW: '誰',
        zhCN: '谁',
        example: {
          tagalog: 'Sino siya?',
          english: 'Who is he/she?',
          zhTW: '他/她是誰？',
          zhCN: '他/她是谁？'
        }
      },
      {
        id: 'qw3',
        tagalog: 'Saan',
        english: 'Where',
        zhTW: '哪裡',
        zhCN: '哪里',
        example: {
          tagalog: 'Saan ka pupunta?',
          english: 'Where are you going?',
          zhTW: '你要去哪裡？',
          zhCN: '你要去哪里？'
        }
      },
      {
        id: 'qw4',
        tagalog: 'Kailan',
        english: 'When',
        zhTW: '什麼時候',
        zhCN: '什么时候',
        example: {
          tagalog: 'Kailan ang kaarawan mo?',
          english: 'When is your birthday?',
          zhTW: '你的生日是什麼時候？',
          zhCN: '你的生日是什么时候？'
        }
      },
      {
        id: 'qw5',
        tagalog: 'Paano',
        english: 'How',
        zhTW: '怎麼',
        zhCN: '怎么',
        example: {
          tagalog: 'Paano pumunta doon?',
          english: 'How to go there?',
          zhTW: '怎麼去那裡？',
          zhCN: '怎么去那里？'
        }
      },
      {
        id: 'qw6',
        tagalog: 'Bakit',
        english: 'Why',
        zhTW: '為什麼',
        zhCN: '为什么',
        example: {
          tagalog: 'Bakit ka malungkot?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'qw7',
        tagalog: 'Nasaan',
        english: 'Where is (object/person)?',
        zhTW: '...在哪裡？',
        zhCN: '...在哪里？',
        example: {
          tagalog: 'Nasaan ang susi?',
          english: 'Where is the key?',
          zhTW: '鑰匙在哪裡？',
          zhCN: '钥匙在哪里？'
        }
      }
    ]
  },
  {
    id: 'connectors',
    title: 'Connector Particles',
    titleKey: 'topics.connectors',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'con1',
        tagalog: 'Pero',
        english: 'But',
        zhTW: '但是',
        zhCN: '但是',
        example: {
          tagalog: 'Gusto ko, pero wala akong pera.',
          english: 'I want to, but I have no money.',
          zhTW: '我想，但是我沒錢。',
          zhCN: '我想，但是我没钱。'
        }
      },
      {
        id: 'con2',
        tagalog: 'Kasi',
        english: 'Because',
        zhTW: '因為',
        zhCN: '因为',
        example: {
          tagalog: 'Kumain ako kasi gutom ako.',
          english: 'I ate because I was hungry.',
          zhTW: '我吃了，因為我餓了。',
          zhCN: '我吃了，因为我饿了。'
        }
      },
      {
        id: 'con3',
        tagalog: 'Dahil',
        english: 'Because of',
        zhTW: '由於',
        zhCN: '由于',
        example: {
          tagalog: 'Masaya ako dahil sa iyo.',
          english: 'I am happy because of you.',
          zhTW: '因為你，我很快樂。',
          zhCN: '因为你，我很快乐。'
        }
      },
      {
        id: 'con4',
        tagalog: 'Kung',
        english: 'If',
        zhTW: '如果',
        zhCN: '如果',
        example: {
          tagalog: 'Kung aalis ka, sasama ako.',
          english: 'If you leave, I will come with you.',
          zhTW: '如果你要走，我會跟你一起。',
          zhCN: '如果你要走，我会跟你一起。'
        }
      },
      {
        id: 'con5',
        tagalog: 'Kaya',
        english: 'That\'s why / So',
        zhTW: '所以',
        zhCN: '所以',
        example: {
          tagalog: 'Umuulan, kaya hindi ako lumabas.',
          english: 'It was raining, so I didn\'t go out.',
          zhTW: '下雨了，所以我沒出門。',
          zhCN: '下雨了，所以我没出门。'
        }
      },
      {
        id: 'con6',
        tagalog: 'Pala',
        english: 'Oh, actually / realization',
        zhTW: '原來',
        zhCN: '原来',
        example: {
          tagalog: 'Ikaw pala!',
          english: 'Oh, it\'s you!',
          zhTW: '原來是你！',
          zhCN: '原来是你！'
        }
      }
    ]
  },
  {
    id: 'demonstrative-pronouns',
    title: 'Demonstrative Pronouns',
    titleKey: 'topics.demonstrative-pronouns',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'dem1',
        tagalog: 'Ito',
        english: 'This (near me)',
        zhTW: '這個 (近)',
        zhCN: '这个 (近)',
        example: {
          tagalog: 'Ito ang bahay ko.',
          english: 'This is my house.',
          zhTW: '這是我的房子。',
          zhCN: '这是我的房子。'
        }
      },
      {
        id: 'dem2',
        tagalog: 'Iyan',
        english: 'That (near you)',
        zhTW: '那個 (中)',
        zhCN: '那个 (中)',
        example: {
          tagalog: 'Iyan ba ang libro mo?',
          english: 'Is that your book?',
          zhTW: '那是你的書嗎？',
          zhCN: '那是你的书吗？'
        }
      },
      {
        id: 'dem3',
        tagalog: 'Iyon',
        english: 'That (far from both)',
        zhTW: '那個 (遠)',
        zhCN: '那个 (远)',
        example: {
          tagalog: 'Iyon ang bundok.',
          english: 'That is the mountain.',
          zhTW: '那是山。',
          zhCN: '那是山。'
        }
      },
      {
        id: 'dem4',
        tagalog: 'Dito',
        english: 'Here (near me)',
        zhTW: '這裡 (近)',
        zhCN: '这里 (近)',
        example: {
          tagalog: 'Dito ako nakatira.',
          english: 'I live here.',
          zhTW: '我住在這裡。',
          zhCN: '我住在这里。'
        }
      },
      {
        id: 'dem5',
        tagalog: 'Diyan',
        english: 'There (near you)',
        zhTW: '那裡 (中)',
        zhCN: '那里 (中)',
        example: {
          tagalog: 'Ilagay mo diyan.',
          english: 'Put it there.',
          zhTW: '把它放在那裡。',
          zhCN: '把它放在那里。'
        }
      },
      {
        id: 'dem6',
        tagalog: 'Doon',
        english: 'Over there (far from both)',
        zhTW: '那裡 (遠)',
        zhCN: '那里 (远)',
        example: {
          tagalog: 'Pumunta tayo doon.',
          english: 'Let\'s go there.',
          zhTW: '我們去那裡吧。',
          zhCN: '我们去那里吧。'
        }
      }
    ]
  },
  {
    id: 'existence-possession',
    title: 'Existence & Possession',
    titleKey: 'topics.existence-possession',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'ep1',
        tagalog: 'May / Meron',
        english: 'There is / I have',
        zhTW: '有',
        zhCN: '有',
        example: {
          tagalog: 'May tubig ba?',
          english: 'Is there water?',
          zhTW: '有水嗎？',
          zhCN: '有水吗？'
        }
      },
      {
        id: 'ep2',
        tagalog: 'Wala',
        english: 'None / I don\'t have',
        zhTW: '沒有',
        zhCN: '没有',
        example: {
          tagalog: 'Walang tubig.',
          english: 'No water.',
          zhTW: '沒有水。',
          zhCN: '没有水。'
        }
      },
      {
        id: 'ep3',
        tagalog: 'Meron ako',
        english: 'I have (it)',
        zhTW: '我有',
        zhCN: '我有',
        example: {
          tagalog: 'Meron akong pera.',
          english: 'I have money.',
          zhTW: '我有錢。',
          zhCN: '我有钱。'
        }
      },
      {
        id: 'ep4',
        tagalog: 'Wala ako',
        english: 'I don\'t have (it)',
        zhTW: '我沒有',
        zhCN: '我没有',
        example: {
          tagalog: 'Wala akong oras.',
          english: 'I don\'t have time.',
          zhTW: '我沒有時間。',
          zhCN: '我没有时间。'
        }
      }
    ]
  },
  {
    id: 'negation',
    title: 'Negation',
    titleKey: 'topics.negation',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'neg1',
        tagalog: 'Hindi',
        english: 'Not',
        zhTW: '不 (形容詞/動詞)',
        zhCN: '不 (形容词/动词)',
        example: {
          tagalog: 'Hindi masarap.',
          english: 'Not delicious.',
          zhTW: '不好吃。',
          zhCN: '不好吃。'
        }
      },
      {
        id: 'neg2',
        tagalog: 'Wala',
        english: 'None / Absent',
        zhTW: '沒有 / 不在',
        zhCN: '没有 / 不在',
        example: {
          tagalog: 'Wala si Mark.',
          english: 'Mark is not here.',
          zhTW: '馬克不在這裡。',
          zhCN: '马克不在这里。'
        }
      },
      {
        id: 'neg3',
        tagalog: 'Huwag',
        english: 'Don\'t',
        zhTW: '不要 (命令)',
        zhCN: '不要 (命令)',
        example: {
          tagalog: 'Huwag kang maingay.',
          english: 'Don\'t be noisy.',
          zhTW: '不要吵。',
          zhCN: '不要吵。'
        }
      }
    ]
  },
  {
    id: 'enclitic-particles',
    title: 'Enclitic Particles',
    titleKey: 'topics.enclitic-particles',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'enc1',
        tagalog: 'Na',
        english: 'Already / Now',
        zhTW: '已經',
        zhCN: '已经',
        example: {
          tagalog: 'Tapos na.',
          english: 'Finished already.',
          zhTW: '已經完成了。',
          zhCN: '已经完成了。'
        }
      },
      {
        id: 'enc2',
        tagalog: 'Pa',
        english: 'Still / Yet / More',
        zhTW: '還 / 再',
        zhCN: '还 / 再',
        example: {
          tagalog: 'Isa pa.',
          english: 'One more.',
          zhTW: '再來一個。',
          zhCN: '再来一个。'
        }
      },
      {
        id: 'enc3',
        tagalog: 'Lang',
        english: 'Just / Only',
        zhTW: '只是 / 只有',
        zhCN: '只是 / 只有',
        example: {
          tagalog: 'Ako lang.',
          english: 'Just me.',
          zhTW: '只有我。',
          zhCN: '只有我。'
        }
      },
      {
        id: 'enc4',
        tagalog: 'Din / Rin',
        english: 'Also / Too',
        zhTW: '也',
        zhCN: '也',
        example: {
          tagalog: 'Ako rin.',
          english: 'Me too.',
          zhTW: '我也是。',
          zhCN: '我也是。'
        }
      },
      {
        id: 'enc5',
        tagalog: 'Naman',
        english: 'On the other hand / Please',
        zhTW: '呢 / 請',
        zhCN: '呢 / 请',
        example: {
          tagalog: 'Ikaw naman.',
          english: 'Your turn / How about you?',
          zhTW: '換你了 / 你呢？',
          zhCN: '换你了 / 你呢？'
        }
      }
    ]
  },
  {
    id: 'respect-markers',
    title: 'Respect Markers',
    titleKey: 'topics.respect-markers',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'rm1',
        tagalog: 'Po',
        english: 'Sir / Ma\'am (Respect particle)',
        zhTW: '您 (敬語)',
        zhCN: '您 (敬语)',
        example: {
          tagalog: 'Salamat po.',
          english: 'Thank you (polite).',
          zhTW: '謝謝您。',
          zhCN: '谢谢您。'
        }
      },
      {
        id: 'rm2',
        tagalog: 'Opo',
        english: 'Yes (Respectful)',
        zhTW: '是 (敬語)',
        zhCN: '是 (敬语)',
        example: {
          tagalog: 'Opo, nanay.',
          english: 'Yes, mom.',
          zhTW: '是的，媽媽。',
          zhCN: '是的，妈妈。'
        }
      },
      {
        id: 'rm3',
        tagalog: 'Hindi po',
        english: 'No (Respectful)',
        zhTW: '不 (敬語)',
        zhCN: '不 (敬语)',
        example: {
          tagalog: 'Hindi po ako kumain.',
          english: 'I did not eat (polite).',
          zhTW: '我沒有吃 (禮貌)。',
          zhCN: '我没有吃 (礼貌)。'
        }
      }
    ]
  },
  {
    id: 'linkers',
    title: 'Linkers (Ligatures)',
    titleKey: 'topics.linkers',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'lnk1',
        tagalog: '-ng',
        english: 'Linker (after vowel)',
        zhTW: '連接詞 (母音後)',
        zhCN: '连接词 (元音后)',
        example: {
          tagalog: 'Bagong taon.',
          english: 'New year.',
          zhTW: '新年。',
          zhCN: '新年。'
        }
      },
      {
        id: 'lnk2',
        tagalog: '-g',
        english: 'Linker (after n)',
        zhTW: '連接詞 (n後)',
        zhCN: '连接词 (n后)',
        example: {
          tagalog: 'Ulang malakas.',
          english: 'Strong rain.',
          zhTW: '大雨。',
          zhCN: '大雨。'
        }
      },
      {
        id: 'lnk3',
        tagalog: 'Na',
        english: 'Linker (after consonant)',
        zhTW: '連接詞 (子音後)',
        zhCN: '连接词 (辅音后)',
        example: {
          tagalog: 'Masarap na pagkain.',
          english: 'Delicious food.',
          zhTW: '好吃的食物。',
          zhCN: '好吃的食物。'
        }
      }
    ]
  },
  {
    id: 'locators',
    title: 'Specific Location Markers',
    titleKey: 'topics.locators',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'loc1',
        tagalog: 'Nasa',
        english: 'Located at/on/in',
        zhTW: '在',
        zhCN: '在',
        example: {
          tagalog: 'Ang libro ay nasa mesa.',
          english: 'The book is on the table.',
          zhTW: '書在桌子上。',
          zhCN: '书在桌子上。'
        }
      },
      {
        id: 'loc2',
        tagalog: 'Nasaan',
        english: 'Where is (it)?',
        zhTW: '在哪裡？',
        zhCN: '在哪里？',
        example: {
          tagalog: 'Nasaan ang susi?',
          english: 'Where is the key?',
          zhTW: '鑰匙在哪裡？',
          zhCN: '钥匙在哪里？'
        }
      },
      {
        id: 'loc3',
        tagalog: 'Nasa akin',
        english: 'It is with me',
        zhTW: '在我這裡',
        zhCN: '在我这里',
        example: {
          tagalog: 'Nasa akin ang pera.',
          english: 'The money is with me.',
          zhTW: '錢在我這裡。',
          zhCN: '钱在我这里。'
        }
      },
      {
        id: 'loc4',
        tagalog: 'Nasa labas',
        english: 'It is outside',
        zhTW: '在外面',
        zhCN: '在外面',
        example: {
          tagalog: 'Nasa labas si Tatay.',
          english: 'Father is outside.',
          zhTW: '爸爸在外面。',
          zhCN: '爸爸在外面。'
        }
      },
      {
        id: 'loc5',
        tagalog: 'Nasa loob',
        english: 'It is inside',
        zhTW: '在裡面',
        zhCN: '在里面',
        example: {
          tagalog: 'Nasa loob ng bahay.',
          english: 'Inside the house.',
          zhTW: '在房子裡。',
          zhCN: '在房子里。'
        }
      }
    ]
  },
  {
    id: 'numbers-spanish',
    title: 'Numbers (Spanish)',
    titleKey: 'topics.numbers-spanish',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'ns1',
        tagalog: 'Uno',
        english: 'One (Time/Money)',
        zhTW: '一 (時間/金錢)',
        zhCN: '一 (时间/金钱)',
        example: {
          tagalog: 'Ala-una na.',
          english: 'It\'s one o\'clock.',
          zhTW: '一點了。',
          zhCN: '一点了。'
        }
      },
      {
        id: 'ns2',
        tagalog: 'Dos',
        english: 'Two (Time/Money)',
        zhTW: '二 (時間/金錢)',
        zhCN: '二 (时间/金钱)',
        example: {
          tagalog: 'Dos pesos lang.',
          english: 'Only two pesos.',
          zhTW: '只要兩披索。',
          zhCN: '只要两披索。'
        }
      },
      {
        id: 'ns3',
        tagalog: 'Tres',
        english: 'Three (Time/Money)',
        zhTW: '三 (時間/金錢)',
        zhCN: '三 (时间/金钱)',
        example: {
          tagalog: 'Alas-tres ng hapon.',
          english: 'Three in the afternoon.',
          zhTW: '下午三點。',
          zhCN: '下午三点。'
        }
      },
      {
        id: 'ns4',
        tagalog: 'Alas-dose',
        english: 'Twelve o\'clock',
        zhTW: '十二點',
        zhCN: '十二点',
        example: {
          tagalog: 'Kumain tayo ng alas-dose.',
          english: 'Let\'s eat at twelve.',
          zhTW: '我們十二點吃飯吧。',
          zhCN: '我们十二点吃饭吧。'
        }
      },
      {
        id: 'ns5',
        tagalog: 'Bente',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          tagalog: 'Bente pesos ito.',
          english: 'This is twenty pesos.',
          zhTW: '這是二十披索。',
          zhCN: '这是二十披索。'
        }
      },
      {
        id: 'ns6',
        tagalog: 'Singkwenta',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          tagalog: 'Singkwenta anyos na siya.',
          english: 'He/She is fifty years old.',
          zhTW: '他/她已經五十歲了。',
          zhCN: '他/她已经五十岁了。'
        }
      }
    ]
  },
  {
    id: 'social-scripts',
    title: 'Social Scripts',
    titleKey: 'topics.social-scripts',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'ss1',
        tagalog: 'Kumusta?',
        english: 'How are you?',
        zhTW: '你好嗎？',
        zhCN: '你好吗？',
        example: {
          tagalog: 'Kumusta ka, kaibigan?',
          english: 'How are you, friend?',
          zhTW: '你好嗎，朋友？',
          zhCN: '你好吗，朋友？'
        }
      },
      {
        id: 'ss2',
        tagalog: 'Ayos lang',
        english: 'I\'m okay / It\'s fine',
        zhTW: '我很好 / 沒事',
        zhCN: '我很好 / 没事',
        example: {
          tagalog: 'Ayos lang ako.',
          english: 'I\'m okay.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      {
        id: 'ss3',
        tagalog: 'Ingat',
        english: 'Take care / Goodbye',
        zhTW: '保重 / 再見',
        zhCN: '保重 / 再见',
        example: {
          tagalog: 'Ingat ka palagi.',
          english: 'Take care always.',
          zhTW: '請保重。',
          zhCN: '请保重。'
        }
      },
      {
        id: 'ss4',
        tagalog: 'Sige',
        english: 'Okay / Go ahead / Bye',
        zhTW: '好的 / 繼續 / 再見',
        zhCN: '好的 / 继续 / 再见',
        example: {
          tagalog: 'Sige, aalis na ako.',
          english: 'Okay, I\'m leaving now.',
          zhTW: '好的，我要走了。',
          zhCN: '好的，我要走了。'
        }
      },
      {
        id: 'ss5',
        tagalog: 'Pasensya na',
        english: 'Sorry',
        zhTW: '抱歉',
        zhCN: '抱歉',
        example: {
          tagalog: 'Pasensya na sa abala.',
          english: 'Sorry for the disturbance.',
          zhTW: '抱歉打擾了。',
          zhCN: '抱歉打扰了。'
        }
      }
    ]
  },
  {
    id: 'transportation',
    title: 'Transportation (Commuting)',
    titleKey: 'topics.transportation',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'trans1',
        tagalog: 'Bayad po',
        english: 'Here is my payment',
        zhTW: '這是車費',
        zhCN: '这是车费',
        example: {
          tagalog: 'Bayad po sa umaga.',
          english: 'Here is my payment (morning).',
          zhTW: '這是早上的車費。',
          zhCN: '这是早上的车费。'
        }
      },
      {
        id: 'trans2',
        tagalog: 'Para',
        english: 'Stop / Pull over',
        zhTW: '停車',
        zhCN: '停车',
        example: {
          tagalog: 'Para po sa tabi.',
          english: 'Please stop at the side.',
          zhTW: '請在路邊停。',
          zhCN: '请在路边停。'
        }
      },
      {
        id: 'trans3',
        tagalog: 'Sa tabi lang',
        english: 'Just at the side',
        zhTW: '就在旁邊',
        zhCN: '就在旁边',
        example: {
          tagalog: 'Bababa ako sa tabi lang.',
          english: 'I will get off just at the side.',
          zhTW: '我就在旁邊下車。',
          zhCN: '我就在旁边下车。'
        }
      },
      {
        id: 'trans4',
        tagalog: 'Sukli',
        english: 'Change / Coins back',
        zhTW: '找零',
        zhCN: '找零',
        example: {
          tagalog: 'Abot po ng sukli.',
          english: 'Please pass the change.',
          zhTW: '請遞一下找零。',
          zhCN: '请递一下找零。'
        }
      },
      {
        id: 'trans5',
        tagalog: 'Kaliwa',
        english: 'Left',
        zhTW: '左',
        zhCN: '左',
        example: {
          tagalog: 'Kumaliwa ka sa kanto.',
          english: 'Turn left at the corner.',
          zhTW: '在路口左轉。',
          zhCN: '在路口左转。'
        }
      },
      {
        id: 'trans6',
        tagalog: 'Kanan',
        english: 'Right',
        zhTW: '右',
        zhCN: '右',
        example: {
          tagalog: 'Kumanan ka pagkatapos.',
          english: 'Turn right afterwards.',
          zhTW: '然後右轉。',
          zhCN: '然后右转。'
        }
      },
      {
        id: 'trans7',
        tagalog: 'Diretso',
        english: 'Straight',
        zhTW: '直走',
        zhCN: '直走',
        example: {
          tagalog: 'Diretso lang ang daan.',
          english: 'The road is just straight.',
          zhTW: '這條路是直的。',
          zhCN: '这条路是直的。'
        }
      }
    ]
  },
  {
    id: 'time-scheduling',
    title: 'Time & Scheduling',
    titleKey: 'topics.time-scheduling',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'time1',
        tagalog: 'Ngayon',
        english: 'Now / Today',
        zhTW: '現在 / 今天',
        zhCN: '现在 / 今天',
        example: {
          tagalog: 'Aalis ako ngayon.',
          english: 'I am leaving now.',
          zhTW: '我現在要走了。',
          zhCN: '我现在要走了。'
        }
      },
      {
        id: 'time2',
        tagalog: 'Bukas',
        english: 'Tomorrow',
        zhTW: '明天',
        zhCN: '明天',
        example: {
          tagalog: 'Bukas na lang.',
          english: 'Let\'s just do it tomorrow.',
          zhTW: '明天再說吧。',
          zhCN: '明天再说吧。'
        }
      },
      {
        id: 'time3',
        tagalog: 'Kahapon',
        english: 'Yesterday',
        zhTW: '昨天',
        zhCN: '昨天',
        example: {
          tagalog: 'Dumating siya kahapon.',
          english: 'He/She arrived yesterday.',
          zhTW: '他/她昨天到了。',
          zhCN: '他/她昨天到了。'
        }
      },
      {
        id: 'time4',
        tagalog: 'Mamaya',
        english: 'Later',
        zhTW: '稍後',
        zhCN: '稍后',
        example: {
          tagalog: 'Mamaya na ako kakain.',
          english: 'I will eat later.',
          zhTW: '我晚點再吃。',
          zhCN: '我晚点再吃。'
        }
      },
      {
        id: 'time5',
        tagalog: 'Kanina',
        english: 'Earlier',
        zhTW: '剛才',
        zhCN: '刚才',
        example: {
          tagalog: 'Nakita ko siya kanina.',
          english: 'I saw him/her earlier.',
          zhTW: '我剛才看到他/她了。',
          zhCN: '我刚才看到他/她了。'
        }
      },
      {
        id: 'time6',
        tagalog: 'Agad',
        english: 'Immediately',
        zhTW: '立刻',
        zhCN: '立刻',
        example: {
          tagalog: 'Tumawag ka agad.',
          english: 'Call immediately.',
          zhTW: '立刻打電話。',
          zhCN: '立刻打电话。'
        }
      }
    ]
  },
  {
    id: 'common-adjectives',
    title: 'Common Adjectives (Opposites)',
    titleKey: 'topics.common-adjectives',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'adj1',
        tagalog: 'Malaki',
        english: 'Big',
        zhTW: '大',
        zhCN: '大',
        example: {
          tagalog: 'Malaki ang bahay.',
          english: 'The house is big.',
          zhTW: '房子很大。',
          zhCN: '房子很大。'
        }
      },
      {
        id: 'adj2',
        tagalog: 'Maliit',
        english: 'Small',
        zhTW: '小',
        zhCN: '小',
        example: {
          tagalog: 'Maliit lang ang aso.',
          english: 'The dog is small.',
          zhTW: '那隻狗很小。',
          zhCN: '那只狗很小。'
        }
      },
      {
        id: 'adj3',
        tagalog: 'Mainit',
        english: 'Hot',
        zhTW: '熱',
        zhCN: '热',
        example: {
          tagalog: 'Mainit ang kape.',
          english: 'The coffee is hot.',
          zhTW: '咖啡很熱。',
          zhCN: '咖啡很热。'
        }
      },
      {
        id: 'adj4',
        tagalog: 'Malamig',
        english: 'Cold',
        zhTW: '冷',
        zhCN: '冷',
        example: {
          tagalog: 'Malamig ang panahon.',
          english: 'The weather is cold.',
          zhTW: '天氣很冷。',
          zhCN: '天气很冷。'
        }
      },
      {
        id: 'adj5',
        tagalog: 'Mura',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          tagalog: 'Mura ang bilihin dito.',
          english: 'Goods are cheap here.',
          zhTW: '這裡的東西很便宜。',
          zhCN: '这里的东西很便宜。'
        }
      },
      {
        id: 'adj6',
        tagalog: 'Mahal',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          tagalog: 'Mahal ang kotse.',
          english: 'The car is expensive.',
          zhTW: '這輛車很貴。',
          zhCN: '这辆车很贵。'
        }
      },
      {
        id: 'adj7',
        tagalog: 'Masarap',
        english: 'Delicious',
        zhTW: '好吃',
        zhCN: '好吃',
        example: {
          tagalog: 'Masarap ang luto mo.',
          english: 'Your cooking is delicious.',
          zhTW: '你做的菜很好吃。',
          zhCN: '你做的菜很好吃。'
        }
      },
      {
        id: 'adj8',
        tagalog: 'Hindi masarap',
        english: 'Not delicious',
        zhTW: '不好吃',
        zhCN: '不好吃',
        example: {
          tagalog: 'Hindi masarap ang ulam.',
          english: 'The dish is not delicious.',
          zhTW: '這道菜不好吃。',
          zhCN: '这道菜不好吃。'
        }
      },
      {
        id: 'adj9',
        tagalog: 'Pagod',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          tagalog: 'Pagod ako galing trabaho.',
          english: 'I am tired from work.',
          zhTW: '我下班後很累。',
          zhCN: '我下班后很累。'
        }
      }
    ]
  },
  {
    id: 'money-bargaining',
    title: 'Money & Bargaining',
    titleKey: 'topics.money-bargaining',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'mon1',
        tagalog: 'Magkano?',
        english: 'How much?',
        zhTW: '多少錢？',
        zhCN: '多少钱？',
        example: {
          tagalog: 'Magkano ito?',
          english: 'How much is this?',
          zhTW: '這個多少錢？',
          zhCN: '这个多少钱？'
        }
      },
      {
        id: 'mon2',
        tagalog: 'Tawad',
        english: 'Discount / Haggle',
        zhTW: '折扣 / 殺價',
        zhCN: '折扣 / 杀价',
        example: {
          tagalog: 'Wala bang tawad?',
          english: 'No discount?',
          zhTW: '沒有折扣嗎？',
          zhCN: '没有折扣吗？'
        }
      },
      {
        id: 'mon3',
        tagalog: 'Mahal',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          tagalog: 'Masyadong mahal.',
          english: 'Too expensive.',
          zhTW: '太貴了。',
          zhCN: '太贵了。'
        }
      },
      {
        id: 'mon4',
        tagalog: 'Mura',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          tagalog: 'Doon ay mura.',
          english: 'It is cheap there.',
          zhTW: '那裡很便宜。',
          zhCN: '那里很便宜。'
        }
      },
      {
        id: 'mon5',
        tagalog: 'Barya',
        english: 'Loose change / Coins',
        zhTW: '零錢',
        zhCN: '零钱',
        example: {
          tagalog: 'Wala akong barya.',
          english: 'I don\'t have loose change.',
          zhTW: '我沒有零錢。',
          zhCN: '我没有零钱。'
        }
      },
      {
        id: 'mon6',
        tagalog: 'Cash / G-Cash',
        english: 'Cash / Digital Wallet',
        zhTW: '現金 / 電子錢包',
        zhCN: '现金 / 电子钱包',
        example: {
          tagalog: 'Pwede ba ang G-Cash?',
          english: 'Is G-Cash accepted?',
          zhTW: '可以用 G-Cash 嗎？',
          zhCN: '可以用 G-Cash 吗？'
        }
      }
    ]
  },
  {
    id: 'ordering-dining',
    title: 'Ordering & Dining',
    titleKey: 'topics.ordering-dining',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'din1',
        tagalog: 'Pahingi',
        english: 'Please give me / Can I have',
        zhTW: '請給我',
        zhCN: '请给我',
        example: {
          tagalog: 'Pahingi ng tubig.',
          english: 'Water please.',
          zhTW: '請給我水。',
          zhCN: '请给我水。'
        }
      },
      {
        id: 'din2',
        tagalog: 'Isa pa',
        english: 'One more',
        zhTW: '再來一個',
        zhCN: '再来一个',
        example: {
          tagalog: 'Isa pa pong kanin.',
          english: 'One more rice please.',
          zhTW: '請再來一份飯。',
          zhCN: '请再来一份饭。'
        }
      },
      {
        id: 'din3',
        tagalog: 'Busog',
        english: 'Full',
        zhTW: '飽',
        zhCN: '饱',
        example: {
          tagalog: 'Busog na ako.',
          english: 'I am full already.',
          zhTW: '我已經飽了。',
          zhCN: '我已经饱了。'
        }
      },
      {
        id: 'din4',
        tagalog: 'Gutom',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          tagalog: 'Gutom na ako.',
          english: 'I am hungry already.',
          zhTW: '我已經餓了。',
          zhCN: '我已经饿了。'
        }
      },
      {
        id: 'din5',
        tagalog: 'Bill out',
        english: 'Can I have the check?',
        zhTW: '買單',
        zhCN: '买单',
        example: {
          tagalog: 'Bill out na po.',
          english: 'Check please.',
          zhTW: '請買單。',
          zhCN: '请买单。'
        }
      },
      {
        id: 'din6',
        tagalog: 'Take out / Dine in',
        english: 'To go / Eat here',
        zhTW: '外帶 / 內用',
        zhCN: '外带 / 内用',
        example: {
          tagalog: 'Take out po.',
          english: 'To go please.',
          zhTW: '請外帶。',
          zhCN: '请外带。'
        }
      }
    ]
  },
  {
    id: 'health-emergencies',
    title: 'Health & Emergencies',
    titleKey: 'topics.health-emergencies',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'hlt1',
        tagalog: 'Tulong',
        english: 'Help',
        zhTW: '幫忙 / 救命',
        zhCN: '帮忙 / 救命',
        example: {
          tagalog: 'Tulong! Tulungan mo ako.',
          english: 'Help! Help me.',
          zhTW: '救命！幫幫我。',
          zhCN: '救命！帮帮我。'
        }
      },
      {
        id: 'hlt2',
        tagalog: 'Masakit',
        english: 'Painful',
        zhTW: '痛',
        zhCN: '痛',
        example: {
          tagalog: 'Masakit ang ulo ko.',
          english: 'My head hurts.',
          zhTW: '我頭痛。',
          zhCN: '我头痛。'
        }
      },
      {
        id: 'hlt3',
        tagalog: 'Gamot',
        english: 'Medicine',
        zhTW: '藥',
        zhCN: '药',
        example: {
          tagalog: 'Kailangan ko ng gamot.',
          english: 'I need medicine.',
          zhTW: '我需要藥。',
          zhCN: '我需要药。'
        }
      },
      {
        id: 'hlt4',
        tagalog: 'Ulo',
        english: 'Head',
        zhTW: '頭',
        zhCN: '头',
        example: {
          tagalog: 'Masakit ang ulo.',
          english: 'Head is painful.',
          zhTW: '頭痛。',
          zhCN: '头痛。'
        }
      },
      {
        id: 'hlt5',
        tagalog: 'Tiyan',
        english: 'Stomach',
        zhTW: '肚子',
        zhCN: '肚子',
        example: {
          tagalog: 'Masakit ang tiyan ko.',
          english: 'My stomach hurts.',
          zhTW: '我肚子痛。',
          zhCN: '我肚子痛。'
        }
      },
      {
        id: 'hlt6',
        tagalog: 'Lagnat',
        english: 'Fever',
        zhTW: '發燒',
        zhCN: '发烧',
        example: {
          tagalog: 'May lagnat ang bata.',
          english: 'The child has a fever.',
          zhTW: '孩子發燒了。',
          zhCN: '孩子发烧了。'
        }
      },
      {
        id: 'hlt7',
        tagalog: 'Ospital',
        english: 'Hospital',
        zhTW: '醫院',
        zhCN: '医院',
        example: {
          tagalog: 'Dalhin sa ospital.',
          english: 'Bring to the hospital.',
          zhTW: '送到醫院。',
          zhCN: '送到医院。'
        }
      }
    ]
  },
  {
    id: 'family-social',
    title: 'Family & Introductions',
    titleKey: 'topics.family-social',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'fam1',
        tagalog: 'Ilang taon ka na?',
        english: 'How old are you?',
        zhTW: '你幾歲了？',
        zhCN: '你几岁了？',
        example: {
          tagalog: 'Ilang taon ka na ngayon?',
          english: 'How old are you now?',
          zhTW: '你現在幾歲了？',
          zhCN: '你现在几岁了？'
        }
      },
      {
        id: 'fam2',
        tagalog: 'Binata / Dalaga',
        english: 'Single Man / Single Woman',
        zhTW: '單身男子 / 單身女子',
        zhCN: '单身男子 / 单身女子',
        example: {
          tagalog: 'Siya ay dalaga pa.',
          english: 'She is still single.',
          zhTW: '她還是單身。',
          zhCN: '她还是单身。'
        }
      },
      {
        id: 'fam3',
        tagalog: 'May asawa',
        english: 'Married / Have a spouse',
        zhTW: '已婚',
        zhCN: '已婚',
        example: {
          tagalog: 'May asawa na ako.',
          english: 'I am already married.',
          zhTW: '我已經結婚了。',
          zhCN: '我已经结婚了。'
        }
      },
      {
        id: 'fam4',
        tagalog: 'Kapatid',
        english: 'Sibling',
        zhTW: '兄弟姊妹',
        zhCN: '兄弟姐妹',
        example: {
          tagalog: 'Ilan ang kapatid mo?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      {
        id: 'fam5',
        tagalog: 'Anak',
        english: 'Child',
        zhTW: '孩子',
        zhCN: '孩子',
        example: {
          tagalog: 'Mahal ko ang aking anak.',
          english: 'I love my child.',
          zhTW: '我愛我的孩子。',
          zhCN: '我爱我的孩子。'
        }
      },
      {
        id: 'fam6',
        tagalog: 'Taga-saan ka?',
        english: 'Where are you from?',
        zhTW: '你是哪裡人？',
        zhCN: '你是哪里人？',
        example: {
          tagalog: 'Taga-saan ka sa Pilipinas?',
          english: 'Where are you from in the Philippines?',
          zhTW: '你在菲律賓哪裡？',
          zhCN: '你在菲律宾哪里？'
        }
      }
    ]
  },
  {
    id: 'housing-utilities',
    title: 'Housing & Utilities',
    titleKey: 'topics.housing-utilities',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'house1',
        tagalog: 'Sira',
        english: 'Broken',
        zhTW: '壞了',
        zhCN: '坏了',
        example: {
          tagalog: 'Sira ang aircon.',
          english: 'The aircon is broken.',
          zhTW: '冷氣壞了。',
          zhCN: '冷气坏了。'
        }
      },
      {
        id: 'house2',
        tagalog: 'Bukas',
        english: 'Open / On',
        zhTW: '開',
        zhCN: '开',
        example: {
          tagalog: 'Bukas ang ilaw.',
          english: 'The light is on.',
          zhTW: '燈開著。',
          zhCN: '灯开着。'
        }
      },
      {
        id: 'house3',
        tagalog: 'Sarado',
        english: 'Closed / Off',
        zhTW: '關',
        zhCN: '关',
        example: {
          tagalog: 'Sarado ang pinto.',
          english: 'The door is closed.',
          zhTW: '門關著。',
          zhCN: '门关着。'
        }
      },
      {
        id: 'house4',
        tagalog: 'Ilaw',
        english: 'Light',
        zhTW: '燈',
        zhCN: '灯',
        example: {
          tagalog: 'Pakibukas ang ilaw.',
          english: 'Please turn on the light.',
          zhTW: '請開燈。',
          zhCN: '请开灯。'
        }
      },
      {
        id: 'house5',
        tagalog: 'Tubig',
        english: 'Water / Tap',
        zhTW: '水',
        zhCN: '水',
        example: {
          tagalog: 'Walang tubig sa gripo.',
          english: 'No water from the tap.',
          zhTW: '水龍頭沒水。',
          zhCN: '水龙头没水。'
        }
      },
      {
        id: 'house6',
        tagalog: 'Kuryente',
        english: 'Electricity / Power',
        zhTW: '電',
        zhCN: '电',
        example: {
          tagalog: 'Walang kuryente ngayon.',
          english: 'No electricity now (Brownout).',
          zhTW: '現在停電。',
          zhCN: '现在停电。'
        }
      }
    ]
  },
  {
    id: 'hygiene-comfort',
    title: 'Hygiene & Comfort',
    titleKey: 'topics.hygiene-comfort',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'hyg1',
        tagalog: 'Nasaan ang C.R.?',
        english: 'Where is the bathroom?',
        zhTW: '廁所在哪裡？',
        zhCN: '厕所在哪里？',
        example: {
          tagalog: 'Excuse me, nasaan ang C.R.?',
          english: 'Excuse me, where is the bathroom?',
          zhTW: '不好意思，請問廁所在哪裡？',
          zhCN: '不好意思，请问厕所在哪里？'
        }
      },
      {
        id: 'hyg2',
        tagalog: 'May tissue?',
        english: 'Is there toilet paper?',
        zhTW: '有衛生紙嗎？',
        zhCN: '有卫生纸吗？',
        example: {
          tagalog: 'May tissue ba sa loob?',
          english: 'Is there toilet paper inside?',
          zhTW: '裡面有衛生紙嗎？',
          zhCN: '里面有卫生纸吗？'
        }
      },
      {
        id: 'hyg3',
        tagalog: 'Mabaho',
        english: 'Smelly / Stinky',
        zhTW: '臭',
        zhCN: '臭',
        example: {
          tagalog: 'Mabaho ang basura.',
          english: 'The trash is smelly.',
          zhTW: '垃圾很臭。',
          zhCN: '垃圾很臭。'
        }
      },
      {
        id: 'hyg4',
        tagalog: 'Mabango',
        english: 'Fragrant / Smells good',
        zhTW: '香',
        zhCN: '香',
        example: {
          tagalog: 'Mabango ang bulaklak.',
          english: 'The flower smells good.',
          zhTW: '這朵花很香。',
          zhCN: '这朵花很香。'
        }
      },
      {
        id: 'hyg5',
        tagalog: 'Madumi',
        english: 'Dirty',
        zhTW: '髒',
        zhCN: '脏',
        example: {
          tagalog: 'Madumi ang sahig.',
          english: 'The floor is dirty.',
          zhTW: '地板很髒。',
          zhCN: '地板很脏。'
        }
      },
      {
        id: 'hyg6',
        tagalog: 'Malinis',
        english: 'Clean',
        zhTW: '乾淨',
        zhCN: '干净',
        example: {
          tagalog: 'Malinis na ang kwarto.',
          english: 'The room is already clean.',
          zhTW: '房間已經乾淨了。',
          zhCN: '房间已经干净了。'
        }
      }
    ]
  },
  {
    id: 'digital-survival',
    title: 'Digital Survival',
    titleKey: 'topics.digital-survival',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'dig1',
        tagalog: 'Pa-load po',
        english: 'I would like to buy phone credits',
        zhTW: '我想儲值電話費',
        zhCN: '我想充值电话费',
        example: {
          tagalog: 'Pa-load po ng 50 pesos.',
          english: 'I would like to buy 50 pesos load.',
          zhTW: '請幫我儲值 50 披索。',
          zhCN: '请帮我充值 50 披索。'
        }
      },
      {
        id: 'dig2',
        tagalog: 'Walang signal',
        english: 'No signal',
        zhTW: '沒有訊號',
        zhCN: '没有信号',
        example: {
          tagalog: 'Walang signal dito sa bundok.',
          english: 'There is no signal here in the mountain.',
          zhTW: '山上這裡沒有訊號。',
          zhCN: '山上这里没有信号。'
        }
      },
      {
        id: 'dig3',
        tagalog: 'Lowbat',
        english: 'Low battery',
        zhTW: '沒電了',
        zhCN: '没电了',
        example: {
          tagalog: 'Lowbat na ako.',
          english: 'My battery is low.',
          zhTW: '我手機快沒電了。',
          zhCN: '我手机快没电了。'
        }
      },
      {
        id: 'dig4',
        tagalog: 'Charger',
        english: 'Charger',
        zhTW: '充電器',
        zhCN: '充电器',
        example: {
          tagalog: 'May charger ka bang dala?',
          english: 'Do you have a charger with you?',
          zhTW: '你有帶充電器嗎？',
          zhCN: '你有带充电器吗？'
        }
      },
      {
        id: 'dig5',
        tagalog: 'Password',
        english: 'Password',
        zhTW: '密碼',
        zhCN: '密码',
        example: {
          tagalog: 'Anong password ng wifi?',
          english: 'What is the wifi password?',
          zhTW: 'Wifi 密碼是多少？',
          zhCN: 'Wifi 密码是多少？'
        }
      }
    ]
  },
  {
    id: 'weather',
    title: 'Weather',
    titleKey: 'topics.weather',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'wth1',
        tagalog: 'Sobrang init!',
        english: 'It\'s too hot!',
        zhTW: '太熱了！',
        zhCN: '太热了！',
        example: {
          tagalog: 'Sobrang init ngayon sa labas.',
          english: 'It\'s too hot outside today.',
          zhTW: '今天外面太熱了。',
          zhCN: '今天外面太热了。'
        }
      },
      {
        id: 'wth2',
        tagalog: 'Umuulan',
        english: 'It is raining',
        zhTW: '下雨了',
        zhCN: '下雨了',
        example: {
          tagalog: 'Umuulan nang malakas.',
          english: 'It is raining hard.',
          zhTW: '雨下得很大。',
          zhCN: '雨下得很大。'
        }
      },
      {
        id: 'wth3',
        tagalog: 'Bagyo',
        english: 'Typhoon / Storm',
        zhTW: '颱風 / 風暴',
        zhCN: '台风 / 风暴',
        example: {
          tagalog: 'May bagyo ba bukas?',
          english: 'Is there a storm tomorrow?',
          zhTW: '明天有颱風嗎？',
          zhCN: '明天有台风吗？'
        }
      },
      {
        id: 'wth4',
        tagalog: 'Baha',
        english: 'Flood',
        zhTW: '淹水',
        zhCN: '淹水',
        example: {
          tagalog: 'Baha sa kalsada.',
          english: 'The street is flooded.',
          zhTW: '馬路淹水了。',
          zhCN: '马路淹水了。'
        }
      },
      {
        id: 'wth5',
        tagalog: 'Payong',
        english: 'Umbrella',
        zhTW: '雨傘',
        zhCN: '雨伞',
        example: {
          tagalog: 'Dadalhin ko ang payong ko.',
          english: 'I will bring my umbrella.',
          zhTW: '我會帶我的雨傘。',
          zhCN: '我会带我的雨伞。'
        }
      }
    ]
  },
  {
    id: 'city-navigation',
    title: 'City Navigation',
    titleKey: 'topics.city-navigation',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'nav1',
        tagalog: 'Kanto',
        english: 'Corner',
        zhTW: '路口 / 轉角',
        zhCN: '路口 / 转角',
        example: {
          tagalog: 'Sa kanto lang po.',
          english: 'Just at the corner.',
          zhTW: '就在路口。',
          zhCN: '就在路口。'
        }
      },
      {
        id: 'nav2',
        tagalog: 'Harap',
        english: 'Front',
        zhTW: '前面',
        zhCN: '前面',
        example: {
          tagalog: 'Sa harap ng Jollibee.',
          english: 'In front of Jollibee.',
          zhTW: '在 Jollibee 前面。',
          zhCN: '在 Jollibee 前面。'
        }
      },
      {
        id: 'nav3',
        tagalog: 'Likod',
        english: 'Back / Behind',
        zhTW: '後面',
        zhCN: '后面',
        example: {
          tagalog: 'Sa likod ng bahay.',
          english: 'Behind the house.',
          zhTW: '在房子後面。',
          zhCN: '在房子后面。'
        }
      },
      {
        id: 'nav4',
        tagalog: 'Tulay',
        english: 'Bridge',
        zhTW: '橋',
        zhCN: '桥',
        example: {
          tagalog: 'Tatawid tayo sa tulay.',
          english: 'We will cross the bridge.',
          zhTW: '我們會過橋。',
          zhCN: '我们会过桥。'
        }
      },
      {
        id: 'nav5',
        tagalog: 'Tawiran',
        english: 'Crosswalk / Overpass',
        zhTW: '斑馬線 / 天橋',
        zhCN: '斑马线 / 天桥',
        example: {
          tagalog: 'Gamitin ang tawiran.',
          english: 'Use the crosswalk/overpass.',
          zhTW: '使用斑馬線/天橋。',
          zhCN: '使用斑马线/天桥。'
        }
      },
      {
        id: 'nav6',
        tagalog: 'Simbahan',
        english: 'Church',
        zhTW: '教堂',
        zhCN: '教堂',
        example: {
          tagalog: 'Malapit sa simbahan.',
          english: 'Near the church.',
          zhTW: '靠近教堂。',
          zhCN: '靠近教堂。'
        }
      }
    ]
  },
  {
    id: 'emotions-feelings',
    title: 'Emotions & Feelings',
    titleKey: 'topics.emotions-feelings',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'emo1',
        tagalog: 'Masaya',
        english: 'Happy',
        zhTW: '快樂',
        zhCN: '快乐',
        example: {
          tagalog: 'Masaya ako ngayon.',
          english: 'I am happy today.',
          zhTW: '我今天很快樂。',
          zhCN: '我今天很快乐。'
        }
      },
      {
        id: 'emo2',
        tagalog: 'Malungkot',
        english: 'Sad',
        zhTW: '難過',
        zhCN: '难过',
        example: {
          tagalog: 'Bakit ka malungkot?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'emo3',
        tagalog: 'Galit',
        english: 'Angry',
        zhTW: '生氣',
        zhCN: '生气',
        example: {
          tagalog: 'Huwag kang galit.',
          english: 'Don\'t be angry.',
          zhTW: '不要生氣。',
          zhCN: '不要生气。'
        }
      },
      {
        id: 'emo4',
        tagalog: 'Nagugutom',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          tagalog: 'Nagugutom na ako.',
          english: 'I am getting hungry.',
          zhTW: '我餓了。',
          zhCN: '我饿了。'
        }
      },
      {
        id: 'emo5',
        tagalog: 'Inaantok',
        english: 'Sleepy',
        zhTW: '想睡',
        zhCN: '想睡',
        example: {
          tagalog: 'Inaantok ako sa klase.',
          english: 'I am sleepy in class.',
          zhTW: '我上課想睡覺。',
          zhCN: '我上课想睡觉。'
        }
      },
      {
        id: 'emo6',
        tagalog: 'Kilig',
        english: 'Romantic excitement',
        zhTW: '心動',
        zhCN: '心动',
        example: {
          tagalog: 'Kinikilig ako sa kanila.',
          english: 'I feel romantic excitement for them.',
          zhTW: '我對他們感到心動。',
          zhCN: '我对他们感到心动。'
        }
      }
    ]
  },
  {
    id: 'taglish-fillers',
    title: 'Taglish Fillers (Conyo Starter Pack)',
    titleKey: 'topics.taglish-fillers',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'tag1',
        tagalog: 'Talaga?',
        english: 'Really?',
        zhTW: '真的嗎？',
        zhCN: '真的吗？',
        example: {
          tagalog: 'Talaga? Hindi nga?',
          english: 'Really? Is that so?',
          zhTW: '真的嗎？不是吧？',
          zhCN: '真的吗？不是吧？'
        }
      },
      {
        id: 'tag2',
        tagalog: 'Grabe',
        english: 'Wow / Extreme',
        zhTW: '哇 / 太誇張',
        zhCN: '哇 / 太夸张',
        example: {
          tagalog: 'Grabe ang init!',
          english: 'The heat is extreme!',
          zhTW: '熱得太誇張了！',
          zhCN: '热得太夸张了！'
        }
      },
      {
        id: 'tag3',
        tagalog: 'Siguro',
        english: 'Maybe',
        zhTW: '也許',
        zhCN: '也许',
        example: {
          tagalog: 'Siguro darating siya.',
          english: 'Maybe he/she will arrive.',
          zhTW: '也許他/她會來。',
          zhCN: '也许他/她会来。'
        }
      },
      {
        id: 'tag4',
        tagalog: 'Basta',
        english: 'Just because / As long as',
        zhTW: '只要 / 反正',
        zhCN: '只要 / 反正',
        example: {
          tagalog: 'Basta ikaw, okay lang.',
          english: 'As long as it\'s you, it\'s okay.',
          zhTW: '只要是你，就可以。',
          zhCN: '只要是你，就可以。'
        }
      },
      {
        id: 'tag5',
        tagalog: 'Sayang',
        english: 'What a waste / pity',
        zhTW: '可惜 / 浪費',
        zhCN: '可惜 / 浪费',
        example: {
          tagalog: 'Sayang ang pagkain.',
          english: 'The food is wasted.',
          zhTW: '食物浪費了。',
          zhCN: '食物浪费了。'
        }
      }
    ]
  },
  {
    id: 'making-plans',
    title: 'Making Plans (The "Tara" Pack)',
    titleKey: 'topics.making-plans',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'plan1',
        tagalog: 'Tara!',
        english: 'Let\'s go!',
        zhTW: '走吧！',
        zhCN: '走吧！',
        example: {
          tagalog: 'Tara na sa mall.',
          english: 'Let\'s go to the mall now.',
          zhTW: '我們去購物中心吧。',
          zhCN: '我们去购物中心吧。'
        }
      },
      {
        id: 'plan2',
        tagalog: 'Sama ka?',
        english: 'Are you coming with us?',
        zhTW: '你要一起來嗎？',
        zhCN: '你要一起来吗？',
        example: {
          tagalog: 'Kakain kami, sama ka?',
          english: 'We are going to eat, are you coming?',
          zhTW: '我們要去吃飯，你要一起嗎？',
          zhCN: '我们要去吃饭，你要一起吗？'
        }
      },
      {
        id: 'plan3',
        tagalog: 'Libre kita',
        english: 'My treat / I\'ll pay for you',
        zhTW: '我請客',
        zhCN: '我请客',
        example: {
          tagalog: 'Tara, libre kita ng kape.',
          english: 'Let\'s go, I\'ll treat you to coffee.',
          zhTW: '走吧，我請你喝咖啡。',
          zhCN: '走吧，我请你喝咖啡。'
        }
      },
      {
        id: 'plan4',
        tagalog: 'KKB (Kanya-Kanyang Bayad)',
        english: 'Dutch Treat / Split the bill',
        zhTW: '各付各的',
        zhCN: '各付各的',
        example: {
          tagalog: 'KKB tayo ha?',
          english: 'We split the bill, okay?',
          zhTW: '我們各付各的，好嗎？',
          zhCN: '我们各付各的，好吗？'
        }
      },
      {
        id: 'plan5',
        tagalog: 'Anong ganap?',
        english: 'What\'s the plan? / What\'s happening?',
        zhTW: '有什麼計畫？ / 發生什麼事？',
        zhCN: '有什么计划？ / 发生什么事？',
        example: {
          tagalog: 'Anong ganap mamaya?',
          english: 'What\'s the plan later?',
          zhTW: '待會有什麼計畫？',
          zhCN: '待会有什么计划？'
        }
      }
    ]
  },
  {
    id: 'compliments-flattery',
    title: 'Compliments & Flattery',
    titleKey: 'topics.compliments-flattery',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'bol1',
        tagalog: 'Ang ganda mo naman',
        english: 'You are so beautiful',
        zhTW: '你真漂亮',
        zhCN: '你真漂亮',
        example: {
          tagalog: 'Ang ganda mo naman ngayon.',
          english: 'You are so beautiful today.',
          zhTW: '你今天真漂亮。',
          zhCN: '你今天真漂亮。'
        }
      },
      {
        id: 'bol2',
        tagalog: 'Pogi',
        english: 'Handsome',
        zhTW: '帥',
        zhCN: '帅',
        example: {
          tagalog: 'Ang pogi mo talaga.',
          english: 'You are really handsome.',
          zhTW: '你真的很帥。',
          zhCN: '你真的很帅。'
        }
      },
      {
        id: 'bol3',
        tagalog: 'Bagay sa iyo',
        english: 'That suits/fits you well',
        zhTW: '很適合你',
        zhCN: '很适合你',
        example: {
          tagalog: 'Bagay sa iyo ang damit.',
          english: 'The dress suits you well.',
          zhTW: '這件衣服很適合你。',
          zhCN: '这件衣服很适合你。'
        }
      },
      {
        id: 'bol4',
        tagalog: 'Bolero',
        english: 'Flatterer / Smooth talker',
        zhTW: '甜言蜜語的人',
        zhCN: '甜言蜜语的人',
        example: {
          tagalog: 'Huwag kang maniwala, bolero yan.',
          english: 'Don\'t believe him, he\'s a smooth talker.',
          zhTW: '別相信他，他很會甜言蜜語。',
          zhCN: '别相信他，他很会甜言蜜语。'
        }
      },
      {
        id: 'bol5',
        tagalog: 'Naks!',
        english: 'Wow! / Impressive!',
        zhTW: '哇！/ 好厲害！',
        zhCN: '哇！/ 好厉害！',
        example: {
          tagalog: 'Naks! Ang galing mo.',
          english: 'Wow! You are so good.',
          zhTW: '哇！你真棒。',
          zhCN: '哇！你真棒。'
        }
      }
    ]
  },
  {
    id: 'opinions-uncertainty',
    title: 'Opinions & Uncertainty',
    titleKey: 'topics.opinions-uncertainty',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'ewan1',
        tagalog: 'Sa tingin ko...',
        english: 'I think... / In my opinion...',
        zhTW: '我覺得... / 在我看來...',
        zhCN: '我觉得... / 在我看来...',
        example: {
          tagalog: 'Sa tingin ko tama ka.',
          english: 'I think you are right.',
          zhTW: '我覺得你是對的。',
          zhCN: '我觉得你是对的。'
        }
      },
      {
        id: 'ewan2',
        tagalog: 'Ewan ko',
        english: 'I don\'t know',
        zhTW: '我不知道',
        zhCN: '我不知道',
        example: {
          tagalog: 'Ewan ko kung nasaan siya.',
          english: 'I don\'t know where he/she is.',
          zhTW: '我不知道他/她在哪裡。',
          zhCN: '我不知道他/她在哪裡。'
        }
      },
      {
        id: 'ewan3',
        tagalog: 'Bahala na',
        english: 'Come what may / I\'ll leave it to fate',
        zhTW: '隨便啦 / 聽天由命',
        zhCN: '随便啦 / 听天由命',
        example: {
          tagalog: 'Bahala na si Batman.',
          english: 'Leave it to fate (Batman).',
          zhTW: '交給命運吧（蝙蝠俠）。',
          zhCN: '交给命运吧（蝙蝠侠）。'
        }
      },
      {
        id: 'ewan4',
        tagalog: 'Depende',
        english: 'It depends',
        zhTW: '看情況',
        zhCN: '看情况',
        example: {
          tagalog: 'Depende sa panahon.',
          english: 'It depends on the weather.',
          zhTW: '看天氣而定。',
          zhCN: '看天气而定。'
        }
      },
      {
        id: 'ewan5',
        tagalog: 'Sigurado ka?',
        english: 'Are you sure?',
        zhTW: '你確定嗎？',
        zhCN: '你确定吗？',
        example: {
          tagalog: 'Sigurado ka ba sa sagot mo?',
          english: 'Are you sure about your answer?',
          zhTW: '你確定你的答案嗎？',
          zhCN: '你确定你的答案吗？'
        }
      }
    ]
  },
  {
    id: 'hobbies-interests',
    title: 'Hobbies & Interests',
    titleKey: 'topics.hobbies-interests',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'hob1',
        tagalog: 'Mahilig ka ba sa...?',
        english: 'Are you fond of...? / Do you like...?',
        zhTW: '你喜歡...嗎？',
        zhCN: '你喜欢...吗？',
        example: {
          tagalog: 'Mahilig ka ba sa Karaoke?',
          english: 'Do you like Karaoke?',
          zhTW: '你喜歡卡拉OK嗎？',
          zhCN: '你喜欢卡拉OK吗？'
        }
      },
      {
        id: 'hob2',
        tagalog: 'Anong gusto mong gawin?',
        english: 'What do you want to do?',
        zhTW: '你想做什麼？',
        zhCN: '你想做什么？',
        example: {
          tagalog: 'Anong gusto mong gawin bukas?',
          english: 'What do you want to do tomorrow?',
          zhTW: '你明天想做什麼？',
          zhCN: '你明天想做什么？'
        }
      },
      {
        id: 'hob3',
        tagalog: 'Mag-travel',
        english: 'To travel',
        zhTW: '旅行',
        zhCN: '旅行',
        example: {
          tagalog: 'Gusto kong mag-travel sa Palawan.',
          english: 'I want to travel to Palawan.',
          zhTW: '我想去巴拉望旅行。',
          zhCN: '我想去巴拉望旅行。'
        }
      },
      {
        id: 'hob4',
        tagalog: 'Manood ng Netflix/Sine',
        english: 'Watch Netflix/Movies',
        zhTW: '看 Netflix/電影',
        zhCN: '看 Netflix/电影',
        example: {
          tagalog: 'Manood tayo ng sine.',
          english: 'Let\'s watch a movie.',
          zhTW: '我們去看電影吧。',
          zhCN: '我们去看电影吧。'
        }
      },
      {
        id: 'hob5',
        tagalog: 'Kumain',
        english: 'Eat',
        zhTW: '吃',
        zhCN: '吃',
        example: {
          tagalog: 'Mahilig akong kumain.',
          english: 'I love to eat.',
          zhTW: '我喜歡吃。',
          zhCN: '我喜欢吃。'
        }
      }
    ]
  },
  {
    id: 'modern-slang',
    title: 'Modern Slang (The "Street" Pack)',
    titleKey: 'topics.modern-slang',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'slang1',
        tagalog: 'Charot',
        english: 'Just kidding!',
        zhTW: '開玩笑的！',
        zhCN: '开玩笑的！',
        example: {
          tagalog: 'Ang ganda ko, charot!',
          english: 'I\'m beautiful, just kidding!',
          zhTW: '我真漂亮，開玩笑的！',
          zhCN: '我真漂亮，开玩笑的！'
        }
      },
      {
        id: 'slang2',
        tagalog: 'Chika',
        english: 'Gossip / Story',
        zhTW: '八卦 / 故事',
        zhCN: '八卦 / 故事',
        example: {
          tagalog: 'Anong chika ngayon?',
          english: 'What\'s the latest gossip?',
          zhTW: '最近有什麼八卦？',
          zhCN: '最近有什么八卦？'
        }
      },
      {
        id: 'slang3',
        tagalog: 'Lodi',
        english: 'Idol / Someone you admire',
        zhTW: '偶像',
        zhCN: '偶像',
        example: {
          tagalog: 'Ikaw ang lodi ko.',
          english: 'You are my idol.',
          zhTW: '你是我的偶像。',
          zhCN: '你是我的偶像。'
        }
      },
      {
        id: 'slang4',
        tagalog: 'Petmalu',
        english: 'Amazing / Extreme',
        zhTW: '厲害 / 猛',
        zhCN: '厉害 / 猛',
        example: {
          tagalog: 'Petmalu ang sayaw mo.',
          english: 'Your dancing is amazing.',
          zhTW: '你跳舞很厲害。',
          zhCN: '你跳舞很厉害。'
        }
      },
      {
        id: 'slang5',
        tagalog: 'Bes / Mars / Pards',
        english: 'Friend / Bestie terms',
        zhTW: '閨蜜 / 兄弟',
        zhCN: '闺蜜 / 兄弟',
        example: {
          tagalog: 'Kamusta ka na bes?',
          english: 'How are you bestie?',
          zhTW: '你好嗎，閨蜜？',
          zhCN: '你好吗，闺蜜？'
        }
      }
    ]
  },
  {
    id: 'work-school',
    title: 'Work & School (Introduction Expansion)',
    titleKey: 'topics.work-school',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'work1',
        tagalog: 'Anong trabaho mo?',
        english: 'What is your job?',
        zhTW: '你的工作是什麼？',
        zhCN: '你的工作是什么？',
        example: {
          tagalog: 'Anong trabaho mo sa Maynila?',
          english: 'What is your job in Manila?',
          zhTW: '你在馬尼拉做什麼工作？',
          zhCN: '你在马尼拉做什么工作？'
        }
      },
      {
        id: 'work2',
        tagalog: 'Estudyante',
        english: 'Student',
        zhTW: '學生',
        zhCN: '学生',
        example: {
          tagalog: 'Estudyante pa lang ako.',
          english: 'I am just a student.',
          zhTW: '我還只是個學生。',
          zhCN: '我还只是个学生。'
        }
      },
      {
        id: 'work3',
        tagalog: 'Opisina',
        english: 'Office',
        zhTW: '辦公室',
        zhCN: '办公室',
        example: {
          tagalog: 'Nasa opisina ako ngayon.',
          english: 'I am at the office now.',
          zhTW: '我現在在辦公室。',
          zhCN: '我现在在办公室。'
        }
      },
      {
        id: 'work4',
        tagalog: 'Pagod',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          tagalog: 'Pagod ako sa work.',
          english: 'I\'m tired from work.',
          zhTW: '我工作很累。',
          zhCN: '我工作很累。'
        }
      },
      {
        id: 'work5',
        tagalog: 'Bakasyon',
        english: 'Vacation',
        zhTW: '假期 / 度假',
        zhCN: '假期 / 度假',
        example: {
          tagalog: 'Kailangan ko ng bakasyon.',
          english: 'I need a vacation.',
          zhTW: '我需要休假。',
          zhCN: '我需要休假。'
        }
      }
    ]
  },
  {
    id: 'love-dating',
    title: 'Love & Dating (The "Kilig" Pack)',
    titleKey: 'topics.love-dating',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'luv1',
        tagalog: 'Crush kita',
        english: 'I have a crush on you',
        zhTW: '我暗戀你',
        zhCN: '我暗恋你',
        example: {
          tagalog: 'Alam mo ba, crush kita?',
          english: 'Do you know, I have a crush on you?',
          zhTW: '你知道嗎，我暗戀你？',
          zhCN: '你知道吗，我暗恋你？'
        }
      },
      {
        id: 'luv2',
        tagalog: 'Kilig',
        english: 'Romantic excitement / butterflies',
        zhTW: '心動 / 小鹿亂撞',
        zhCN: '心动 / 小鹿乱撞',
        example: {
          tagalog: 'Kinikilig ako sa iyo.',
          english: 'I\'m feeling giddy because of you.',
          zhTW: '因為你，我感到心動。',
          zhCN: '因为你，我感到心动。'
        }
      },
      {
        id: 'luv3',
        tagalog: 'Miss na kita',
        english: 'I miss you already',
        zhTW: '我想你了',
        zhCN: '我想你了',
        example: {
          tagalog: 'Umuwi ka na, miss na kita.',
          english: 'Come home now, I miss you.',
          zhTW: '快回家吧，我想你了。',
          zhCN: '快回家吧，我想你了。'
        }
      },
      {
        id: 'luv4',
        tagalog: 'Single ka ba?',
        english: 'Are you single?',
        zhTW: '你單身嗎？',
        zhCN: '你单身吗？',
        example: {
          tagalog: 'Single ka ba o may boyfriend na?',
          english: 'Are you single or do you have a boyfriend?',
          zhTW: '你單身還是有男朋友了？',
          zhCN: '你单身还是有男朋友了？'
        }
      },
      {
        id: 'luv5',
        tagalog: 'Date tayo?',
        english: 'Let\'s go on a date?',
        zhTW: '我們去約會吧？',
        zhCN: '我们去约会吧？',
        example: {
          tagalog: 'Pwede ba, date tayo bukas?',
          english: 'Is it okay, let\'s go on a date tomorrow?',
          zhTW: '可以嗎，我們明天去約會？',
          zhCN: '可以吗，我们明天去约会？'
        }
      }
    ]
  },
  {
    id: 'conflict-reconciliation',
    title: 'Conflict & Reconciliation (The "Tampo" Pack)',
    titleKey: 'topics.conflict-reconciliation',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'confl1',
        tagalog: 'Nagtatampo ka ba?',
        english: 'Are you sulking/upset with me?',
        zhTW: '你在生悶氣嗎？',
        zhCN: '你在生闷气吗？',
        example: {
          tagalog: 'Bakit tahimik ka? Nagtatampo ka ba?',
          english: 'Why are you quiet? Are you sulking?',
          zhTW: '為什麼你這麼安靜？你在生悶氣嗎？',
          zhCN: '为什么你这么安静？你在生闷气吗？'
        }
      },
      {
        id: 'confl2',
        tagalog: 'Galit ka ba?',
        english: 'Are you angry?',
        zhTW: '你生氣了嗎？',
        zhCN: '你生气了吗？',
        example: {
          tagalog: 'Galit ka ba sa akin?',
          english: 'Are you angry with me?',
          zhTW: '你在生我的氣嗎？',
          zhCN: '你在生我的气吗？'
        }
      },
      {
        id: 'confl3',
        tagalog: 'Bati na tayo',
        english: 'Let\'s make up / Let\'s be friends again',
        zhTW: '我們和好吧',
        zhCN: '我们和好吧',
        example: {
          tagalog: 'Sige na, bati na tayo.',
          english: 'Come on, let\'s make up.',
          zhTW: '好了啦，我們和好吧。',
          zhCN: '好了啦，我们和好吧。'
        }
      },
      {
        id: 'confl4',
        tagalog: 'Sorry na',
        english: 'I\'m sorry / Come on, forgive me',
        zhTW: '對不起啦',
        zhCN: '对不起啦',
        example: {
          tagalog: 'Sorry na, hindi ko sinasadya.',
          english: 'I\'m sorry, I didn\'t mean it.',
          zhTW: '對不起啦，我不是故意的。',
          zhCN: '对不起啦，我不是故意的。'
        }
      },
      {
        id: 'confl5',
        tagalog: 'Lambing',
        english: 'Affection / Coaxing',
        zhTW: '撒嬌 / 哄',
        zhCN: '撒娇 / 哄',
        example: {
          tagalog: 'Kunting lambing lang, okay na siya.',
          english: 'Just a little coaxing, he/she will be okay.',
          zhTW: '只要稍微哄一下，他/她就會好了。',
          zhCN: '只要稍微哄一下，他/她就会好了。'
        }
      }
    ]
  },
  {
    id: 'drinking-celebrations',
    title: 'Drinking & Celebrations (The "Tagay" Pack)',
    titleKey: 'topics.drinking-celebrations',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'drink1',
        tagalog: 'Tagay!',
        english: 'Cheers! / Your turn to drink',
        zhTW: '乾杯！/ 換你喝了',
        zhCN: '干杯！/ 换你喝了',
        example: {
          tagalog: 'Tagay na! Ikaw na ang iinom.',
          english: 'Cheers! It\'s your turn to drink.',
          zhTW: '乾杯！換你喝了。',
          zhCN: '干杯！换你喝了。'
        }
      },
      {
        id: 'drink2',
        tagalog: 'Pulutan',
        english: 'Food eaten while drinking',
        zhTW: '下酒菜',
        zhCN: '下酒菜',
        example: {
          tagalog: 'Masarap ang sisig bilang pulutan.',
          english: 'Sisig is delicious as food for drinking.',
          zhTW: 'Sisig 很好吃，適合當下酒菜。',
          zhCN: 'Sisig 很好吃，适合当下酒菜。'
        }
      },
      {
        id: 'drink3',
        tagalog: 'Lasing na ako',
        english: 'I\'m drunk already',
        zhTW: '我醉了',
        zhCN: '我醉了',
        example: {
          tagalog: 'Tama na, lasing na ako.',
          english: 'Enough, I\'m drunk already.',
          zhTW: '夠了，我已經醉了。',
          zhCN: '够了，我已经醉了。'
        }
      },
      {
        id: 'drink4',
        tagalog: 'Konti lang',
        english: 'Just a little bit',
        zhTW: '一點點就好',
        zhCN: '一点点就好',
        example: {
          tagalog: 'Pahingi ng beer, konti lang.',
          english: 'Give me beer, just a little bit.',
          zhTW: '給我一點啤酒，一點點就好。',
          zhCN: '给我一点啤酒，一点点就好。'
        }
      },
      {
        id: 'drink5',
        tagalog: 'Maligayang Bati!',
        english: 'Happy Birthday / Greetings!',
        zhTW: '生日快樂！/ 祝賀！',
        zhCN: '生日快乐！/ 祝贺！',
        example: {
          tagalog: 'Maligayang bati sa iyong kaarawan!',
          english: 'Happy greetings on your birthday!',
          zhTW: '祝你生日快樂！',
          zhCN: '祝你生日快乐！'
        }
      }
    ]
  },
  {
    id: 'storytelling-connectors',
    title: 'Storytelling Connectors (The "Kwento" Pack)',
    titleKey: 'topics.storytelling-connectors',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'story1',
        tagalog: 'Alam mo ba...',
        english: 'Do you know... / Guess what...',
        zhTW: '你知道嗎...',
        zhCN: '你知道吗...',
        example: {
          tagalog: 'Alam mo ba ang nangyari kahapon?',
          english: 'Do you know what happened yesterday?',
          zhTW: '你知道昨天發生了什麼事嗎？',
          zhCN: '你知道昨天发生了什么事吗？'
        }
      },
      {
        id: 'story2',
        tagalog: 'Tapos...',
        english: 'And then...',
        zhTW: '然後...',
        zhCN: '然后...',
        example: {
          tagalog: 'Kumain kami, tapos nanood ng sine.',
          english: 'We ate, and then watched a movie.',
          zhTW: '我們吃了飯，然後看了電影。',
          zhCN: '我们吃了饭，然后看了电影。'
        }
      },
      {
        id: 'story3',
        tagalog: 'Bigla...',
        english: 'Suddenly...',
        zhTW: '突然...',
        zhCN: '突然...',
        example: {
          tagalog: 'Bigla siyang umalis.',
          english: 'He/She suddenly left.',
          zhTW: '他/她突然離開了。',
          zhCN: '他/她突然离开了。'
        }
      },
      {
        id: 'story4',
        tagalog: 'Punyeta',
        english: 'Damn it! (Vulgar)',
        zhTW: '該死！(粗俗)',
        zhCN: '该死！(粗俗)',
        example: {
          tagalog: 'Punyeta! Nakalimutan ko ang susi.',
          english: 'Damn it! I forgot the key.',
          zhTW: '該死！我忘了鑰匙。',
          zhCN: '该死！我忘了钥匙。'
        }
      },
      {
        id: 'story5',
        tagalog: 'Di nga?',
        english: 'For real? / No way?',
        zhTW: '真的嗎？ / 不會吧？',
        zhCN: '真的吗？ / 不会吧？',
        example: {
          tagalog: 'Nanalo siya? Di nga?',
          english: 'He/She won? For real?',
          zhTW: '他/她贏了？真的嗎？',
          zhCN: '他/她赢了？真的吗？'
        }
      }
    ]
  },
  {
    id: 'animals',
    title: 'Animals',
    titleKey: 'topics.animals',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'ani1',
        tagalog: 'Aso',
        english: 'Dog',
        zhTW: '狗',
        zhCN: '狗',
        example: {
          tagalog: 'Mabait ang aso.',
          english: 'The dog is kind.',
          zhTW: '狗狗很乖。',
          zhCN: '狗狗很乖。'
        }
      },
      {
        id: 'ani2',
        tagalog: 'Pusa',
        english: 'Cat',
        zhTW: '貓',
        zhCN: '猫',
        example: {
          tagalog: 'Natutulog ang pusa.',
          english: 'The cat is sleeping.',
          zhTW: '貓在睡覺。',
          zhCN: '猫在睡觉。'
        }
      },
      {
        id: 'ani3',
        tagalog: 'Ibon',
        english: 'Bird',
        zhTW: '鳥',
        zhCN: '鸟',
        example: {
          tagalog: 'Lumilipad ang ibon.',
          english: 'The bird is flying.',
          zhTW: '鳥在飛。',
          zhCN: '鸟在飞。'
        }
      },
      {
        id: 'ani4',
        tagalog: 'Baboy',
        english: 'Pig',
        zhTW: '豬',
        zhCN: '猪',
        example: {
          tagalog: 'Mataba ang baboy.',
          english: 'The pig is fat.',
          zhTW: '豬很胖。',
          zhCN: '猪很胖。'
        }
      },
      {
        id: 'ani5',
        tagalog: 'Baka',
        english: 'Cow',
        zhTW: '牛',
        zhCN: '牛',
        example: {
          tagalog: 'Kumakain ng damo ang baka.',
          english: 'The cow is eating grass.',
          zhTW: '牛在吃草。',
          zhCN: '牛在吃草。'
        }
      },
      {
        id: 'ani6',
        tagalog: 'Kalabaw',
        english: 'Carabao / Water Buffalo',
        zhTW: '水牛',
        zhCN: '水牛',
        example: {
          tagalog: 'Ang kalabaw ay masipag.',
          english: 'The carabao is hardworking.',
          zhTW: '水牛很勤勞。',
          zhCN: '水牛很勤劳。'
        }
      },
      {
        id: 'ani7',
        tagalog: 'Ahas',
        english: 'Snake',
        zhTW: '蛇',
        zhCN: '蛇',
        example: {
          tagalog: 'Nakakatakot ang ahas.',
          english: 'The snake is scary.',
          zhTW: '蛇很可怕。',
          zhCN: '蛇很可怕。'
        }
      },
      {
        id: 'ani8',
        tagalog: 'Daga',
        english: 'Mouse / Rat',
        zhTW: '老鼠',
        zhCN: '老鼠',
        example: {
          tagalog: 'Mabilis tumakbo ang daga.',
          english: 'The mouse runs fast.',
          zhTW: '老鼠跑得很快。',
          zhCN: '老鼠跑得很快。'
        }
      },
      {
        id: 'ani9',
        tagalog: 'Lamok',
        english: 'Mosquito',
        zhTW: '蚊子',
        zhCN: '蚊子',
        example: {
          tagalog: 'Maraming lamok kagabi.',
          english: 'There were many mosquitoes last night.',
          zhTW: '昨晚有很多蚊子。',
          zhCN: '昨晚有很多蚊子。'
        }
      },
      {
        id: 'ani10',
        tagalog: 'Ipis',
        english: 'Cockroach',
        zhTW: '蟑螂',
        zhCN: '蟑螂',
        example: {
          tagalog: 'Patayin mo ang ipis.',
          english: 'Kill the cockroach.',
          zhTW: '把蟑螂打死。',
          zhCN: '把蟑螂打死。'
        }
      },
      {
        id: 'ani11',
        tagalog: 'Unggoy',
        english: 'Monkey',
        zhTW: '猴子',
        zhCN: '猴子',
        example: {
          tagalog: 'Makulit ang unggoy.',
          english: 'The monkey is naughty.',
          zhTW: '猴子很調皮。',
          zhCN: '猴子很调皮。'
        }
      },
      {
        id: 'ani12',
        tagalog: 'Kambing',
        english: 'Goat',
        zhTW: '山羊',
        zhCN: '山羊',
        example: {
          tagalog: 'May kambing sa bukid.',
          english: 'There is a goat in the farm.',
          zhTW: '田裡有山羊。',
          zhCN: '田里有山羊。'
        }
      }
    ]
  }
];
