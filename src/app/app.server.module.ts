// core modules
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

// custom modules
import { AppModule } from './app.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    ServerTransferStateModule,
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
