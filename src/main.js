import Axios from "axios";

const handleError = (error) => {
  let ethrown = null;
  if (error.response)
    if (error.response.data)
      if (error.response.data.message) {
        ethrown = error.response.data.message;
      }
  ethrown = error.response;

  throw ethrown;
};

export default class Coinsamba {
  constructor() {
    this._api = Axios.create({
      baseURL: "api.coinsamba.com/v1/",
    });
  }

  async forex({ base, quote }) {
    try {
      const { data } = this._api.get("forex", { base, quote });
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async book({ base, quote, exchangeId }) {
    try {
      const { data } = this._api.get("book", {
        params: { base, quote, exchangeId },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async ticker({ base, quote, exchangeId }) {
    try {
      const { data } = this._api.get("ticker", {
        params: { base, quote, exchangeId },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async index({ base, quote }) {
    try {
      const { data } = this._api.get("index", { params: { base, quote } });
      return data;
    } catch (error) {
      handleError(error);
    }
  }
}
