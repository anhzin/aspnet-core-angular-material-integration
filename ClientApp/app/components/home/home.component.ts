import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    cards = [
        {
            src: '/assets/github-icon.svg',
            url: 'https://github.com/JaimeStill/AspNetCoreMaterial',
            header: 'See the full project on GitHub'
        },
        {
            src: '/assets/vs-code.svg',
            url: 'https://code.visualstudio.com',
            header: 'Download Visual Studio Code'
        },
        {
            src: '/assets/nodejs.svg',
            url: 'https://nodejs.org',
            header: 'Download Node.js'
        },
        {
            src: '/assets/microsoft.svg',
            url: 'https://github.com/aspnet/JavaScriptServices',
            header: 'ASP.NET Core JavaScriptServices'
        },
        {
            src: '/assets/angular-icon.svg',
            url: 'https://angular.io',
            header: 'Angular'
        },
        {
            src: '/assets/angular-icon.svg',
            url: 'https://material.angular.io',
            header: 'Angular Material'
        }
    ]
}
