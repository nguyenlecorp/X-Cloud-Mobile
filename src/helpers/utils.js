const CryptoJS = require('crypto-js')

// Method to hash password. If salt is passed, use it, in other case use crypto lib for generate salt
function passToHash(passObject) {
  try {
    const salt = passObject.salt ? CryptoJS.enc.Hex.parse(passObject.salt) : CryptoJS.lib.WordArray.random(128 / 8);
    const hash = CryptoJS.PBKDF2(passObject.password, salt, { keySize: 256 / 32, iterations: 10000 });
    const hashedObjetc = {
      salt: salt.toString(),
      hash: hash.toString()
    }
    return hashedObjetc;
  } catch (error) {
    throw new Error(error);
  }
}

// AES Plain text encryption method
function encryptText(textToEncrypt) {
  let password = process && process.env && process.env.REACT_APP_CRYPTO_SECRET; // Force env var loading
  return encryptTextWithKey(textToEncrypt, password);
}

// AES Plain text decryption method
function decryptText(encryptedText) {
  let password = process && process.env && process.env.REACT_APP_CRYPTO_SECRET; // Force env var loading
  return decryptTextWithKey(encryptedText, password);
}

// AES Plain text encryption method with enc. key
function encryptTextWithKey(textToEncrypt, keyToEncrypt) {
  try {
    const bytes = CryptoJS.AES.encrypt(textToEncrypt, keyToEncrypt).toString();
    const text64 = CryptoJS.enc.Base64.parse(bytes);
    return text64.toString(CryptoJS.enc.Hex);
  } catch (error) {
    throw new Error(error);
  }
}

// AES Plain text decryption method with enc. key
function decryptTextWithKey(encryptedText, keyToDecrypt) {
  try {
    const reb = CryptoJS.enc.Hex.parse(encryptedText);
    const bytes = CryptoJS.AES.decrypt(reb.toString(CryptoJS.enc.Base64), keyToDecrypt);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    throw new Error(error);
  }
}

// Method to remove accents and other special characters from string
function removeAccents(string) {
  const accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
  const accentsOut = 'AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg';
  return string
    .split("")
    .map((letter, index) => {
      const accentIndex = accents.indexOf(letter);
      return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
    })
    .join("");
}

// Method to short url with Kutt.it service
async function shortUrl(url) {
  try {
    const result = await fetch(`${process && process.env && process.env.REACT_APP_SHORTER_API_URL}`, {
      method: 'POST',
      headers: {  
        'x-api-key': `${process && process.env && process.env.REACT_APP_SHORTER_API_KEY}`,
        'Content-type': "application/json"
      },
      body: JSON.stringify({
        "target": `${url}`,
        "reuse": "false"
      })
    });
    const resultData = await result.json();
    return resultData.shortUrl;
  } catch(error) {
    console.log(`Error on url shorting`);
    console.log(error);
  }
}

export const utils = {
  passToHash,
  encryptText,
  decryptText,
  encryptTextWithKey,
  decryptTextWithKey,
  removeAccents,
  shortUrl
}