# hex96

`hex96` is a simple JavaScript library for file encryption and decryption using AES-256-CBC encryption with a 96-nibble hexadecimal key. It provides easy-to-use functions for securing your files.

## Installation

First, `clone` a copy of hex96 to a permenent location (e.g. /permenent/path/to/hex96):
```shell
git clone https://github.com/fusionpoweredsoftware/hex96 /permenent/path/to/hex96
```

Change directores to where hex96 has been cloned and `link` the module for global accessibility across the system: 
```shell
cd /permenent/path/to/hex96
npm link
```

Now you can effectively `install` the hex96 module to any project on your system using the following command from the root of the target project:
```shell
cd /path/to/target/project
npm link hex96
```

## Usage

### Importing Hex96

To import hex96 in `ES6`:
```javascript
import { encryptHex96, decryptHex96 } from 'hex96';
```

### Encrypting With Hex96

To encrypt data using AES-256-CBC encryption, use the `encryptHex96` function:
```javascript
encryptHex96(hex96key, inputFilePath)
```
The function takes:

* hex96key (byte buffer): A 48-byte (96-nibble) key used for encryption.
* inputData (byte buffer): The byte buffer you want encrypted.

Returns the encrypted data in byte buffer form.

### Decrypting With Hex96

To decrypt data that has been encrypted with AES-256-CBC encryption, use the `decryptHex96` function:
```javascript
decryptHex96(hex96key, inputFilePath)
```
The function takes:

* hex96key (byte buffer): A 48-byte (96-nibble) key used for decryption.
* inputData (byte buffer): The byte buffer you want decrypted.

Returns the decrypted data in byte buffer form.

## Example

Here's an example of how to use the `hex96` library to encrypt and decrypt a file:
```javascript
// Example key (replace with your own)
const hex96key = '...insert secure 96 hexidecimal character sequence here...';

// Encrypt a file
encryptHex96(hex96key, <data to encrypt>);

// Decrypt the encrypted file
decryptHex96(hex96key, <data to decrypt>);
```

## Test

To test hex96, run the following command from the terminal from the project root directory:

```shell
cd /permenent/path/to/hex96
node test
```

Expect output should be as follows:

```shell
Test data: **************************
Hex96 completed successfully. You typed: 

Get your kicks on hex 96.
```

## Acknowledgments

We would like to acknowledge the creators of the `Advanced Encryption Standard` (AES), `Joan Daemen` and `Vincent Rijmen`, for their invaluable contribution to the field of cryptography. AES has become a widely adopted encryption standard, and their work has had a profound impact on data security.

## License

This `hex96` library is licensed under the **MIT License**: https://opensource.org/license/mit/