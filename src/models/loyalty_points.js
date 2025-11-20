export const loyalty_points = {
  name: 'loyalty_points',
  color: 'bg-pink-50 border-pink-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Unique, Index' },
    { name: 'totalPointsEarned', type: 'Number', constraint: 'Default: 0, Min: 0' },
    { name: 'currentBalance', type: 'Number', constraint: 'Default: 0, Min: 0' },
    { name: 'pointsUsed', type: 'Number', constraint: 'Default: 0, Min: 0' },
    { name: 'pointsHistory', type: 'Array[Object]', constraint: '[ { type, points, description, date, refId } ]' },
    { name: 'lastUpdated', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['userId (unique)', 'currentBalance (desc)']
};
