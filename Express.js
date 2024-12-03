 
const express = require('express');
const Web3 = require('web3');
const app = express();
const web3 = new Web3();

// Middleware to parse JSON
app.use(express.json());

// Endpoint to verify the signature
app.post('/verify-wallet', (req, res) => {
    const { address, message, signature } = req.body;

    const recoveredAddress = web3.eth.accounts.recover(message, signature);

    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
        res.json({ success: true, message: 'Wallet verified successfully!' });
    } else {
        res.json({ success: false, message: 'The address could not be verified.' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
