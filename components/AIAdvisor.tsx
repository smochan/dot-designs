import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setSuggestion(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `I want to make a custom 3D figurine. The user input is: "${input}". 
      Suggest a creative pose, outfit details, and base design for this figurine. 
      Keep the tone exciting and professional. Limit to 50 words.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setSuggestion(response.text);
    } catch (error) {
      console.error("AI Error:", error);
      setSuggestion("Our creative stylist is taking a break. Try suggesting something simple like 'A superhero pose for my cat'.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="bg-white/80 dark:bg-studio-800/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl transition-colors duration-300">
        <div className="inline-flex items-center justify-center p-3 bg-gold-500/10 rounded-full text-gold-500 mb-6">
          <Sparkles size={24} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Need Inspiration?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Describe who the figurine is for, and let our AI Stylist suggest the perfect pose and details.
        </p>

        <form onSubmit={handleConsultation} className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., A figurine for my dad who loves golf and grilling..."
            className="w-full pl-6 pr-14 py-4 bg-gray-5 dark:bg-studio-900 border border-gray-200 dark:border-white/10 rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-inner"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 p-2 bg-gold-500 text-black rounded-full hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
          </button>
        </form>

        {suggestion && (
          <div className="mt-8 p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
            <h4 className="text-gold-500 text-sm font-bold uppercase tracking-wider mb-2">AI Suggestion</h4>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};