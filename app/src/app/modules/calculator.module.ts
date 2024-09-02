import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalculatorComponent } from '../components/calculator/calculator.component'

@NgModule({
    declarations: [CalculatorComponent],
    imports: [BrowserModule],
    providers: [],
    exports: [CalculatorComponent],
})
export class CalculatorModule {}
