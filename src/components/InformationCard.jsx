import { useEffect, useState } from "react";

const InformationCard = ({ values, setValues }) => {
  const [money, setMoney] = useState(0);
  const [moneyTotal, setMoneyTotal] = useState(0);
  console.log(values)  

  useEffect(() => {
    if (
      values.amount &&
      values.people &&
      (values.percentage || values.custom)
    ) {
      const calculateTip =
        (Number(values.amount) * Number(values.custom || values.percentage)) /
        100 /
        Number(values.people);

      const calculateTotal =
        Number(values.amount) / Number(values.people) + calculateTip;

      setMoney(calculateTip.toFixed(2));
      setMoneyTotal(calculateTotal.toFixed(2));
    }
  }, [values]);

  const resetCalculator = () => {
    setValues({});
    setMoney(0);
    setMoneyTotal(0);
  };

  return (
    <section className="w-[375px] px-8 py-4 flex flex-col items-center gap-y-3 bg-white md:py-8 md:rounded-r-2xl md:pl-0">
      <div className="p-6 bg-[#0c494c] rounded-2xl w-full md:h-full md:flex md:flex-col md:justify-between">
        <div className="   pt-4  ">
          <article className="w-full flex justify-between pb-7">
            <div>
              <div className="text-white font-semibold ">Tip Amount</div>
              <p className="text-gray-400 text-xs font-semibold">/ person</p>
            </div>
            <h2 className="text-[#30c1ad] text-3xl font-bold">${money}</h2>
          </article>
          <article className="w-full flex justify-between pb-7">
            <div>
              <div className="text-white font-semibold ">Total</div>
              <p className="text-gray-400 text-xs font-semibold">/ person</p>
            </div>
            <h2 className="text-[#30c1ad] text-3xl font-bold">${moneyTotal}</h2>
          </article>
        </div>
        <button
          onClick={resetCalculator}
          className="bg-[#30c1ad] text-[#0c494c] text-xl mt-1 font-extrabold w-full py-3 rounded-lg"
        >
          RESET
        </button>
      </div>
    </section>
  );
};

export default InformationCard;
