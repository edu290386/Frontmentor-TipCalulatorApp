

const InputCard = () => {
  return (
    <div className='bg-white h-[320px] rounded-t-2xl p-6'>
      <h2>Bill</h2>
      <input type="tel" placeholder="$"/>
      <h2>Select Tip %</h2>
      <div className="grid grid-cols-2 gap-2 text-white text-center text-2xl font-bold  ">
        <div className="bg-[#0c494c] py-1 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">5%</div>
        <div className="bg-[#0c494c] py-1 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">10%</div>
        <div className="bg-[#0c494c] py-1 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">15%</div>
        <div className="bg-[#0c494c] py-1 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">25%</div>
        <div className="bg-[#0c494c] py-1 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold"> 50%</div>
        <input type="tel" className="text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-16" placeholder="Custom"/>
      </div>
      <h2 className="pt-2 pb-2">Number of People</h2>
      <input type="tel" className="w-full py-1 text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-48" placeholder=""/>
    </div>
  )
}

export default InputCard