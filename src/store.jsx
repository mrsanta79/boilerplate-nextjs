import create from 'zustand';

// Search term global store
export const useSearchTermStore = create(set => ({
    searchTerm: '',
    setSearchTerm: searchTerm => set({
        searchTerm
    }),
}));
