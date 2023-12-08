import crypto from 'crypto';

const actionMap = {
    encrypt: (key, iv) => crypto.createCipheriv('aes-256-cbc', key, iv),
    decrypt: (key, iv) => crypto.createDecipheriv('aes-256-cbc', key, iv)
}

async function handleHex96 (action, hex96key, inputData) {
    const key = hex96key.slice(0,32), iv = hex96key.slice(32,48);
    const ipher = actionMap[action](key, iv);
    const outputData = Buffer.concat([ipher.update(inputData), ipher.final()]);
    return outputData;
}

export async function encryptHex96 (hex96key, inputData) {
    return await handleHex96('encrypt', hex96key, inputData);
}

export async function decryptHex96 (hex96key, inputData) {
    return await handleHex96('decrypt', hex96key, inputData);
}

export default {
    encrypt: encryptHex96,
    decrypt: decryptHex96
};