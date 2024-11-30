import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Buffer } from "buffer";

if (!window.Buffer) {
  window.Buffer = Buffer;
}

export const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

export const ETHEREUM_NETWORK_ID = 1;
export const ETHEREUM_SEPOLIA_NETWORK_ID = 11155111;
export const LOCAL_NETWORK_ID = 31337;
export const ARBITRUM_SEPOLIA_NETWORK_ID = 421614;
export const BASE_SEPOLIA_NETWORK_ID = 84532;

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    ETHEREUM_NETWORK_ID,
    ETHEREUM_SEPOLIA_NETWORK_ID,
    LOCAL_NETWORK_ID,
    ARBITRUM_SEPOLIA_NETWORK_ID,
    BASE_SEPOLIA_NETWORK_ID,
  ],
});

export const walletConnectConnector = new WalletConnectConnector({
  rpc: { [ETHEREUM_SEPOLIA_NETWORK_ID]: import.meta.env.VITE_API_URL },
  qrcode: true,
});
