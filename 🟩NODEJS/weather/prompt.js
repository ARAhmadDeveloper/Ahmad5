const buildPrompt = (weatherData) => {
    return `
  You are a sarcastic but helpful weather assistant.
  
  Current weather:
  - Location: ${weatherData.name}
  - Temperature: ${weatherData.main.temp}°C
  - Weather: ${weatherData.weather[0].description}
  
  Give a short, witty summary and advice.
  `;
  };
  
  module.exports = buildPrompt;
  