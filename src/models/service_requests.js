export const service_requests = {
  name: 'service_requests',
  color: 'bg-purple-50 border-purple-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
    { name: 'serviceId', type: 'ObjectId', constraint: 'Optional, FK -> provider_services._id' },
    { name: 'vehicleId', type: 'ObjectId', constraint: 'Optional, FK -> vehicles._id' },
    { name: 'status', type: 'String', constraint: 'Enum: [PENDING, ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED, FAILED], Default: PENDING' },
    { name: 'pickupLat', type: 'Number', constraint: 'Optional' },
    { name: 'pickupLng', type: 'Number', constraint: 'Optional' },
    { name: 'pickupAddress', type: 'String', constraint: 'Optional' },
    { name: 'notes', type: 'String', constraint: 'Optional, Text' },
    { name: 'priceEstimate', type: 'Number', constraint: 'Optional' },
    { name: 'finalPrice', type: 'Number', constraint: 'Optional' },
    { name: 'startedAt', type: 'Date', constraint: 'Optional' },
    { name: 'finishedAt', type: 'Date', constraint: 'Optional' },
    { name: 'ratingRequested', type: 'Boolean', constraint: 'Default: false' },
    { name: 'ratingRequestedAt', type: 'Date', constraint: 'Optional' },
    { name: 'cancelledBy', type: 'String', constraint: 'Optional' },
    { name: 'cancellationReason', type: 'String', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  ],
  indexes: ['userId + status', 'providerId + status', 'status + createdAt']
};
