// export default function App() {
//   const collections = [
//     {
//       name: 'users',
//       color: 'bg-blue-50 border-blue-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (maps to id uuid)' },
//         { name: 'phone', type: 'String', constraint: 'Required, Unique, Index' },
//         { name: 'email', type: 'String', constraint: 'Optional, Unique, Index' },
//         { name: 'passwordHash', type: 'String', constraint: 'Required' },
//         { name: 'profile', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'isPhoneVerified', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'phoneVerificationToken', type: 'String', constraint: 'Optional' },
//         { name: 'phoneVerificationExpiry', type: 'Date', constraint: 'Optional' },
//         { name: 'isEmailVerified', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'emailVerificationToken', type: 'String', constraint: 'Optional' },
//         { name: 'emailVerificationExpiry', type: 'Date', constraint: 'Optional' },
//         { name: 'lastPasswordChange', type: 'Date', constraint: 'Optional' },
//         { name: 'passwordResetToken', type: 'String', constraint: 'Optional' },
//         { name: 'passwordResetExpiry', type: 'Date', constraint: 'Optional' },
//         { name: 'failedLoginAttempts', type: 'Number', constraint: 'Default: 0' },
//         { name: 'lockedUntil', type: 'Date', constraint: 'Optional' },
//         { name: 'accountStatus', type: 'String', constraint: 'Enum: [ACTIVE, INACTIVE, SUSPENDED, DELETED], Default: ACTIVE' },
//         { name: 'securityNotifications', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'lastSecurityNotificationAt', type: 'Date', constraint: 'Optional' },
//         { name: 'lastLoginAt', type: 'Date', constraint: 'Optional, Index' },
//         { name: 'lastLogoutAt', type: 'Date', constraint: 'Optional' },
//         { name: 'loginCount', type: 'Number', constraint: 'Default: 0' },
//         { name: 'lastActivityAt', type: 'Date', constraint: 'Optional' },
//         { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
//         { name: 'role', type: 'String', constraint: 'Enum: [USER, PROVIDER, ADMIN, SUPPORT], Default: USER' }
//       ],
//       indexes: ['phone (unique)', 'email (unique)', 'role + accountStatus', 'lastLoginAt']
//     },

//     {
//       name: 'user_sessions',
//       color: 'bg-indigo-50 border-indigo-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'refreshToken', type: 'String', constraint: 'Required, Unique, Index' },
//         { name: 'accessToken', type: 'String', constraint: 'Optional' },
//         { name: 'deviceId', type: 'String', constraint: 'Required' },
//         { name: 'deviceName', type: 'String', constraint: 'Required' },
//         { name: 'ipAddress', type: 'String', constraint: 'Optional' },
//         { name: 'userAgent', type: 'String', constraint: 'Optional' },
//         { name: 'location', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
//         { name: 'lastActivityAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'expiresAt', type: 'Date', constraint: 'Required, Index' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['userId + isActive', 'refreshToken (unique)', 'expiresAt']
//     },

//     {
//       name: 'user_devices',
//       color: 'bg-slate-50 border-slate-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'deviceId', type: 'String', constraint: 'Required' },
//         { name: 'deviceName', type: 'String', constraint: 'Required' },
//         { name: 'deviceType', type: 'String', constraint: 'Optional' },
//         { name: 'firstSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'firstSeenIp', type: 'String', constraint: 'Optional' },
//         { name: 'lastSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'lastSeenIp', type: 'String', constraint: 'Optional' },
//         { name: 'isTrusted', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['userId + deviceId (unique)', 'userId']
//     },

//     {
//       name: 'audit_logs',
//       color: 'bg-amber-50 border-amber-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'Optional, FK -> users._id, Index' },
//         { name: 'action', type: 'String', constraint: 'Enum: many actions (LOGIN, LOGOUT, CREATE, UPDATE, ...)' },
//         { name: 'entity', type: 'String', constraint: 'Entity name (e.g., users, providers)' },
//         { name: 'entityId', type: 'String', constraint: 'Entity record id' },
//         { name: 'changes', type: 'Object', constraint: 'Optional, JSON diff' },
//         { name: 'metadata', type: 'Object', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
//       ],
//       indexes: ['userId + createdAt', 'action + createdAt', 'entity + entityId']
//     },

