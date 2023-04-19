import { Button } from "@/components/Button";
import { CoinList } from "@/components/CoinList";
import { Input } from "@/components/Input";
import { Wrapper } from "@/styles/home";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const coinList = [
  {
    id: "binance",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    description: "",
    url: "https://www.binance.com/",
    image:
      "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: 390182.2290034726,
    trade_volume_24h_btc_normalized: 247999.01763899473,
  },
  {
    id: "gdax",
    name: "Coinbase Exchange",
    year_established: 2012,
    country: "United States",
    description: "",
    url: "https://www.coinbase.com",
    image:
      "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 2,
    trade_volume_24h_btc: 43208.89121506847,
    trade_volume_24h_btc_normalized: 43208.89121506847,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <Button disabled={true}>Página Anterior</Button>
          <Button>Próxima Página</Button>
        </Wrapper>
        <Input placeholder="Filtre por nome" />
        <CoinList coinList={coinList} />
      </main>
    </>
  );
}
