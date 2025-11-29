<template>
  <div class="space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 py-5 md:py-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-gray-400 text-xs md:text-sm">Welcome</p>
        <h2 class="text-xl md:text-2xl font-bold">John Doe</h2>
        <p class="text-gray-500 text-xs">How are you today...</p>
      </div>

      <div
        class="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-3 text-xs md:text-sm"
      >
        <span class="text-gray-400 w-full md:w-auto">Filter By:</span>

        <select
          v-model="selectedMonth"
          class="bg-[#0d1224] border border-gray-700 rounded px-3 py-1 w-full sm:w-auto text-xs md:text-sm"
        >
          <option v-for="m in months" :key="m">{{ m }}</option>
        </select>

        <select
          v-model="selectedYear"
          class="bg-[#0d1224] border border-gray-700 rounded px-3 py-1 w-full sm:w-auto text-xs md:text-sm"
        >
          <option v-for="y in years" :key="y">{{ y }}</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
      <div class="lg:col-span-2 bg-[#050b1a] rounded-2xl p-4 md:p-6 shadow-lg">
        <p class="text-sm font-medium mb-4">Bar Chart</p>

        <div class="flex" :style="{ height: chartHeight + 'px' }">
          <div
            class="flex flex-col justify-between text-gray-500 text-[9px] sm:text-[10px] pr-2 sm:pr-3"
          >
            <span v-for="tick in yTicks" :key="tick">{{ tick }}</span>
          </div>

          <div class="flex-1 flex items-end justify-between gap-1 sm:gap-2">
            <div
              v-for="(val, i) in barData"
              :key="i"
              class="flex flex-col justify-end items-center"
            >
              <div
                class="w-3 sm:w-4 md:w-5 lg:w-6 bg-emerald-400 rounded-md transition-all duration-300"
                :style="{ height: barPixelHeight(val) + 'px' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div
          v-for="card in statCards"
          :key="card.title"
          class="bg-[#050b1a] rounded-2xl p-4 md:p-6 shadow-lg min-h-[120px] md:min-h-[150px] flex flex-col justify-center"
        >
          <div class="flex items-center mb-4">
            <img
              src="/assets/chip.png"
              class="h-6 w-6 md:h-7 md:w-7 mr-2 md:mr-3 opacity-80"
              alt="Chip Icon"
            />
            <p class="text-base md:text-xl font-bold">
              {{ card.title }}
            </p>
          </div>
          
          <p class="text-xl md:text-3xl font-bold warp-break-words">
            {{ card.amount }}
          </p>
          <p class="text-gray-400 text-[11px] md:text-xs mt-1">
            {{ card.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const API = "http://localhost:3000";

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const years = [2023, 2024, 2025];
const selectedMonth = ref("Januari");
const selectedYear = ref(2025);


const chartHeight = 220;

const fallbackBars = [65, 15, 28, 45, 75, 40, 10, 22, 30, 25];

const barData = ref([...fallbackBars]);
const maxVal = ref(100);

const yTicks = computed(() => [100, 80, 60, 40, 20, 0]);

const barPixelHeight = (val) => {
  if (!maxVal.value) return 0;
  return (val / maxVal.value) * chartHeight;
};

const statCards = ref([
  { title: "Total Deposit", amount: "IDR 0", subtitle: "0 Deposit(s)" },
  { title: "Total Withdraw", amount: "IDR 0", subtitle: "0 Withdraw(s)" },
  { title: "Total Verified KYC", amount: "0 Verified", subtitle: "" },
  { title: "Total Registration", amount: "0 Registered", subtitle: "" },
]);

const formatIDR = (num) =>
  "IDR " + Number(num || 0).toLocaleString("id-ID");


async function loadSummary() {
  try {
    const res = await fetch(`${API}/api/dashboard/summary`);
    const s = await res.json();

    statCards.value = [
      {
        title: "Total Deposit",
        amount: formatIDR(s.totalDeposit),
        subtitle: "0 Deposit(s)",
      },
      {
        title: "Total Withdraw",
        amount: formatIDR(s.totalWithdraw),
        subtitle: "0 Withdraw(s)",
      },
      {
        title: "Total Verified KYC",
        amount: `${s.totalKyc} Verified`,
        subtitle: "",
      },
      {
        title: "Total Registration",
        amount: `${s.totalRegistration} Registered`,
        subtitle: "",
      },
    ];
  } catch (err) {
    console.error("summary error", err);
  }
}

async function loadChart() {
  try {
    const res = await fetch(`${API}/api/dashboard/monthly-data`);
    const d = await res.json();

    const apiBars = (d?.monthly_registrations || []).map(
      (x) => x.total_registrations
    );

    if (apiBars.length) {
      barData.value = apiBars;
      maxVal.value = Math.max(...apiBars, 100);
    } else {
      barData.value = [...fallbackBars];
      maxVal.value = 100;
    }
  } catch (err) {
    console.error("chart error", err);
    barData.value = [...fallbackBars];
    maxVal.value = 100;
  }
}

onMounted(async () => {
  await loadSummary();
  await loadChart();
});
</script>