import { useState, useCallback } from 'react';
import type { FormEvent } from 'react';
import type { ChatMessage } from '../types';
import { getChatAutoReply } from '../api';

const INITIAL_MESSAGE: ChatMessage = {
  sender: 'system',
  text: 'Welcome to Spavy Fitness Equipments PVT. LTD. Support! How can we assist with your gear today?',
};

export function useLiveChatState() {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isSending) return;

    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsSending(true);

    try {
      const reply = await getChatAutoReply(userMsg);
      setChatMessages((prev) => [...prev, { sender: 'system', text: reply }]);
    } finally {
      setIsSending(false);
    }
  }, [chatInput, isSending]);

  return {
    chatInput,
    chatMessages,
    isSending,
    setChatInput,
    handleSendMessage,
  };
}
