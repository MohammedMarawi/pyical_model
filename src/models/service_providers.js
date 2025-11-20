export const service_providers = {
  name: 'service_providers',
  color: 'bg-green-50 border-green-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'name', type: 'String', constraint: 'Required, Index' },
    { name: 'email', type: 'String', constraint: 'Required, Unique' },
    { name: 'phone', type: 'String', constraint: 'Required, Unique' },
    { name: 'services', type: 'Array[String]', constraint: 'Required' },
    { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'averageRating', type: 'Number', constraint: 'Default: 0, Min: 0, Max: 5' },
    { name: 'totalRatings', type: 'Number', constraint: 'Default: 0' },
    { name: 'isAvailable', type: 'Boolean', constraint: 'Default: true, Index' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['location (2dsphere)', 'isAvailable', 'averageRating (desc)', 'email (unique)']
};
