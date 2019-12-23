# NGX Proxy Gateway

Modulo [Angular 4+](https://angular.io/) feito para facilitar a comunicação de módulos e chamadas que não precisam conhecer o endpoint final.

## Dependências

* [Angular 4+](https://angular.io/)

## Recursos do módulo

* Injeção dinâmica do basepath baseado em configuração.


## Instalação do módulo

Para instalar o módulo e seus recursos basta executar o seguinte comando na raiz do seu projeto Angular.

```bash
npm install @wizsolucoes/ngx-proxy-gateway --save
```

## Configuração do módulo

Antes de utilizar os recursos deste módulo será necessário realizar a seguinte configuração no arquivo **app.module.ts** do seu projeto.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxProxyGatewayModule } from '@wizsolucoes/ngx-proxy-gateway';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxProxyGatewayModule.forRoot({ basePath: 'http://meu-servico.com' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* **basePath**, uma string que representa o dns que deve ser adicionado ao início do endpoint.

## Utilização

Para utilizar este recurso, basta fazer uma chamada http convêncional, sem utilizar o começo **https://** ou **http://**, caso o path todo seja passado nada será modificado.

```ts
 constructor(    
    private _http: HttpClient
  ) {
    this.prepareProfileMonitor();
  }

  ngOnInit(): void {
    this._http.get('/hierarchyCall').subscribe( r => {} )
  }
```

> A seguinte chamada a http, após o módulo configurado irá gerar a seguinte requisição http: **http://meu-servico.com/hierarchyCall**