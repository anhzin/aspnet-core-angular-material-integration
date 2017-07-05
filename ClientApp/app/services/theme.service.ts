import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Theme } from '../models/theme.model';

@Injectable()
export class ThemeService {
    private themeSubject = new Subject<Theme>();

    activeTheme: Observable<Theme> = this.themeSubject.asObservable();

    themes: Array<Theme> = [
        { id: "green-app", display: "Green" },
        { id: "red-app", display: "Red" },
        { id: "blue-app", display: "Blue" }
    ];

    getThemes(): Array<Theme> {
        return this.themes;
    }

    setTheme(theme: Theme) {
        this.themeSubject.next(theme);
    }
}