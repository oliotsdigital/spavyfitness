const simulateDelay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export async function subscribeNewsletter(email: string): Promise<{ success: boolean }> {
  await simulateDelay();

  if (!email.trim()) {
    throw new Error('Email is required');
  }

  return { success: true };
}
