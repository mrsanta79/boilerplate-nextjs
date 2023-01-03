import create from 'zustand';
import { persist } from 'zustand/middleware';

// Search term store
export const useSearchTermStore = create(
    (set, get) => ({
        searchTerm: '',
        setSearchTerm: searchTerm => set((state) => ({
            searchTerm
        })
    ),
}));

// User store
export const useUser = create(
    persist(
        (set, get) => ({
            role: null,
            token: null,
            user: null,
            setToken: (role, token) => set((state) => ({
                role: role,
                token: token,
            })),
            updateToken: (role, token) => set((state) => ({
                role: role,
                token: token,
            })),
            clearToken: () => set((state) => ({
                role: null,
                token: null,
                user: null,
            })),
            setUser: (user) => set((state) => ({
                user: user,
            })),
        }),
        {
            name: 'flex_script.auth',
            getStorage: () => localStorage,
        }
    )
)