//     {
//       name: 'notifications',
//       color: 'bg-lime-50 border-lime-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'type', type: 'String', constraint: 'Enum: [INFO, WARNING, ALERT, PROMOTION, SECURITY]' },
//         { name: 'title', type: 'String', constraint: 'Required' },
//         { name: 'body', type: 'String', constraint: 'Required' },
//         { name: 'data', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'priority', type: 'String', constraint: 'Optional' },
//         { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'readAt', type: 'Date', constraint: 'Optional' },
//         { name: 'isPushed', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'pushedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'scheduledAt', type: 'Date', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
//       ],
//       indexes: ['userId + isRead + createdAt', 'userId + type']
//     },

//     {
//       name: 'providers',
//       color: 'bg-green-50 border-green-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'Required, Unique, FK -> users._id, Index' },
//         { name: 'businessName', type: 'String', constraint: 'Required' },
//         { name: 'ownerName', type: 'String', constraint: 'Required' },
//         { name: 'contactPhone', type: 'String', constraint: 'Required' },
//         { name: 'locationCity', type: 'String', constraint: 'Required' },
//         { name: 'contactEmail', type: 'String', constraint: 'Optional' },
//         { name: 'location', type: 'Object', constraint: '{ type: \"Point\", coordinates: [lng, lat] }' },
//         { name: 'locationAddress', type: 'String', constraint: 'Required' },
//         { name: 'servicesText', type: 'String', constraint: 'Required' },
//         { name: 'totalServices', type: 'Number', constraint: 'Default: 0' },
//         { name: 'rating', type: 'Number', constraint: 'Default: 0' },
//         { name: 'totalReviews', type: 'Number', constraint: 'Default: 0' },
//         { name: 'priceRange', type: 'String', constraint: 'Optional' },
//         { name: 'metadata', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'status', type: 'String', constraint: 'Enum: [PENDING, APPROVED, REJECTED, SUSPENDED, DELETED], Default: PENDING' },
//         { name: 'approvedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'rejectedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'rejectionReason', type: 'String', constraint: 'Optional' },
//         { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
//       ],
//       indexes: ['userId (unique)', 'status + locationCity', 'location (2dsphere)', 'rating']
//     },

//     {
//       name: 'provider_services',
//       color: 'bg-emerald-50 border-emerald-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
//         { name: 'serviceName', type: 'String', constraint: 'Required' },
//         { name: 'serviceCategory', type: 'String', constraint: 'Required (e.g., صيانة, كهرباء, ميكانيك)' },
//         { name: 'description', type: 'String', constraint: 'Optional' },
//         { name: 'basePrice', type: 'Number', constraint: 'Required' },
//         { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
//         { name: 'metadata', type: 'Object', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
//       ],
//       indexes: ['providerId + isActive', 'serviceCategory']
//     },

//     {
//       name: 'vehicles',
//       color: 'bg-sky-50 border-sky-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'make', type: 'String', constraint: 'Required' },
//         { name: 'model', type: 'String', constraint: 'Required' },
//         { name: 'year', type: 'Number', constraint: 'Required' },
//         { name: 'color', type: 'String', constraint: 'Optional' },
//         { name: 'plateNumber', type: 'String', constraint: 'Required, Unique' },
//         { name: 'vin', type: 'String', constraint: 'Optional, Unique' },
//         { name: 'serviceDueAt', type: 'Date', constraint: 'Optional' },
//         { name: 'isDefault', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
//         { name: 'deletedAt', type: 'Date', constraint: 'Optional' }
//       ],
//       indexes: ['userId', 'deletedAt', 'plateNumber (unique)', 'vin (unique)']
//     },

//     {
//       name: 'subscriptions',
//       color: 'bg-violet-50 border-violet-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'plan', type: 'String', constraint: 'Enum: [FREE, BASIC, PREMIUM, ENTERPRISE], Required' },
//         { name: 'status', type: 'String', constraint: 'Enum: [ACTIVE, CANCELLED, EXPIRED, TRIAL], Default: ACTIVE' },
//         { name: 'price', type: 'Number', constraint: 'Default: 0' },
//         { name: 'currency', type: 'String', constraint: 'Default: SAR' },
//         { name: 'startDate', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'endDate', type: 'Date', constraint: 'Optional' },
//         { name: 'autoRenew', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'autoRenewReminderSentAt', type: 'Date', constraint: 'Optional' },
//         { name: 'paymentStatus', type: 'String', constraint: 'Enum: [PENDING, PAID, UNPAID, FAILED, REFUNDED], Default: PENDING' },
//         { name: 'metadata', type: 'Object', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
//         { name: 'cancelledAt', type: 'Date', constraint: 'Optional' }
//       ],
//       indexes: ['userId + status', 'endDate + autoRenew']
//     },

