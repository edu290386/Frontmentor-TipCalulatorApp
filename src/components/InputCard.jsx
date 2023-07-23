import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import InformationCard from './InformationCard'
import { useState } from 'react'

const InputCard = () => {
  const percentages = [5,10,15,25,50]
  const [values, setValues] = useState({}) 

  const handleChange = (e) => {
    let {name, value} = e.target
    if(!isNaN(value)){
      setValues({...values, [name]:value})
    }
  

    
  }

  const selectTip = (value) => {
    setValues({...values, ["percentage"]:value})
  }

  console.log(values)

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="bg-[#c4e3e7]">
        <div className='bg-white w-[375px] pt-6 py-4 px-8 rounded-t-2xl text-sm text-[#0c494c] font-semibold md:rounded-2xl md:rounded-r-none md:py-8'>
          <h2 className="my-2 ">Bill</h2>
          <div className='relative'>
            <img src={dollar} className='absolute top-4 left-4' alt="" />
            <input type="tel" onChange={handleChange} name="amount" value={values.amount} className="w-full py-2 text-2xl text-right font-bold rounded-lg text-[#0c494c] bg-[#f3f8fb] pr-4 focus:outline-[#30c1ad]" placeholder="0"/>
          </div>
          <h2 className="my-5 pt-3 md:my-2">Select Tip %</h2>
          <div className="grid grid-cols-2 gap-4 text-white text-center text-2xl font-semibold md:grid-cols-3 ">
            {
              percentages.map((percentage, index) => (
                <button onClick={() => selectTip(percentage)} key={index} name="percentage" className={values.percentage == percentage ? "bg-[#30c1ad] text-[#0c494c] font-semibold py-2 rounded-lg" : "bg-[#0c494c] py-2 rounded-lg"} >{percentage}%</button>
              ))
            }
            <input type="tel" onChange={handleChange} name="custom" value={values.custom || ''} className="text-xl rounded-lg text-[#0c494c] bg-[#f2f8fb] focus:outline-[#30c1ad] text-center hover:cursor-pointer " placeholder="Custom"/>
          </div>
          <h2 className="my-2 pt-4 ">Number of People</h2>
          <div className='relative'>
            <img src={person} className='absolute top-4 left-4' alt="" />
            <input type="tel" onChange={handleChange} name="people" value={values.people || ''} className="w-full py-2 text-2xl text-right font-bold rounded-lg text-[#0c494c] bg-[#f3f8fb] pr-4 focus:outline-[#30c1ad]" placeholder="0"/>
          </div>
        </div>
      </div>
      <InformationCard />
    </div>
    
    
  )
}

export default InputCard