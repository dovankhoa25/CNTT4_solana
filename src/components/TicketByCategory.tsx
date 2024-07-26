
import { MusicImage } from './icon/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'



const TicketListByCategory = ( cateID:any ) => {
    const { data: tickets } = useQuery({
        queryKey: ['TICKET'],
        queryFn: async () => {
            const res = await axios.get(`http://127.0.0.1:8000/api/tickets-by-category/${cateID}`)
            return res.data
        }
    })
    return (
        <div>
            <div className="my-6">
                <div className="flex justify-between mb-2">
                    <h2 className="font-bold text-xl text-white">
                       {/* {cateID} */}
                    </h2>
                    <h3 className="text-lg text-gray-400">
                        View more
                        <FontAwesomeIcon icon={faArrowCircleRight} className='ml-1' />

                    </h3>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {tickets?.map((ticket: any) => (

                        // <tr
                        //     key={ticket._id}
                        //     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        // >
                            
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.name}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.ngayphathanh}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.ngayketthuc}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.diachi}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.giatien}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.nguoitochuc}</p>
                        //     </th>
                        //     <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        //         <p className="inline-block">{ticket.noitochuc}</p>
                        //     </th>

                        //     <th className="px-6 py-4">
                        //         <div className="dropdown dropdown-hover">
                        //             <button className='w-[70px] h-[40px] bg-yellow-600 text-white rounded hover:opacity-60'>
                        //                 <Link to={`/admin/category/edit/${ticket._id}`}>Sửa</Link>
                        //             </button>
                        //         </div>
                        //     </th>

                        // </tr>

                        <div className="" key={ticket._id}>
                            <Link to="/detail/${ticket._id}"><img src={ticket.image} alt="" className="w-full rounded-xl" /></Link>
                            <h3 className="font-bold text-sm mt-2 text-white">{ticket.name}</h3>
                            <p className="text-[#2DC275] my-2 font-bold">{ticket.price}</p>
                            <span className="text-white">
                                <FontAwesomeIcon icon={faCakeCandles} className='mr-1' />
                                19 Jul, 2024
                            </span>
                        </div>

                    ))}

                    
                </div>
            </div>
        </div>
    )
}

export default TicketListByCategory
