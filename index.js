 
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

  // Initialize the ethers.js provider (for Metamask)
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      // Request user to sign a message (this is where the verification happens)
      const message = 'Please sign this message to log in.';
      const signature = await signer.signMessage(message);

      // Verify if the signed message matches the wallet address
      const recoveredAddress = ethers.utils.verifyMessage(message, signature);

      if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
        alert('You have successfully logged in!');
        // Redirect to the user dashboard or home page
        window.location.href = 'https://oussamaald.github.io/dashboard'; // Change to your dashboard URL
      } else {
        alert('Failed to verify the wallet address.');
      }
    } catch (error) {
      console.error('Error during sign-in process:', error);
      alert('An error occurred during the sign-in process.');
    }
  } else {
    alert('MetaMask is not installed. Please install MetaMask and try again.');
  }
});

// Function to validate Ethereum address format
function isValidAddress(address) {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
