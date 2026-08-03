import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, RotateCcw, ChevronRight, Sparkles } from "lucide-react";
import { faqService, faqBus } from "../../services/faqService";
import TypingIndicator from "./TypingIndicator";
import { Link } from "react-router-dom";

export default function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(() => faqService.getSettings());
  const [categories, setCategories] = useState(() => faqService.getCategories());
  const [faqs, setFaqs] = useState(() => faqService.getFaqs("all", true));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleDataChange = () => {
      setSettings(faqService.getSettings());
      setCategories(faqService.getCategories());
      setFaqs(faqService.getFaqs("all", true));
    };
    faqBus.addEventListener("faq-data-changed", handleDataChange);
    return () => faqBus.removeEventListener("faq-data-changed", handleDataChange);
  }, []);

  const initChat = () => {
    setMessages([{
      id: "welcome-msg",
      sender: "bot",
      text: settings.welcomeMessage || "Hi! How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }]);
  };

  useEffect(() => { initChat(); }, [settings.welcomeMessage]);

  useEffect(() => {
    if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const toggleOpen = () => setIsOpen((v) => !v);

  const handleQuestionSelect = (faq) => {
    if (isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: faq.question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const related = faq.relatedFaqIds?.length
        ? faqs.filter((f) => faq.relatedFaqIds.includes(f.id))
        : [];

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: faq.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          faqId: faq.id,
          relatedFaqs: related,
        },
      ]);
    }, settings.typingDelayMs || 1300);
  };

  const handleReset = () => { setIsTyping(false); initChat(); };

  const activeFaqs = selectedCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  const botName = settings.botName || "Saipal AI";

  return (
    <div className="fixed bottom-6 left-6 z-[999] font-sans">

      {/* ── FLOATING TRIGGER BUTTON ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={toggleOpen}
            aria-label="Open Saipal AI"
            className="flex items-center gap-2.5 bg-[#00AEEF] hover:bg-[#0099d4] text-white pl-4 pr-5 py-2.5 rounded-full shadow-xl border border-white/10 cursor-pointer transition-colors"
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <span className="text-sm font-bold tracking-wide sm:hidden">AI</span>
            <span className="text-sm font-bold tracking-wide hidden sm:inline">{botName}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[560px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >

            {/* HEADER */}
            <div className="bg-[#00AEEF] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">{botName}</p>
                  <p className="text-white/80 text-[10px] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <button
                  onClick={handleReset}
                  title="Reset"
                  className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition cursor-pointer"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={toggleOpen}
                  title="Close"
                  className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* CATEGORY TABS */}
            <div className="px-3 pt-2 pb-1.5 flex gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-100 shrink-0">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#2E3192] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                    selectedCategory === cat.id
                      ? "bg-[#2E3192] text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-slate-50/60">
              {messages.map((msg, index) => (
                <div key={msg.id || index}>
                  {msg.sender === "user" && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#2E3192] text-white px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[82%] text-sm leading-relaxed">
                        <p>{msg.text}</p>
                        <span className="text-[10px] text-white/40 block text-right mt-1">{msg.timestamp}</span>
                      </div>
                    </motion.div>
                  )}

                  {msg.sender === "bot" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#2E3192] flex items-center justify-center shrink-0 mt-1">
                        <Sparkles size={11} className="text-white" />
                      </div>
                      <div className="space-y-2 flex-1 max-w-[88%]">
                        <div className="bg-white border border-slate-200 px-3.5 py-2.5 rounded-2xl rounded-tl-sm text-slate-700 text-sm leading-relaxed shadow-sm whitespace-pre-line">
                          {msg.text}

                          {msg.faqId === "faq-4" && (
                            <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex gap-2 flex-wrap">
                              <Link to="/school/admissions" onClick={() => setIsOpen(false)}
                                className="text-xs bg-[#00AEEF] text-white px-3 py-1 rounded-lg font-semibold hover:opacity-90 transition">
                                School Admissions
                              </Link>
                              <Link to="/college/admissions" onClick={() => setIsOpen(false)}
                                className="text-xs bg-[#2E3192] text-white px-3 py-1 rounded-lg font-semibold hover:opacity-90 transition">
                                College Admissions
                              </Link>
                            </div>
                          )}

                          <span className="text-[10px] text-slate-300 block text-right mt-1">{msg.timestamp}</span>
                        </div>

                        {msg.relatedFaqs?.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pl-0.5">Related</p>
                            {msg.relatedFaqs.map((rel) => (
                              <button
                                key={rel.id}
                                onClick={() => handleQuestionSelect(rel)}
                                disabled={isTyping}
                                className="w-full text-left text-xs text-[#2E3192] bg-white border border-slate-200 hover:border-[#00AEEF]/50 hover:bg-slate-50 px-3 py-2 rounded-xl flex items-center justify-between gap-2 transition cursor-pointer"
                              >
                                <span>{rel.question}</span>
                                <ChevronRight size={12} className="shrink-0 text-[#00AEEF]" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {isTyping && <TypingIndicator botName={botName} />}
              <div ref={chatEndRef} />
            </div>

            {/* QUESTION PANEL */}
            <div className="px-3 pt-2 pb-3 bg-white border-t border-slate-100 shrink-0">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Select a question
              </p>
              <div className="max-h-36 overflow-y-auto space-y-1 pr-0.5">
                {activeFaqs.length === 0 ? (
                  <p className="text-slate-400 text-xs text-center py-2 italic">No questions in this category.</p>
                ) : (
                  activeFaqs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleQuestionSelect(faq)}
                      disabled={isTyping}
                      className={`w-full text-left text-xs px-3 py-2 rounded-xl border flex items-center justify-between gap-2 transition cursor-pointer ${
                        isTyping
                          ? "opacity-40 cursor-not-allowed bg-slate-50 border-slate-100"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-[#00AEEF]/40"
                      }`}
                    >
                      <span className="line-clamp-1">{faq.question}</span>
                      <ChevronRight size={12} className="shrink-0 text-[#00AEEF]" />
                    </button>
                  ))
                )}
              </div>
              <p className="text-[10px] text-slate-300 text-center mt-2">Powered by Saipal Knowledge Base</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
