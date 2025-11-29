<template>
  <div class="min-h-screen bg-[#050814] text-gray-100 flex">
    <aside
      class="
        bg-[#050814] flex flex-col
        w-16 md:w-52 lg:w-56 xl:w-64 
      "
    >
      <div class="h-16 md:h-20 flex items-center px-3 md:px-5">
        <img :src="logo" alt="Logo" class="h-10 w-10 md:h-12 md:w-12 mx-auto md:mx-0" />
      </div>

      <nav
        class="
          flex-1 py-4 md:py-6 space-y-1 text-xs md:text-sm
          px-1 md:px-3 lg:px-4           
        "
      >
        <RouterLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="group flex items-center gap-0 md:gap-3 px-2 md:px-3 py-2.5 rounded-lg transition font-medium"
          :class="
            isActive(item.to)
              ? 'text-yellow-400 bg-white/5'
              : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
          "
        >
          <img
            :src="isActive(item.to) ? item.iconActive : item.icon"
            :alt="item.label"
            class="h-5 w-5 shrink-0 mx-auto md:mx-0"
          />
          <span class="hidden md:inline truncate">{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col bg-[#050814]">
      <header
        class="
          h-16 md:h-20 flex items-center
          px-4 md:px-6 lg:px-8 xl:px-10  
        "
      >
        <div class="text-base md:text-lg font-semibold">
        </div>

        <div class="flex-1"></div>

        <button
          class="text-xs md:text-sm font-medium text-gray-300 hover:text-white border border-gray-700/60 rounded-full px-3 py-1.5"
        >
          Keluar
        </button>
      </header>

      <main
        class="
          flex-1
          px-4 md:px-6 lg:px-8 xl:px-10   
          py-6 md:py-8 bg-black
        "
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";

const logo = "/assets/image3.png";

const dashboardOff = "/assets/dashboardoff.png";
const dashboardOn = "/assets/dashboardon.png";
const memberOff = "/assets/memberoff.png";
const memberOn = "/assets/memberon.png";
const depositIcon = "/assets/deposit.png";
const depositIconActive = "/assets/depositon.png";
const withdrawIcon = "/assets/withdraw.png";
const verificationIcon = "/assets/verification.png";
const resetIcon = "/assets/reset.png";
const settingIcon = "/assets/setting.png";

const route = useRoute();

const menuItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: dashboardOff,
    iconActive: dashboardOn,
  },
  {
    label: "Deposit",
    to: "/deposits",
    icon: depositIcon,
    iconActive: depositIconActive,
  },
  {
    label: "Withdraw",
    to: "#",
    icon: withdrawIcon,
    iconActive: withdrawIcon,
  },
  { label: "Member", to: "/members", icon: memberOff, iconActive: memberOn },
  {
    label: "Verification (KYC)",
    to: "#",
    icon: verificationIcon,
    iconActive: verificationIcon,
  },
  {
    label: "Reset 2FA Request",
    to: "/reset-2fa",
    icon: resetIcon,
    iconActive: resetIcon,
  },
  {
    label: "Daily Report",
    to: "#",
    icon: dashboardOff,
    iconActive: dashboardOn,
  },
  {
    label: "Setting",
    to: "#",
    icon: settingIcon,
    iconActive: settingIcon,
  },
];

const isActive = (path) => route.path === path;
</script>
