import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzGridModule } from "ng-zorro-antd/grid";

import { IconsProviderModule } from "@app/icons-provider.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  exports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    TranslateModule
  ]
})
export class SharedModule {}
