export const ratings = {
  name: 'ratings',
  color: 'bg-yellow-50 border-yellow-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
    { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Unique' },
    { name: 'rating', type: 'Number', constraint: 'Required, Min: 1, Max: 5' },
    { name: 'comment', type: 'String', constraint: 'Optional, Max: 500 chars' },
    { name: 'pointsEarned', type: 'Number', constraint: 'Default: 0' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
  ],
  indexes: ['userId', 'providerId', 'serviceRequestId (unique)', 'createdAt (desc)']
};
