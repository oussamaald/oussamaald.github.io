 
// Get the login button and wallet address input field
const loginButton = document.getElementById('login-btn');
const walletAddressInput = document.getElementById('wallet-address');

// Event listener when the login button is clicked
loginButton.addEventListener('click', async () => {
  const walletAddress = walletAddressInput.value;

  // Verify if the wallet address is provided
  if (!walletAddress) {
    alert('Please enter your wallet address.');
    return;
  }

  // Validate the wallet address format (Ethereum)
  if (!isValidAddress(walletAddress)) {
    alert('Invalid wallet address. Please check your address.');
    return;
  }

  // Verify the wallet address using Infura API
  try {
    const response = await verifyWalletAddress(walletAddress);

    // Handle the response
    if (response.exists) {
      alert('You have successfully logged in!');
      // Redirect to the user dashboard or home page
      window.location.href = 'https://oussamaald.github.io/dashboard'; // Change to your dashboard URL
    } else {
      alert('Account not found. Please create a new account.');
      // Redirect to account creation page
      window.location.href = 'https://oussamaald.github.io/create-account'; // Change to your create account URL
    }
  } catch (error) {
    console.error('Error verifying wallet address:', error);
    alert('An error occurred while verifying the address.');
  }
});

// Function to validate Ethereum address format
function isValidAddress(address) {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
}

// Function to verify the wallet address (using Infura or another API)
async function verifyWalletAddress(walletAddress) {
  const apiKey = 'ce0badc3dacf469cbede1c41658bca01'; // Infura API Key
  const url = `https://mainnet.infura.io/v3/${apiKey}`;

  const payload = {
    jsonrpc: '2.0',
    method: 'eth_getTransactionCount',
    params: [walletAddress, 'latest'],
    id: 1,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (data.result !== undefined) {
    return { exists: true }; // Wallet address exists
  } else {
    return { exists: false }; // Wallet address does not exist
  }
