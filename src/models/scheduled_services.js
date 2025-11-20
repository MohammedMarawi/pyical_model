export const scheduled_services = {
  name: 'scheduled_services',
  color: 'bg-cyan-50 border-cyan-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
    { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Index' },
    { name: 'serviceType', type: 'String', constraint: 'Required' },
    { name: 'scheduledDate', type: 'Date', constraint: 'Required, Index' },
    { name: 'frequency', type: 'String', constraint: 'Enum: [once, weekly, monthly, quarterly, yearly]' },
    { name: 'status', type: 'String', constraint: 'Enum: [scheduled, completed, cancelled]' },
    { name: 'notificationSent', type: 'Boolean', constraint: 'Default: false' },
    { name: 'notificationDate', type: 'Date', constraint: 'Optional' },
    { name: 'nextServiceDate', type: 'Date', constraint: 'Optional, Index' },
    { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['userId', 'providerId', 'scheduledDate', 'nextServiceDate', 'status']
};
