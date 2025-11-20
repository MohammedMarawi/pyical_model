export const chats = {
  name: 'chats',
  color: 'bg-rose-50 border-rose-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'customerId', type: 'ObjectId', constraint: 'FK -> users._id, Required' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required' },
    { name: 'lastMessage', type: 'String', constraint: 'Optional' },
    { name: 'lastMessageAt', type: 'Date', constraint: 'Optional' },
    { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
    { name: 'archived', type: 'Boolean', constraint: 'Default: false' },
    { name: 'isMuted', type: 'Boolean', constraint: 'Default: false' },
    { name: 'lastSeenMessageId', type: 'String', constraint: 'Optional' },
    { name: 'lastTypingAt', type: 'Date', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  ],
  indexes: ['customerId + providerId (unique)', 'customerId + updatedAt', 'providerId + updatedAt']
};
