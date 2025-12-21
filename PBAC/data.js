export const users = {
  alice: { id: 'u1', name: 'Alice', role: 'user' },
  bob: { id: 'u2', name: 'Bob', role: 'admin' }
};

export const documents = [
  { id: 'doc1', ownerId: 'u1', title: 'Alice\'s Document', isPublic: false },
  { id: 'doc2', ownerId: 'u2', title: 'Bob\'s Public Doc', isPublic: true }
];