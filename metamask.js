
const connectMetaMask = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // طلب الاتصال بـ MetaMask
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected account:', accounts[0]);
      alert(`Connected: ${accounts[0]}`);
    } catch (error) {
      console.error('Error connecting:', error);
      alert('Failed to connect to MetaMask.');
    }
  } else {
    alert('MetaMask is not installed. Please install MetaMask!');
  }
};
 
