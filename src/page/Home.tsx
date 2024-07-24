import Banner from '../components/Banner'
import Music from '../components/Music'
import Sport from '../components/Sport'
import Theaters from '../components/Theaters'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import TicketListByCategory from '../components/TicketByCategory'

const Home = () => {
  const { data } = useQuery({
    queryKey: ['CATEGORY'],
    queryFn: async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/categories')
      return res.data
    }
  })
  return (
    <div className='w-full'>
        <Banner />
      {data?.map((category: any, index: number) => (
        <TicketListByCategory key={category._id} category={category.name} />
      ))}
        
        {/* <Theaters/>
        <Sport/> */}
    </div>
  )
}

export default Home
