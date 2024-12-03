import { generateMetaMaskQRCode } from "./metamask.js";
import { generateWalletConnectQRCode } from "./wallet.js";
import { checkConnection } from "./qrcode.js";

generateMetaMaskQRCode();
generateWalletConnectQRCode();
checkConnection();
