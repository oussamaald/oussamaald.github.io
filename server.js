 
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const web3 = new Web3('https://mainnet.infura.io/v3/ce0badc3dacf469cbede1c41658bca01');

app.use(bodyParser.json());

app.post('/verify-wallet', (req, res) => {
    const { walletAddress } = req.body;

    // Validate wallet address
    if (!web3.utils.isAddress(walletAddress)) {
        return res.status(400).send('Invalid Ethereum address.');
    }

    // Simulate wallet verification (usually this involves a signature check)
    res.status(200).send({ message: 'Wallet verified successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
