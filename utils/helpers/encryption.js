import CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY, IV } from '../constant';


export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
};

export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY, { iv: IV ,mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
  return bytes.toString(CryptoJS.enc.Utf8);
};
