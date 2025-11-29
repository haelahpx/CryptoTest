
const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('./swaggerConfig'); 

const {
  marketData,
  marketQuotes,
  monthlyStats,
  monthlyDeposits,
  deposits,
  members,
} = require('./data/dummy'); 

const app = express();
const port = 3000;

const swaggerSpec = swaggerJsdoc(swaggerOptions); 

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
/**
 * @swagger
 * tags:
 *   - name: Market
 *     description: Endpoint yang berhubungan dengan data pasar.
 *   - name: Dashboard
 *     description: Endpoint untuk statistik dan ringkasan dashboard.
 *   - name: "Finance & Members"
 *     description: Endpoint untuk data setoran dan anggota.
 */
// ---------------------


// --- MARKET ENDPOINTS ---

/**
 * @swagger
 * /api/market/data:
 *   get:
 *     summary: Mendapatkan data detail pasar.
 *     tags: [Market]
 *     responses:
 *       '200':
 *         description: Data pasar berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/api/market/data', (req, res) => {
  res.json(marketData);
});

/**
 * @swagger
 * /api/market/quotes:
 *   get:
 *     summary: Mendapatkan kutipan harga pasar (quotes).
 *     tags: [Market]
 *     responses:
 *       '200':
 *         description: Kutipan harga berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.get('/api/market/quotes', (req, res) => {
  res.json(marketQuotes);
});

// --- DASHBOARD ENDPOINTS ---

/**
 * @swagger
 * /api/dashboard/monthly-data:
 *   get:
 *     summary: Mendapatkan seluruh data statistik bulanan.
 *     tags: [Dashboard]
 *     responses:
 *       '200':
 *         description: Data statistik bulanan lengkap berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.get('/api/dashboard/monthly-data', (req, res) => {
  res.json(monthlyStats);
});

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Mendapatkan ringkasan statistik dashboard.
 *     tags: [Dashboard]
 *     responses:
 *       '200':
 *         description: Ringkasan dashboard berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.get('/api/dashboard/summary', (req, res) => {
  res.json(monthlyStats.summary);
});

/**
 * @swagger
 * /api/registrations/monthly:
 *   get:
 *     summary: Mendapatkan data registrasi anggota bulanan.
 *     tags: [Dashboard]
 *     responses:
 *       '200':
 *         description: Data registrasi bulanan berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/api/registrations/monthly', (req, res) => {
  res.json(monthlyStats.monthly_registrations);
});

// --- FINANCE & MEMBERS ENDPOINTS ---

/**
 * @swagger
 * /api/deposits:
 *   get:
 *     summary: Mendapatkan daftar semua setoran/deposit.
 *     tags: ["Finance & Members"]
 *     responses:
 *       '200':
 *         description: Daftar setoran berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/api/deposits', (req, res) => {
  res.json(deposits);
});

/**
 * @swagger
 * /api/deposits/monthly:
 *   get:
 *     summary: Mendapatkan data setoran bulanan.
 *     tags: ["Finance & Members"]
 *     responses:
 *       '200':
 *         description: Data setoran bulanan berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/api/deposits/monthly', (req, res) => {
  res.json(monthlyDeposits);
});

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Mendapatkan daftar semua anggota.
 *     tags: ["Finance & Members"]
 *     responses:
 *       '200':
 *         description: Daftar anggota berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/api/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
});