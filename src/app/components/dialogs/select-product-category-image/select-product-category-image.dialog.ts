import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProductCategory } from 'src/app/models/product-category.model';

@Component({
  selector: 'app-select-product-category-image',
  templateUrl: './select-product-category-image.dialog.html',
  styleUrls: ['./select-product-category-image.dialog.scss']
})
export class SelectProductCategoryImageDialog implements OnInit {

  currentImageIndex: number = 0;
  currentCategoryData: IProductCategory;
  imagePaths: string[] = [];
  imageDataList: any[] = [];

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<SelectProductCategoryImageDialog>, 
    @Inject(MAT_DIALOG_DATA) data, ) 
    {
      this.currentCategoryData = data.category;
    }

  ngOnInit(): void {
    console.log(this.currentCategoryData);
    this.api.getProductCategoryImages().subscribe((data: any[]) => {
      this.imageDataList = data;
      this.imagePaths = data.map((ip) => {
        return ip.imagePath;
      })
    });
  }

  changeCurrentIndex = (changeInt: number) => {
    if(this.currentImageIndex + changeInt < 0){
      this.currentImageIndex = this.imagePaths.length - 1;
      console.log(this.currentImageIndex);
      return;
    }
    if(this.currentImageIndex + changeInt > this.imagePaths.length - 1){
      this.currentImageIndex = 0;
      console.log(this.currentImageIndex);
      return;
    }
    this.currentImageIndex += changeInt;
    console.log(this.currentImageIndex);
    console.log(this.imagePaths[this.currentImageIndex]);
  }

  selectImage = () => {
    this.dialogRef.close({imageData: this.imageDataList[this.currentImageIndex], categoryData: this.currentCategoryData});
  }
}
