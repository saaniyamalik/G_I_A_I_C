"use client";
import { useState, useEffect } from "react";
export default function CoinMarket() {
    const API_KEY = "2d1e3e6d1ccff43554175c01"
  const [data, setData] = useState<any>(null);


  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)

      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);

      });
  }, []);


  return (
    <div className="container">
      <h1>Crypto Currency Market</h1>

      <p><span>BTC :</span>  {data?.rates?.BTC}</p>
      <p><span>BCH :</span>  {data?.rates?.BCH}</p>
      <p><span>BSV :</span>  {data?.rates?.BSV}</p>
      <p><span>BNB :</span>  {data?.rates?.BNB}</p>
      <p><span>SOL: </span>  {data?.rates?.SOL}</p>
      <p><span>LTC: </span>  {data?.rates?.LTC}</p>
      <p><span>ETC :</span>  {data?.rates?.ETC}</p>
      <p><span>ETH :</span>  {data?.rates?.ETH}</p>
      <p><span>USDT:</span>  {data?.rates?.USDT}</p>
      <p><span>ZEC :</span>  {data?.rates?.ZEC}</p>

    </div>
  );
}