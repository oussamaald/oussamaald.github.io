
const metamaskButton = document.getElementById('metamask-login');
const walletAddressInput = document.getElementById('wallet-address');
const submitButton = document.getElementById('submit-wallet');
const statusDiv = document.getElementById('status');

metamaskButton.addEventListener('click', async () => {
    if (typeof window.ethereum === 'undefined') {
        statusDiv.textContent = "MetaMask is not installed. Please install it to continue.";
        return;
    }
    
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0]; // أول عنوان تم الحصول عليه
        console.log("User address:", userAddress);
        
        // نعرض حقل إدخال المحفظة للمستخدم
        walletAddressInput.style.display = "block";
        submitButton.style.display = "block";
        statusDiv.textContent = "Please enter your wallet address.";

        submitButton.addEventListener('click', () => {
            const enteredAddress = walletAddressInput.value;

            if (web3.utils.isAddress(enteredAddress)) {
                statusDiv.textContent = "Address verified! Sending confirmation...";
                sendTransactionConfirmation(enteredAddress);
            } else {
                statusDiv.textContent = "Invalid wallet address. Please try again.";
            }
        });
    } catch (error) {
        console.error("Error with MetaMask", error);
    }
});

async function sendTransactionConfirmation(address) {
    const web3 = new Web3(window.ethereum);
    try {
        const tx = await web3.eth.sendTransaction({
            from: address,
            to: address,
            data: "Confirmation for login",
            value: "0x0"
        });

        statusDiv.textContent = "Successfully verified! You are now logged in.";
    } catch (error) {
        console.error("Error confirming transaction", error);
        statusDiv.textContent = "There was an error. Please try again.";
    }
}
