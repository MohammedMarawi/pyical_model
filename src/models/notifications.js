export const notifications = {
  name: 'notifications',
  color: 'bg-lime-50 border-lime-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'type', type: 'String', constraint: 'Enum: [INFO, WARNING, ALERT, PROMOTION, SECURITY]' },
    { name: 'title', type: 'String', constraint: 'Required' },
    { name: 'body', type: 'String', constraint: 'Required' },
    { name: 'data', type: 'Object', constraint: 'Optional, JSON' },
    { name: 'priority', type: 'String', constraint: 'Optional' },
    { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
    { name: 'readAt', type: 'Date', constraint: 'Optional' },
    { name: 'isPushed', type: 'Boolean', constraint: 'Default: false' },
    { name: 'pushedAt', type: 'Date', constraint: 'Optional' },
    { name: 'scheduledAt', type: 'Date', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
  ],
  indexes: ['userId + isRead + createdAt', 'userId + type']
};
