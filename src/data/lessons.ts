export interface Flashcard {
  id: string;
  tagalog: string;
  english: string;
}

export interface Category {
  id: string;
  title: string;
  cards: Flashcard[];
}

export const lessons: Category[] = [
  {
    id: 'greetings',
    title: 'Greetings',
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
    cards: [
      { id: 'c1', tagalog: 'Opo / Oo', english: 'Yes' },
      { id: 'c2', tagalog: 'Hindi', english: 'No' },
      { id: 'c3', tagalog: 'Ano ito?', english: 'What is this?' },
      { id: 'c4', tagalog: 'Magkano ito?', english: 'How much is this?' },
      { id: 'c5', tagalog: 'Masarap', english: 'Delicious' },
    ]
  }
];

