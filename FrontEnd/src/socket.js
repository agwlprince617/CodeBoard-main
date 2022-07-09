import { io } from "socket.io-client";

export const socket = async() =>{
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket']
    }

    return io('http://localhost:3001',options);
}