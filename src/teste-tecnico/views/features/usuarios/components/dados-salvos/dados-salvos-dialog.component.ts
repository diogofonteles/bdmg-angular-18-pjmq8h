import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
    standalone: true,
    selector: 'app-dados-salvos-dialog',
    templateUrl: './dados-salvos-dialog.component.html',
    styleUrls: ['./dados-salvos-dialog.component.scss'],
    imports: [MatDialogModule]
})
export class DadosSalvosDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
