
import React, { useState, useRef, useEffect } from 'react';

const QA_MAP: Record<string, string> = {
  "what does full status mean?": "A FULL status means the bin has exceeded 75% capacity. Collection staff should be dispatched immediately to avoid overflow.",
  "how does the sensor work?": "The system uses Ultrasonic HC-SR04 sensors connected to ESP32 microcontrollers. They measure the distance from the top of the bin to the waste pile.",
  "is this data real-time?": "Yes, data is fetched every 5 seconds from the IoT mesh. If data is missing for 30 seconds, the system triggers a 'Disconnected' fault alert.",
  "what is distance?": "Distance shows the real-time measurement in centimeters from the sensor to the waste. Lower distance means a fuller bin.",
  "how to empty a bin?": "Once maintenance clears the bin, the sensor will automatically detect the increased distance and update the status to 'EMPTY' on the dashboard.",
  "default": "I'm the Smart Campus Assistant. You can ask me about Bin Status, Sensors, Real-time data, or how to use this Dashboard."
};

export const ChatbotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, sender: 'bot' | 'user' }[]>([
    { text: "Hello! I'm your Campus Waste Assistant. How can I help you navigate the system today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.toLowerCase();
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      let botResponse = QA_MAP.default;
      for (const key in QA_MAP) {
        if (userMsg.includes(key)) {
          botResponse = QA_MAP[key];
          break;
        }
      }
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-80 h-[450px] rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-emerald-600 p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center border border-emerald-400">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <span className="font-black text-sm uppercase tracking-widest">Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100 p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                  m.sender === 'user' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-slate-100 text-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-2 bg-white p-1.5 border border-slate-200 rounded-2xl shadow-sm">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent text-[13px] font-medium px-2 outline-none"
                placeholder="Ask about sensors..."
              />
              <button 
                onClick={handleSend}
                className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            <p className="text-[9px] text-slate-400 mt-3 text-center font-bold uppercase tracking-tighter opacity-70">Pilot Helper • V1.0</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-emerald-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      )}
    </div>
  );
};
