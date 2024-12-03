

const metamaskButton = document.getElementById('metamask-login');

metamaskButton.addEventListener('click', () => {
    console.log("MetaMask Login Button Clicked");

    // الرابط الذي يفتح تطبيق MetaMask
    const deepLink = "metamask://dapp/https://oussamaald.github.io/"; // تعديل الرابط ليتوافق مع GitHub Pages
    window.location.href = deepLink;
});

if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed. Please install it to continue.");
}
