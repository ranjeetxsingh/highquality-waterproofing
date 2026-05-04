import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm the Waterproofing Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { id: Date.now(), text: input, isBot: false }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate thinking and response
    setTimeout(() => {
      let response = "Thanks for reaching out! Our team will get back to you soon. For immediate assistance, please call 021 226 6765.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('quote') || lowerInput.includes('price') || lowerInput.includes('cost')) {
        response = "You can use our automated quote calculator on this page for a quick estimate, or leave your details and we'll provide a formal quote!";
      } else if (lowerInput.includes('leak') || lowerInput.includes('repair')) {
        response = "We specialize in leak repairs! We offer emergency services across Auckland. Would you like to schedule an inspection?";
      }

      setMessages(prev => [...prev, { id: Date.now(), text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-primary-500 transition-all group"
          >
            <div className="absolute -inset-2 bg-primary-600/30 rounded-full animate-ping"></div>
            <MessageSquare className="w-7 h-7 relative z-10" />
            <div className="absolute left-20 bg-white text-gray-900 font-semibold text-sm py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Need Help? Chat with us!
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 w-[350px] max-w-[calc(100vw-32px)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 100px)' }}
          >
            {/* Header */}
            <div className="bg-primary-600 p-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Waterproofing Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary-100 font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex items-end gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'}`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div 
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message.isBot 
                        ? 'bg-white text-gray-700 rounded-bl-none shadow-sm border border-gray-100' 
                        : 'bg-primary-600 text-white rounded-br-none shadow-sm'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
