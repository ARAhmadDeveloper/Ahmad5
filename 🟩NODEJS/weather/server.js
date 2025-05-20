require('dotenv').config();
const express = require('express');
const axios = require('axios');
const buildPrompt = require('./prompt');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.get('/weather/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    const prompt = buildPrompt(weatherResponse.data);
    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    res.json({ city, report: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong fetching weather data or using Gemini.' });
  }
});

app.listen(PORT, () => {
  console.log(`WeatherWhiz running on http://localhost:${PORT}`);
});
