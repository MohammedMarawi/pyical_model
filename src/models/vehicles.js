export const vehicles = {
  name: 'vehicles',
  color: 'bg-sky-50 border-sky-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'make', type: 'String', constraint: 'Required' },
    { name: 'model', type: 'String', constraint: 'Required' },
    { name: 'year', type: 'Number', constraint: 'Required' },
    { name: 'color', type: 'String', constraint: 'Optional' },
    { name: 'plateNumber', type: 'String', constraint: 'Required, Unique' },
    { name: 'vin', type: 'String', constraint: 'Optional, Unique' },
    { name: 'serviceDueAt', type: 'Date', constraint: 'Optional' },
    { name: 'isDefault', type: 'Boolean', constraint: 'Default: false' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
    { name: 'deletedAt', type: 'Date', constraint: 'Optional' }
  ],
  indexes: ['userId', 'deletedAt', 'plateNumber (unique)', 'vin (unique)']
};
