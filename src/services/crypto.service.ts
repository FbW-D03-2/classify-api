import { doubleCrypt, keyValidation } from "./hepler.service";

class CryptoService {
    encryptData(data: string, key: string): string {
        const validKey: string = keyValidation(data.length, key);
        const encryptData: number[] = [];
        console.log("in encrypt data: ", data, key)
        for (let i: number = 0; i < data.length; i++) {
            const dataCode = data.charCodeAt(i);
            const keyCharCode = validKey.charCodeAt(i);
            const encryptedCode = dataCode ^ keyCharCode;

            encryptData.push(encryptedCode);
        }

        return doubleCrypt(encryptData).join(" ");
    }

    decryptData(data: string, key: string) {
        const validData = data.split(" ").map(Number);
        const encryptData: number[] = doubleCrypt(validData);
        const validKey: string = keyValidation(encryptData.length, key);
        const decryptedData: string[] = [];

        for (let i = 0; i < encryptData.length; i++) {
            const encryptedCode = encryptData[i];
            const keyCharCode = validKey.charCodeAt(i);
            const decryptedCode = encryptedCode ^ keyCharCode;
            const decryptedChar = String.fromCharCode(decryptedCode);

            decryptedData.push(decryptedChar);
        }

        return decryptedData.join("");
    }
}

export default new CryptoService();