import { authStore } from "~/store/auth";
const { isAuthenticated } = authStore()
const router = useRouter()
const localePath = useLocalePath()

export default defineNuxtRouteMiddleware((to, from) => {
    if (!isAuthenticated) {
        return navigateTo(localePath('login'))

    }
})