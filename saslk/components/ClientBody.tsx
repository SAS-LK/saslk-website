'use client';

import React, { ReactNode } from 'react';
import { DeviceProvider } from '@/contexts/DeviceContext';

interface ClientBodyProps {
    children: ReactNode;
}

const ClientBody: React.FC<ClientBodyProps> = ({ children }) => {
    return (
        <DeviceProvider>
            {children}
        </DeviceProvider>
    );
};

export default ClientBody;
