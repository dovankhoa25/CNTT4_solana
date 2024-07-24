
import { MusicImage } from './icon/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { useEffect, useState } from 'react'

const TicketListByCategory = (category: any) => {
    const { data: tickets } = useQuery({
        queryKey: ['TICKET'],
        queryFn: async () => {
            const res = await axios.get(`http://127.0.0.1:8000/api/ticket/${category}`)
            return res.data
        }
    })
    return (
        <div>
            <div className="my-6">
                <div className="flex justify-between mb-2">
                    <h2 className="font-bold text-xl text-white">
                        {category}
                    </h2>
                    <h3 className="text-lg text-gray-400">
                        View more
                        <FontAwesomeIcon icon={faArrowCircleRight} className='ml-1' />

                    </h3>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {tickets?.map((ticket: any,index:any) => (
                        <div className="" key={ticket._id}>
                            {/* <Link to="/detail/${ticket._id}"><img src={MusicImage} alt="" className="w-full rounded-xl" /></Link>
                            <h3 className="font-bold text-sm mt-2 text-white">{ticket.name}</h3>
                            <p className="text-[#2DC275] my-2 font-bold">{ticket.price}</p>
                            <span className="text-white">
                                <FontAwesomeIcon icon={faCakeCandles} className='mr-1' />
                                19 Jul, 2024
                            </span> */}
                            <th className="px-6 py-4">{index + 1}</th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.name}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.ngayphathanh}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.ngayketthuc}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.diachi}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.giatien}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.nguoitochuc}</p>
                            </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p className="inline-block">{ticket.noitochuc}</p>
                            </th>
                        </div>

                    ))}

                    {/* <div className="">
                        <Link to="detail"><img src={MusicImage} alt="" className="w-full rounded-xl" /></Link>

                        <h3 className="font-bold text-sm mt-2 text-white">LULULOLA SHOW HOÀNG DŨNG KM LÂM PHÚC & MR BOTT BAND | ĐÔI LỜI TÌNH CA</h3>
                        <p className="text-[#2DC275] my-2 font-bold">From 450.000đ</p>
                        <span className="text-white">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1'/>
                            19 Jul, 2024
                        </span>
                    </div>
                    <div className="">
                        <Link to="detail"><img src={MusicImage} alt="" className="w-full rounded-xl" /></Link>

                        <h3 className="font-bold text-sm mt-2 text-white">LULULOLA SHOW HOÀNG DŨNG KM LÂM PHÚC & MR BOTT BAND | ĐÔI LỜI TÌNH CA</h3>
                        <p className="text-[#2DC275] my-2 font-bold">From 450.000đ</p>
                         <span className="text-white">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1'/>
                            19 Jul, 2024
                        </span>
                    </div>
                    <div className="">
                        <Link to="detail"><img src={MusicImage} alt="" className="w-full rounded-xl" /></Link>
                        <h3 className="font-bold text-sm mt-2 text-white">LULULOLA SHOW HOÀNG DŨNG KM LÂM PHÚC & MR BOTT BAND | ĐÔI LỜI TÌNH CA</h3>
                        <p className="text-[#2DC275] my-2 font-bold">From 450.000đ</p>
                         <span className="text-white">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1'/>
                            19 Jul, 2024
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TicketListByCategory
