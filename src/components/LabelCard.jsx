import InputCard from './InputCard'
import InformationCard from './InformationCard'

const LabelCard = () => {
  return (
    <div className='bg-[#c4e3e7] h-[100px] tracking-widest'>
        <div className='text-3xl text-white text-center'>
            <div>SPLI</div>
            <div>TTER</div>
        </div>
        <div>
            <InputCard />
            <InformationCard />
        </div>
        
    </div>
  )
}

export default LabelCard