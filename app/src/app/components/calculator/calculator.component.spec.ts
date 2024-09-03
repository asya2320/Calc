import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CalculatorComponent } from './calculator.component'
import { FormsModule } from '@angular/forms'

describe('CalculatorComponent', () => {
    let component: CalculatorComponent
    let fixture: ComponentFixture<CalculatorComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CalculatorComponent],
            imports: [FormsModule],
        }).compileComponents()

        fixture = TestBed.createComponent(CalculatorComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
