

const InformationCard = () => {
  return (
    <section className=' bg-[#0c494c] h-[230px] flex flex-col items-center rounded-xl border-black p-4 pt-8 m-6 gap-y-6'>
        <article className="w-full flex justify-between">
            <div>
                <div className="text-white font-semibold ">Tip Amount</div>
                <p className="text-gray-400 text-xs font-semibold">/ person</p>
            </div>
            <h2 className="text-[#30c1ad] text-4xl font-bold">$4.27</h2>
        </article>
        <article className="w-full flex justify-between ">
            <div>
                <div className="text-white font-semibold ">Total</div>
                <p className="text-gray-400 text-xs font-semibold">/ person</p>
            </div>
            <h2 className="text-[#30c1ad] text-4xl font-bold">$32.79</h2>
        </article>
        <button className="bg-[#30c1ad] text-[#0c494c] text-xl mt-1 font-extrabold px-28 py-3 rounded-lg">RESET</button>
    </section>
  )
}

export default InformationCard