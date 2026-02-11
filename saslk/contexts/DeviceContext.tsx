'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface DeviceContextType {
    deviceType: DeviceType;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isSmallScreen: boolean;
    isLargeScreen: boolean;
}

const defaultContext: DeviceContextType = {
    deviceType: 'desktop',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isSmallScreen: false,
    isLargeScreen: true,
};

const DeviceContext = createContext<DeviceContextType>(defaultContext);

export const useDevice = () => useContext(DeviceContext);

interface DeviceProviderProps {
    children: ReactNode;
}

const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
    const [deviceData, setDeviceData] = useState<DeviceContextType>(defaultContext);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let deviceType: DeviceType = 'desktop';

            if (width < 768) {
                deviceType = 'mobile';
            } else if (width >= 768 && width < 1024) {
                deviceType = 'tablet';
            } else {
                deviceType = 'desktop';
            }

            setDeviceData({
                deviceType,
                isMobile: deviceType === 'mobile',
                isTablet: deviceType === 'tablet',
                isDesktop: deviceType === 'desktop',
                isSmallScreen: deviceType === 'mobile' || deviceType === 'tablet',
                isLargeScreen: deviceType === 'desktop',
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <DeviceContext.Provider value={deviceData}>
            {children}
        </DeviceContext.Provider>
    );
};

export { DeviceProvider, DeviceContext };
