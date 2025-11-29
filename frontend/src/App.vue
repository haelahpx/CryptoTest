<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';

const route = useRoute();

const layoutComponent = computed(() => {
  const layout = route.meta.layout || 'GuestLayout';
  
  switch (layout) {
    case 'AdminLayout':
      return AdminLayout;
    default:
      return GuestLayout;
  }
});
</script>