import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({

    exports:[
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule
        
    ]

})

export class MyMaterialModule{}

