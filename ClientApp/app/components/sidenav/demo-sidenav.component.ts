import { Component, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'demo-sidenav',
    templateUrl: './demo-sidenav.component.html',
    styleUrls: ['./demo-sidenav.component.css'],
    providers: [
        ThemeService
    ]
})
export class DemoSidenavComponent implements OnInit {
    materialTheme: Theme;
    themes: Theme[] = new Array<Theme>();
    constructor(private themeService: ThemeService) {
        this.materialTheme = {
            id: 'green-app',
            display: 'Green'
        };
    }

    ngOnInit() {
        this.themes = this.themeService.getThemes();

        this.themeService.activeTheme.subscribe(theme => {
            this.materialTheme = theme;
        });
    }

    setTheme(theme: Theme, sidenav: MdSidenav) {
        this.themeService.setTheme(theme);
        sidenav.close();
    }
}
