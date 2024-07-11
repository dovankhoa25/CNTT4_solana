import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWeb3React } from '@web3-react/core';
import { Link, NavLink } from 'react-router-dom'
import Card from './Card';

const Header = () => {
  const { connector, hooks } = useWeb3React();
  return (
    <div>
      <div className="header">
            <div className="bg-[#2DC275] grid grid-cols-3 py-8 px-24">
                <div>
                    <h1 className="text-white text-3xl">
                        <Link to='/'>TICKETBOX</Link>
                    </h1>
                </div>
                <div className="flex">
                    <input type="search" placeholder="Vui lòng nhập tìm kiếm..." className="p-2 w-[70%] rounded-l border border-gray-300 focus:outline-none" />
                    <button className="bg-white p-2 rounded-r border border-gray-300 border-l-0 hover:bg-[#2DC275] hover:text-white">
                        <Link to="#">Search</Link>
                    </button>
                </div>
                <div className="flex items-center justify-end ">
                    <button className="border border-solid border-white rounded-2xl p-2 mr-8 text-white hover:bg-white hover:text-black">Create Event</button>
                    <h2 className="cursor-pointer text-white">
                        <FontAwesomeIcon icon={faHourglass} className='text-white mr-1'/>
                       <Link to="#">My Tickets</Link>
                    </h2>
                </div>
            </div>
            <div className="bg-black grid grid-cols-2 py-4 px-24">
                <div>
                    <ul>
                        <li className="text-white px-4 inline-block hover:text-[#2DC275]"><NavLink to="music">Music</NavLink></li>
                        <li className="text-white px-4 inline-block hover:text-[#2DC275]"><NavLink to="theaters">Theaters & Art</NavLink></li>
                        <li className="text-white px-4 inline-block hover:text-[#2DC275]"><NavLink to="sport">Sport</NavLink></li>
                        <li className="text-white px-4 inline-block hover:text-[#2DC275]"><NavLink to="other">Others</NavLink></li>
                    </ul>
                </div>
                <div  className="text-right">
                    <button className=" border border-solid  border-gray-400 text-gray-300 p-1 bg-[#1c243e] rounded-md hover:opacity-70">
                        <Card connector={connector} hooks={hooks} name='phantom' />
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
