

const InformationCard = () => {
  return (
    <section className='font-space-mono bg-[#0c494c] h-[200px] flex flex-col items-center rounded-lg border-black p-5'>
        <article className="w-full flex justify-between">
            <div>
                <div className="text-white font-semibold text-sm">Tip Amount</div>
                <p className="text-gray-400 text-xs">/ person</p>
            </div>
            <h2 className="text-[#30c1ad]">$4.27</h2>
        </article>
        <article className="w-full flex justify-between">
            <div>
                <div className="text-white font-semibold text-sm">Total</div>
                <p className="text-gray-400 text-xs">/ person</p>
            </div>
            <h2 className="text-[#30c1ad]">$32.79</h2>
        </article>
        <button className="bg-[#30c1ad] text-[#0c494c] px-28 py-3 rounded-lg">RESET</button>
    </section>
  )
}

export default InformationCard