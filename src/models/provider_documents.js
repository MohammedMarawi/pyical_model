export const provider_documents = {
  name: 'provider_documents',
  color: 'bg-amber-100 border-amber-300',
  fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
    { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
    { name: 'documentType', type: 'String', constraint: 'Required' },
    { name: 'documentStatus', type: 'String', constraint: 'Default: PENDING' },
    { name: 'fileUrl', type: 'String', constraint: 'Required' },
    { name: 'notes', type: 'String', constraint: 'Optional' },
    { name: 'expiresAt', type: 'Date', constraint: 'Optional' },
    { name: 'verifiedAt', type: 'Date', constraint: 'Optional' },
    { name: 'uploadedAt', type: 'Date', constraint: 'Default: Date.now()' }
  ],
  indexes: ['providerId + documentStatus']
};
