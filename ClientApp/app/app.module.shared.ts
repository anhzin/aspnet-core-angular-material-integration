import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app.module.material';
import { RouterModule } from '@angular/router';

import { ThemeService } from './services/theme.service';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';
import { ThemingComponent } from './components/theming/theming.component';
import { TypographyComponent } from './components/typography/typography.component';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';

import { CardComponent } from './components/card/card.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        SetupComponent,
        ThemingComponent,
        TypographyComponent,
        AutocompleteComponent,
        CheckboxComponent,
        DatepickerComponent,
        InputComponent,
        RadioComponent,
        SelectComponent,
        SliderComponent,
        SlideToggleComponent,
        CardComponent
    ],
    providers: [
        ThemeService
    ],
    imports: [
        AppMaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'setup', component: SetupComponent },
            { path: 'theming', component: ThemingComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'autocomplete', component: AutocompleteComponent },
            { path: 'checkbox', component: CheckboxComponent },
            { path: 'datepicker', component: DatepickerComponent },
            { path: 'input', component: InputComponent },
            { path: 'radio', component: RadioComponent },
            { path: 'select', component: SelectComponent },
            { path: 'slider', component: SliderComponent },
            { path: 'slide-toggle', component: SlideToggleComponent },
            { path: 'card', component: CardComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
