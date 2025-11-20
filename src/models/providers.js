export const providers = {
  name: 'providers',
  color: 'bg-green-50 border-green-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'Required, Unique, FK -> users._id, Index' },
    { name: 'businessName', type: 'String', constraint: 'Required' },
    { name: 'ownerName', type: 'String', constraint: 'Required' },
    { name: 'contactPhone', type: 'String', constraint: 'Required' },
    { name: 'locationCity', type: 'String', constraint: 'Required' },
    { name: 'contactEmail', type: 'String', constraint: 'Optional' },
    { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
    { name: 'locationAddress', type: 'String', constraint: 'Required' },
    { name: 'servicesText', type: 'String', constraint: 'Required' },
    { name: 'totalServices', type: 'Number', constraint: 'Default: 0' },
    { name: 'rating', type: 'Number', constraint: 'Default: 0' },
    { name: 'totalReviews', type: 'Number', constraint: 'Default: 0' },
    { name: 'priceRange', type: 'String', constraint: 'Optional' },
    { name: 'metadata', type: 'Object', constraint: 'Optional, JSON' },
    { name: 'status', type: 'String', constraint: 'Enum: [PENDING, APPROVED, REJECTED, SUSPENDED, DELETED], Default: PENDING' },
    { name: 'approvedAt', type: 'Date', constraint: 'Optional' },
    { name: 'rejectedAt', type: 'Date', constraint: 'Optional' },
    { name: 'rejectionReason', type: 'String', constraint: 'Optional' },
    { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  ],
  indexes: ['userId (unique)', 'status + locationCity', 'location (2dsphere)', 'rating']
};
