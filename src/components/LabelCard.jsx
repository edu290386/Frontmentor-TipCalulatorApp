import InputCard from './InputCard'
import InformationCard from './InformationCard'

const LabelCard = () => {
  return (
    <div className='w-[375px] font-space-mono   '>
        <div className=' text-[#0c494c]   bg-[#c4e3e7]'>
            <div className='text-center tracking-widest text-3xl'>
              <div>SPLI</div>
              <div>TTER</div>
            </div>
            <InputCard />
        </div>
        <div className='bg-white'>
            <InformationCard />
        </div>
        
    </div>
  )
}

export default LabelCard