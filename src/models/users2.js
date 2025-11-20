export const users2 = {
  name: 'users',
  color: 'bg-blue-50 border-blue-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'name', type: 'String', constraint: 'Required, Index' },
    { name: 'email', type: 'String', constraint: 'Required, Unique, Index' },
    { name: 'phone', type: 'String', constraint: 'Required, Unique' },
    { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['email (unique)', 'phone (unique)', 'location (2dsphere)']
};
