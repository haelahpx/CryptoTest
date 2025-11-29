// dummy data for backend API

const marketData = [
  {
    id: 1,
    pasangan: "BTC/DAI",
    harga: "98,832.93 / Rp 1,612,213,281.72",
    perubahan: "+3.89%",
    tertinggi: "102,451.34",
    terendah: "94,288.07",
    kapitalisasi: "Rp 31,953.00B",
    volume: "1.538M",
    favorite: true,
  },
  {
    id: 2,
    pasangan: "ETH/DAI",
    harga: "98,832.93 / Rp 1,612,213,281.72",
    perubahan: "-3.89%",
    tertinggi: "102,451.34",
    terendah: "94,288.07",
    kapitalisasi: "Rp 31,953.00B",
    volume: "1.538M",
    favorite: false,
  },
  {
    id: 3,
    pasangan: "XRP/ETH",
    harga: "98,832.93 / Rp 1,612,213,281.72",
    perubahan: "+3.89%",
    tertinggi: "102,451.34",
    terendah: "94,288.07",
    kapitalisasi: "Rp 31,953.00B",
    volume: "1.538M",
    favorite: true,
  },
  {
    id: 4,
    pasangan: "BTC/DAI",
    harga: "98,832.93 / Rp 1,612,213,281.72",
    perubahan: "-3.89%",
    tertinggi: "102,451.34",
    terendah: "94,288.07",
    kapitalisasi: "Rp 31,953.00B",
    volume: "1.538M",
    favorite: false,
  },
  {
    id: 5,
    pasangan: "BTC/DAI",
    harga: "98,832.93 / Rp 1,612,213,281.72",
    perubahan: "+3.89%",
    tertinggi: "102,451.34",
    terendah: "94,288.07",
    kapitalisasi: "Rp 31,953.00B",
    volume: "1.538M",
    favorite: true,
  },
];

const marketQuotes = [
  {
    id: 1,
    pair: "TKO/IDR",
    price: "Rp 5,261.3",
    change: "-3.82%",
    volume: "2,258 IDR",
  },
  {
    id: 2,
    pair: "TKO/IDR",
    price: "Rp 5,261.3",
    change: "-3.82%",
    volume: "2,258 IDR",
  },
  {
    id: 3,
    pair: "TKO/IDR",
    price: "Rp 5,261.3",
    change: "+3.82%",
    volume: "2,258 IDR",
  },
  {
    id: 4,
    pair: "TKO/IDR",
    price: "Rp 5,261.3",
    change: "+3.82%",
    volume: "2,258 IDR",
  },
];

const monthlyStats = {
  monthly_registrations: [
    { year: 2025, month: 1, total_registrations: 450 },
    { year: 2025, month: 2, total_registrations: 620 },
    { year: 2025, month: 3, total_registrations: 520 },
    { year: 2025, month: 4, total_registrations: 710 },
    { year: 2025, month: 5, total_registrations: 390 },
    { year: 2025, month: 6, total_registrations: 580 },
    { year: 2025, month: 7, total_registrations: 310 },
    { year: 2025, month: 8, total_registrations: 430 },
    { year: 2025, month: 9, total_registrations: 360 },
    { year: 2025, month: 10, total_registrations: 490 },
  ],
  summary: {
    totalDeposit: 500000000,
    totalWithdraw: 200000000,
    totalKyc: 1200,
    totalRegistration: 2500,
  },
};

const monthlyDeposits = [
  { year: 2025, month: 1, total_deposit: 120000000 },
  { year: 2025, month: 2, total_deposit: 150000000 },
  { year: 2025, month: 3, total_deposit: 98000000 },
  { year: 2025, month: 4, total_deposit: 210000000 },
  { year: 2025, month: 5, total_deposit: 140000000 },
  { year: 2025, month: 6, total_deposit: 175000000 },
  { year: 2025, month: 7, total_deposit: 90000000 },
  { year: 2025, month: 8, total_deposit: 110000000 },
  { year: 2025, month: 9, total_deposit: 130000000 },
  { year: 2025, month: 10, total_deposit: 160000000 },
];

const deposits = [
  {
    id: "DEPO-IDR-041024165727",
    asset: "IDR",
    amount: "95.000",
    status: "Rejected",
  },
  {
    id: "DEPO-IDR-041024165728",
    asset: "IDR",
    amount: "140.000",
    status: "Success",
  },
  {
    id: "DEPO-BTC-041024165729",
    asset: "BTC",
    amount: "0.00018809",
    status: "Success",
  },
  {
    id: "DEPO-IDR-041024165730",
    asset: "IDR",
    amount: "95.000",
    status: "Success",
  },
  {
    id: "DEPO-IDR-041024165731",
    asset: "IDR",
    amount: "295.000",
    status: "Success",
  },
];

const members = [
  {
    email: "ronald@example.com",
    username: "Ronald",
    name: "Ronald Watson",
    status: "Active",
    kyc: false,
  },
  {
    email: "cody@example.com",
    username: "Cody",
    name: "Cody Cooper",
    status: "Active",
    kyc: false,
  },
  {
    email: "shaw@example.com",
    username: "Shawn",
    name: "Shaw Nguyen",
    status: "Active",
    kyc: false,
  },
  {
    email: "ann@example.com",
    username: "Ann",
    name: "Ann Jones",
    status: "Active",
    kyc: false,
  },
  {
    email: "mitchell@example.com",
    username: "Mitchell",
    name: "Mitchell Fisher",
    status: "Active",
    kyc: false,
  },
];

module.exports = {
  marketData,
  marketQuotes,
  monthlyStats,
  monthlyDeposits,
  deposits,
  members,
};
