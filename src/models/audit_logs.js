export const audit_logs = {
  name: 'audit_logs',
  color: 'bg-amber-50 border-amber-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'Optional, FK -> users._id, Index' },
    { name: 'action', type: 'String', constraint: 'Enum: many actions (LOGIN, LOGOUT, CREATE, UPDATE, ...)' },
    { name: 'entity', type: 'String', constraint: 'Entity name (e.g., users, providers)' },
    { name: 'entityId', type: 'String', constraint: 'Entity record id' },
    { name: 'changes', type: 'Object', constraint: 'Optional, JSON diff' },
    { name: 'metadata', type: 'Object', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
  ],
  indexes: ['userId + createdAt', 'action + createdAt', 'entity + entityId']
};
