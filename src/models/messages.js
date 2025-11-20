export const messages = {
  name: 'messages',
  color: 'bg-emerald-100 border-emerald-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'chatId', type: 'ObjectId', constraint: 'FK -> chats._id, Required, Index' },
    { name: 'senderId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'type', type: 'String', constraint: 'Enum: [TEXT, IMAGE, FILE, LOCATION, SYSTEM], Default: TEXT' },
    { name: 'content', type: 'String', constraint: 'Required, Text' },
    { name: 'metadata', type: 'Object', constraint: 'Optional, JSON' },
    { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
    { name: 'readAt', type: 'Date', constraint: 'Optional' },
    { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
    { name: 'editedAt', type: 'Date', constraint: 'Optional' },
    { name: 'reactions', type: 'Object', constraint: 'Optional, JSON' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
  ],
  indexes: ['chatId + createdAt', 'senderId']
};
