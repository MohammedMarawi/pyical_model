export const user_sessions = {
  name: 'user_sessions',
  color: 'bg-indigo-50 border-indigo-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'refreshToken', type: 'String', constraint: 'Required, Unique, Index' },
    { name: 'accessToken', type: 'String', constraint: 'Optional' },
    { name: 'deviceId', type: 'String', constraint: 'Required' },
    { name: 'deviceName', type: 'String', constraint: 'Required' },
    { name: 'ipAddress', type: 'String', constraint: 'Optional' },
    { name: 'userAgent', type: 'String', constraint: 'Optional' },
    { name: 'location', type: 'Object', constraint: 'Optional, JSON' },
    { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
    { name: 'lastActivityAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'expiresAt', type: 'Date', constraint: 'Required, Index' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['userId + isActive', 'refreshToken (unique)', 'expiresAt']
};
