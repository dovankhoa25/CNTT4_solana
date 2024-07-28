import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BannerDetail, BannerEvent, BannerFestival } from "../components/icon/image"
import { faCakeCandles, faLocationDot } from "@fortawesome/free-solid-svg-icons"
// import { introduction,toggleButton } from "../components/icon/toggleButton"
import  { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    //Thu gọn giới thiệu
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    //GET theo ID
    const { id } = useParams();
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/ticket/detail/${id}`);
                setTickets(response.data.tickets);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };
        fetchTickets();
    }, [id]);


  return (
    <div>
        {tickets?.map((ticket:any) =>(
            <div className="grid grid-cols-[40%,1fr]" key={ticket.id}>
                <div className="bg-[#38383D] p-4 rounded-xl">
                    <div className="min-h-[70%] border-b border-solid border-white">
                        <h1 className="text-xl text-white font-bold">{ticket.name}</h1>
                        <p className="text-sm text-[#2DC275] font-bold my-2">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1' />
                            Thời gian bắt đầu :{ticket.ngayphathanh}
                        </p>
                        <p className="text-sm text-[#2DC275] font-bold my-2">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1' />
                            Thời gian kết thúc :{ticket.ngayketthuc}
                        </p>
                        <p className="text-sm text-[#2DC275] font-bold my-2">
                            <FontAwesomeIcon icon={faLocationDot} className='mr-1' />
                           Nơi tổ chức: {ticket.noitochuc}
                        </p>
                    </div>
                    <div className="my-4">
                        <h3 className="text-white text-lg font-bold">Từ <a href="" className="text-[#2DC275] text-lg font-bold">{ticket.giatien}</a></h3>
                        <button className="w-full my-2 bg-[#2DC275] py-1 rounded-sm text-white font-bold hover:bg-white hover:text-black">Mua vé ngay</button>
                    </div>
                </div>
                <div className="">
                    <img src={BannerDetail} alt="" className="w-full rounded-xl" />
                </div>
            </div>
        ))}
            
            {/* End Banner */}
        {tickets?.map((ticket:any)=>(
            <div className="grid grid-cols-[70%,1fr] gap-6 px-24 my-6 bg-[#F5F7FC]" key={ticket.id}>
                <div className="">
                    <div className="bg-white rounded-lg my-4 p-2 ">
                        <div className="border-b border-solid border-gray-300 py-2 font-bold">
                            <h1>Giới thiệu</h1>
                        </div>
                        <div className={`my-4 introduction ${isCollapsed ? 'collapsed' : ''}`}>
                            <h2 className="text-center font-bold my-4">{ticket.name}</h2>
                            {!isCollapsed && (
                                <p>
                                    {ticket.mota}
                                </p>
                            )}
                            <img src={BannerFestival} alt="" />
                        </div>
                        <button className="toggle-button rounded" onClick={handleToggle}>
                            {isCollapsed ? 'Xem thêm' : 'Thu gọn'}
                        </button>
                    </div>
                    <div className="border-b border-solid border-black p-2">
                        <h1 className="font-bold text-lg">Thông tin vé</h1>
                    </div>
                    <div className="ticketing-interface" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <h3 className="text-left font-bold my-2">Loại vé</h3>
                            <p className="text-left text-sm">{ticket.cateID}</p>
                            <h3 className="text-left font-bold my-2">Thời gian bắt đầu</h3>
                            <p className="text-left text-sm">{ticket.ngayphathanh}</p>
                            <h3 className="text-left font-bold my-2">Thời gian kết thúc</h3>
                            <p className="text-left text-sm">{ticket.ngayketthuc}</p>
                        </div>
                        <div>
                            <h3 className="text-left font-bold my-2">Ban Tổ Chức</h3>
                            <p className="text-left text-sm">{ticket.nguoitochuc}</p>
                            <h3 className="text-left font-bold my-2">Nơi tổ chức</h3>
                            <p className="text-left text-sm">{ticket.noitochuc}</p>
                            <h3 className="text-left font-bold my-2">Địa chỉ</h3>
                            <p className="text-left text-sm">{ticket.diachi}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg my-2 p-2 ">
                        
                        
                    </div>
                </div>
                <div className="bg-[#F5F7FC] max-h-[70%] my-4">
                    <img src={BannerEvent} alt="" className=" rounded-xl" />
                </div>
            </div>
        ))}   
    </div>
  )
}

export default Detail
