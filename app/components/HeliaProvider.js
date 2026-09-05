"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const HeliaContext = createContext(undefined);

export function HeliaProvider({ children }) {
    const [helia, setHelia] = useState(null);

    useEffect(() => {
        let stopped = false;
        let instance;

        const start = async () => {
            const [{ createHelia, libp2pDefaults }, { floodsub }] = await Promise.all([
                import('helia'),
                import('@libp2p/floodsub')
            ]);

            // Keep Helia's browser defaults and add Floodsub for the Libp2p
            // example. Passing only `services.pubsub` would discard Helia's
            // default routing, identify, and transport services.
            const defaults = libp2pDefaults();
            instance = await createHelia({
                libp2p: {
                    ...defaults,
                    services: {
                        ...defaults.services,
                        pubsub: floodsub()
                    }
                }
            });

            if (stopped) {
                await instance.stop();
                return;
            }

            setHelia(instance);
        };

        start().catch((error) => {
            console.error('Failed to start Helia:', error);
        });

        return () => {
            stopped = true;
            if (instance) {
                void instance.stop().catch((error) => {
                    console.error('Failed to stop Helia:', error);
                });
            }
            setHelia(null);
        };
    }, []);

    return (
        <HeliaContext.Provider value={helia}>
            {children}
        </HeliaContext.Provider>
    );
}

export function useHelia() {
    const helia = useContext(HeliaContext);
    if (helia === undefined) {
        throw new Error('useHelia must be used within a HeliaProvider');
    }
    return helia;
}
