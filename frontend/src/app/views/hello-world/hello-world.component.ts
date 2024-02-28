import {Component, inject, OnInit} from '@angular/core';
import {AbiItem, Contract, TransactionReceipt, Web3} from 'web3';
import {decodeResponse, eth_call, eth_send, EthCallResponse, WEB3} from '../../utils/web3';
import {ABI, CONTRACT_ADDRESS, FUNC_MESSAGE, FUNC_UPDATE} from './types/hello-world-abi.types';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit {

  private readonly web3: Web3;

  form: FormGroup;
  messageFC: FormControl;

  helloWorldContract: Contract<AbiItem[]>;

  response: string = '';

  constructor(private readonly formBuilder: FormBuilder) {
    this.web3 = inject(WEB3);
  }

  ngOnInit(): void {
    this.messageFC = new FormControl('');

    this.form = this.formBuilder.group({
      message: this.messageFC
    });

    this.helloWorldContract = new this.web3.eth.Contract<AbiItem[]>(ABI, CONTRACT_ADDRESS);
  }

  getMessage(): void {
    // 1st implementation
    this.getMessagePureWeb3();

    // 2nd implementation
    // this.getMessageContract();
  }

  async updateMessage(): Promise<void> {
    const newMessage: string | null | undefined = this.messageFC.value;
    if (!!newMessage) {
      // 1st implementation
      this.updateMessagePureWeb3(newMessage);

      // 2nd implementation
      // this.updateMessageContract(newMessage).then();
    }
  }

  private getMessagePureWeb3(): void {
    eth_call(this.web3, CONTRACT_ADDRESS, FUNC_MESSAGE)
      .then((encoded: string) => {
        // @ts-ignore
        const response: EthCallResponse = decodeResponse(this.web3, encoded, FUNC_MESSAGE['outputs']);
        this.response = '' + response[0];
      });
  }

  private getMessageContract(): void {
    // @ts-ignore
    this.helloWorldContract.methods.message()
      .call()
      .then((output) => this.response = '' + output)
      .catch(err => console.error(err));
  }

  private updateMessagePureWeb3(newMessage: string): void {
    eth_send(this.web3, CONTRACT_ADDRESS, FUNC_UPDATE, [newMessage])
      .then((encoded: TransactionReceipt | undefined) => {
        // TODO Do something with response
        console.log(encoded);
      });
  }

  private async updateMessageContract(newMessage: string): Promise<void> {
    const accounts: string[] = await this.web3.eth.getAccounts();
    const account: string = accounts[0];

    const gasPrice: string = await this.web3.eth.estimateGas({}) + '';

    // @ts-ignore
    this.helloWorldContract.methods.update(newMessage)
      .send({
        from: account,
        gasPrice: gasPrice
      })
      .on('transactionHash', (transactionHash: string) => console.log(transactionHash))
      .then((receipt: TransactionReceipt) => console.log(receipt))
      .catch(err => console.error(err));
  }
}
