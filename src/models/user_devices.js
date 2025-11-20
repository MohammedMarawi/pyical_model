export const user_devices = {
  name: 'user_devices',
  color: 'bg-slate-50 border-slate-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'deviceId', type: 'String', constraint: 'Required' },
    { name: 'deviceName', type: 'String', constraint: 'Required' },
    { name: 'deviceType', type: 'String', constraint: 'Optional' },
    { name: 'firstSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'firstSeenIp', type: 'String', constraint: 'Optional' },
    { name: 'lastSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'lastSeenIp', type: 'String', constraint: 'Optional' },
    { name: 'isTrusted', type: 'Boolean', constraint: 'Default: false' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['userId + deviceId (unique)', 'userId']
};
