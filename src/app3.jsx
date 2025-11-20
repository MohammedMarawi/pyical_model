// export default function App() {
//   const collections = [
//     {
//       name: 'users',
//       color: 'bg-blue-50 border-blue-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'name', type: 'String', constraint: 'Required, Index' },
//         { name: 'email', type: 'String', constraint: 'Required, Unique, Index' },
//         { name: 'phone', type: 'String', constraint: 'Required, Unique' },
//         { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
//         { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['email (unique)', 'phone (unique)', 'location (2dsphere)']
//     },
//     {
//       name: 'service_providers',
//       color: 'bg-green-50 border-green-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'name', type: 'String', constraint: 'Required, Index' },
//         { name: 'email', type: 'String', constraint: 'Required, Unique' },
//         { name: 'phone', type: 'String', constraint: 'Required, Unique' },
//         { name: 'services', type: 'Array[String]', constraint: 'Required' },
//         { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
//         { name: 'averageRating', type: 'Number', constraint: 'Default: 0, Min: 0, Max: 5' },
//         { name: 'totalRatings', type: 'Number', constraint: 'Default: 0' },
//         { name: 'isAvailable', type: 'Boolean', constraint: 'Default: true, Index' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['location (2dsphere)', 'isAvailable', 'averageRating (desc)', 'email (unique)']
//     },
//     {
//       name: 'service_requests',
//       color: 'bg-purple-50 border-purple-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Index' },
//         { name: 'serviceType', type: 'String', constraint: 'Required, Index' },
//         { name: 'status', type: 'String', constraint: 'Enum: [pending, accepted, in_progress, completed, cancelled]' },
//         { name: 'userLocation', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
//         { name: 'providerLocation', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
//         { name: 'price', type: 'Number', constraint: 'Required, Min: 0' },
//         { name: 'requestedAt', type: 'Date', constraint: 'Default: Date.now(), Index' },
//         { name: 'completedAt', type: 'Date', constraint: 'Nullable' },
//         { name: 'notes', type: 'String', constraint: 'Optional' }
//       ],
//       indexes: ['userId', 'providerId', 'status', 'requestedAt (desc)', 'userLocation (2dsphere)']
//     },
//     {
//       name: 'ratings',
//       color: 'bg-yellow-50 border-yellow-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
//         { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Unique' },
//         { name: 'rating', type: 'Number', constraint: 'Required, Min: 1, Max: 5' },
//         { name: 'comment', type: 'String', constraint: 'Optional, Max: 500 chars' },
//         { name: 'pointsEarned', type: 'Number', constraint: 'Default: 0' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
//       ],
//       indexes: ['userId', 'providerId', 'serviceRequestId (unique)', 'createdAt (desc)']
//     },
//     {
//       name: 'payments',
//       color: 'bg-orange-50 border-orange-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
//         { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Unique' },
//         { name: 'amount', type: 'Number', constraint: 'Required, Min: 0' },
//         { name: 'discountFromPoints', type: 'Number', constraint: 'Default: 0, Min: 0' },
//         { name: 'finalAmount', type: 'Number', constraint: 'Required, Min: 0' },
//         { name: 'paymentMethod', type: 'String', constraint: 'Enum: [cash, card, wallet, points]' },
//         { name: 'status', type: 'String', constraint: 'Enum: [pending, completed, failed, refunded]' },
//         { name: 'transactionId', type: 'String', constraint: 'Unique, Index' },
//         { name: 'pointsEarned', type: 'Number', constraint: 'Default: 0' },
//         { name: 'invoiceUrl', type: 'String', constraint: 'Optional' },
//         { name: 'paidAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
//       ],
//       indexes: ['userId', 'providerId', 'serviceRequestId (unique)', 'transactionId (unique)', 'status', 'paidAt (desc)']
//     },
//     {
//       name: 'loyalty_points',
//       color: 'bg-pink-50 border-pink-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Unique, Index' },
//         { name: 'totalPointsEarned', type: 'Number', constraint: 'Default: 0, Min: 0' },
//         { name: 'currentBalance', type: 'Number', constraint: 'Default: 0, Min: 0' },
//         { name: 'pointsUsed', type: 'Number', constraint: 'Default: 0, Min: 0' },
//         { name: 'pointsHistory', type: 'Array[Object]', constraint: '[ { type, points, description, date, refId } ]' },
//         { name: 'lastUpdated', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['userId (unique)', 'currentBalance (desc)']
//     },
//     {
//       name: 'scheduled_services',
//       color: 'bg-cyan-50 border-cyan-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Index' },
//         { name: 'serviceType', type: 'String', constraint: 'Required' },
//         { name: 'scheduledDate', type: 'Date', constraint: 'Required, Index' },
//         { name: 'frequency', type: 'String', constraint: 'Enum: [once, weekly, monthly, quarterly, yearly]' },
//         { name: 'status', type: 'String', constraint: 'Enum: [scheduled, completed, cancelled]' },
//         { name: 'notificationSent', type: 'Boolean', constraint: 'Default: false' },
//         { name: 'notificationDate', type: 'Date', constraint: 'Optional' },
//         { name: 'nextServiceDate', type: 'Date', constraint: 'Optional, Index' },
//         { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
//       ],
//       indexes: ['userId', 'providerId', 'scheduledDate', 'nextServiceDate', 'status']
//     },
//     {
//       name: 'service_history',
//       color: 'bg-red-50 border-red-300',
//       fields: [
//         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated' },
//         { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
//         { name: 'providerId', type: 'ObjectId', constraint: 'FK -> service_providers._id, Required, Index' },
//         { name: 'serviceRequestId', type: 'ObjectId', constraint: 'FK -> service_requests._id, Required, Index' },
//         { name: 'serviceType', type: 'String', constraint: 'Required, Index' },
//         { name: 'price', type: 'Number', constraint: 'Required' },
//         { name: 'rating', type: 'Number', constraint: 'Min: 1, Max: 5' },
//         { name: 'paymentMethod', type: 'String', constraint: 'Required' },
//         { name: 'location', type: 'Object', constraint: '{ type: "Point", coordinates: [lng, lat] }' },
//         { name: 'completedAt', type: 'Date', constraint: 'Required, Index' },
//         { name: 'notes', type: 'String', constraint: 'Optional' },
//         { name: 'invoiceUrl', type: 'String', constraint: 'Optional' }
//       ],
//       indexes: ['userId', 'providerId', 'serviceType', 'completedAt (desc)', 'rating']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8" dir="rtl">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">النموذج الفيزيائي - MongoDB</h1>
//           <p className="text-xl text-gray-600">Car Hero Platform - Database Physical Design</p>
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
//                 <li>• users._id → service_requests.userId</li>
//                 <li>• users._id → ratings.userId</li>
//                 <li>• users._id → payments.userId</li>
//                 <li>• users._id → loyalty_points.userId</li>
//                 <li>• users._id → scheduled_services.userId</li>
//               </ul>
//             </div>
            
