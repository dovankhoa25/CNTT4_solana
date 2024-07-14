import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BannerDetail, BannerEvent, BannerFestival } from "../components/icon/image"
import { faCakeCandles, faLocationDot } from "@fortawesome/free-solid-svg-icons"
// import { introduction,toggleButton } from "../components/icon/toggleButton"
import  { useState } from 'react';

const Detail = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };
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
                            <h1>Giới thiệu</h1>
                            </div>
                      <div className={`my-4 introduction ${isCollapsed ? 'collapsed' : ''}`}>
                          <h2 className="text-center font-bold my-4">Liveshow Lân Nhã KM Bùi Lan Hương</h2>
                          {!isCollapsed && (
                              <p>
                                  Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.
                              </p>
                          )}
                          <img src={BannerFestival} alt="" />
                      </div>
                      <button className="toggle-button rounded" onClick={handleToggle}>
                          {isCollapsed ? 'Xem thêm' : 'Thu gọn'}
                      </button>
                        </div>

                        {/* <div className="bg-[#27272A] min-h-[120px] rounded-lg ">
                            <div className="border-b border-solid border-black p-2">
                                <h1 className=" text-white font-bold text-lg">Thông tin vé</h1>
                            </div>
                            <div className="flex">
                                <select className="w-full bg-[#27272A]  text-white font-bold ">
                                    <option value="">16:00-19:00, 14 tháng 7</option>
                                    <option value="">VIP</option>
                                    <option value="">Svip</option>
                                </select>
                            </div>
                        </div> */}
                    {/* <button className="buy-now">Mua vé ngay</button> */}
                  <div className="border-b border-solid border-black p-2">
                      <h1 className="font-bold text-lg">Thông tin vé</h1>
                  </div>
                  <div className="ticketing-interface">
                      <div className="pricing-section">
                          <div className="pricing-option">
                              <h3>VVIP</h3>
                              <p className="price">1,000,000đ</p>
                              <button className="buy-now">Mua vé ngay</button>
                          </div>
                          <div className="pricing-option">
                              <h3>VIP</h3>
                              <p className="price">500,000đ</p>
                              <button className="buy-now">Mua vé ngay</button>
                          </div>
                          <div className="pricing-option">
                              <h3>Thường</h3>
                              <p className="price">200,000đ</p>
                              <button className="buy-now">Mua vé ngay</button>
                          </div>
                          <div className="pricing-option">
                              <h3>Lẻ</h3>
                              <p className="price">100,000đ</p>
                              <button className="buy-now">Mua vé ngay</button>
                          </div>
                      </div>

                      <div className="time-slots">
                            <h2>Thời gian</h2>
                          <select className="time-slot-select text-black rounded-sm w-full">
                              <option value="">16:00 - 19:00, 14 Tháng 07, 2024</option>
                              <option value="">19:00 - 22:00, 20 Tháng 07, 2024</option>
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
