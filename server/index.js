const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Обслуживаем HTML из папки public
app.use(express.static(path.join(__dirname, 'public')));
console.log('Путь к public:', path.join(__dirname, 'public')); // Проверьте путь в консоли!

// Просто текст на корневом маршруте (можно удалить, если используешь index.html)
app.get('/', (req, res) => {
  res.send('Сервер работает. Используй POST /chat.');
});

// API для чата
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
