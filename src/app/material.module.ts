import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


const MaterialComponents = [
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDialogModule
]

@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents]
})
export class MaterialModule {

}
