

const InputCard = () => {
  return (
    <div className="bg-[#c4e3e7]">
      <div className='bg-white h-[350px] w-[375px] pt-5 py-2 px-8 rounded-t-2xl text-sm text-[#0c494c] font-semibold'>
        <h2 className="my-2 ">Bill</h2>
        <input type="tel" className="w-full py-2 text-xl text-right font-bold rounded-lg text-[#0c494c] bg-[#f3f8fb] " placeholder="$"/>
        <h2 className="my-2 pt-6">Select Tip %</h2>
        <div className="grid grid-cols-2 gap-4 text-white text-center text-lg font-semibold  ">
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold">5%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold">10%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold">15%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold">25%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold"> 50%</div>
          <input type="tel" className="text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-16" placeholder="Custom"/>
        </div>
        <h2 className="my-2">Number of People</h2>
        <input type="tel" className="w-full py-1 text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-48" placeholder=""/>
      </div>
    </div>
    
  )
}

export default InputCard