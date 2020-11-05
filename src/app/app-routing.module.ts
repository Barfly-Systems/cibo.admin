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
import { TradingHourView } from './views/trading-hour/trading-hour.view';
import { ProductTypeView } from './views/product-type/product-type.view';
import { OrganisationView } from './views/organisation/organisation.view';
import { TablesView } from './views/tables/tables.view';
//RESOLVERS
import { PriceListResolver } from './resolvers/price-list.resolver';

import { Instruction } from './staticdata/instructions.data';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginView },
  { path: 'app', component: SidenavComponent,
    children: [
      { path: 'dashboard', component: DashboardView },
      { path: 'organisation/details', component: OrganisationView, data: {instruction:'This is where you can view and change the details of your establishment'}},
      { path: 'product/productcategory', component: ProductCategoryView, data: {instruction: 'This is where you define the groups that your products will be displayed in to the customer. For example you might like to have a Product Category that displays all Hot Drinks or you may wish to further subdivide the category into two separate categories for Tea and Coffee'}},
      { path: 'product/producttype', component: ProductTypeView, data: {instruction: 'This is where you define the groups that your products will use internally. For example lager and ale may all share the same potential sales sizes (pint, half pint, bottle, can) so it would make sense to group them in one under the heading \'Beer\''}},
      { path: 'product/salesproduct', component: SaleproductView, data: {instruction: 'This is where you will create and manage your products that will be sold to customers. Each product should have a name, Product Category, and Product Type - the Product Type that you select will decide which sizes are available to be selected for sale'}},
      { path: 'product/productsize', component: ProductSizeComponent, data: {instruction: 'This is where you create your product sizes. Each size must have a Product Type set, for example you might wish to have a Product Group called \'Wine\' with the sizes \'Large\', \'Medium\', \'Small\' and \'Bottle\''}},
      { path: 'pricing/productprice', component: ProductPriceView, resolve: { priceList: PriceListResolver }, data: {instruction: 'Here you will need to set a price for each Sales Product and relevant Size that you have configured for each Pricing Period created'}},
      { path: 'pricing/pricingperiod', component: PricingPeriodView, data: {instruction: 'Pricing Periods are simply a set of prices. All that is required is a name. So for example you may want to have a set of prices called \'All Day\' and only ever have those prices applied or you may want to have an \'All Day\' and a \'Happy Hour\' pricing period. You can have as many as you like or just the one.'}},
      { path: 'trading/tradinghour', component: TradingHourView, data: {instruction: 'Trading Hours tell the system at what time and on what days the different pricing levels apply.'}},
      { path: 'location/tables', component: TablesView,data: {instruction: 'Here you can set the name of your tables. For example 1, 2, 3'}}
    ]
  },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
