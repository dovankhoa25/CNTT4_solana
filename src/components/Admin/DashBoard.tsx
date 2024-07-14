import { useWeb3React } from "@web3-react/core";
import { Link, Outlet } from "react-router-dom";
import connectors from "../../connect/connectors";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faImage, faSliders } from "@fortawesome/free-solid-svg-icons";

const DashBoard = () => {
  const { connector, hooks } = useWeb3React();
    return (
      <div>
        <div className="profile-page-wrapper w-full">
          <div className="">
            <div className="">
                <div className="flex justify-between border-b-2 bg-gray-100 border-solid border-gray-200 p-6 shadow-sm  fixed w-full z-60">
                    <h1 className="text-black text-3xl">
                        <Link to='/'>TICKETBOX</Link>
                    </h1>
                    <button className=" border border-solid  border-gray-400 text-gray-300 p-1 bg-[#1c243e] rounded-md hover:opacity-70">
                        <Card connector={connector} hooks={hooks} name='phantom' />
                        <h3></h3>
                        </button>
                </div>
              <div className="w-full bg-white px-10 py-24">
                <div className="title-area w-full flex justify-between items-center fixed">
                  <h1 className="text-[22px] font-bold text-qblack ">
                    Your Dashboard
                  </h1>
                </div>
                <div className="profile-wrapper w-full flex space-x-10 mt-[3.5rem]">
                  <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)] ">
                    <div className="flex flex-col space-y-10 fixed h-screen overflow-y-auto no-scrollbar">
                      <div className="item group">
                        <Link to="/admin">
                          <div className="flex space-x-3 items-center text-qgray hover:text-red-500">
                            <span>
                              <FontAwesomeIcon icon={faHouse} />
                            </span>
                            <span className=" font-normal text-base">
                              Dashboard
                            </span>
                          </div>
                        </Link>
                      </div>
  
                      <div className="item group">
                        <Link to="nft">
                          <div className="flex space-x-3 items-center text-qgray hover:text-red-500">
                            <span>
                            <FontAwesomeIcon icon={faSliders} />
                            </span>
                            <span className=" font-normal text-base">
                              NFT
                            </span>
                          </div>
                        </Link>
                      </div>

                      <div className="item group">
                        <Link to="collection">
                          <div className="flex space-x-3 items-center text-qgray hover:text-red-500">
                            <span>
                            <FontAwesomeIcon icon={faImage} />
                            </span>
                            <span className=" font-normal text-base">
                              Collection
                            </span>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                  <div className="flex-1">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashBoard;