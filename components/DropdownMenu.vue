<template>
    <div class="relative" @click="toggleDropdown">
        <button class="bg-secondary mx-1 text-white font-bold py-2 px-4 md:px-8 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
        </button>
        <div v-if="isOpen"
            class="flex flex-col justify-between items-center text-sm absolute top-0 w-[300px] -right-5 z-10">
            <div class="flex flex-col items-center" v-if="isAuthenticated">
                <a href="https://portal.woga.app/" target="_blank" rel="noopener noreferrer">
                    <button
                        class="bg-secondary text-white font-semibold py-2 px-3 md:px-8 rounded-2xl mb-2 md:mb-0 w-full">{{
        $t("merchant") }}
                    </button>
                </a>
                <button @click="logout"
                    class="bg-secondary text-white font-semibold py-2 px-3 md:px-8 rounded-2xl mb-2 md:mb-0 w-full">
                    {{ $t("logout") }}
                </button>
            </div>
            <NuxtLinkLocale to="/login" v-else>
                <button class="bg-secondary mx-1 text-white font-bold py-2 px-4 md:px-8 rounded-2xl mb-2 md:mb-0">
                    {{ $t("login") }}
                </button>
            </NuxtLinkLocale>
            <button @click="openit"
                class="bg-secondary mx-1 text-white font-bold py-2 px-4 md:px-8 rounded-2xl mb-2 md:mb-0">
                {{ $t("pos") }}
            </button>

            <LangSwitcher />
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { authStore } from "~/store/auth";
export default {
    name: 'DropdownMenu',
    data() {
        return {
            isOpen: false
        };
    },
    computed: {
        ...mapState(authStore, [
            "username",
            "isAuthenticated"
        ])
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        openit() {
            this.$emit('openit');
        }
    }
};
</script>

<style scoped>
/* Add styles for the dropdown menu */
</style>