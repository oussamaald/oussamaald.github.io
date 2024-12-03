 
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/ce0badc3dacf469cbede1c41658bca01'));

// أنشئ وظيفة للتحقق من المحفظة
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { walletAddress } = req.body;

        // تحقق من صحة عنوان المحفظة
        if (!web3.utils.isAddress(walletAddress)) {
            return res.status(400).json({ success: false, message: 'Invalid Ethereum address.' });
        }

        // هنا يمكنك إضافة منطق إضافي مثل التحقق من المعاملات أو الرصيد
        const balance = await web3.eth.getBalance(walletAddress);

        if (balance === '0') {
            return res.status(400).json({ success: false, message: 'Address has no balance' });
        }

        // إذا كان كل شيء صحيح، إرجاع نتيجة النجاح
        return res.status(200).json({ success: true, message: 'Wallet verified successfully' });
    } else {
        // في حالة كانت الطلبات ليست POST
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
