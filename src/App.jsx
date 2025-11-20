// src/App.jsx
import React from "react";
import { motion } from "framer-motion";

import { users } from './models/users';
import { user_sessions } from './models/user_sessions';
import { user_devices } from './models/user_devices';
import { audit_logs } from './models/audit_logs';
import { notifications } from './models/notifications';
import { providers } from './models/providers';
import { provider_services } from './models/provider_services';
import { vehicles } from './models/vehicles';
import { subscriptions } from './models/subscriptions';
import { chats } from './models/chats';
import { messages } from './models/messages';
import { reviews } from './models/reviews';
import { service_requests } from './models/service_requests';
import { provider_documents } from './models/provider_documents';
import { service_areas } from './models/service_areas';

import { users2 } from './models/users2';
import { service_providers } from './models/service_providers';
import { service_requests2 } from './models/service_requests2';
import { ratings } from './models/ratings';
import { payments } from './models/payments';
import { loyalty_points } from './models/loyalty_points';
import { scheduled_services } from './models/scheduled_services';
import { service_history } from './models/service_history';

import RelationshipsGraph from "./RelationshipsGraph";

const collections = [
  users,
  user_sessions,
  user_devices,
  audit_logs,
  notifications,
  providers,
  provider_services,
  vehicles,
  subscriptions,
  chats,
  messages,
  reviews,
  service_requests,
  provider_documents,
  service_areas,

  users2,
  service_providers,
  service_requests2,
  ratings,
  payments,
  loyalty_points,
  scheduled_services,
  service_history
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">النموذج الفيزيائي - MongoDB</h1>
          <p className="text-xl text-gray-600">Car Hero Platform - Database Physical Design</p>
          <div className="mt-4 inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg">
            <span className="text-sm font-semibold text-blue-800">قاعدة البيانات: MongoDB (NoSQL)</span>
          </div>
        </div>

        {/* GRAPH */}
        <div className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RelationshipsGraph />
          </motion.div>
        </div>

        {/* COLLECTIONS LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {collections.map((collection, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(2,6,23,0.1)" }}
              transition={{ duration: 0.25 }}
              className={`${collection.color || "bg-white"} border-2 rounded-xl p-6 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{collection.name}</h2>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-600">Collection</span>
              </div>

              {/* FIELDS TABLE */}
              <div className="bg-white rounded-lg p-4 mb-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-right pb-2 font-bold text-gray-700">Field</th>
                      <th className="text-right pb-2 font-bold text-gray-700">Type</th>
                      <th className="text-right pb-2 font-bold text-gray-700">Constraints</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collection.fields?.map((field, fidx) => (
                      <tr key={fidx} className="border-b border-gray-200">
                        <td className="py-2 font-mono text-blue-700 font-semibold">{field.name}</td>
                        <td className="py-2 font-mono text-green-600">{field.type}</td>
                        <td className="py-2 text-xs text-gray-600">{field.constraint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* INDEXES */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-gray-700 mb-2 text-sm">📑 Indexes:</h3>
                <div className="flex flex-wrap gap-2">
                  {collection.indexes?.map((index, iidx) => (
                    <span key={iidx} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-mono text-gray-700">
                      {index}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RELATIONSHIPS + TECH NOTES */}
      <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    🔗 العلاقات بين المجموعات
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        title: "المستخدم ↔ الخدمات",
        color: "blue",
        items: [
          "users._id → user_sessions.userId, user_devices.userId, subscriptions.userId",
          "users._id → service_requests.userId",
          "users._id → reviews.reviewerId",
          "users._id → chats.customerId",
          "users._id → messages.senderId",
        ],
      },
      {
        title: "مزود الخدمة ↔ الخدمات",
        color: "green",
        items: [
          "providers._id → provider_services.providerId",
          "providers._id → service_requests.providerId",
          "providers._id → reviews.providerId",
          "providers._id → provider_documents.providerId",
          "providers._id → service_areas.providerId",
          "providers._id → chats.providerId",
        ],
      },
      {
        title: "طلب الخدمة ↔ التفاصيل",
        color: "purple",
        items: [
          "service_requests._id → (references to service_id, vehicle_id)",
          "service_requests link provider & user & optional vehicle",
        ],
      },
      {
        title: "معلومات إضافية",
        color: "yellow",
        items: [
          "استخدم GeoJSON (Point) للمواقع (providers.location) حيث يلزم",
          "التأكد من وضع فهارس فريدة حيث يوجد unique constraints",
          "الاحتفاظ بسجلات التحديثات في الحقول updatedAt, createdAt",
        ],
      },
    ].map((card, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.22 }}
        className={`p-4 rounded-lg border-r-4 border-${card.color}-500 bg-${card.color}-50 cursor-pointer`}
      >
        <h3 className={`font-bold text-${card.color}-800 mb-2`}>{card.title}</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          {card.items.map((item, iidx) => (
            <li key={iidx}>• {item}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</div>


        {/* TECH NOTES */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 12px 30px rgba(2,6,23,0.1)" }}
          transition={{ duration: 0.25 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200 cursor-pointer"
        >
          <h3 className="font-bold text-gray-800 mb-4 text-center text-xl">📌 ملاحظات تقنية مهمة</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 ml-2">✓</span>
              <span><strong>ObjectId:</strong> يمثل معرّف مستند MongoDB (مقابل uuid في Prisma)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 ml-2">✓</span>
              <span><strong>GeoSpatial:</strong> استخدم index 2dsphere للمواقع الجغرافية</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 ml-2">✓</span>
              <span><strong>Indexes:</strong> إحفظ الفهارس المهمة لتسريع الاستعلامات</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 ml-2">✓</span>
              <span><strong>Embedded JSON:</strong> الحقول من نوع Json تُخزن كـ Object أو Array</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 ml-2">✓</span>
              <span><strong>Enums:</strong> خزّن كسلاسل String وحققها في طبقة التطبيق أو Mongoose</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 ml-2">✓</span>
              <span><strong>Timestamps:</strong> استخدم createdAt & updatedAt وحدثهما تلقائيًا</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
