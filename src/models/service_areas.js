export const service_areas = {
  name: 'service_areas',
  color: 'bg-cyan-50 border-cyan-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
    { name: 'city', type: 'String', constraint: 'Required, Index' },
    { name: 'district', type: 'String', constraint: 'Optional' },
    { name: 'radius', type: 'Number', constraint: 'Optional (km)' },
    { name: 'isActive', type: 'Boolean', constraint: 'Default: true' }
  ],
  indexes: ['providerId + city', 'city']
};
