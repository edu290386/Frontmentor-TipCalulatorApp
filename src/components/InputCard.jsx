import dollar from '../assets/icon-dollar.svg'

const InputCard = () => {
  return (
    <div className="bg-[#c4e3e7]">
      <div className='bg-white w-[375px] pt-6 py-4 px-8 rounded-t-2xl text-sm text-[#0c494c] font-semibold md:rounded-2xl md:rounded-r-none md:py-8'>
        <h2 className="my-2 ">Bill</h2>
        <div className='relative'>
          <img src={dollar} className='absolute top-4 left-4' alt="" />
          <input type="tel" className="w-full py-2 text-2xl text-right font-bold rounded-lg text-[#0c494c] bg-[#f3f8fb] pr-4 focus:outline-[#30c1ad]" placeholder="0"/>
        </div>
        <h2 className="my-5 pt-3 md:my-2">Select Tip %</h2>
        <div className="grid grid-cols-2 gap-4 text-white text-center text-2xl font-semibold md:grid-cols-3 ">
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold hover:cursor-pointer ">5%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold hover:cursor-pointer ">10%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold hover:cursor-pointer ">15%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold hover:cursor-pointer ">25%</div>
          <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-semibold hover:cursor-pointer "> 50%</div>
          <input type="tel" className="text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] focus:outline-[#30c1ad] text-center hover:cursor-pointer " placeholder="Custom"/>
        </div>
        <h2 className="my-2 pt-4 ">Number of People</h2>
        <input type="tel" className="w-full py-2 text-2xl text-right font-bold rounded-lg text-[#0c494c] bg-[#f3f8fb] pr-4 focus:outline-[#30c1ad]" placeholder="0"/>
      </div>
    </div>
    
  )
}

export default InputCard