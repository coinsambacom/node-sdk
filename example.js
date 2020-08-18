import coinsamba from "coinsamba-node-sdk";

const cs = new coinsamba();

cs.forex({
  base: "USD",
  quote: "BRL",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
