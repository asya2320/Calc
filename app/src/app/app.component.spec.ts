import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents()
    })

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it('should have the correct template', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const compiled = fixture.nativeElement
        expect(compiled.querySelector('app-calculator')).toBeTruthy()
    })

    it('should use the correct selector', () => {
        const fixture = TestBed.createComponent(AppComponent)
        expect(fixture.componentInstance).toBeTruthy()
    })
})
