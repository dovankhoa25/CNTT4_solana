
import { MusicImage } from './icon/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const props = {}
    

const TicketListByCategory = ({cateID}:any ) => {
    // console.log(cateid);
    // const { data: tickets } = useQuery({
    //     queryKey: ['TICKET'],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://127.0.0.1:8000/api/tickets-by-category/${cateid}`)
    //         return res.data
    //     }
    // })
    // const { cateID } = useParams();
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/tickets-by-category/${cateID}`);
                setTickets(response.data.tickets);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };
        fetchTickets();
    }, [cateID]);
    return (
      
        <div>
            <div className="my-6">
                <div className="flex justify-between mb-2">
                    <h2 className="font-bold text-xl text-white">
                       {cateID}
                    </h2>
                    <h3 className="text-lg text-gray-400">
                        View more
                        <FontAwesomeIcon icon={faArrowCircleRight} className='ml-1' />

                    </h3>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {tickets?.map((ticket: any) => (
                        <div className="" key={ticket.id}>
                            <Link to={`/detail/${ticket.id}`}><img src={ticket.urlimage} alt="" className="w-full rounded-xl" /></Link>
                            <h3 className="font-bold text-sm mt-2 text-white">{ticket.name}</h3>
                            <p className="text-[#2DC275] my-2 font-bold">{ticket.giatien}</p>
                            <span className="text-white">
                                <FontAwesomeIcon icon={faCakeCandles} className='mr-1' />
                                {ticket.mota}
                            </span>
                            
                        </div>
                       
                    ))}   
                </div>
            </div>
        </div>
    )
}


export default TicketListByCategory
