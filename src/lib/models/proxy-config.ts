import { InjectionToken } from "@angular/core";

export class _ProxyConfig {    
    public basePath: string;
}

export const ProxyConfig = new InjectionToken<_ProxyConfig>("ProxyConfig");