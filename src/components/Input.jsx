import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
}) {
  const amountId = useId();

  return (
    <div className="input bg-white flex justify-between items-center mb-4 p-4 w-[100%]">
      <div>
        <label className="block text-slate-500" htmlFor={amountId}>
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          className="outline-none bg-slate-100 px-2 py-1"
          placeholder="0"
          value={amount<=0 ? "": amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <label className="block text-slate-500">Currency Type</label>
        <select
          id="select-option"
          className="bg-slate-100 px-2 py-1 w-full"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option
              // Always add key while looping in react to enhance performance
              key={currency}
              value={currency}
            >{currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
