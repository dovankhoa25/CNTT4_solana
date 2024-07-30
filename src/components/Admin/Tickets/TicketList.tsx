import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDate, formatPrice } from "../../../utils/format";

const TicketList = () => {
    const { data: tickets } = useQuery({
        queryKey: ['TICKET'],
        queryFn: async() => {
            const res = await axios.get('http://127.0.0.1:8000/api/ticket/list')
            return res.data
        }
    })

  return (
    <>
      <div>Danh sách vé</div>
      <div className="my-8 flex justify-between">
        <Link to={`/admin/ticket/add`}
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tạo Vé
        </Link>
      </div>
      
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td scope="col" className="px-6 py-3">STT</td>
              <td scope="col" className="px-6 py-3">
                Tên Vé
              </td>
              <td scope="col" className="px-6 py-3">Ngày Phát Hành</td>
              <td scope="col" className="px-6 py-3">Ngày Kết Thúc</td>
              <td scope="col" className="px-6 py-3">Ảnh</td>
              <td scope="col" className="px-6 py-3">Địa Chỉ</td>
              <td scope="col" className="px-6 py-3">Giá</td>
              {/* <td scope="col" className="px-6 py-3">Người Tổ Chức</td> */}
              <td scope="col" className="px-6 py-3">Nơi Tổ Chức</td>
              <td scope="col" className="px-6 py-3">
                action
              </td>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket: any, index: any) => (
              <tr
                key={ticket._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th className="px-6 py-4">{index + 1}</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{ticket.name}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{formatDate(ticket.ngayphathanh)}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{formatDate(ticket.ngayphathanh)}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={ticket.urlimage} className="inline-block" />
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{ticket.diachi}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{formatPrice(ticket.giatien)} SOL</p>
                </th>
                {/* <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{ticket.nguoitochuc}</p>
                </th> */}
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p className="inline-block">{ticket.noitochuc}</p>
                </th>
                
                <th className="px-6 py-4">
                  <div className="dropdown dropdown-hover">
                        <button className='w-[70px] h-[40px] bg-yellow-600 text-white rounded hover:opacity-60'>
                        <Link to={`/admin/category/edit/${ticket._id}`}>Sửa</Link>
                        </button>
                  </div>
                </th>
               
              </tr>
            ))
             }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketList;
