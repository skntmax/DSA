const CryptoJS = require('crypto-js');
 let secretKey = "a93f9c8d7e6b45f1c3a29b7e2f89d5a1";
const encrypted = CryptoJS.AES.encrypt(
          JSON.stringify(request.body),
          CryptoJS.enc.Utf8.parse(secretKey),
          {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          }
        );
  
        const encryptedBody = {
          payload: encrypted.ciphertext.toString(CryptoJS.enc.Base64),
          digitalKey: CryptoJS.enc.Hex.stringify(iv),
        };
  
        console.log(encryptedBody);