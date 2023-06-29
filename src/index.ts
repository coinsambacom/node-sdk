import got, { Got } from 'got';

/**
 * Represents ticker data for a cryptocurrency pair.
 */
export interface Ticker {
  exchangeId: string; // ID of the exchange
  base: string; // Base currency symbol
  quote: string; // Quote currency symbol
  last: number; // Last price
  ask: number; // Ask price
  bid: number; // Bid price
  vol: number; // Volume
  updatedAt: string; // Last update timestamp
}

/**
 * Represents index data for a cryptocurrency pair.
 */
export interface Index {
  open: number; // Opening price
  high: number; // Highest price
  low: number; // Lowest price
  close: number; // Closing price
  vol: number; // Volume
  change: number; // Change percentage
}

/**
 * Represents a generic response object from the Coinsamba API.
 */
export interface CoinsambaResponse<T> {
  success: boolean; // Indicates if the request was successful
  message: string; // Response message
  response: T; // Response data
}

/**
 * Configuration options for the Coinsamba API instance.
 */
export interface CoinsambaOptions {
  isDev?: boolean; // Flag indicating if the library is in development mode
}

/**
 * The Coinsamba API client.
 */
export class Coinsamba {
  private isDev: boolean;
  private api: Got;

  /**
   * Creates an instance of the Coinsamba API client.
   * @param options - Configuration options for the Coinsamba API instance.
   */
  constructor(options: CoinsambaOptions = {}) {
    this.api = got.extend({
      prefixUrl: 'https://api.coinsamba.com/v1',
      responseType: 'json',
    });
    this.isDev = options.isDev ?? false;
  }

  private logMessage(message: string): void {
    if (this.isDev) {
      console.info(message);
    }
  }

  /**
   * Retrieves ticker data for the specified base and quote currency.
   * @param base - The base currency symbol.
   * @param quote - The quote currency symbol.
   * @param exchangeId - (Optional) The ID of the exchange. If provided, it filters the results by exchange.
   * @returns A Promise that resolves to an array of Ticker objects.
   */
  async getTicker(
    base: string,
    quote: string,
    exchangeId?: string
  ): Promise<Ticker[]> {
    const params = {
      base,
      quote,
      exchangeId,
    };

    const response = await this.api
      .get('/ticker', { searchParams: params })
      .json<CoinsambaResponse<Ticker[]>>();
    this.logMessage(response.message);
    return response.response;
  }

  /**
   * Retrieves index data for the specified base and quote currency.
   * @param base - The base currency symbol.
   * @param quote - The quote currency symbol.
   * @returns A Promise that resolves to an Index object.
   */
  async getIndex(base: string, quote: string): Promise<Index> {
    const response = await this.api
      .get('/index', {
        searchParams: { base, quote },
      })
      .json<CoinsambaResponse<Index>>();
    this.logMessage(response.message);
    return response.response;
  }

  /**
   * Retrieves a list of available exchanges.
   * @returns A Promise that resolves to an array of exchange names.
   */
  async getExchanges(): Promise<string[]> {
    const response = await this.api
      .get('/exchanges')
      .json<CoinsambaResponse<string[]>>();
    this.logMessage(response.message);
    return response.response;
  }
}
