import express from 'express';
import { users, documents } from './data.js';
import { canViewDocument, canEditDocument } from './policies.js';
import { authorize } from './authorize.js';

const app = express();
app.use(express.json());

// Fake auth middleware
app.use((req, res, next) => {
  req.user = users.alice; // Switch to users.bob to test admin
  next();
});

// View document
app.get(
  '/documents/:id',
  authorize(canViewDocument, req => documents.find(doc => doc.id === req.params.id)),
  (req, res) => {
    res.json({ message: 'Document fetched', document: req.resource });
  }
);

// Edit document
app.put(
  '/documents/:id',
  authorize(canEditDocument, req => documents.find(doc => doc.id === req.params.id)),
  (req, res) => {
    res.json({ message: 'Document updated successfully', document: req.resource });
  }
);

app.listen(4000, () => console.log('Server running on port 4000'));
