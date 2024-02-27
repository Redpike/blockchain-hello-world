import {AbiItem} from 'web3';

export const CONTRACT_ADDRESS = '0x577C66469b5df2781B3a77a9dC825eC2de76c4a4';

export const FUNC_MESSAGE: AbiItem = {
  inputs: [],
  name: 'message',
  outputs: [
    {
      internalType: 'string',
      name: '',
      type: 'string'
    }
  ],
  stateMutability: 'view',
  type: 'function'
};

export const FUNC_UPDATE: AbiItem = {
  inputs: [
    {
      internalType: 'string',
      name: 'newMessage',
      type: 'string'
    }
  ],
  name: 'update',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
};
