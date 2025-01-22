import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SubscriptionStore = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isClicked: boolean;
    setIsClicked: (isClicked: boolean) => void;
}

export const useSubscriptionStore = create<SubscriptionStore>()(
    persist(
        (set) => ({
            isOpen: false,
            isClicked: false,
            setIsClicked: (isClicked) => set({ isClicked }),
            setIsOpen: (isOpen) => set({ isOpen }),
        }),
        {
            name: 'subscription',
            storage: createJSONStorage(() => localStorage), 
        }
    )
);