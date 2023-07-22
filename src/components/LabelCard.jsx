import InputCard from './InputCard'
import InformationCard from './InformationCard'

const LabelCard = () => {
  return (
    <div className='w-[375px] bg-[#c4e3e7] tracking-widest '>
        <div className='text-3xl text-[#0c494c] text-center h-[100px]'>
            <div>SPLI</div>
            <div>TTER</div>
        </div>
        <div className=''>
            <InputCard />
            <InformationCard />
        </div>
        
    </div>
  )
}

export default LabelCard