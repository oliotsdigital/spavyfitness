const simulateDelay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getChatAutoReply(userMessage: string): Promise<string> {
  await simulateDelay();
  return `Thanks for asking about "${userMessage}". An equipment specialist will connect shortly, or feel free to call our direct line at +91 (20) 358-6190.`;
}
