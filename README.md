# 🛠️ Technologies Used

Here’s the tech stack powering my projects—modern, robust, and awesome! 🚀

| **Category**   | **Technologies**                                                                                   |
|-----------------|----------------------------------------------------------------------------------------------------|
| **Frontend**   | <span style="background-color: #61DBFB; color: white; padding: 2px 6px; border-radius: 3px;">ReactJS</span> <span style="background-color: #000000; color: white; padding: 2px 6px; border-radius: 3px;">NextJS</span> |
| **Backend**    | <span style="background-color: #339933; color: white; padding: 2px 6px; border-radius: 3px;">Node.js</span> <span style="background-color: #000000; color: white; padding: 2px 6px; border-radius: 3px;">Express</span> |
| **Mobile**     | <span style="background-color: #61DAFB; color: white; padding: 2px 6px; border-radius: 3px;">React Native</span> |
| **Database**   | <span style="background-color: #47A248; color: white; padding: 2px 6px; border-radius: 3px;">MongoDB</span> |

---

# 🌟 Featured Project: Cosmic Chat

A real-time chat app built with my favorite stack! 🌌  
- **Frontend:** NextJS + ReactJS for a snappy UI.  
- **Backend:** Node.js + Express for seamless API magic.  
- **Mobile:** React Native for cross-platform vibes.  
- **Database:** MongoDB to store all those interstellar messages.  
- **Status:** ![In Progress](https://img.shields.io/badge/Status-In_Progress-yellow?style=for-the-badge)  

### Sneak Peek: Code Snippet
```javascript
// Backend: Real-time messaging with Express & Socket.io
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected to the cosmos! 🌠');
  socket.on('message', (msg) => {
    io.emit('message', { user: 'SpaceTraveler', text: msg });
  });
});

server.listen(3000, () => console.log('Cosmic Chat live at port 3000!'));