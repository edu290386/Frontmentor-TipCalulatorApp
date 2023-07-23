

const InformationCard = () => {
  return (
    
    <section className='w-[375px] px-8 py-4 flex flex-col items-center gap-y-3 bg-white md:py-8 md:rounded-r-2xl'>
        <div className="bg-[#0c494c] rounded-2xl p-6 pt-9 w-full md:h-full">
            <article className="w-full flex justify-between pb-7">
                <div>
                    <div className="text-white font-semibold ">Tip Amount</div>
                    <p className="text-gray-400 text-xs font-semibold">/ person</p>
                </div>
                <h2 className="text-[#30c1ad] text-3xl font-bold">$4.27</h2>
            </article>
            <article className="w-full flex justify-between pb-7">
                <div>
                    <div className="text-white font-semibold ">Total</div>
                    <p className="text-gray-400 text-xs font-semibold">/ person</p>
                </div>
                <h2 className="text-[#30c1ad] text-3xl font-bold">$32.79</h2>
            </article>
            <button className="bg-[#30c1ad] text-[#0c494c] text-xl mt-1 font-extrabold w-full py-3 rounded-lg">RESET</button>
        </div>
    </section>
  )
}

export default InformationCard