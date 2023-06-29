🌎 [English](README.md) | 🌎 [Português](README.pt.md) | 🌎 [Español](README.es.md)

# @coinsamba/coinsamba-api

Uma biblioteca Node.js para interagir com a API do Coinsamba, que fornece acesso a dados de criptomoedas e informações sobre exchanges.

## Instalação

```shell
npm install @coinsamba/coinsamba-api
```

## Uso

```javascript
const { Coinsamba } = require('@coinsamba/coinsamba-api');

// Crie uma instância da API do Coinsamba
const coinsamba = new Coinsamba({ isDev: true });

// Obtenha dados do ticker
coinsamba.getTicker('BTC', 'USD', 'exchange123')
  .then(ticker => {
    console.log(ticker);
  })
  .catch(error => {
    console.error(error);
  });

// Obtenha dados do índice
coinsamba.getIndex('BTC', 'USD')
  .then(index => {
    console.log(index);
  })
  .catch(error => {
    console.error(error);
  });

// Obtenha as exchanges disponíveis
coinsamba.getExchanges()
  .then(exchanges => {
    console.log(exchanges);
  })
  .catch(error => {
    console.error(error);
  });
```

## API

### Coinsamba(options)

Cria uma nova instância da API do Coinsamba.

#### Parâmetros

- `options` (opcional): Um objeto contendo opções de configuração para a instância da API do Coinsamba.
  - `isDev` (opcional): Um booleano que indica se a biblioteca está no modo de desenvolvimento. Padrão: `false`.

#### Métodos

##### getTicker(base: string, quote: string, exchangeId?: string): Promise<Ticker[]>

Recupera os dados do ticker para a moeda base e a moeda de cotação especificadas.

###### Parâmetros

- `base` (string): O símbolo da moeda base.
- `quote` (string): O símbolo da moeda de cotação.
- `exchangeId` (opcional): O ID da exchange. Se fornecido, filtrará os resultados com base na exchange.

###### Retorna

- Uma Promise que resolve para um array de objetos `Ticker`.

##### getIndex(base: string, quote: string): Promise<Index>

Recupera os dados do índice para a moeda base e a moeda de cotação especificadas.

###### Parâmetros

- `base` (string): O símbolo da moeda base.
- `quote` (string): O símbolo da moeda de cotação.

###### Retorna

- Uma Promise que resolve para um objeto `Index`.

##### getExchanges(): Promise<string[]>

Recupera uma lista de exchanges disponíveis.

###### Retorna

- Uma Promise que resolve para um array de nomes de exchanges.

#### Tipos

A biblioteca inclui os seguintes tipos para melhor organização e segurança de tipo:

##### Ticker

Representa os dados do ticker para um par de criptomoedas.

```typescript
interface Ticker {
  exchangeId: string;
  base: string;
  quote: string;
  last: number;
  ask: number;
  bid: number;
  vol: number;
  updatedAt: string;
}
```

##### Index

Representa os dados do índice para um par de criptomoedas.

```typescript
interface Index {
  open: number;
  high: number;
  low: number;
  close: number;
  vol: number;
  change: number;
}
```
