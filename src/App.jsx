import { useState, useEffect } from "react";
import "./index.css";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    const tempAmount = amount;
    setTimeout(() => {
      setAmount(convertedAmount);
      setConvertedAmount(tempAmount);
    }, 0);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="container w-full h-screen bg-blue-900 flex justify-center items-center"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/818517624/photo/world-currency-exchange-table-graph.jpg?s=612x612&w=0&k=20&c=KD_P5_XoOwpAQhBYa4nBqYAPceFXNzxxr25ZREKz9VQ=)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          className="currency-converter flex flex-col justify-center items-center bg-slate-400 rounded-md w-[40%] p-8"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <h1 className="font-roboto text-center text-[#001F54] text-3xl font-bold mb-4">
            ConvertXpert
          </h1>
          <div className="relative w-full">
            <Input
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currency={from}
              onCurrencyChange={(newCurr) => setFrom(newCurr)}
              currencyOptions={currencyOptions}
            />
            <button
              className="absolute bg-blue-700 px-6 py-2 rounded-md top-[39%] left-[45%] text-white"
              onClick={swap}
            >
              Swap
            </button>
            <Input
              label="To"
              currencyOptions={currencyOptions}
              amount={convertedAmount}
              onAmountChange={(convertedAmount) =>
                setConvertedAmount(convertedAmount)
              }
              currency={to}
              onCurrencyChange={(newCurr) => setTo(newCurr)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#0f254c] text-white font-bold text-2xl"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
