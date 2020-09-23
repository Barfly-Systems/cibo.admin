import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginView } from './views/login/login.view';
import { DashboardView } from './views/dashboard/dashboard.view';
import { AppView } from './views/app/app.view';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductCategoryView } from './views/product-category/product-category.view';
import { SaleproductView } from './views/saleproduct/saleproduct.view';
import { ProductSizeComponent } from './views/product-size/product-size.component';
import { ProductPriceView } from './views/product-price/product-price.view';
import { PricingPeriodView } from './views/pricing-period/pricing-period.view';
import { ProductPriceListComponent } from './components/product-price-list/product-price-list.component';
//RESOLVERS
import { PriceListResolver } from './resolvers/price-list.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginView },
  { path: 'app', component: SidenavComponent,
    children: [
      { path: 'dashboard', component: DashboardView },
      { path: 'product/productcategory', component: ProductCategoryView},
      { path: 'product/salesproduct', component: SaleproductView},
      { path: 'product/productsize', component: ProductSizeComponent},
      { path: 'pricing/productprice', component: ProductPriceView, resolve: { priceList: PriceListResolver }},
      { path: 'pricing/pricingperiods', component: PricingPeriodView}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
