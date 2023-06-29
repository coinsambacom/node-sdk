🌎 [English](README.md) | 🌎 [Português](README.pt.md) | 🌎 [Español](README.es.md)

# @coinsamba/coinsamba-api

A Node.js library for interacting with the Coinsamba API, which provides access to cryptocurrency data and exchange information.

## Installation

```shell
npm install @coinsamba/coinsamba-api
```

## Usage

```javascript
const { Coinsamba } = require('@coinsamba/coinsamba-api');

// Create an instance of Coinsamba API
const coinsamba = new Coinsamba({ isDev: true });

// Retrieve ticker data
coinsamba.getTicker('BTC', 'USD', 'exchange123')
  .then(ticker => {
    console.log(ticker);
  })
  .catch(error => {
    console.error(error);
  });

// Retrieve index data
coinsamba.getIndex('BTC', 'USD')
  .then(index => {
    console.log(index);
  })
  .catch(error => {
    console.error(error);
  });

// Retrieve available exchanges
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

Creates a new instance of the Coinsamba API.

#### Parameters

- `options` (optional): An object containing configuration options for the Coinsamba API instance.
  - `isDev` (optional): A boolean indicating whether the library is in development mode. Default: `false`.

#### Methods

##### getTicker(base: string, quote: string, exchangeId?: string): Promise<Ticker[]>

Retrieves ticker data for the specified base and quote currency.

###### Parameters

- `base` (string): The base currency symbol.
- `quote` (string): The quote currency symbol.
- `exchangeId` (optional): The exchange ID. If provided, it will filter the results based on the exchange.

###### Returns

- A Promise that resolves to an array of `Ticker` objects.

##### getIndex(base: string, quote: string): Promise<Index>

Retrieves index data for the specified base and quote currency.

###### Parameters

- `base` (string): The base currency symbol.
- `quote` (string): The quote currency symbol.

###### Returns

- A Promise that resolves to an `Index` object.

##### getExchanges(): Promise<string[]>

Retrieves a list of available exchanges.

###### Returns

- A Promise that resolves to an array of exchange names.

#### Types

The library includes the following types for better code organization and type safety:

##### Ticker

Represents ticker data for a cryptocurrency pair.

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

Represents index data for a cryptocurrency pair.

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
