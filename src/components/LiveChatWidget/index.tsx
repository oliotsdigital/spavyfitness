import { MessageSquare, X } from 'lucide-react';
import { useLiveChatState } from '../../hooks/useLiveChatState';

interface LiveChatWidgetProps {
  onClose: () => void;
}

export default function LiveChatWidget({ onClose }: LiveChatWidgetProps) {
  const { chatInput, chatMessages, isSending, setChatInput, handleSendMessage } = useLiveChatState();

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-96 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
      <div className="bg-red-600 px-4 py-3 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="font-extrabold text-xs uppercase">Spavy Customer Support</span>
        </div>
        <button onClick={onClose} className="hover:text-zinc-200">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 h-64 overflow-y-auto space-y-3 bg-black/50 text-xs">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2.5 rounded max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-2 bg-zinc-900 border-t border-zinc-800 flex gap-2">
        <input
          type="text"
          placeholder="Ask about gear or quotes..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          disabled={isSending}
          className="w-full bg-black border border-zinc-700 text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-red-600 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isSending}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-bold px-3 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
