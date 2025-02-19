<template>
  <header class="bg-white pt-3 px-6 flex justify-between items-center z-10 relative" dir="rtl">
    <!-- Right side: Dropdown Menu for Buttons -->
    <div class="flex items-center md:hidden">
      <DropdownMenu @openit="openit" />
    </div>
    <ComingSoon :isOpen="isOpen" @close="isOpen = false" />
    <!-- Right side: Buttons -->
    <div class="hidden md:flex justify-between items-center gap-4">
      <LangSwitcher />
      <button @click="openit" class="bg-secondary text-white py-2 px-4 md:px-8 rounded-2xl mb-2 md:mb-0"
        v-if="$route.name === 'index___ar-JO' || $route.name === 'index___en-US'">
        {{ $t("pos") }}
      </button>
      <div class="flex items-center gap-3" v-if="isAuthenticated && showElement">
        <div class="relative">
          <div class="cursor-pointer bg-white text-secondary border border-secondary rounded-full text-sm px-5 py-2"
            @mouseover="showDropdown = true">
            {{ username }}
          </div>
          <div v-if="showDropdown" @mouseleave="showDropdown = false"
            class="absolute top-full right-0 mt-5 text-sm w-[150px] z-50">
            <a href="https://portal.woga.app/" target="_blank" rel="noopener noreferrer">
              <button class="bg-secondary text-white py-2 rounded-2xl mb-2 md:mb-0 w-full">{{
        $t("merchant") }}
              </button>
            </a>
            <button @click="logout" class="bg-secondary text-white py-2 rounded-2xl mb-2 md:mb-0 w-full mt-3">
              {{ $t("logout") }}
            </button>
          </div>
        </div>
      </div>
      <NuxtLinkLocale to="/login" v-if="!isAuthenticated && showElement">
        <button class="bg-secondary text-white py-2 px-4 md:px-8 rounded-2xl mb-2 md:mb-0">
          {{ $t("login") }}
        </button>
      </NuxtLinkLocale>
    </div>

    <!-- Left side: Icon -->
    <div class="flex items-center">
      <NuxtLinkLocale to="/">
        <SvgLogoSvg />
      </NuxtLinkLocale>
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { authStore } from "~/store/auth";
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      showDropdown: false,
    }
  },
  computed: {
    ...mapState(authStore, [
      "username",
      "isAuthenticated"
    ]),
    showElement() {
      return this.$route.name === 'index___en-US' || this.$route.name === 'index___ar-JO';
    }
  },
  methods: {
    logout() {
      const authCookie = useCookie('auth')
      authCookie.value = null
      this.$router.push({ path: this.localePath('/') })
      this.$nuxt.$router.go();
    },
    openit() {
      this.isOpen = true
      console.log(this.isOpen);
    }
  },
  mounted() {
    console.log((this.$route.name === 'index___en-US' || this.$route.name === 'index___ar-JO'));
  }
};
</script>
