

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('Test TEst',()=>{
    it('should pass',()=>{
        expect(true).toBe(true);
    });
});

describe('first test',()=>{
    it('should pass',()=>{
        expect(true).toBe(true);
    });
});


describe('Second', () => {
    it('should pass', () => {
        expect(!false).toBe(true);
    });
});

//testing the app component 
describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});