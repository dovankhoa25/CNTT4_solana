import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BannerDetail, BannerEvent } from "../components/icon"
import { faCakeCandles, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Detail = () => {
  return (
    <div>
        {/*Banner */}
            <div className="grid grid-cols-[40%,1fr]">
               <div className="bg-[#38383D] p-4 rounded-xl">
                    <div className="min-h-[70%] border-b border-solid border-white">
                        <h1 className="text-xl text-white font-bold">Tình Bạn Diệu Kỳ - Only Friends Fanmeeting in VietNam</h1>
                        <p className="text-sm text-[#2DC275] font-bold my-2">
                            <FontAwesomeIcon icon={faCakeCandles} className='mr-1'/>
                            14:00 - 18:00, 06/07/2024
                            </p>
                        <p className="text-sm text-[#2DC275] font-bold">
                            <FontAwesomeIcon icon={faLocationDot} className='mr-1'/>
                            Nhà hát Hoà Bình
                            </p>
                    </div>
                    <div className="my-4">
                        <h3 className="text-white text-lg font-bold">Từ <a href="" className="text-[#2DC275] text-lg font-bold">2.000.000 đ</a></h3>
                        <button className="w-full my-2 bg-[#2DC275] py-1 rounded-sm text-white font-bold hover:bg-white hover:text-black">Mua vé ngay</button>
                    </div>
               </div>
               <div className="">
                <img src={BannerDetail} alt="" className="w-full rounded-xl" />
               </div>
            </div>
            {/* End Banner */}

            <div className="grid grid-cols-[70%,1fr] gap-6 px-24 my-6 bg-[#F5F7FC]">
                    <div className="">
                        <div className="bg-white rounded-lg my-4 p-2 ">
                            <div className="border-b border-solid border-gray-300 py-2 font-bold">
                                <h1>Về</h1>
                            </div>
                            <div className="my-4">
                                <h2 className="text-center font-bold my-4">Liveshow  Lân Nhã KM Bùi Lan Hương</h2>
                                <p>Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.</p>
                            </div>
                        </div>

                        <div className="bg-[#27272A] min-h-[120px] rounded-lg ">
                            <div className="border-b border-solid border-black p-2">
                                <h1 className=" text-white font-bold text-lg">Thông tin vé</h1>
                            </div>
                            <div className="">
                                <select className="w-full bg-[#27272A]  text-white font-bold">
                                    <option value="">---Chọn---</option>
                                    <option value="">BMW</option>
                                    <option value="">Car</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg my-4 p-2 ">
                            <div className="border-b border-solid border-gray-300 py-2 font-bold">
                                <h1>Người Tổ Chức</h1>
                            </div>
                            <div className="my-4">
                                <h2 className="text-left font-bold my-4">Cà phê Lululola</h2>
                                <p>Đường 3/4, Đồi Cà Ri Dê, Phường 3, Thành phố Đà Lạt</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F5F7FC] max-h-[70%] my-4">
                        <img src={BannerEvent} alt="" className=" rounded-xl" />
                    </div>
                </div>
    </div>
  )
}

export default Detail
