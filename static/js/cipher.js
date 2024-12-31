function caesarEncrypt(text, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const idx = alphabet.indexOf(char);
        if (idx === -1) {
            result += char;
            continue;
        }
        const isUpperCase = char === char.toUpperCase();
        const newIdx = (idx + parseInt(key)) % 26;
        const newChar = alphabet[newIdx + (isUpperCase ? 26 : 0)];
        result += newChar.toLowerCase();
    }
    return result;
}

function bruteForceDecode(text) {
    const results = [];
    for (let key = 1; key <= 25; key++) {
        const decoded = caesarEncrypt(text, 26 - key);
        results.push({ text: decoded, key: key });
    }
    return results;
} 