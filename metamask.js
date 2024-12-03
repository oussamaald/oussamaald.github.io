



const metamaskButton = document.getElementById('metamask-login');

metamaskButton.addEventListener('click', () => {
    console.log("MetaMask Login Button Clicked");

    // الرابط الذي يفتح تطبيق MetaMask
    const deepLink = "metamask://dapp/http://localhost:8158"; // استبدل "yourwebsite.com" برابط موقعك أو رابط محلي إذا كنت تستخدم محلياً
    window.location.href = deepLink;

    // ملاحظة: إذا كنت تعمل محليًا بدون استضافة، استخدم رابط توجيه مباشر كخطوة بديلة.
});
;

if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed. Please install it to continue.");
}
 بتوجيه المستخدم إلى صفحة التطبيق
window.location.href = "https://yourapp.com/dashboard";  // استبدل بعنوان الصفحة المناسبة
