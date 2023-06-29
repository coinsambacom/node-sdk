🌎 [English](README.md) | 🌎 [Português](README.pt.md) | 🌎 [Español](README.es.md)

# @coinsamba/coinsamba-node-sdk

Una biblioteca de Node.js para interactuar con la API de Coinsamba, que proporciona acceso a datos de criptomonedas e información sobre intercambios.

## Instalación

```shell
npm install @coinsamba/coinsamba-node-sdk
```

## Uso

```javascript
const { Coinsamba } = require('@coinsamba/coinsamba-node-sdk');

// Crea una instancia de la API de Coinsamba
const coinsamba = new Coinsamba({ isDev: true });

// Obtener datos del ticker
coinsamba.getTicker('BTC', 'USD', 'exchange123')
  .then(ticker => {
    console.log(ticker);
  })
  .catch(error => {
    console.error(error);
  });

// Obtener datos del índice
coinsamba.getIndex('BTC', 'USD')
  .then(index => {
    console.log(index);
  })
  .catch(error => {
    console.error(error);
  });

// Obtener intercambios disponibles
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

Crea una nueva instancia de la API de Coinsamba.

#### Parámetros

- `options` (opcional): Un objeto que contiene opciones de configuración para la instancia de la API de Coinsamba.
  - `isDev` (opcional): Un booleano que indica si la biblioteca está en modo de desarrollo. Por defecto: `false`.

#### Métodos

##### getTicker(base: string, quote: string, exchangeId?: string): Promise<Ticker[]>

Obtiene los datos del ticker para la moneda base y la moneda de cotización especificadas.

###### Parámetros

- `base` (string): El símbolo de la moneda base.
- `quote` (string): El símbolo de la moneda de cotización.
- `exchangeId` (opcional): El ID del intercambio. Si se proporciona, filtrará los resultados según el intercambio.

###### Retorna

- Una Promise que se resuelve a un array de objetos `Ticker`.

##### getIndex(base: string, quote: string): Promise<Index>

Obtiene los datos del índice para la moneda base y la moneda de cotización especificadas.

###### Parámetros

- `base` (string): El símbolo de la moneda base.
- `quote` (string): El símbolo de la moneda de cotización.

###### Retorna

- Una Promise que se resuelve a un objeto `Index`.

##### getExchanges(): Promise<string[]>

Obtiene una lista de intercambios disponibles.

###### Retorna

- Una Promise que se resuelve a un array de nombres de intercambios.

#### Tipos

La biblioteca incluye los siguientes tipos para una mejor organización y seguridad de tipo:

##### Ticker

Representa los datos del ticker para un par de criptomonedas.

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

Representa los datos del índice para un par de criptomonedas.

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