export const service_history = {
  name: 'service_history',
  color: 'bg-red-50 border-red-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
    { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Index' },
    { name: 'serviceType', type: 'String', constraint: 'Required, Index' },
    { name: 'price', type: 'Number', constraint: 'Required' },
    { name: 'rating', type: 'Number', constraint: 'Min: 1, Max: 5' },
    { name: 'paymentMethod', type: 'String', constraint: 'Required' },
    { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'completedAt', type: 'Date', constraint: 'Required, Index' },
    { name: 'notes', type: 'String', constraint: 'Optional' },
    { name: 'invoiceUrl', type: 'String', constraint: 'Optional' }
  ],
  indexes: ['userId', 'providerId', 'serviceType', 'completedAt (desc)', 'rating']
};
