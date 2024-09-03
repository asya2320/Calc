import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class CalculateService {
    constructor() {}

    evaluateExpression(expression: string): number {
        expression = expression.replace(/\s/g, '')

        if (!this.isValidExpression(expression)) {
            throw new Error('Invalid expression')
        }

        const rpn = this.toRPN(expression)
        return this.evaluateRPN(rpn)
    }

    private isValidExpression(expression: string): boolean {
        const allowedChars = '0123456789+-/()*×√%.-'
        return expression.split('').every((char) => allowedChars.includes(char))
    }

    private toRPN(expression: string): string[] {
        const output = []
        const operators = []
        const precedence: { [key: string]: number } = {
            '+': 1,
            '-': 1,
            '×': 2,
            '*': 2,
            '/': 2,
            '√': 3,
            '%': 3,
        }

        let i = 0
        while (i < expression.length) {
            const char = expression[i]
            if (this.isNumber(char) || char === '.') {
                let num = ''
                while (
                    i < expression.length &&
                    (this.isNumber(expression[i]) || expression[i] === '.')
                ) {
                    num += expression[i++]
                }
                output.push(num)
            } else if (char === '(') {
                operators.push(char)
                i++
            } else if (char === ')') {
                while (
                    operators.length > 0 &&
                    operators[operators.length - 1] !== '('
                ) {
                    output.push(operators.pop()!)
                }
                operators.pop()
                i++
            } else if (char === '-' && (i === 0 || expression[i - 1] === '(')) {
                let num = '-'
                i++
                while (
                    i < expression.length &&
                    (this.isNumber(expression[i]) || expression[i] === '.')
                ) {
                    num += expression[i++]
                }
                output.push(num)
            } else {
                while (
                    operators.length > 0 &&
                    precedence[operators[operators.length - 1]] >=
                        precedence[char]
                ) {
                    output.push(operators.pop()!)
                }
                operators.push(char)
                i++
            }
        }

        while (operators.length > 0) {
            output.push(operators.pop()!)
        }

        return output
    }

    private evaluateRPN(rpn: string[]): number {
        const stack: number[] = []

        for (const token of rpn) {
            if (this.isNumber(token) || token.includes('.')) {
                stack.push(parseFloat(token))
            } else {
                if (token === '√' || token === '%') {
                    const operand = stack.pop()!
                    if (token === '√') {
                        stack.push(Math.sqrt(operand))
                    } else if (token === '%') {
                        stack.push(operand / 100)
                    }
                } else {
                    const rightOperand = stack.pop()!
                    const leftOperand = stack.pop()!

                    switch (token) {
                        case '+':
                            stack.push(leftOperand + rightOperand)
                            break
                        case '-':
                            stack.push(leftOperand - rightOperand)
                            break
                        case '*':
                        case '×':
                            stack.push(leftOperand * rightOperand)
                            break
                        case '/':
                            if (rightOperand === 0) {
                                throw new Error('Division by zero')
                            }
                            stack.push(leftOperand / rightOperand)
                            break
                    }
                }
            }
        }

        return stack.pop()!
    }

    private isNumber(token: string): boolean {
        return !isNaN(parseFloat(token))
    }
}
