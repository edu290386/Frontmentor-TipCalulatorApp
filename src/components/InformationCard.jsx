

const InformationCard = () => {
  return (
    <section className='w-[375px] p-6 flex flex-col items-center gap-y-3 bg-white'>
        <div className="bg-[#0c494c] rounded-xl p-6 w-full">
            <article className="w-full flex justify-between">
                <div>
                    <div className="text-white font-semibold ">Tip Amount</div>
                    <p className="text-gray-400 text-xs font-semibold">/ person</p>
                </div>
                <h2 className="text-[#30c1ad] text-2xl font-bold">$4.27</h2>
            </article>
            <article className="w-full flex justify-between ">
                <div>
                    <div className="text-white font-semibold ">Total</div>
                    <p className="text-gray-400 text-xs font-semibold">/ person</p>
                </div>
                <h2 className="text-[#30c1ad] text-2xl font-bold">$32.79</h2>
            </article>
            <button className="bg-[#30c1ad] text-[#0c494c] text-lg mt-1 font-extrabold w-full py-1 rounded-lg">RESET</button>
        </div>
    </section>
  )
}

export default InformationCard