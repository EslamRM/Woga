import { defineStore } from 'pinia';
import { useFetchApi } from '~/composables/useCustomFetch';
// const config = useRuntimeConfig();
export const authStore = defineStore('auth', {
    state: () => {
        return {
            username: null,
            email_valid: false,
            password1_valid: false,
            isAuthenticated: false,
            non_field_errors: false,
            firstname_valid: false,
            lastname_valid: false,
            access: null,
            refresh_token: null,
            details: false,
        }
    },
    persist: true,
    actions: {
        restEmail() {
            this.email_valid = false
        },
        restPassword() {
            this.password1_valid = false
        },
        async login(formdata, error, success) {
            try {
                const res = await useFetchApi('api/token/', {
                    method: 'POST',
                    body: formdata
                });
                if (res.status.value === "success") {
                    const data = res.data.value;
                    this.username = data.first_name ? data.first_name : data.username
                    this.access = data.access;
                    this.refresh_token = data.refresh;
                    this.isAuthenticated = true
                    success()
                    const router = useRouter()
                    const localePath = useLocalePath()
                    setTimeout(() => {
                        router.push({ path: localePath('/') })
                    }, 1000);
                }
                if (res.status.value === "error") {
                    this.isAuthenticated = false
                    const data = res.error.value.data;
                    this.details = data.detail ? data.detail : false
                    this.email_valid = data.username ? data.username[0] : false
                    this.password1_valid = data.password ? data.password[0] : false
                    error()
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async register(formdata, success, error) {
            try {
                const res = await useFetchApi('auth/register/', {
                    method: 'POST',
                    body: formdata
                });
                if (res.status.value === "success") {
                    const data = res.data.value;
                    this.user = data.user;
                    success();
                    const router = useRouter()
                    const localePath = useLocalePath()
                    setTimeout(() => {
                        router.push({ path: localePath('login') })
                    }, 1000);

                }
                if (res.status.value === "error") {
                    const data = res.error.value.data;
                    this.non_field_errors = data.non_field_errors ? data.non_field_errors[0] : false
                    this.email_valid = data.email ? data.email[0] : false
                    this.firstname_valid = data.first_name ? data.first_name[0] : false
                    this.lastname_valid = data.last_name ? data.last_name[0] : false
                    this.password1_valid = data.password1 ? data.password1[0] : false
                    error()
                }
            } catch (error) {
                console.error('Error', error);
            }
        },
        async refresh() {
            try {
                const formdata = new FormData()
                formdata.append("refresh", this.refresh_token)
                const res = await useFetchApi('api/token/refresh/', {
                    method: 'POST',
                    body: formdata
                });
                if (res.status.value === "success") {
                    const data = res.data.value;
                    this.access = data.access;
                    this.refresh_token = data.refresh
                    this.isAuthenticated = true
                }
                if (res.status.value === "error") {
                    this.isAuthenticated = false
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
    }
});
