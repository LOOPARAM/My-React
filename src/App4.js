import { useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

function App4() {
    const [loding, SetLoding] = useState(true);
    const [coins, SetCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        .then((json)=>{
            SetCoins(json);
            SetLoding(false);
        });
    },[]);
    return <div>
        <h1>Coins {loding ? "" : "(" + coins.length + ")" }</h1>
        {loding ? <strong>Loding ...</strong> : 
            <select>
                {coins.map((coin)=> (
                    <option key={coin.id}>
                        {coin.name} ( {coin.symbol} ): ${coin.quotes.USD.price} USD
                    </option>)
                )}
            </select>
        }
    </div>
}
//https://api.coinpaprika.com/v1/tickers
export default App4;
