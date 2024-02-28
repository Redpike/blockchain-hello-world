import {ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit} from '@angular/core';
import {Web3} from 'web3';
import {WEB3} from '../../utils/web3';
import {Web3Service} from '../../services/web3.service';

@Component({
  selector: 'app-web3',
  standalone: true,
  imports: [],
  templateUrl: './web3.component.html',
  styleUrl: './web3.component.scss'
})
export class Web3Component implements OnInit, OnDestroy {

  selectedAccount: string = '';
  selectedChain: string = '';
  balance: string = '0 ETH';

  private readonly web3: Web3 = inject(WEB3);
  private readonly web3Service: Web3Service = inject(Web3Service);

  private balanceTimeout: NodeJS.Timeout;

  constructor(private readonly cdr: ChangeDetectorRef) {
    effect(() => {
      const isTransactionDone: boolean = this.web3Service.transactionDone();
      if (isTransactionDone) {
        this.balanceTimeout = setTimeout(() => {
          this.fetchMetaMaskData().then();
        }, 5_000)
      }
    });
  }

  private static formatAddress(address: string): string {
    return `${address.substring(0, 7)}...${address.substring(38)}`
  }

  ngOnInit(): void {
    this.fetchMetaMaskData().then();

    // @ts-ignore
    const {ethereum} = window;
    ethereum.on('accountsChanged', (accounts: string[]) => {
      this.fetchMetaMaskData().then();
    });

    ethereum.on('chainChanged', () => {
      this.fetchMetaMaskData().then();
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.balanceTimeout);
  }

  private async fetchMetaMaskData(): Promise<void> {
    const accounts: string[] = await this.web3.eth.getAccounts();
    const account: string = accounts[0];
    this.selectedAccount = accounts.length ? Web3Component.formatAddress(account) : '';

    const chainId: bigint = await this.web3.eth.getChainId();
    this.selectedChain = '' + chainId;

    if (this.selectedAccount) {
      const balance: bigint = await this.web3.eth.getBalance(account);
      this.balance = this.web3.utils.fromWei(balance, 'ether') + ' ETH';
    }

    this.cdr.detectChanges();
  }
}
