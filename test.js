import Crypto from 'crypto';
import { encryptHex96, decryptHex96 } from './index.js';
const readline = await import('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.stdoutMuted = true;
  rl.setPrompt('Test data: ')
  rl.prompt();
  rl._writeToOutput = function _writeToOutput(stringToWrite) {
      rl.output.write("*");
  };
  rl.on('line', async (inputData) => {
    const key = Crypto.randomBytes(48);
    const encryptedData = await encryptHex96(key, Buffer.from(inputData), "utf-8");
    const decryptedData = await decryptHex96(key, encryptedData);
    if (inputData == decryptedData)
        console.log (`\nHex96 completed successfully. You typed:\n\n${inputData}\n`)
    else
        console.log ("\nSomething went wrong: input data and decrypted data don't match.\n")
    rl.close();
  });