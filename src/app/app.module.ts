import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { ChartistModule } from 'ng-chartist';

//ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; //this is not part of the standard library, its an added NPM package
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//DIRECTIVES
import { OnlyNumber } from './directives/only-number.directive';
//VIEWS
import { LoginView } from './views/login/login.view';
import { DashboardView } from './views/dashboard/dashboard.view';
import { AppView } from './views/app/app.view';
import { ProductCategoryView } from './views/product-category/product-category.view';
import { SaleproductView } from './views/saleproduct/saleproduct.view';
//COMPONENTS
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductCategoryCardComponent } from './components/product-category-card/product-category-card.component';
import { SaleproductListComponent } from './components/saleproduct-list/saleproduct-list.component';
import { ProductSizeComponent } from './views/product-size/product-size.component';
import { ProductSizeListComponent } from './components/product-size-list/product-size-list.component';
import { ProductPriceListComponent } from './components/product-price-list/product-price-list.component';
import { ProductPriceView } from './views/product-price/product-price.view';
import { PriceListTableComponent } from './components/price-list-table/price-list-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SelectProductCategoryImageDialog } from './components/dialogs/select-product-category-image/select-product-category-image.dialog';
import { PricingPeriodView } from './views/pricing-period/pricing-period.view';
import { PricingPeriodListComponent } from './components/pricing-period-list/pricing-period-list.component';
import { TradingHourView } from './views/trading-hour/trading-hour.view';
import { TradingHoursListComponent } from './components/trading-hours-list/trading-hours-list.component';
import { SalesChart } from './components/charts/sales/sales.chart';
import { ProductTypeView } from './views/product-type/product-type.view';
import { ProductTypeListComponent } from './components/product-type-list/product-type-list.component';
import { OrganisationView } from './views/organisation/organisation.view';
import { OrganisationDetailsComponent } from './components/organisation-details/organisation-details.component';
import { TablesView } from './views/tables/tables.view';
import { TableListComponent } from './components/table-list/table-list.component';
import { ToastComponent } from './components/dialogs/toast/toast.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginView,
    DashboardView,
    SidenavComponent,
    AppView,
    ProductCategoryView,
    SaleproductView,
    CategoryListComponent,
    ProductCategoryCardComponent,
    SaleproductListComponent,
    ProductSizeComponent,
    ProductSizeListComponent,
    ProductPriceListComponent,
    ProductPriceView,
    PriceListTableComponent,
    FilterPipe,
    OnlyNumber,
    SelectProductCategoryImageDialog,
    PricingPeriodView,
    PricingPeriodListComponent,
    TradingHourView,
    TradingHoursListComponent,
    SalesChart,
    ProductTypeView,
    ProductTypeListComponent,
    OrganisationView,
    OrganisationDetailsComponent,
    TablesView,
    TableListComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, 
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTabsModule,
    NgxMaterialTimepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ChartistModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
