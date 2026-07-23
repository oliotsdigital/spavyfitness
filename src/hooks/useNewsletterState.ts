import { useState, useCallback } from 'react';
import type { FormEvent } from 'react';
import { subscribeNewsletter } from '../api';

export function useNewsletterState() {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await subscribeNewsletter(newsletterEmail);
      setEmailSubscribed(true);
      setNewsletterEmail('');
    } finally {
      setIsSubmitting(false);
    }
  }, [newsletterEmail, isSubmitting]);

  return {
    emailSubscribed,
    newsletterEmail,
    isSubmitting,
    setNewsletterEmail,
    handleSubscribe,
  };
}
