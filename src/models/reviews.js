export const reviews = {
  name: 'reviews',
  color: 'bg-yellow-50 border-yellow-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
    { name: 'reviewerId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'rating', type: 'Number', constraint: 'Required (Int)' },
    { name: 'comment', type: 'String', constraint: 'Optional' },
    { name: 'orderId', type: 'String', constraint: 'Optional, Unique' },
    { name: 'isVisible', type: 'Boolean', constraint: 'Default: true' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  ],
  indexes: ['providerId + rating', 'reviewerId', 'createdAt']
};