//     {
//       name: 'chats',
//       color: 'bg-rose-50 border-rose-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'customerId', type: 'ObjectId', constraint: 'FK -> users._id, Required' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required' },
//         { name: 'lastMessage', type: 'String', constraint: 'Optional' },
//         { name: 'lastMessageAt', type: 'Date', constraint: 'Optional' },
//         { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
//         { name: 'archived', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'isMuted', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'lastSeenMessageId', type: 'String', constraint: 'Optional' },
//         { name: 'lastTypingAt', type: 'Date', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
//       ],
//       indexes: ['customerId + providerId (unique)', 'customerId + updatedAt', 'providerId + updatedAt']
//     },

//     {
//       name: 'messages',
//       color: 'bg-emerald-100 border-emerald-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'chatId', type: 'ObjectId', constraint: 'FK -> chats._id, Required, Index' },
//         { name: 'senderId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'type', type: 'String', constraint: 'Enum: [TEXT, IMAGE, FILE, LOCATION, SYSTEM], Default: TEXT' },
//         { name: 'content', type: 'String', constraint: 'Required, Text' },
//         { name: 'metadata', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'readAt', type: 'Date', constraint: 'Optional' },
//         { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'editedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'reactions', type: 'Object', constraint: 'Optional, JSON' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
//       ],
//       indexes: ['chatId + createdAt', 'senderId']
//     },

//     {
//       name: 'reviews',
//       color: 'bg-yellow-50 border-yellow-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
//         { name: 'reviewerId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'rating', type: 'Number', constraint: 'Required (Int)' },
//         { name: 'comment', type: 'String', constraint: 'Optional' },
//         { name: 'orderId', type: 'String', constraint: 'Optional, Unique' },
//         { name: 'isVisible', type: 'Boolean', constraint: 'Default: true' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
//       ],
//       indexes: ['providerId + rating', 'reviewerId', 'createdAt']
//     },

//     {
//       name: 'service_requests',
//       color: 'bg-purple-50 border-purple-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
//         { name: 'serviceId', type: 'ObjectId', constraint: 'Optional, FK -> provider_services._id' },
//         { name: 'vehicleId', type: 'ObjectId', constraint: 'Optional, FK -> vehicles._id' },
//         { name: 'status', type: 'String', constraint: 'Enum: [PENDING, ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED, FAILED], Default: PENDING' },
//         { name: 'pickupLat', type: 'Number', constraint: 'Optional' },
//         { name: 'pickupLng', type: 'Number', constraint: 'Optional' },
//         { name: 'pickupAddress', type: 'String', constraint: 'Optional' },
//         { name: 'notes', type: 'String', constraint: 'Optional, Text' },
//         { name: 'priceEstimate', type: 'Number', constraint: 'Optional' },
//         { name: 'finalPrice', type: 'Number', constraint: 'Optional' },
//         { name: 'startedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'finishedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'ratingRequested', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'ratingRequestedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'cancelledBy', type: 'String', constraint: 'Optional' },
//         { name: 'cancellationReason', type: 'String', constraint: 'Optional' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
//       ],
//       indexes: ['userId + status', 'providerId + status', 'status + createdAt']
//     },

//     {
//       name: 'provider_documents',
//       color: 'bg-amber-100 border-amber-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
//         { name: 'documentType', type: 'String', constraint: 'Required' },
//         { name: 'documentStatus', type: 'String', constraint: 'Default: PENDING' },
//         { name: 'fileUrl', type: 'String', constraint: 'Required' },
//         { name: 'notes', type: 'String', constraint: 'Optional' },
//         { name: 'expiresAt', type: 'Date', constraint: 'Optional' },
//         { name: 'verifiedAt', type: 'Date', constraint: 'Optional' },
//         { name: 'uploadedAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['providerId + documentStatus']
//     },

