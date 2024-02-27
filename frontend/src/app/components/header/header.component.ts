import {Component} from '@angular/core';
import {Web3Component} from '../web3/web3.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Web3Component
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
