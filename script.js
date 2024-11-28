function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function validateEmail() {
    const email = document.getElementById('emailInput').value.trim();
    const allowedDomains = ['gmail.com', 'yahoo.com', 'diu.edu.com'];
    const atIndex = email.indexOf('@');

    if (atIndex === -1) {
        document.getElementById('emailResult').innerText = "Invalid email. Missing '@'.";
        return;
    }

    const domain = email.substring(atIndex + 1);
    const isValid = allowedDomains.includes(domain);

    document.getElementById('emailResult').innerText = 
        isValid ? `'${email}' is a valid email.` : `'${email}' is invalid. Unsupported domain '${domain}'.`;
}

function countWords() {
    const paragraph = document.getElementById('paragraphInput').value.trim();
    const wordToCheck = document.getElementById('wordCheckInput').value.trim().toLowerCase();
    const words = paragraph.split(/\s+/).filter(word => word);
    const totalWords = words.length;
    const wordCount = wordToCheck ? words.filter(word => word.toLowerCase() === wordToCheck).length : 0;

    document.getElementById('wordCountResult').innerText = 
        `The paragraph contains ${totalWords} words. ${wordToCheck ? `The word '${wordToCheck}' appears ${wordCount} times.` : ''}`;
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const result = 
        password.length < 8 ? "Weak (too short)" :
        !hasUpper || !hasLower || !hasDigit || !hasSpecial ? "Medium (add missing character types)" :
        "Strong";

    document.getElementById('passwordResult').innerText = `Password Strength: ${result}`;
}

function encryptText() {
    const text = document.getElementById('textInput').value;
    const encrypted = text.replace(/[a-zA-Z]/g, char => 
        String.fromCharCode(((char.charCodeAt(0) - (char >= 'a' ? 97 : 65) + 3) % 26) + (char >= 'a' ? 97 : 65))
    );

    document.getElementById('textResult').innerText = `Encrypted Text: ${encrypted}`;
}

function decryptText() {
    const text = document.getElementById('textInput').value;
    const decrypted = text.replace(/[a-zA-Z]/g, char => 
        String.fromCharCode(((char.charCodeAt(0) - (char >= 'a' ? 97 : 65) - 3 + 26) % 26) + (char >= 'a' ? 97 : 65))
    );

    document.getElementById('textResult').innerText = `Decrypted Text: ${decrypted}`;
}
