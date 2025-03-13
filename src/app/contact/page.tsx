import React from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact | Next.js Boilerplate',
  description: 'Contact us for more information about our Next.js boilerplate',
};

export default function ContactPage() {
  return <ContactPageClient />;
} 