//     {
//       name: 'service_areas',
//       color: 'bg-cyan-50 border-cyan-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
//         { name: 'city', type: 'String', constraint: 'Required, Index' },
//         { name: 'district', type: 'String', constraint: 'Optional' },
//         { name: 'radius', type: 'Number', constraint: 'Optional (km)' },
//         { name: 'isActive', type: 'Boolean', constraint: 'Default: true' }
//       ],
//       indexes: ['providerId + city', 'city']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8" dir="rtl">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">النموذج الفيزيائي - MongoDB</h1>
//           <p className="text-xl text-gray-600">Car Hero Platform - Database Physical Design (Prisma → MongoDB)</p>
//           <div className="mt-4 inline-block bg-blue-100 px-4 py-2 rounded-lg">
//             <span className="text-sm font-semibold text-blue-800">قاعدة البيانات: MongoDB (NoSQL)</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {collections.map((collection, idx) => (
//             <div key={idx} className={`${collection.color} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-2xl font-bold text-gray-800">{collection.name}</h2>
//                 <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-600">
//                   Collection
//                 </span>
//               </div>
              
//               <div className="bg-white rounded-lg p-4 mb-4 overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className="border-b-2 border-gray-300">
//                       <th className="text-right pb-2 font-bold text-gray-700">Field</th>
//                       <th className="text-right pb-2 font-bold text-gray-700">Type</th>
//                       <th className="text-right pb-2 font-bold text-gray-700">Constraints</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {collection.fields.map((field, fidx) => (
//                       <tr key={fidx} className="border-b border-gray-200">
//                         <td className="py-2 font-mono text-blue-700 font-semibold">{field.name}</td>
//                         <td className="py-2 font-mono text-green-600">{field.type}</td>
//                         <td className="py-2 text-xs text-gray-600">{field.constraint}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="bg-white rounded-lg p-4">
//                 <h3 className="font-bold text-gray-700 mb-2 text-sm">📑 Indexes:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {collection.indexes.map((index, iidx) => (
//                     <span key={iidx} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-mono text-gray-700">
//                       {index}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔗 العلاقات بين المجموعات</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
//               <h3 className="font-bold text-blue-800 mb-2">المستخدم ↔ الخدمات</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• users._id → user_sessions.userId, user_devices.userId, subscriptions.userId</li>
//                 <li>• users._id → service_requests.userId</li>
//                 <li>• users._id → reviews.reviewerId</li>
//                 <li>• users._id → chats.customerId</li>
//                 <li>• users._id → messages.senderId</li>
//               </ul>
//             </div>
            
//             <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
//               <h3 className="font-bold text-green-800 mb-2">مزود الخدمة ↔ الخدمات</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• providers._id → provider_services.providerId</li>
//                 <li>• providers._id → service_requests.providerId</li>
//                 <li>• providers._id → reviews.providerId</li>
//                 <li>• providers._id → provider_documents.providerId</li>
//                 <li>• providers._id → service_areas.providerId</li>
//                 <li>• providers._id → chats.providerId</li>
//               </ul>
//             </div>
            
//             <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
//               <h3 className="font-bold text-purple-800 mb-2">طلب الخدمة ↔ التفاصيل</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• service_requests._id → (references to service_id, vehicle_id)</li>
//                 <li>• service_requests link provider & user & optional vehicle</li>
//               </ul>
//             </div>
            
//             <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
//               <h3 className="font-bold text-yellow-800 mb-2">معلومات إضافية</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• استخدم GeoJSON (Point) للمواقع (providers.location) حيث يلزم</li>
//                 <li>• التأكد من وضع فهارس فريدة حيث يوجد unique constraints</li>
//                 <li>• الاحتفاظ بسجلات التحديثات في الحقول updatedAt, createdAt</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
//           <h3 className="font-bold text-gray-800 mb-4 text-center text-xl">📌 ملاحظات تقنية مهمة</h3>
//           <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
//             <li className="flex items-start">
//               <span className="text-blue-600 ml-2">✓</span>
//               <span><strong>ObjectId:</strong> يمثل معرّف مستند MongoDB (مقابل uuid في Prisma)</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-green-600 ml-2">✓</span>
//               <span><strong>GeoSpatial:</strong> استخدم index 2dsphere للمواقع الجغرافية</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-purple-600 ml-2">✓</span>
//               <span><strong>Indexes:</strong> إحفظ الفهارس المهمة لتسريع الاستعلامات</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-orange-600 ml-2">✓</span>
//               <span><strong>Embedded JSON:</strong> الحقول من نوع Json تُخزن كـ Object أو Array</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-red-600 ml-2">✓</span>
//               <span><strong>Enums:</strong> خزّن كسلاسل String وحققها في طبقة التطبيق أو Mongoose</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-cyan-600 ml-2">✓</span>
//               <span><strong>Timestamps:</strong> استخدم createdAt & updatedAt وحدثهما تلقائيًا</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
