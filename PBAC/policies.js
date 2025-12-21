export const canViewDocument = (user, doc) => {
  return doc.isPublic || doc.ownerId === user.id || user.role === 'admin';
};

export const canEditDocument = (user, doc) => {
  return doc.ownerId === user.id || user.role === 'admin';
};


// policies could be n.. number 
