export const subscriptions = {
  name: 'subscriptions',
  color: 'bg-violet-50 border-violet-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'plan', type: 'String', constraint: 'Enum: [FREE, BASIC, PREMIUM, ENTERPRISE], Required' },
    { name: 'status', type: 'String', constraint: 'Enum: [ACTIVE, CANCELLED, EXPIRED, TRIAL], Default: ACTIVE' },
    { name: 'price', type: 'Number', constraint: 'Default: 0' },
    { name: 'currency', type: 'String', constraint: 'Default: SAR' },
    { name: 'startDate', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'endDate', type: 'Date', constraint: 'Optional' },
    { name: 'autoRenew', type: 'Boolean', constraint: 'Default: false' },
    { name: 'autoRenewReminderSentAt', type: 'Date', constraint: 'Optional' },
    { name: 'paymentStatus', type: 'String', constraint: 'Enum: [PENDING, PAID, UNPAID, FAILED, REFUNDED], Default: PENDING' },
    { name: 'metadata', type: 'Object', constraint: 'Optional' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
    { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
    { name: 'cancelledAt', type: 'Date', constraint: 'Optional' }
  ],
  indexes: ['userId + status', 'endDate + autoRenew']
};
