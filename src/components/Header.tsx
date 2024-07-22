import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { Wallet } from '../connect/wallet';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Header = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const mutation = useMutation({
        mutationFn: async(wallet) => {
            const res = await axios.post('http://localhost:3000/getWallet', wallet)
            return res.data
        },
        onSuccess: () => {
            alert('Thành công!')
        }
    })    
    const onSubmit = (wallet: any) => {
        mutation.mutate(wallet)
    }



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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" {...register('address', { required: true })} />
                            <button><Wallet /></button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
