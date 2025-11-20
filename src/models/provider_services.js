export const provider_services = {
  name: 'provider_services',
  color: 'bg-emerald-50 border-emerald-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
    { name: 'serviceName', type: 'String', constraint: 'Required' },
    { name: 'serviceCategory', type: 'String', constraint: 'Required (e.g., صيانة, كهرباء, ميكانيك)' },
    { name: 'description', type: 'String', constraint: 'Optional' },
    { name: 'basePrice', type: 'Number', constraint: 'Required' },
    { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
    { name: 'metadata', type: 'Object', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  ],
  indexes: ['providerId + isActive', 'serviceCategory']
};
