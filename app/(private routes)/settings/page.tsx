import { useAuthStore } from "@/lib/store/authStore"

export default function SettingsPage() {
    const { user, logout } = useAuthStore();
    return (
        <h1>{user?.name} account</h1>
    )
}