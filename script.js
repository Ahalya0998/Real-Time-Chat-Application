document.addEventListener('DOMContentLoaded', function () {
    const socket = io();

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value;
        if (message.trim() !== '') {
            socket.emit('chat message', message);
            messageInput.value = '';
        }
    });

    socket.on('chat message', function (message) {
        const li = document.createElement('li');
        li.textContent = message;
        chatMessages.appendChild(li);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
});
