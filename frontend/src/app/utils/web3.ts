import {InjectionToken} from '@angular/core';
import {AbiItem, AbiOutput, TransactionReceipt, Web3} from 'web3';

export interface EthCallResponse {
  [key: string]: unknown;
}

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => {
    try {
      const provider = ('ethereum' in window) ? window['ethereum'] : Web3.givenProvider;
      // @ts-ignore
      return new Web3(provider);
    } catch (err) {
      throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
    }
  }
});

export const eth_call = (web3: Web3, address: string, abi: AbiItem, params?: string[]): Promise<string> => {
  // trim all input parameter to avoid whitespace characters from copy & paste
  if (params !== undefined) {
    params = params.map((string: string) => string.trim());
  }

  // @ts-ignore
  const encodedFunction: string = web3.eth.abi.encodeFunctionCall(abi, params ?? []);

  return web3.eth.call({
    data: encodedFunction,
    to: address
  });
};

export const eth_send = async (web3: Web3, address: string, abi: AbiItem, params?: string[]): Promise<TransactionReceipt | undefined> => {
  // trim all input parameter to avoid whitespace characters from copy & paste
  if (params !== undefined) {
    params = params.map((string: string) => string.trim());
  }

  // @ts-ignore
  const encodedFunction: string = web3.eth.abi.encodeFunctionCall(abi, params ?? []);
  const accounts: string[] = await web3.eth.getAccounts();
  const account: string = accounts[0];
  const gasPrice: string = await web3.eth.estimateGas({}) + '';

  return web3.eth.sendTransaction({
    data: encodedFunction,
    from: account,
    gasPrice: gasPrice,
    to: address
  });
};

export const decodeResponse = (web3: Web3, response: string, resultTypes: AbiOutput[] | undefined): EthCallResponse => {
  return web3.eth.abi.decodeParameters(resultTypes ?? [], response);
};
