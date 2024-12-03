
const Web3 = require('web3');

// استخدم Infura كمزود للاتصال بشبكة Ethereum
const infuraUrl = `https://mainnet.infura.io/v3/ce0badc3dacf469cbede1c41658bca01`; // استبدل بهذا الـ API Key الخاص بك
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// وظيفة لتسجيل الدخول والتحقق من المحفظة
async function loginWithMetaMask() {
    // مثال للتحقق من عنوان المحفظة (يرجى تعديل هذا حسب التطبيق الذي تحتاجه)
    const publicKey = prompt("Please enter your wallet address:");

    if (web3.utils.isAddress(publicKey)) {
        console.log("Valid address: ", publicKey);
        
        // إرسال إشعار أو رسالة عند التحقق من المحفظة
        alert("Address validated. Proceeding with login...");
        
        // هنا يمكن إضافة الكود الذي يقوم بإرسال إشعار للتحقق
        // مثال: إرسال الطلبات إلى API أو التفاعل مع العقود الذكية
        
    } else {
        alert("Invalid address. Please check and try again.");
    }
}

// إضافة الحدث عند الضغط على الزر
const metamaskButton = document.getElementById('metamask-login');
metamaskButton.addEventListener('click', loginWithMetaMask);
