// src/RelationshipsGraph.jsx
import React from "react";
import { motion } from "framer-motion";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "users",
    position: { x: 0, y: 0 },
    data: { label: "Users" },
    style: { background: "#dbeafe", padding: 12, borderRadius: 10, border: "1px solid rgba(99,102,241,0.15)" },
    className: "rf-node"
  },
  {
    id: "providers",
    position: { x: 320, y: 0 },
    data: { label: "Providers" },
    style: { background: "#dcfce7", padding: 12, borderRadius: 10, border: "1px solid rgba(34,197,94,0.12)" },
    className: "rf-node"
  },
  {
    id: "service_requests",
    position: { x: 160, y: 160 },
    data: { label: "Service Requests" },
    style: { background: "#fae8ff", padding: 12, borderRadius: 10, border: "1px solid rgba(124,58,237,0.12)" },
    className: "rf-node"
  },
  {
    id: "messages",
    position: { x: -40, y: 320 },
    data: { label: "Messages" },
    style: { background: "#fee2e2", padding: 12, borderRadius: 10, border: "1px solid rgba(239,68,68,0.12)" },
    className: "rf-node"
  },
  {
    id: "reviews",
    position: { x: 360, y: 320 },
    data: { label: "Reviews" },
    style: { background: "#fef9c3", padding: 12, borderRadius: 10, border: "1px solid rgba(234,179,8,0.12)" },
    className: "rf-node"
  }
];

const initialEdges = [
  { id: "e1", source: "users", target: "service_requests", label: "userId", animated: true, style: { stroke: "#7c3aed" } },
  { id: "e2", source: "providers", target: "service_requests", label: "providerId", animated: true, style: { stroke: "#10b981" } },
  { id: "e3", source: "users", target: "messages", label: "senderId", animated: true, style: { stroke: "#ef4444" } },
  { id: "e4", source: "users", target: "reviews", label: "reviewerId", animated: true, style: { stroke: "#f59e0b" } },
  { id: "e5", source: "providers", target: "reviews", label: "providerId", animated: true, style: { stroke: "#60a5fa" } }
];

export default function RelationshipsGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-xl shadow-lg p-4 bg-white"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        خريطة العلاقات بين المجموعات
      </h2>

      <div
        className="w-full rounded-xl transition-all duration-300"
        style={{
          width: "100%",
          height: 640,
          border: "2px solid rgba(124,58,237,0.08)",
          boxShadow: "0 6px 30px rgba(99,102,241,0.06)"
        }}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            nodesDraggable={true}
            nodesConnectable={false}
            panOnScroll
            attributionPosition="bottom-left"
            style={{ width: "100%", height: "100%", background: "linear-gradient(180deg,#ffffff,#fbfdff)" }}
          >
            <Background color="#e6eef8" gap={16} />
            <MiniMap nodeColor={(n) => {
              if (n.id === "users") return "#6366f1";
              if (n.id === "providers") return "#10b981";
              if (n.id === "service_requests") return "#7c3aed";
              if (n.id === "messages") return "#ef4444";
              return "#f59e0b";
            }} />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>

      <p className="mt-3 text-sm text-gray-500 text-center">مرر الماوس فوق العقد لرؤية تأثير التكبير ولون الظل — اسحب العقد لإعادة ترتيب الخريطة</p>
    </motion.div>
  );
}
