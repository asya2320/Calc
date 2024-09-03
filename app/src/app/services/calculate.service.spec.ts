import { TestBed } from '@angular/core/testing'

import { CalculateService } from './calculate.service'

describe('CalculateService', () => {
    let service: CalculateService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(CalculateService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should evaluate simple addition', () => {
        expect(service.evaluateExpression('2 + 3')).toBe(5)
    })

    it('should evaluate simple subtraction', () => {
        expect(service.evaluateExpression('5 - 3')).toBe(2)
    })

    it('should evaluate simple multiplication', () => {
        expect(service.evaluateExpression('2 * 3')).toBe(6)
    })

    it('should evaluate simple division', () => {
        expect(service.evaluateExpression('6 / 3')).toBe(2)
    })

    it('should evaluate square root', () => {
        expect(service.evaluateExpression('\u221A 16')).toBe(4)
    })

    it('should evaluate percentage', () => {
        expect(service.evaluateExpression('50%')).toBe(0.5)
    })

    it('should evaluate expression with parentheses', () => {
        expect(service.evaluateExpression('2 * (3 + 4)')).toBe(14)
    })

    it('should evaluate expression with negative numbers', () => {
        expect(service.evaluateExpression('-2 + 3')).toBe(1)
    })

    it('should evaluate expression with decimal numbers', () => {
        expect(service.evaluateExpression('2.5 + 3.5')).toBe(6)
    })

    it('should throw error for invalid expression', () => {
        expect(() => service.evaluateExpression('2 + 3a')).toThrowError(
            'Invalid expression',
        )
    })

    it('should throw error for division by zero', () => {
        expect(() => service.evaluateExpression('6 / 0')).toThrowError(
            'Division by zero',
        )
    })

    it('should evaluate complex expression', () => {
        expect(service.evaluateExpression('2 + 3 * (4 - 1)')).toBe(11)
    })

    it('should evaluate expression with mixed operators', () => {
        expect(service.evaluateExpression('2 + 3 * 4 / 2 - 1')).toBe(7)
    })

    it('should evaluate expression with square root and percentage', () => {
        expect(service.evaluateExpression('\u221A 16 + 50%')).toBe(4.5)
    })
})
