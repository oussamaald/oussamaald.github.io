 
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();

// إعداد Web3 باستخدام Infura
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/ce0badc3dacf469cbede1c41658bca01'));

// Middleware لقراءة الـ JSON في جسم الطلب
app.use(bodyParser.json());

// المسار للتحقق من المحفظة
app.post('/api/verify-wallet', async (req, res) => {
    const { walletAddress } = req.body;

    // تحقق من صحة عنوان المحفظة
    if (!web3.utils.isAddress(walletAddress)) {
        return res.status(400).send({ message: 'Invalid Ethereum address.' });
    }

    // في حال كانت المحفظة صحيحة، إرسال رد النجاح
    return res.status(200).send({ message: 'Wallet verified successfully!' });
});

// تشغيل الخادم على المنفذ 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
