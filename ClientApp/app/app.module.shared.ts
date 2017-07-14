import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app.module.material';
import { RouterModule } from '@angular/router';

import { ThemeService } from './services/theme.service';
import { DatabaseService } from './services/database.service';
import { BasicDataSourceService } from './services/basic-datasource.service';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { PrismComponent } from './components/prism/prism.component';

import { SetupComponent } from './components/setup/setup.component';
import { ThemingComponent } from './components/theming/theming.component';
import { TypographyComponent } from './components/typography/typography.component';
import { DataTableComponent } from './components/data-table/data-table.component';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';

import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DemoSidenavComponent } from './components/sidenav/demo-sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ChipComponent } from './components/chip/chip.component';
import { IconComponent } from './components/icon/icon.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

import { DialogComponent } from './components/dialog/dialog.component';
import { ExampleDialogComponent } from './components/dialog/example-dialog.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ExampleSnackbarComponent } from './components/snackbar/example-snackbar.component';

import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableSortComponent } from './components/table-sort/table-sort.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        PrismComponent,
        SetupComponent,
        ThemingComponent,
        TypographyComponent,
        DataTableComponent,
        AutocompleteComponent,
        CheckboxComponent,
        DatepickerComponent,
        InputComponent,
        RadioComponent,
        SelectComponent,
        SliderComponent,
        SlideToggleComponent,
        MenuComponent,
        SidenavComponent,
        DemoSidenavComponent,
        ToolbarComponent,
        ListComponent,
        GridListComponent,
        CardComponent,
        TabsComponent,
        ButtonComponent,
        ButtonToggleComponent,
        ChipComponent,
        IconComponent,
        ProgressSpinnerComponent,
        ProgressBarComponent,
        DialogComponent,
        ExampleDialogComponent,
        TooltipComponent,
        SnackbarComponent,
        ExampleSnackbarComponent,
        TableBasicComponent,
        TableFilterComponent,
        TableSortComponent,
        TablePaginatorComponent
    ],
    entryComponents: [
        ExampleDialogComponent,
        ExampleSnackbarComponent
    ],
    providers: [
        ThemeService,
        DatabaseService
    ],
    imports: [
        AppMaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'setup', component: SetupComponent },
            { path: 'theming', component: ThemingComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'data-table', component: DataTableComponent },
            { path: 'autocomplete', component: AutocompleteComponent },
            { path: 'checkbox', component: CheckboxComponent },
            { path: 'datepicker', component: DatepickerComponent },
            { path: 'input', component: InputComponent },
            { path: 'radio', component: RadioComponent },
            { path: 'select', component: SelectComponent },
            { path: 'slider', component: SliderComponent },
            { path: 'slide-toggle', component: SlideToggleComponent },
            { path: 'menu', component: MenuComponent },
            { path: 'sidenav', component: SidenavComponent },
            { path: 'toolbar', component: ToolbarComponent },
            { path: 'list', component: ListComponent },
            { path: 'grid-list', component: GridListComponent },
            { path: 'card', component: CardComponent },
            { path: 'tabs', component: TabsComponent },
            { path: 'button', component: ButtonComponent },
            { path: 'button-toggle', component: ButtonToggleComponent },
            { path: 'chip', component: ChipComponent },
            { path: 'icon', component: IconComponent },
            { path: 'progress-spinner', component: ProgressSpinnerComponent },
            { path: 'progress-bar', component: ProgressBarComponent },
            { path: 'dialog', component: DialogComponent },
            { path: 'tooltip', component: TooltipComponent },
            { path: 'snackbar', component: SnackbarComponent },
            { path: 'table-basic', component: TableBasicComponent },
            { path: 'table-filter', component: TableFilterComponent },
            { path: 'table-sort', component: TableSortComponent },
            { path: 'table-paginator', component: TablePaginatorComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
