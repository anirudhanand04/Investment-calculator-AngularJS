import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    resultsData = signal<{
        year: number,
        interestEarnedInYear: number,
        investmentValue: number,
        valueEndofYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[] | undefined>(undefined);
      
    calculateInvestmentResults(data: InvestmentInput) {
        const{ initialInvestment, expectedReturn, annualInvestment, duration } =
        data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
        const totalAmountInvested = annualInvestment * year + initialInvestment;
        annualData.push({
          year,
          interestEarnedInYear,
          investmentValue,
          valueEndofYear: investmentValue,
          annualInvestment,
          totalInterest,
          totalAmountInvested,
        });
        }
      
        this.resultsData.set(annualData);
      }
}