import InputCard from './InputCard'
import InformationCard from './InformationCard'

const LabelCard = () => {
  return (
    <div className='w-[375px] font-space-mono bg-white   tracking-widest '>
        <div className='text-3xl text-[#0c494c] text-center h-[60px] bg-[#c4e3e7]'>
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