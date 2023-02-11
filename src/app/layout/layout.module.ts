import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FooterComponent } from './components/footer/footer.component';
import { JewelleryComponent } from './components/jewellery/jewellery.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FashionComponent,
    LoginComponent,
    IndexComponent,
    ElectronicsComponent,
    FooterComponent,
    JewelleryComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
 exports:[
  HeaderComponent
 ]
})
export class LayoutModule { }
