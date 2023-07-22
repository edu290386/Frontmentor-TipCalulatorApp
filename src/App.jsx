
import './App.css'
import InputCard from './components/InputCard'
import InformationCard from './components/InformationCard'
import LabelCard from './components/LabelCard'

function App() {


  return (
    <>
      <div className='flex justify-center items-center bg-blue-300 md:h-screen'>
        <section className='font-space-mono flex flex-col  items-center w-full '>
            <div className=''>
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
