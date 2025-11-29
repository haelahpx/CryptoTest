<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
  >
    <header class="border-b border-gray-800/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4 sm:space-x-8">
            <div class="flex items-center space-x-2">
              <div class="relative">
                <img
                  src="/assets/image3.png"
                  alt="Logo"
                  class="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
            </div>

            <nav class="hidden md:flex space-x-6">
              <a
                href="#"
                class="text-white font-medium hover:text-yellow-500 transition-colors"
                >Pasar</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Tentang Kami</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Kontak Kami</a
              >
            </nav>
          </div>

          <div class="flex space-x-2 sm:space-x-3">
            <button
              class="px-4 sm:px-6 py-2 border border-yellow-500/50 text-yellow-500 rounded-full hover:bg-yellow-500/10 transition-all text-sm sm:text-base font-medium"
            >
              SIGN IN
            </button>
            <button
              class="px-4 sm:px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all text-sm sm:text-base font-bold"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div class="mb-8 sm:mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Pasar</h1>
        <p class="text-gray-400 text-sm sm:text-base">
          Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </div>

      <div v-if="error" class="mb-4 text-sm text-red-400">
        {{ error }}
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
      >
        <div
          v-for="quote in marketQuotes"
          :key="quote.id"
          class="relative h-[130px] rounded-2xl bg-[#050814] border border-white/5 px-5 py-4 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
        >
          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"
          ></div>

          <div class="relative flex h-full flex-col">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <p
                  class="text-[10px] font-medium tracking-[0.08em] text-gray-400 uppercase"
                >
                  {{ quote.pair }}
                </p>
              </div>

              <img
                v-if="quote.change.includes('+')"
                src="/assets/Vector 3.png"
                alt="up chart"
                class="w-20 h-9 object-contain"
              />
              <img
                v-else
                src="/assets/Vector 1.png"
                alt="down chart"
                class="w-20 h-9 object-contain"
              />
            </div>

            <div class="flex-1 flex items-center">
              <p
                class="text-[22px] sm:text-[24px] font-semibold text-white leading-tight"
              >
                {{ quote.price }}
              </p>
            </div>

            <div class="flex justify-between items-end text-[11px]">
              <span
                class="font-semibold"
                :class="
                  quote.change.includes('+') ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ quote.change }}
              </span>
              <span class="text-gray-500"> Volume : {{ quote.volume }} </span>
            </div>
          </div>
        </div>
      </div>

      <div class="to-black/50 backdrop-blur-sm rounded-xl overflow-hidden">
        <div
          class="flex overflow-x-auto scrollbar-hide border-b border-gray-800/50"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            class="flex-shrink-0 pb-4 px-4 sm:px-6 pt-6 text-sm font-bold border-b-2 transition-all whitespace-nowrap"
            :class="
              activeTab === tab
                ? 'text-yellow-500 border-yellow-500'
                : 'text-gray-500 border-transparent hover:text-gray-300'
            "
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr
                class="text-left text-xs font-semibold uppercase text-gray-500 border-b border-gray-800/50"
              >
                <th class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap">
                  Pasangan
                </th>
                <th class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap">
                  Harga Terakhir
                </th>
                <th class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap">
                  Perubahan 24jam
                </th>
                <th
                  class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap hidden lg:table-cell"
                >
                  Tertinggi / Terendah 24jam
                </th>
                <th
                  class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap hidden xl:table-cell"
                >
                  Kapitalisasi Pasar
                </th>
                <th class="py-4 px-3 sm:px-4 font-semibold whitespace-nowrap">
                  Volume 24 Jam
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in filteredMarketData"
                :key="item.id"
                class="border-b border-gray-800/30 hover:bg-gray-900/30 transition-colors"
              >
                <td class="py-5 px-3 sm:px-4 whitespace-nowrap text-sm">
                  <div class="flex items-center space-x-2 sm:space-x-3">
                    <button
                      type="button"
                      class="flex-shrink-0 focus:outline-none"
                      @click="toggleFavorite(item)"
                    >
                      <img
                        :src="
                          item.favorite
                            ? '/assets/Vector.png'
                            : '/assets/star.png'
                        "
                        alt="favorite"
                        class="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200"
                        :class="item.favorite ? 'opacity-100' : 'opacity-40'"
                      />
                    </button>

                    <span class="text-white font-medium">
                      {{ item.pasangan }}
                    </span>
                  </div>
                </td>
                <td class="py-5 px-3 sm:px-4 text-sm text-white font-medium">
                  <div class="whitespace-nowrap">{{ item.harga }}</div>
                </td>
                <td
                  class="py-5 px-3 sm:px-4 whitespace-nowrap text-sm font-bold"
                  :class="
                    item.perubahan.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
                  "
                >
                  {{ item.perubahan }}
                </td>
                <td class="py-5 px-3 sm:px-4 text-sm hidden lg:table-cell">
                  <div class="whitespace-nowrap">
                    <span class="text-white">{{ item.tertinggi }}</span>
                    <span class="text-gray-600 mx-1">/</span>
                    <span class="text-gray-600">Rp {{ item.terendah }}</span>
                  </div>
                </td>
                <td
                  class="py-5 px-3 sm:px-4 whitespace-nowrap text-sm text-white hidden xl:table-cell"
                >
                  {{ item.kapitalisasi }}
                </td>
                <td
                  class="py-5 px-3 sm:px-4 whitespace-nowrap text-sm text-white"
                >
                  {{ item.volume }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="isLoading" class="py-4 text-center text-gray-400 text-sm">
          Memuat data pasar...
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const activeTab = ref("Favorit");

const tabs = ["Favorit", "IDR", "USD", "BNB", "BTC", "ALTS"];

const marketData = ref([]);
const marketQuotes = ref([]);

const isLoading = ref(false);
const error = ref(null);

const fetchMarketData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const [tableRes, quotesRes] = await Promise.all([
      fetch("http://localhost:3000/api/market/data"),
      fetch("http://localhost:3000/api/market/quotes"),
    ]);

    if (!tableRes.ok || !quotesRes.ok) {
      throw new Error("Failed to fetch market data");
    }

    const [tableJson, quotesJson] = await Promise.all([
      tableRes.json(),
      quotesRes.json(),
    ]);

    marketData.value = tableJson;
    marketQuotes.value = quotesJson;
  } catch (err) {
    console.error(err);
    error.value = "Gagal memuat data pasar.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchMarketData);

const filteredMarketData = computed(() => {
  return marketData.value;
});

const toggleFavorite = (item) => {
  item.favorite = !item.favorite;
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>