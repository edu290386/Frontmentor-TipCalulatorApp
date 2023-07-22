
import './App.css'
import InputCard from './components/InputCard'
import InformationCard from './components/InformationCard'
import LabelCard from './components/LabelCard'

function App() {


  return (
    <>
      <div className='h-screen flex justify-center items-center bg-blue-300 '>
        <section className='font-space-mono flex flex-col  items-center  bg-green-400 w-full '>
            <div className='border border-black'>
              <div className=' '>
                <LabelCard />
              </div>
            <div className='flex flex-col md:flex-row'>
              <InputCard className=''/>
              <InformationCard className=''/>
            </div>
            </div>
        </section>
      </div>
      

    </>
  )
}

export default App
