import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CalculatorModule } from './modules/calculator.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CalculatorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
