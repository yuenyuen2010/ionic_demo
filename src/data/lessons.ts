export interface Flashcard {
  id: string;
  tagalog: string;
  english: string;
  zhTW: string;
  zhCN: string;
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
      { id: '1', tagalog: 'Kumusta?', english: 'How are you?', zhTW: '你好嗎？', zhCN: '你好吗？' },
      { id: '2', tagalog: 'Mabuti', english: 'Fine / Good', zhTW: '很好', zhCN: '很好' },
      { id: '3', tagalog: 'Salamat', english: 'Thank you', zhTW: '謝謝', zhCN: '谢谢' },
      { id: '4', tagalog: 'Walang anuman', english: 'You\'re welcome', zhTW: '不客氣', zhCN: '不客气' },
      { id: '5', tagalog: 'Magandang umaga', english: 'Good morning', zhTW: '早安', zhCN: '早安' },
      { id: '6', tagalog: 'Magandang hapon', english: 'Good afternoon', zhTW: '午安', zhCN: '午安' },
      { id: '7', tagalog: 'Magandang gabi', english: 'Good evening', zhTW: '晚安', zhCN: '晚安' },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    titleKey: 'topics.numbers',
    cards: [
      { id: 'n1', tagalog: 'Isa', english: 'One', zhTW: '一', zhCN: '一' },
      { id: 'n2', tagalog: 'Dalawa', english: 'Two', zhTW: '二', zhCN: '二' },
      { id: 'n3', tagalog: 'Tatlo', english: 'Three', zhTW: '三', zhCN: '三' },
      { id: 'n4', tagalog: 'Apat', english: 'Four', zhTW: '四', zhCN: '四' },
      { id: 'n5', tagalog: 'Lima', english: 'Five', zhTW: '五', zhCN: '五' },
    ]
  },
  {
    id: 'common-phrases',
    title: 'Common Phrases',
    titleKey: 'topics.common-phrases',
    cards: [
      { id: 'c1', tagalog: 'Opo / Oo', english: 'Yes', zhTW: '是', zhCN: '是' },
      { id: 'c2', tagalog: 'Hindi', english: 'No', zhTW: '不', zhCN: '不' },
      { id: 'c3', tagalog: 'Ano ito?', english: 'What is this?', zhTW: '這是什麼？', zhCN: '这是什么？' },
      { id: 'c4', tagalog: 'Magkano ito?', english: 'How much is this?', zhTW: '這個多少錢？', zhCN: '这个多少钱？' },
      { id: 'c5', tagalog: 'Masarap', english: 'Delicious', zhTW: '好吃', zhCN: '好吃' },
    ]
  },
  {
    id: 'family',
    title: 'Family',
    titleKey: 'topics.family',
    cards: [
      { id: 'f1', tagalog: 'Tatay', english: 'Father', zhTW: '父親', zhCN: '父亲' },
      { id: 'f2', tagalog: 'Nanay', english: 'Mother', zhTW: '母親', zhCN: '母亲' },
      { id: 'f3', tagalog: 'Kapatid', english: 'Sibling', zhTW: '兄弟姊妹', zhCN: '兄弟姐妹' },
      { id: 'f4', tagalog: 'Kuya', english: 'Older Brother', zhTW: '哥哥', zhCN: '哥哥' },
      { id: 'f5', tagalog: 'Ate', english: 'Older Sister', zhTW: '姊姊', zhCN: '姐姐' },
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleKey: 'topics.colors',
    cards: [
      { id: 'col1', tagalog: 'Pula', english: 'Red', zhTW: '紅色', zhCN: '红色' },
      { id: 'col2', tagalog: 'Asul', english: 'Blue', zhTW: '藍色', zhCN: '蓝色' },
      { id: 'col3', tagalog: 'Dilaw', english: 'Yellow', zhTW: '黃色', zhCN: '黄色' },
      { id: 'col4', tagalog: 'Puti', english: 'White', zhTW: '白色', zhCN: '白色' },
      { id: 'col5', tagalog: 'Itim', english: 'Black', zhTW: '黑色', zhCN: '黑色' },
    ]
  },
  {
    id: 'food',
    title: 'Food',
    titleKey: 'topics.food',
    cards: [
      { id: 'fd1', tagalog: 'Kanin', english: 'Rice', zhTW: '米飯', zhCN: '米饭' },
      { id: 'fd2', tagalog: 'Tubig', english: 'Water', zhTW: '水', zhCN: '水' },
      { id: 'fd3', tagalog: 'Tinapay', english: 'Bread', zhTW: '麵包', zhCN: '面包' },
      { id: 'fd4', tagalog: 'Manok', english: 'Chicken', zhTW: '雞肉', zhCN: '鸡肉' },
      { id: 'fd5', tagalog: 'Isda', english: 'Fish', zhTW: '魚', zhCN: '鱼' },
    ]
  }
];
