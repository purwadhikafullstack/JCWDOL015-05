const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Driver connected via WebSocket');

    const sendNewOrderNotification = (order) => {
        const message = JSON.stringify({
            type: 'new-request',
            message: 'Ada request baru untuk pickup/delivery!',
            request: order
        });
        ws.send(message);
    };

});
