 
const Web3 = require('web3');
const web3 = new Web3();

function verifySignature(address, message, signature) {
    const recoveredAddress = web3.eth.accounts.recover(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
}

// Example usage (you will get this data from your frontend)
const address = "0xUserWalletAddress";  // Wallet address entered by the user
const message = "Please sign this message to verify your wallet address.";
const signature = "0xUserSignature";  // The signature sent from frontend

if (verifySignature(address, message, signature)) {
    console.log("Signature is valid. Address verified!");
} else {
    console.log("Signature is invalid.");
}
