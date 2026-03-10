import { create } from "zustand";
import { User } from "@/types/user";

interface AuthStore {
    isAuthenticated: boolean,
    user: User | null,
    accessToken: string | null,
    setUser: (user: User, token: string) => void,
    logout: () => void,
}

export const useAuthStore = create<AuthStore>()((set) => ({
    isAuthenticated: false,
    user: null,
    accessToken: null,
    setUser: (user: User, token) => {
        set(() => ({
            user,
            isAuthenticated: true,
            accessToken: token,
        }));
    },
    logout: () => {
        set(() => ({
            user: null,
            isAuthenticated: false,
            accessToken: null,
        }));
    },
}))