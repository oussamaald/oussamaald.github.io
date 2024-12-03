 
const express = require('express');
const Web3 = require('web3');
const bodyParser = require('body-parser');

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/verify-wallet', async (req, res) => {
    const { walletAddress } = req.body;

    if (!web3.utils.isAddress(walletAddress)) {
        return res.status(400).json({ success: false, message: 'Invalid address' });
    }

    // Here, we can perform additional verification if needed, like checking if the address has any transactions or balance
    const balance = await web3.eth.getBalance(walletAddress);

    if (balance === '0') {
        return res.status(400).json({ success: false, message: 'Address has no balance' });
    }

    // If everything checks out, return success
    return res.status(200).json({ success: true, message: 'Wallet verified successfully' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
