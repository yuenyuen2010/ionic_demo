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
  cards: Flashcard[];
}

export const lessons: Category[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    titleKey: 'topics.greetings',
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
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    titleKey: 'topics.numbers',
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
    ]
  },
  {
    id: 'common-phrases',
    title: 'Common Phrases',
    titleKey: 'topics.common-phrases',
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
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleKey: 'topics.colors',
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
  }
];
