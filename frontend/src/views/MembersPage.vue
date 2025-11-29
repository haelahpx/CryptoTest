<template>
  <div class="space-y-6">
    <section class="bg-[#070b1a] rounded-xl border border-gray-800 p-6">
      <h2 class="text-sm font-semibold mb-4">List of Members</h2>

      <div class="overflow-x-auto hidden md:block">
        <table class="min-w-full text-sm text-left">
          <thead class="border-b border-gray-800 text-gray-400 text-xs">
            <tr>
              <th class="py-3 pr-4">No</th>
              <th class="py-3 pr-4">Email</th>
              <th class="py-3 pr-4">Username</th>
              <th class="py-3 pr-4">Name</th>
              <th class="py-3 pr-4">Status</th>
              <th class="py-3">KYC</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(member, idx) in members"
              :key="member.email"
              class="border-b border-gray-900/70 last:border-0"
            >
              <td class="py-3 pr-4 text-gray-400">{{ idx + 1 }}</td>
              <td class="py-3 pr-4">{{ member.email }}</td>
              <td class="py-3 pr-4">{{ member.username }}</td>
              <td class="py-3 pr-4">{{ member.name }}</td>
              <td class="py-3 pr-4">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium bg-emerald-500/10 text-white"
                >
                  {{ member.status }}
                </span>
              </td>
              <td class="py-3">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium"
                  :class="
                    member.kyc
                      ? 'bg-emerald-500/10 text-white'
                      : 'bg-gray-700 text-white'
                  "
                >
                  {{ member.kyc ? 'KYC' : 'No-KYC' }}
                </span>
              </td>
            </tr>

            <tr v-if="!loading && members.length === 0">
              <td colspan="6" class="py-4 text-center text-gray-500">
                No members found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-3 md:hidden">
        <div
          v-for="(member, idx) in members"
          :key="member.email"
          class="border border-gray-800 rounded-lg p-4 bg-[#050816]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">No</div>
            <div class="text-sm font-medium text-white">
              {{ idx + 1 }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Email</div>
            <div class="text-sm font-medium break-all">
              {{ member.email }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Username</div>
            <div class="text-sm font-medium">
              {{ member.username }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Name</div>
            <div class="text-sm font-medium">
              {{ member.name }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Status</div>
            <span
              class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium bg-emerald-500/10 text-white"
            >
              {{ member.status }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-xs text-gray-400">KYC</div>
            <span
              class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium"
              :class="
                member.kyc
                  ? 'bg-emerald-500/10 text-white'
                  : 'bg-gray-700 text-white'
              "
            >
              {{ member.kyc ? 'KYC' : 'No-KYC' }}
            </span>
          </div>
        </div>

        <p
          v-if="!loading && members.length === 0"
          class="py-4 text-center text-gray-500 text-sm"
        >
          No members found.
        </p>
      </div>

      <p v-if="loading" class="mt-3 text-xs text-gray-400">
        Loading members...
      </p>
      <p v-if="error" class="mt-3 text-xs text-red-400">
        {{ error }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const members = ref([]);
const loading = ref(false);
const error = ref('');

const API_BASE_URL = 'http://localhost:3000';

const fetchMembers = async () => {
  loading.value = true;
  error.value = '';

  try {
    const res = await fetch(`${API_BASE_URL}/api/members`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    members.value = data;
  } catch (err) {
    console.error(err);
    error.value = 'Failed to load members from server.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchMembers();
});
</script>