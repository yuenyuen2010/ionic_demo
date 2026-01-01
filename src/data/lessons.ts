export interface Flashcard {
  id: string;
  tagalog: string;
  english: string;
}

export interface Category {
  id: string;
  title: string;
  titleKey: string; // Add titleKey
  cards: Flashcard[];
}

export const lessons: Category[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    titleKey: 'topics.greetings',
    cards: [
      { id: '1', tagalog: 'Kumusta?', english: 'How are you?' },
      { id: '2', tagalog: 'Mabuti', english: 'Fine / Good' },
      { id: '3', tagalog: 'Salamat', english: 'Thank you' },
      { id: '4', tagalog: 'Walang anuman', english: 'You\'re welcome' },
      { id: '5', tagalog: 'Magandang umaga', english: 'Good morning' },
      { id: '6', tagalog: 'Magandang hapon', english: 'Good afternoon' },
      { id: '7', tagalog: 'Magandang gabi', english: 'Good evening' },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    titleKey: 'topics.numbers',
    cards: [
      { id: 'n1', tagalog: 'Isa', english: 'One' },
      { id: 'n2', tagalog: 'Dalawa', english: 'Two' },
      { id: 'n3', tagalog: 'Tatlo', english: 'Three' },
      { id: 'n4', tagalog: 'Apat', english: 'Four' },
      { id: 'n5', tagalog: 'Lima', english: 'Five' },
    ]
  },
  {
    id: 'common-phrases',
    title: 'Common Phrases',
    titleKey: 'topics.common-phrases',
    cards: [
      { id: 'c1', tagalog: 'Opo / Oo', english: 'Yes' },
      { id: 'c2', tagalog: 'Hindi', english: 'No' },
      { id: 'c3', tagalog: 'Ano ito?', english: 'What is this?' },
      { id: 'c4', tagalog: 'Magkano ito?', english: 'How much is this?' },
      { id: 'c5', tagalog: 'Masarap', english: 'Delicious' },
    ]
  },
  {
    id: 'family',
    title: 'Family',
    titleKey: 'topics.family',
    cards: [
      { id: 'f1', tagalog: 'Tatay', english: 'Father' },
      { id: 'f2', tagalog: 'Nanay', english: 'Mother' },
      { id: 'f3', tagalog: 'Kapatid', english: 'Sibling' },
      { id: 'f4', tagalog: 'Kuya', english: 'Older Brother' },
      { id: 'f5', tagalog: 'Ate', english: 'Older Sister' },
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleKey: 'topics.colors',
    cards: [
      { id: 'col1', tagalog: 'Pula', english: 'Red' },
      { id: 'col2', tagalog: 'Asul', english: 'Blue' },
      { id: 'col3', tagalog: 'Dilaw', english: 'Yellow' },
      { id: 'col4', tagalog: 'Puti', english: 'White' },
      { id: 'col5', tagalog: 'Itim', english: 'Black' },
    ]
  },
  {
    id: 'food',
    title: 'Food',
    titleKey: 'topics.food',
    cards: [
      { id: 'fd1', tagalog: 'Kanin', english: 'Rice' },
      { id: 'fd2', tagalog: 'Tubig', english: 'Water' },
      { id: 'fd3', tagalog: 'Tinapay', english: 'Bread' },
      { id: 'fd4', tagalog: 'Manok', english: 'Chicken' },
      { id: 'fd5', tagalog: 'Isda', english: 'Fish' },
    ]
  }
];
