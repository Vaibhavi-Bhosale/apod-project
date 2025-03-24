
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [togglesidebar, setToggleSidebar] = useState(false);
  const API_KEY = import.meta.env.VITE_APOD_API_KEY
  const API_URL = import.meta.env.VITE_APOD_URL + `${API_KEY}`
  const [data, setData] = useState()
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const handelToggleSidebar = () => {
    setToggleSidebar(!togglesidebar);
  }


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + `&date=${date}`)
        setData(response.data)
      }
      catch (err) {
        console.log("Error in Fetching Data : ", err)
      }
    }

    fetchData();



  }, [date])




  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Loading...</h2>
      </div>
    );
  }
  return (
    <>

      <div className='relative w-full '>
        <Main data={data} />


        {togglesidebar ?
          <Sidebar handelToggleSidebar={handelToggleSidebar} data={data} />
          : <Footer handelToggleSidebar={handelToggleSidebar} data={data} date={date} setDate={setDate} />}



      </div>
    </>

  )
}

export default App
