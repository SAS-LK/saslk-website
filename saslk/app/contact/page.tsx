import type { Metadata } from 'next';
import ContactPageContent from '@/sections/ContactPageContent';

export const metadata: Metadata = {
    title: 'Contact | SASLK — Let\'s Work Together',
    description:
        'Get in touch with SASLK. Send us a message, schedule a call, or visit us in Colombo, Sri Lanka. We\'d love to hear about your project.',
    keywords: ['contact', 'SASLK', 'get in touch', 'hire', 'project inquiry'],
};

export default function ContactPage() {
    return (
        <main>
            <ContactPageContent />
        </main>
    );
}
