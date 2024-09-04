import { Component } from '@angular/core'
import { CalculateService } from '../../services/calculate.service'

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
    expression: string = ''
    result: number | null = null

    constructor(private calculateService: CalculateService) {}

    onButtonClick(value: string): void {
        if (value === '=') {
            this.calculateResult()
        } else if (value === 'C') {
            this.clearExpression()
        } else {
            this.expression += value
        }
    }

    onKeyPress(event: KeyboardEvent): void {
        // eslint-disable-next-line no-useless-escape
        const allowedCharacters = /[0-9\(\)\+\-\*\/\%\,\s]/

        if (event.key === 'Enter') {
            this.calculateResult()
        } else if (event.key === 'Escape') {
            this.clearExpression()
        } else if (event.key === 'Backspace') {
            event.preventDefault()
            this.expression = this.expression.slice(0, -1)
        } else if (allowedCharacters.test(event.key)) {
            event.preventDefault()
            this.expression += event.key
        }
    }

    private calculateResult(): void {
        try {
            this.result = this.calculateService.evaluateExpression(
                this.expression,
            )
        } catch (error) {
            this.result = null
            alert('Ошибка в выражении')
        }
    }

    private clearExpression(): void {
        this.expression = ''
        this.result = null
    }
}
