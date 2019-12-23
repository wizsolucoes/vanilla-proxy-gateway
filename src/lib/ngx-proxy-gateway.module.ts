import { NgModule, ModuleWithProviders } from '@angular/core';
import { _ProxyConfig, ProxyConfig } from './models/proxy-config';
import { HttpProxyInterceptor } from './interceptors/http-proxy-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class NgxProxyGatewayModule {
  static forRoot(config: _ProxyConfig): ModuleWithProviders {
    return {
      ngModule: NgxProxyGatewayModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpProxyInterceptor, multi: true },
        { provide: ProxyConfig, useValue: config }
      ],
    }
  }
}
