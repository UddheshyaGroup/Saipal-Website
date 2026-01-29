import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

export default function Toast({ message, type = "success", onClose, duration = 5000 }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
    const Icon = type === "success" ? FaCheckCircle : FaExclamationCircle;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white ${bgColor} min-w-[320px] max-w-[90vw]`}
        >
            <Icon className="text-2xl shrink-0" />
            <div className="flex-grow font-semibold">{message}</div>
            <button
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-lg transition"
            >
                <FaTimes className="text-lg" />
            </button>
        </motion.div>
    );
}
