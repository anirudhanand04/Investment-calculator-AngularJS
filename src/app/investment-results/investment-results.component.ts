import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //results = input();
  // @Input() results?: {
  //   year: number,
  //   interestEarnedInYear: number,
  //   investmentValue: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;

  // }

  results = computed(()=> this.investmentService.resultsData());
}
