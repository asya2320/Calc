import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalculatorComponent } from '../components/calculator/calculator.component'
import { FormsModule } from '@angular/forms'
import { CalculateService } from '../services/calculate.service'

@NgModule({
    declarations: [CalculatorComponent],
    imports: [BrowserModule, FormsModule],
    providers: [CalculateService],
    exports: [CalculatorComponent],
})
export class CalculatorModule {}
