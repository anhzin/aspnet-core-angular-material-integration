import { Component, OnInit } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    materialTheme = 'green-app';

    themes: Theme[] = new Array<Theme>();

    constructor(private themeService: ThemeService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/github-icon.svg'));
    }

    ngOnInit() {
        this.themes = this.themeService.getThemes();

        this.themeService.activeTheme.subscribe(theme => {
            this.materialTheme = theme.id;
        });
    }

    onActivate(e, mainContainer) {
        document.querySelector('div.mat-sidenav-content').scrollTop = 0;
    }
}
