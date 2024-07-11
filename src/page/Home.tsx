import Banner from '../components/Banner'
import Music from '../components/Music'
import Sport from '../components/Sport'
import Theaters from '../components/Theaters'

const Home = () => {
  return (
    <div className='w-full'>
        <Banner />
        <Music/>
        <Theaters/>
        <Sport/>
    </div>
  )
}

export default Home
