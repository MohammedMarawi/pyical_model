import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Database,
  Grid3x3,
  Search,
  Filter,
  Zap,
  Lock,
  MapPin,
  Users,
  Truck,
  MessageSquare,
  Star,
  CreditCard,
  Calendar,
  TrendingUp,
  BookOpen,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  Code2,
  Key,
  Layers,
} from "lucide-react";

// Mock collection data
const mockCollections = [
  {
    name: "users",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    fields: [
    { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (maps to id uuid)' },
        { name: 'phone', type: 'String', constraint: 'Required, Unique, Index' },
        { name: 'email', type: 'String', constraint: 'Optional, Unique, Index' },
        { name: 'passwordHash', type: 'String', constraint: 'Required' },
        { name: 'profile', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'isPhoneVerified', type: 'Boolean', constraint: 'Default: false' },
        { name: 'phoneVerificationToken', type: 'String', constraint: 'Optional' },
        { name: 'phoneVerificationExpiry', type: 'Date', constraint: 'Optional' },
        { name: 'isEmailVerified', type: 'Boolean', constraint: 'Default: false' },
        { name: 'emailVerificationToken', type: 'String', constraint: 'Optional' },
        { name: 'emailVerificationExpiry', type: 'Date', constraint: 'Optional' },
        { name: 'lastPasswordChange', type: 'Date', constraint: 'Optional' },
        { name: 'passwordResetToken', type: 'String', constraint: 'Optional' },
        { name: 'passwordResetExpiry', type: 'Date', constraint: 'Optional' },
        { name: 'failedLoginAttempts', type: 'Number', constraint: 'Default: 0' },
        { name: 'lockedUntil', type: 'Date', constraint: 'Optional' },
        { name: 'accountStatus', type: 'String', constraint: 'Enum: [ACTIVE, INACTIVE, SUSPENDED, DELETED], Default: ACTIVE' },
        { name: 'securityNotifications', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'lastSecurityNotificationAt', type: 'Date', constraint: 'Optional' },
        { name: 'lastLoginAt', type: 'Date', constraint: 'Optional, Index' },
        { name: 'lastLogoutAt', type: 'Date', constraint: 'Optional' },
        { name: 'loginCount', type: 'Number', constraint: 'Default: 0' },
        { name: 'lastActivityAt', type: 'Date', constraint: 'Optional' },
        { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
        { name: 'role', type: 'String', constraint: 'Enum: [USER, PROVIDER, ADMIN, SUPPORT], Default: USER' }
      ],
    indexes: ["email", "createdAt"],
  },
  {
    name: "user_sessions",
    icon: Clock,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    fields: [
      { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
        { name: 'refreshToken', type: 'String', constraint: 'Required, Unique, Index' },
        { name: 'accessToken', type: 'String', constraint: 'Optional' },
        { name: 'deviceId', type: 'String', constraint: 'Required' },
        { name: 'deviceName', type: 'String', constraint: 'Required' },
        { name: 'ipAddress', type: 'String', constraint: 'Optional' },
        { name: 'userAgent', type: 'String', constraint: 'Optional' },
        { name: 'location', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
        { name: 'lastActivityAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'expiresAt', type: 'Date', constraint: 'Required, Index' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
      ],
    indexes: ["userId", "token", "expiresAt"],
  },
  {
    name: "user_devices",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
     fields: [
        { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
        { name: 'deviceId', type: 'String', constraint: 'Required' },
        { name: 'deviceName', type: 'String', constraint: 'Required' },
        { name: 'deviceType', type: 'String', constraint: 'Optional' },
        { name: 'firstSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'firstSeenIp', type: 'String', constraint: 'Optional' },
        { name: 'lastSeenAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'lastSeenIp', type: 'String', constraint: 'Optional' },
        { name: 'isTrusted', type: 'Boolean', constraint: 'Default: false' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' }
      ],
    indexes: ["userId", "deviceId"],
  },
  {
    name: "audit_logs",
    icon: BookOpen,
    color: "from-slate-500 to-slate-600",
    bgColor: "bg-slate-50",
    fields: [
       { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'Optional, FK -> users._id, Index' },
        { name: 'action', type: 'String', constraint: 'Enum: many actions (LOGIN, LOGOUT, CREATE, UPDATE, ...)' },
        { name: 'entity', type: 'String', constraint: 'Entity name (e.g., users, providers)' },
        { name: 'entityId', type: 'String', constraint: 'Entity record id' },
        { name: 'changes', type: 'Object', constraint: 'Optional, JSON diff' },
        { name: 'metadata', type: 'Object', constraint: 'Optional' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
      ],
    indexes: ["userId", "createdAt"],
  },
  {
    name: "notifications",
    icon: AlertCircle,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    fields: [
         { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
        { name: 'type', type: 'String', constraint: 'Enum: [INFO, WARNING, ALERT, PROMOTION, SECURITY]' },
        { name: 'title', type: 'String', constraint: 'Required' },
        { name: 'body', type: 'String', constraint: 'Required' },
        { name: 'data', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'priority', type: 'String', constraint: 'Optional' },
        { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
        { name: 'readAt', type: 'Date', constraint: 'Optional' },
        { name: 'isPushed', type: 'Boolean', constraint: 'Default: false' },
        { name: 'pushedAt', type: 'Date', constraint: 'Optional' },
        { name: 'scheduledAt', type: 'Date', constraint: 'Optional' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
      ],
    indexes: ["userId", "read"],
  },
  {
    name: "providers",
    icon: Truck,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    fields: [
        { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'Required, Unique, FK -> users._id, Index' },
        { name: 'businessName', type: 'String', constraint: 'Required' },
        { name: 'ownerName', type: 'String', constraint: 'Required' },
        { name: 'contactPhone', type: 'String', constraint: 'Required' },
        { name: 'locationCity', type: 'String', constraint: 'Required' },
        { name: 'contactEmail', type: 'String', constraint: 'Optional' },
        { name: 'location', type: 'Object', constraint: '{ type: \"Point\", coordinates: [lng, lat] }' },
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
    indexes: ["email", "location", "rating", "verified"],
  },
  {
    name: "provider_services",
    icon: Zap,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    fields: [
        { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
        { name: 'serviceName', type: 'String', constraint: 'Required' },
        { name: 'serviceCategory', type: 'String', constraint: 'Required (e.g., صيانة, كهرباء, ميكانيك)' },
        { name: 'description', type: 'String', constraint: 'Optional' },
        { name: 'basePrice', type: 'Number', constraint: 'Required' },
        { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
        { name: 'metadata', type: 'Object', constraint: 'Optional' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
      ],
    indexes: ["providerId"],
  },
  {
    name: "vehicles",
    icon: Truck,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    fields: [
      { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
        { name: 'make', type: 'String', constraint: 'Required' },
        { name: 'model', type: 'String', constraint: 'Required' },
        { name: 'year', type: 'Number', constraint: 'Required' },
        { name: 'color', type: 'String', constraint: 'Optional' },
        { name: 'plateNumber', type: 'String', constraint: 'Required, Unique' },
        { name: 'vin', type: 'String', constraint: 'Optional, Unique' },
        { name: 'serviceDueAt', type: 'Date', constraint: 'Optional' },
        { name: 'isDefault', type: 'Boolean', constraint: 'Default: false' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' },
        { name: 'deletedAt', type: 'Date', constraint: 'Optional' }
      ],
    indexes: ["userId", "licensePlate"],
  },
  {
    name: "subscriptions",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
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
    indexes: ["userId", "isActive", "endDate"],
  },
  {
    name: "service_requests",
    icon: CheckCircle2,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "userId", type: "ObjectId", constraint: "FK: users" },
      { name: "providerId", type: "ObjectId", constraint: "FK: providers" },
      { name: "vehicleId", type: "ObjectId", constraint: "FK: vehicles" },
      { name: "status", type: "Enum", constraint: "pending/accepted/completed" },
      { name: "createdAt", type: "Date", constraint: "Timestamp" },
      { name: "updatedAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["userId", "providerId", "status", "createdAt"],
  },
  {
    name: "chats",
    icon: MessageSquare,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    fields: [
      { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'customerId', type: 'ObjectId', constraint: 'FK -> users._id, Required' },
        { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required' },
        { name: 'lastMessage', type: 'String', constraint: 'Optional' },
        { name: 'lastMessageAt', type: 'Date', constraint: 'Optional' },
        { name: 'isActive', type: 'Boolean', constraint: 'Default: true' },
        { name: 'archived', type: 'Boolean', constraint: 'Default: false' },
        { name: 'isMuted', type: 'Boolean', constraint: 'Default: false' },
        { name: 'lastSeenMessageId', type: 'String', constraint: 'Optional' },
        { name: 'lastTypingAt', type: 'Date', constraint: 'Optional' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
        { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
      ],
    indexes: ["customerId", "providerId", "requestId"],
  },
  {
    name: "messages",
    icon: MessageSquare,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    fields: [
        { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'chatId', type: 'ObjectId', constraint: 'FK -> chats._id, Required, Index' },
        { name: 'senderId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
        { name: 'type', type: 'String', constraint: 'Enum: [TEXT, IMAGE, FILE, LOCATION, SYSTEM], Default: TEXT' },
        { name: 'content', type: 'String', constraint: 'Required, Text' },
        { name: 'metadata', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'isRead', type: 'Boolean', constraint: 'Default: false' },
        { name: 'readAt', type: 'Date', constraint: 'Optional' },
        { name: 'deletedAt', type: 'Date', constraint: 'Optional' },
        { name: 'editedAt', type: 'Date', constraint: 'Optional' },
        { name: 'reactions', type: 'Object', constraint: 'Optional, JSON' },
        { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now(), Index' }
      ],
    indexes: ["chatId", "senderId", "createdAt"],
  },
  {
    name: "reviews",
    icon: Star,
    color: "from-fuchsia-500 to-fuchsia-600",
    bgColor: "bg-fuchsia-50",
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
    indexes: ["requestId", "providerId", "rating"],
  },
  {
    name: "provider_documents",
    icon: Lock,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
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
    indexes: ["providerId", "verified"],
  },
  {
    name: "service_areas",
    icon: MapPin,
    color: "from-lime-500 to-lime-600",
    bgColor: "bg-lime-50",
    fields: [
        { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
        { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
        { name: 'city', type: 'String', constraint: 'Required, Index' },
        { name: 'district', type: 'String', constraint: 'Optional' },
        { name: 'radius', type: 'Number', constraint: 'Optional (km)' },
        { name: 'isActive', type: 'Boolean', constraint: 'Default: true' }
      ],
    indexes: ["providerId", "polygon"],
  },
  // {
  //   name: "users2",
  //   icon: Users,
  //   color: "from-violet-500 to-violet-600",
  //   bgColor: "bg-violet-50",
  //   fields: [
  //     { name: "_id", type: "ObjectId", constraint: "Primary Key" },
  //     { name: "email", type: "String", constraint: "Unique" },
  //     { name: "firstName", type: "String", constraint: "Required" },
  //     { name: "lastName", type: "String", constraint: "Required" },
  //     { name: "profile", type: "Object", constraint: "Nested" },
  //     { name: "createdAt", type: "Date", constraint: "Timestamp" },
  //   ],
  //   indexes: ["email", "createdAt"],
  // },
  // {
  //   name: "service_providers",
  //   icon: Truck,
  //   color: "from-sky-500 to-sky-600",
  //   bgColor: "bg-sky-50",
  //   fields: [
  //     { name: "_id", type: "ObjectId", constraint: "Primary Key" },
  //     { name: "name", type: "String", constraint: "Required" },
  //     { name: "serviceType", type: "String", constraint: "Required" },
  //     { name: "availability", type: "Object", constraint: "Nested" },
  //     { name: "createdAt", type: "Date", constraint: "Timestamp" },
  //   ],
  //   indexes: ["serviceType"],
  // },
  // {
  //   name: "service_requests2",
  //   icon: CheckCircle2,
  //   color: "from-red-500 to-red-600",
  //   bgColor: "bg-red-50",
  //   fields: [
  //       { name: '_id', type: 'ObjectId', constraint: 'PK, Auto-generated (id uuid)' },
  //       { name: 'userId', type: 'ObjectId', constraint: 'FK -> users._id, Required, Index' },
  //       { name: 'providerId', type: 'ObjectId', constraint: 'FK -> providers._id, Required, Index' },
  //       { name: 'serviceId', type: 'ObjectId', constraint: 'Optional, FK -> provider_services._id' },
  //       { name: 'vehicleId', type: 'ObjectId', constraint: 'Optional, FK -> vehicles._id' },
  //       { name: 'status', type: 'String', constraint: 'Enum: [PENDING, ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED, FAILED], Default: PENDING' },
  //       { name: 'pickupLat', type: 'Number', constraint: 'Optional' },
  //       { name: 'pickupLng', type: 'Number', constraint: 'Optional' },
  //       { name: 'pickupAddress', type: 'String', constraint: 'Optional' },
  //       { name: 'notes', type: 'String', constraint: 'Optional, Text' },
  //       { name: 'priceEstimate', type: 'Number', constraint: 'Optional' },
  //       { name: 'finalPrice', type: 'Number', constraint: 'Optional' },
  //       { name: 'startedAt', type: 'Date', constraint: 'Optional' },
  //       { name: 'finishedAt', type: 'Date', constraint: 'Optional' },
  //       { name: 'ratingRequested', type: 'Boolean', constraint: 'Default: false' },
  //       { name: 'ratingRequestedAt', type: 'Date', constraint: 'Optional' },
  //       { name: 'cancelledBy', type: 'String', constraint: 'Optional' },
  //       { name: 'cancellationReason', type: 'String', constraint: 'Optional' },
  //       { name: 'createdAt', type: 'Date', constraint: 'Default: Date.now()' },
  //       { name: 'updatedAt', type: 'Date', constraint: 'Default: Date.now(), auto-updated' }
  //     ],
  //   indexes: ["customerId", "providerId", "status"],
  // },
  {
    name: "ratings",
    icon: Star,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "requestId", type: "ObjectId", constraint: "FK: service_requests2" },
      { name: "score", type: "Int32", constraint: "1-5" },
      { name: "feedback", type: "String", constraint: "Optional" },
      { name: "createdAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["requestId", "score"],
  },
  {
    name: "payments",
    icon: CreditCard,
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "requestId", type: "ObjectId", constraint: "FK: service_requests" },
      { name: "amount", type: "Decimal", constraint: "Required" },
      { name: "method", type: "Enum", constraint: "card/cash/wallet" },
      { name: "status", type: "Enum", constraint: "pending/completed/failed" },
      { name: "createdAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["requestId", "status"],
  },
  {
    name: "loyalty_points",
    icon: TrendingUp,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "userId", type: "ObjectId", constraint: "FK: users" },
      { name: "points", type: "Int32", constraint: "Required" },
      { name: "transactionId", type: "ObjectId", constraint: "Optional" },
      { name: "createdAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["userId"],
  },
  {
    name: "scheduled_services",
    icon: Calendar,
    color: "from-cyan-600 to-cyan-700",
    bgColor: "bg-cyan-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "requestId", type: "ObjectId", constraint: "FK: service_requests" },
      { name: "scheduledDate", type: "Date", constraint: "Required" },
      { name: "duration", type: "Int32", constraint: "Minutes" },
      { name: "location", type: "GeoJSON", constraint: "Point" },
      { name: "createdAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["requestId", "scheduledDate"],
  },
  {
    name: "service_history",
    icon: BookOpen,
    color: "from-purple-600 to-purple-700",
    bgColor: "bg-purple-50",
    fields: [
      { name: "_id", type: "ObjectId", constraint: "Primary Key" },
      { name: "userId", type: "ObjectId", constraint: "FK: users" },
      { name: "providerId", type: "ObjectId", constraint: "FK: providers" },
      { name: "serviceType", type: "String", constraint: "Required" },
      { name: "cost", type: "Decimal", constraint: "Required" },
      { name: "completedAt", type: "Date", constraint: "Timestamp" },
    ],
    indexes: ["userId", "providerId", "completedAt"],
  },
];

const collectionGroups = {
  users: ["users", "user_sessions", "user_devices", "notifications"],
  providers: ["providers", "provider_services", "provider_documents", "service_areas"],
  services: ["service_requests", "chats", "messages", "reviews"],
  advanced: ["users2", "service_providers", "service_requests2", "ratings", "payments", "loyalty_points", "scheduled_services", "service_history"],
};

export default function App() {
  const [search, setSearch] = React.useState("");
  const [filterHasIndex, setFilterHasIndex] = React.useState(false);
  const [filterGroup, setFilterGroup] = React.useState("all");
  const [expandedCollection, setExpandedCollection] = React.useState(null);

  // Helper function to get a unique color for each collection
  const getCardColor = (index) => {
    const colors = [
      "from-blue-900/40 to-blue-800/20",      // Blue
      "from-cyan-900/40 to-cyan-800/20",      // Cyan
      "from-indigo-900/40 to-indigo-800/20",  // Indigo
      "from-slate-900/40 to-slate-800/20",    // Slate
      "from-orange-900/40 to-orange-800/20",  // Orange
      "from-green-900/40 to-green-800/20",    // Green
      "from-emerald-900/40 to-emerald-800/20",// Emerald
      "from-amber-900/40 to-amber-800/20",    // Amber
      "from-purple-900/40 to-purple-800/20",  // Purple
      "from-yellow-900/40 to-yellow-800/20",  // Yellow
      "from-pink-900/40 to-pink-800/20",      // Pink
      "from-rose-900/40 to-rose-800/20",      // Rose
      "from-fuchsia-900/40 to-fuchsia-800/20",// Fuchsia
      "from-teal-900/40 to-teal-800/20",      // Teal
      "from-lime-900/40 to-lime-800/20",      // Lime
      "from-violet-900/40 to-violet-800/20",  // Violet
      "from-sky-900/40 to-sky-800/20",        // Sky
      "from-red-900/40 to-red-800/20",        // Red
      "from-green-900/40 to-green-800/20",    // Green2
      "from-blue-900/40 to-purple-800/20",    // Blue-Purple
      "from-cyan-900/40 to-blue-800/20",      // Cyan-Blue
      "from-purple-900/40 to-pink-800/20",    // Purple-Pink
      "from-orange-900/40 to-yellow-800/20",  // Orange-Yellow
    ];
    return colors[index % colors.length];
  };

  const filteredCollections = mockCollections.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchIndex = filterHasIndex ? c.indexes && c.indexes.length > 0 : true;
    const matchGroup = filterGroup === "all" ? true : (collectionGroups[filterGroup] || []).includes(c.name);
    return matchSearch && matchIndex && matchGroup;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900" dir="rtl">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="border-b border-purple-700/30 backdrop-blur-xl sticky top-0 z-40 bg-purple-950/40">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-60"></div>
                  <div className="relative bg-purple-950 p-3 rounded-xl border border-purple-700/50">
                    <Database className="w-6 h-6 text-purple-300" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
                    Car Hero Platform
                  </h1>
                  <p className="text-purple-300/60 text-sm mt-1">MongoDB Database Design</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-900/50 rounded-lg border border-purple-700/30 backdrop-blur"
              >
                <Grid3x3 className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-purple-200">{filteredCollections.length} Collections</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* SEARCH & FILTER PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-900/60 to-slate-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-purple-700/40 flex flex-col md:flex-row gap-4 shadow-2xl">
                {/* Search Input */}
                <div className="flex-1 relative group/search">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300/60 group-hover/search:text-purple-300 transition" />
                  <input
                    type="text"
                    placeholder="ابحث عن Collection..."
                    className="w-full pl-12 pr-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-xl text-purple-50 placeholder-purple-400/50 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* Filter Group */}
                <select
                  className="px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-xl text-purple-50 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 cursor-pointer hover:bg-purple-800/40"
                  value={filterGroup}
                  onChange={(e) => setFilterGroup(e.target.value)}
                >
                  <option value="all">كل المجموعات</option>
                  <option value="users">Users</option>
                  <option value="providers">Providers</option>
                  <option value="services">Services</option>
                  <option value="advanced">Advanced</option>
                </select>

                {/* Filter Checkbox */}
                <label className="flex items-center gap-2 px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-xl cursor-pointer hover:bg-purple-800/40 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={filterHasIndex}
                    onChange={(e) => setFilterHasIndex(e.target.checked)}
                    className="w-4 h-4 rounded border-purple-600 bg-purple-700 accent-purple-400"
                  />
                  <span className="text-sm text-purple-200 flex items-center gap-2 whitespace-nowrap">
                    <Filter className="w-4 h-4" />
                    With Indexes
                  </span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* COLLECTIONS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <AnimatePresence>
              {filteredCollections.map((collection, idx) => {
                const Icon = collection.icon;
                const isExpanded = expandedCollection === collection.name;
                const cardBgColor = getCardColor(idx);

                return (
                  <motion.div
                    key={collection.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <motion.button
                      onClick={() => setExpandedCollection(isExpanded ? null : collection.name)}
                      className="w-full"
                    >
                      <motion.div
                        layout
                        className="relative group h-full"
                      >
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Card */}
                        <div className={`relative bg-gradient-to-br ${cardBgColor} backdrop-blur-xl border border-purple-700/40 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all duration-300 shadow-2xl h-full flex flex-col`}>
                          {/* CARD HEADER */}
                          <div className="px-6 py-5 bg-gradient-to-r from-purple-900/40 to-transparent border-b border-purple-700/20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 flex-1">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className={`p-3 rounded-xl bg-gradient-to-br ${collection.color} text-white shadow-lg`}
                                >
                                  <Icon className="w-5 h-5" />
                                </motion.div>
                                <div className="text-left">
                                  <h2 className="text-lg font-bold text-purple-50 group-hover:text-purple-100 transition">{collection.name}</h2>
                                  <p className="text-sm text-purple-300/60 mt-1">
                                    {collection.fields?.length || 0} Fields • {collection.indexes?.length || 0} Indexes
                                  </p>
                                </div>
                              </div>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-purple-300/60 group-hover:text-purple-300 transition" />
                              </motion.div>
                            </div>
                          </div>

                          {/* EXPANDED CONTENT */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 py-5 space-y-5 bg-purple-950/30">
                                {/* FIELDS SECTION */}
{collection.fields && collection.fields.length > 0 && (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <Database className="w-4 h-4 text-purple-400" />
      <h4 className="text-xs font-semibold text-purple-200 uppercase tracking-wider">
        Fields ({collection.fields.length})
      </h4>
    </div>

    <div className="space-y-2">
      {collection.fields.map((field, fidx) => (
        <motion.div
          key={fidx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: fidx * 0.04 }}
          className="bg-purple-800/40 border border-purple-700/40 rounded-lg px-3 py-2 shadow"
        >
          <div className="flex justify-between text-purple-100 text-sm">
            <span>{field.name}</span>
            <span className="text-purple-300 text-xs">{field.type}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)}

                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RELATIONSHIPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-900/60 to-slate-900/40 backdrop-blur-2xl border border-purple-700/40 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-8">
                  🔗 العلاقات بين المجموعات
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "المستخدم ↔ الخدمات",
                      color: "from-blue-500 to-blue-600",
                      items: [
                        "users._id → user_sessions.userId",
                        "users._id → service_requests.userId",
                        "users._id → reviews.reviewerId",
                        "users._id → chats.customerId",
                      ],
                    },
                    {
                      title: "مزود الخدمة ↔ الخدمات",
                      color: "from-green-500 to-green-600",
                      items: [
                        "providers._id → provider_services.providerId",
                        "providers._id → service_requests.providerId",
                        "providers._id → reviews.providerId",
                        "providers._id → chats.providerId",
                      ],
                    },
                    {
                      title: "طلب الخدمة ↔ التفاصيل",
                      color: "from-purple-500 to-purple-600",
                      items: [
                        "service_requests._id → payments",
                        "service_requests._id → reviews",
                        "service_requests link provider & user",
                      ],
                    },
                    {
                      title: "معلومات إضافية",
                      color: "from-amber-500 to-amber-600",
                      items: [
                        "✓ GeoJSON للمواقع الجغرافية",
                        "✓ Unique constraints في الفهارس",
                        "✓ Timestamps: createdAt & updatedAt",
                      ],
                    },
                  ].map((card, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative group/card"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover/card:opacity-20 rounded-lg blur transition-all`}></div>
                      <div className="relative bg-purple-900/30 border border-purple-700/30 rounded-lg p-4 hover:border-purple-600/50 transition-all">
                        <h3 className={`font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-3`}>
                          {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.items.map((item, iidx) => (
                            <li key={iidx} className="text-sm text-purple-200/80 flex items-start gap-2">
                              <span className="text-purple-400/60 mt-1">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* TECH NOTES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-900/60 to-slate-900/40 backdrop-blur-2xl border border-purple-700/40 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 text-center">
                  📌 ملاحظات تقنية مهمة
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🔐",
                      title: "ObjectId",
                      desc: "معرّف مستند MongoDB الفريد",
                    },
                    {
                      icon: "📍",
                      title: "GeoSpatial",
                      desc: "استخدم index 2dsphere للمواقع",
                    },
                    {
                      icon: "⚡",
                      title: "Indexes",
                      desc: "فهارس لتسريع الاستعلامات",
                    },
                    {
                      icon: "📦",
                      title: "Embedded JSON",
                      desc: "خزّن كـ Object أو Array",
                    },
                    {
                      icon: "📝",
                      title: "Enums",
                      desc: "خزّن كسلاسل String",
                    },
                    {
                      icon: "⏱️",
                      title: "Timestamps",
                      desc: "createdAt & updatedAt تلقائي",
                    },
                  ].map((note, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-4 hover:border-purple-600/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{note.icon}</span>
                        <div>
                          <h4 className="font-semibold text-purple-100 mb-1">{note.title}</h4>
                          <p className="text-sm text-purple-200/60">{note.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Collections", value: mockCollections.length, icon: "📚" },
                { label: "Total Fields", value: mockCollections.reduce((sum, c) => sum + (c.fields?.length || 0), 0), icon: "📋" },
                { label: "Total Indexes", value: mockCollections.reduce((sum, c) => sum + (c.indexes?.length || 0), 0), icon: "📑" },
                { label: "Database Type", value: "MongoDB", icon: "🗄️" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover/stat:opacity-100 rounded-lg blur transition-all"></div>
                  <div className="relative bg-purple-900/40 border border-purple-700/40 rounded-lg p-4 text-center hover:border-purple-600/50 transition-all">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-purple-100">{stat.value}</div>
                    <div className="text-xs text-purple-200/60 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center pb-8 border-t border-purple-700/30 pt-8"
          >
            <p className="text-purple-200/70 text-sm">
              Car Hero Platform • Database Architecture Design
              <br />
              <span className="text-xs text-purple-300/50 mt-2 block">
                MongoDB (NoSQL) • Real-time Service Marketplace
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}