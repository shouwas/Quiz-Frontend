import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
                <mat-toolbar>
                <button mat-button routerLink="/"> Quiz </button>
                <button mat-button routerLink="/question"> Questin </button>
                <button mat-button routerLink="/questions"> Question List </button>
                </mat-toolbar>
            `,
})
export class NavComponent {

}