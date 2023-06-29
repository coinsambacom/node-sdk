import { Coinsamba, CoinsambaOptions } from '../src/index';

describe('Coinsamba', () => {
  test('should create an instance of Coinsamba', () => {
    const options: CoinsambaOptions = {
      isDev: true,
    };
    const coinsamba = new Coinsamba(options);

    expect(coinsamba).toBeInstanceOf(Coinsamba);
    expect(coinsamba.getExchanges).toBeInstanceOf(Function);
  });
});
