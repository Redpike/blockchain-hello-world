import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {Web3} from 'web3';
import {WEB3} from '../../utils/web3';

@Component({
  selector: 'app-web3',
  standalone: true,
  imports: [],
  templateUrl: './web3.component.html',
  styleUrl: './web3.component.scss'
})
export class Web3Component implements OnInit {

  selectedAccount: string = '';
  selectedChain: string = '';
  balance: string = '0 ETH';

  private readonly web3: Web3;

  constructor(private readonly cdr: ChangeDetectorRef) {
    this.web3 = inject(WEB3);
  }

  ngOnInit(): void {
    this.fetchMetaMaskData().then();

    // @ts-ignore
    const {ethereum} = window;
    ethereum.on('accountsChanged', (accounts: string[]) => {
      console.log(accounts);
      if (accounts.length) {
        this.selectedAccount = accounts[0];
        this.cdr.detectChanges();
      }
    });

    ethereum.on('chainChanged', async () => {
      const chainId: bigint = await this.web3.eth.getChainId();
      this.selectedChain = '' + chainId;
      this.cdr.detectChanges();
    });
  }

  private async fetchMetaMaskData(): Promise<void> {
    const accounts: string[] = await this.web3.eth.getAccounts();
    this.selectedAccount = accounts.length ? accounts[0] : '';

    const chainId: bigint = await this.web3.eth.getChainId();
    this.selectedChain = '' + chainId;

    if (this.selectedAccount) {
      const balance: bigint = await this.web3.eth.getBalance(this.selectedAccount);
      this.balance = this.web3.utils.fromWei(balance, 'ether') + ' ETH';
    }
  }
}