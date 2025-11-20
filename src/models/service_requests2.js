export const service_requests2 = {
  name: 'service_requests',
  color: 'bg-purple-50 border-purple-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Index' },
    { name: 'serviceType', type: 'String', constraint: 'Required, Index' },
    { name: 'status', type: 'String', constraint: 'Enum: [pending, accepted, in_progress, completed, cancelled]' },
    { name: 'userLocation', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'providerLocation', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'price', type: 'Number', constraint: 'Required, Min: 0' },
    { name: 'requestedAt', type: 'Date', constraint: 'Default: Date.now(), Index' },
    { name: 'completedAt', type: 'Date', constraint: 'Nullable' },
    { name: 'notes', type: 'String', constraint: 'Optional' }
  ],
  indexes: ['userId', 'providerId', 'status', 'requestedAt (desc)', 'userLocation (2dsphere)']
};
