import type { UseFetchOptions } from "#app";
import { authStore } from "~/store/auth";

export const useFetchApi = (url: string, options?: UseFetchOptions<object>) => {
    const { access } = authStore()
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL;
    const headers = new Headers();
    const fullUrl = `${baseURL}${url}`;
    return useFetch(fullUrl, {
        ...options,
        async onRequest({ request, options }) {
            if (access){
                headers.set("Authorization", "Bearer " + access);
            }
            options.headers = headers;
        },
    });
};
