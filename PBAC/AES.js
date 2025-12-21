import CryptoJS from "crypto-js";

const SECRET_KEY = "8a2c7e56f1f22311a9d8b6c7d49e7";
export const encryptPayload = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();

  return ciphertext;
};

export const decryptPayload = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};

console.log(decryptPayload("U2FsdGVkX18Ga0LEbaCmObohIUOI2wOe1lXuZa5my9PiZqI6GkpuokGoNeptxT1SsZJXY1Np/rw0mYXDm6W/udYtv2ObCotCEMc34c3erzE=")); 