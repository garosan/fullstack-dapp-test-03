import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";

export const getLibrary = (provider) => {
  return new Web3Provider(provider);
};
