'use client';

import React, { ReactNode } from 'react';
import { DeviceProvider } from '@/contexts/DeviceContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ClientBodyProps {
    children: ReactNode;
}

const ClientBody: React.FC<ClientBodyProps> = ({ children }) => {
    return (
        <DeviceProvider>
            <Navbar />
            <div
                style={{
                    marginTop: '74px', // Clear navbar (approx 72px) + 2px gap for visibility
                    marginLeft: '0.25rem',
                    marginRight: '0.25rem',
                    marginBottom: '0px', // Minimal bottom gap ("reduced height")
                    borderRadius: '10px',
                    border: '2px solid #000000',
                    background: '#ffffff',
                    height: 'calc(100vh - 74px - 0px)', // Exact fit
                    position: 'relative',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
                className="hide-scrollbar" // Helper class for webkit
            >
                <style jsx global>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {children}
                <Footer />
            </div>
        </DeviceProvider>
    );
};

export default ClientBody;
