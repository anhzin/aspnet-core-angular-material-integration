import { Component } from '@angular/core';

@Component({
    selector: 'grid-list-usage',
    templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {
    images = [
            '/assets/microsoft.svg',
            '/assets/webpack.svg',
            '/assets/github-icon.svg',
            '/assets/visual-studio.svg',
            '/assets/angular-icon.svg',
            '/assets/chrome.svg'
    ];
}
