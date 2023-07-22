

const InputCard = () => {
  return (
    <div className='bg-white h-[350px] rounded-t-[40px] p-6'>
      <h2>Bill</h2>
      <input type="tel" placeholder="$"/>
      <h2>Select Tip %</h2>
      <div className="grid grid-cols-2 gap-4 text-white text-center text-2xl font-bold  ">
        <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">5%</div>
        <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">10%</div>
        <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">15%</div>
        <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold">25%</div>
        <div className="bg-[#0c494c] py-2 rounded-lg hover:bg-[#30c1ad] hover:text-[#0c494c] hover:font-bold"> 50%</div>
        <input type="tel" className="text-2xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-12" placeholder="Custom"/>
      </div>
      <h2 className="pt-4 pb-2">Number of People</h2>
      <input type="tel" className="w-full py-2 text-2xl rounded-lg text-[#0c494c] bg-[#f2f8fb] indent-48" placeholder=""/>
    </div>
  )
}

export default InputCard