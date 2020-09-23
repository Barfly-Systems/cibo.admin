import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

import { SelectProductCategoryImageDialog } from './../components/dialogs/select-product-category-image/select-product-category-image.dialog';
import { IProductCategory } from '../models/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private sidenav: MatSidenav;

  constructor(public dialog: MatDialog) { }

  openSelectCategoryImageDialog = (category: IProductCategory) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      category: category
    }

    const dialogRef = this.dialog.open(SelectProductCategoryImageDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  // openAbandonBasketDialog = (pubName: string) => {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = {
  //     pubName: pubName
  //   }

  //   const dialogRef = this.dialog.open(EmptyBasketComponent, dialogConfig);

  //   return dialogRef.afterClosed();
  // }

  // openTableSelectDialog = () => {
  //   const dialogRef = this.dialog.open(TableSelectComponent, {
  //     width: '100%'
  //   });
  //   return dialogRef.afterClosed();
  // }

  // setSidenav = (sidenav: MatSidenav) => {
  //   this.sidenav = sidenav;
  // }

  // openSidenav = () => {
  //   return this.sidenav.open();
  // }

  // closeSidenav = () => {
  //   return this.sidenav.close();
  // }

  // toggleSidenav = () => {
  //   this.sidenav.toggle();
  // }
}
