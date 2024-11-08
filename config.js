const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vnJlQaAB#W84lEe3iug5q-Uqv6qR73b4m4WBo4EK3Rb1ENjqjMD0",
MONGODB: process.env.MONGODB || "mongodb+srv://chuutiya309:ldQNSiK8uSivRslU@cluster0.jx8wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};
