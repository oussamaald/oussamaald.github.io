
const walletconnectButton = document.getElementById('walletconnect-login');

walletconnectButton.addEventListener('click', async () => {
    console.log("WalletConnect button clicked!"); // لضمان أن الزر يستجيب
    const provider = new WalletConnectProvider({
        infuraId: 'INFURA_PROJECT_ID', // تأكد من استبدالها برقمك الخاص من Infura
    });

    await provider.enable();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    alert("Connected wallet address: " + accounts[0]);
});