//             <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
//               <h3 className="font-bold text-green-800 mb-2">مقدم الخدمة ↔ الخدمات</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• service_providers._id → service_requests.providerId</li>
//                 <li>• service_providers._id → ratings.providerId</li>
//                 <li>• service_providers._id → payments.providerId</li>
//                 <li>• service_providers._id → scheduled_services.providerId</li>
//               </ul>
//             </div>
            
//             <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
//               <h3 className="font-bold text-purple-800 mb-2">طلب الخدمة ↔ التفاصيل</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• service_requests._id → ratings.serviceRequestId</li>
//                 <li>• service_requests._id → payments.serviceRequestId</li>
//                 <li>• service_requests._id → service_history.serviceRequestId</li>
//               </ul>
//             </div>
            
//             <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
//               <h3 className="font-bold text-yellow-800 mb-2">معلومات إضافية</h3>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>• جميع المواقع تستخدم GeoJSON format</li>
//                 <li>• Indexes الجغرافية: 2dsphere</li>
//                 <li>• التقييمات تؤثر على averageRating</li>
//                 <li>• النقاط تُحسب تلقائياً من الدفع والتقييم</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
//           <h3 className="font-bold text-gray-800 mb-4 text-center text-xl">📌 ملاحظات تقنية مهمة</h3>
//           <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
//             <li className="flex items-start">
//               <span className="text-blue-600 ml-2">✓</span>
//               <span><strong>ObjectId:</strong> معرّف فريد تلقائي من MongoDB</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-green-600 ml-2">✓</span>
//               <span><strong>GeoSpatial:</strong> استخدام 2dsphere للخرائط</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-purple-600 ml-2">✓</span>
//               <span><strong>Indexes:</strong> لتسريع الاستعلامات الشائعة</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-orange-600 ml-2">✓</span>
//               <span><strong>Embedded Arrays:</strong> لتخزين سجل النقاط</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-red-600 ml-2">✓</span>
//               <span><strong>Enum Validation:</strong> للحقول ذات القيم المحددة</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-cyan-600 ml-2">✓</span>
//               <span><strong>Timestamps:</strong> تتبع وقت الإنشاء والتحديث</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }