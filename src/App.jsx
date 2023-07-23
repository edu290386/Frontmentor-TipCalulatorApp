
import './App.css'
import InputCard from './components/InputCard'

import LabelCard from './components/LabelCard'

function App() {


  return (
    <>
      <div className='flex justify-center items-center bg-[#c4e3e7] md:h-screen'>
        <section className='font-space-mono flex flex-col  items-center w-full '>
            <div className=''>
              <div className=' '>
                <LabelCard />
              </div>
            <div className=' '>
              <InputCard className=''/>
        
            </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default App
