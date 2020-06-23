import { NgModule } from "@angular/core";

import { WelcomeRoutingModule } from "@features/welcome/welcome-routing.module";
import { WelcomeComponent } from "@features/welcome/welcome.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  imports: [WelcomeRoutingModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {}
