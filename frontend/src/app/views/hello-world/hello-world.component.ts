import {Component, inject, OnInit} from '@angular/core';
import {TransactionReceipt, Web3} from 'web3';
import {decodeResponse, eth_call, eth_send, EthCallResponse, WEB3} from '../../utils/web3';
import {CONTRACT_ADDRESS, FUNC_MESSAGE, FUNC_UPDATE} from './types/hello-world-abi.types';
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

  response: string = '';

  constructor(private readonly formBuilder: FormBuilder) {
    this.web3 = inject(WEB3);
  }

  ngOnInit(): void {
    this.messageFC = new FormControl('');

    this.form = this.formBuilder.group({
      message: this.messageFC
    });
  }

  getMessage(): void {
    eth_call(this.web3, CONTRACT_ADDRESS, FUNC_MESSAGE)
      .then((encoded: string) => {
        // @ts-ignore
        const response: EthCallResponse = decodeResponse(this.web3, encoded, FUNC_MESSAGE['outputs']);
        this.response = '' + response[0];
      });
  }

  updateMessage(): void {
    const newMessage: string | null | undefined = this.messageFC.value;
    if (!!newMessage) {
      eth_send(this.web3, CONTRACT_ADDRESS, FUNC_UPDATE, [newMessage])
        .then((encoded: TransactionReceipt | undefined) => {
          // TODO Do something with response
          console.log(encoded);
        });
    }
  }
}
