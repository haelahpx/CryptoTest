<template>
  <div class="space-y-6">
    <section class="bg-[#070b1a] rounded-xl border border-gray-800 p-6">
      <h2 class="text-sm font-semibold mb-4">List of Deposit</h2>

      <div class="overflow-x-auto hidden md:block">
        <table class="min-w-full text-sm text-left">
          <thead class="border-b border-gray-800 text-gray-400 text-xs">
            <tr>
              <th class="py-3 pr-4">No</th>
              <th class="py-3 pr-4">Deposit ID</th>
              <th class="py-3 pr-4">Asset</th>
              <th class="py-3 pr-4">Amount Nett</th>
              <th class="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(deposit, idx) in deposits"
              :key="deposit.id"
              class="border-b border-gray-900/70 last:border-0"
            >
              <td class="py-3 pr-4 text-gray-400">{{ idx + 1 }}</td>
              <td class="py-3 pr-4">{{ deposit.id }}</td>
              <td class="py-3 pr-4">{{ deposit.asset }}</td>
              <td class="py-3 pr-4">{{ deposit.amount }}</td>
              <td class="py-3 pr-4">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium"
                  :class="
                    deposit.status === 'Success'
                      ? 'bg-emerald-400 text-white'
                      : 'bg-red-400 text-white'
                  "
                >
                  {{ deposit.status }}
                </span>
              </td>
            </tr>

            <tr v-if="!loading && deposits.length === 0">
              <td colspan="5" class="py-4 text-center text-gray-500">
                No deposits found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-3 md:hidden">
        <div
          v-for="(deposit, idx) in deposits"
          :key="deposit.id"
          class="border border-gray-800 rounded-lg p-4 bg-[#050816]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">No</div>
            <div class="text-sm font-medium text-white">{{ idx + 1 }}</div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Deposit ID</div>
            <div class="text-sm font-medium break-all">
              {{ deposit.id }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Asset</div>
            <div class="text-sm font-medium">
              {{ deposit.asset }}
            </div>
          </div>

          <div class="flex items-center justify-between mb-2">
            <div class="text-xs text-gray-400">Amount Nett</div>
            <div class="text-sm font-medium">
              {{ deposit.amount }}
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-xs text-gray-400">Status</div>
            <span
              class="inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-medium"
              :class="
                deposit.status === 'Success'
                  ? 'bg-emerald-400 text-white'
                  : 'bg-red-400 text-white'
              "
            >
              {{ deposit.status }}
            </span>
          </div>
        </div>

        <p
          v-if="!loading && deposits.length === 0"
          class="py-4 text-center text-gray-500 text-sm"
        >
          No deposits found.
        </p>
      </div>

      <p v-if="loading" class="mt-3 text-xs text-gray-400">
        Loading deposits...
      </p>
      <p v-if="error" class="mt-3 text-xs text-red-400">
        {{ error }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const deposits = ref([]);
const loading = ref(false);
const error = ref('');

const API_BASE_URL = 'http://localhost:3000';

const fetchDeposits = async () => {
  loading.value = true;
  error.value = '';

  try {
    const res = await fetch(`${API_BASE_URL}/api/deposits`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    deposits.value = data;
  } catch (err) {
    console.error(err);
    error.value = 'Failed to load deposits from server.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchDeposits();
});
</script>