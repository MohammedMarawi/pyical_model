export const payments = {
  name: 'payments',
  color: 'bg-orange-50 border-orange-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
    { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Unique' },
    { name: 'amount', type: 'Number', constraint: 'Required, Min: 0' },
    { name: 'discountFromPoints', type: 'Number', constraint: 'Default: 0, Min: 0' },
    { name: 'finalAmount', type: 'Number', constraint: 'Required, Min: 0' },
    { name: 'paymentMethod', type: 'String', constraint: 'Enum: [cash, card, wallet, points]' },
    { name: 'status', type: 'String', constraint: 'Enum: [pending, completed, failed, refunded]' },
    { name: 'transactionId', type: 'String', constraint: 'Unique, Index' },
    { name: 'pointsEarned', type: 'Number', constraint: 'Default: 0' },
    { name: 'invoiceUrl', type: 'String', constraint: 'Optional' },
    { name: 'paidAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
  ],
  indexes: ['userId', 'providerId', 'serviceRequestId (unique)', 'transactionId (unique)', 'status', 'paidAt (desc)']
};
    