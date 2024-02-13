import { NavLink, useNavigate } from 'react-router-dom'
// components
import { Heading5 } from '../../components/common'
import { Login } from './login/login'
import { Register } from './register/register'
// icons
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

export const Auth = ({ to }) => {
  const navigate = useNavigate()

  const handleExit = () => {
    navigate('/')
  }

  return (
    <div className="w-full h-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center dark:bg-slate-900 bg-white">
      {/* <div className="bg-zinc-950 bg-opacity-25  inset-0 overflow-y-auto z-10"></div> */}
      <div className="dark:bg-slate-800 w-[500px] z-20 flex flex-col items-center px-[100px] py-[50px] absolute bg-white top-[30px]">
        <div className="absolute top-[11px] right-[12px] cursor-pointer">
          <IoCloseOutline size={25} color="#46A358" onClick={handleExit} />
        </div>
        <div className="flex items-center  gap-3">
          <NavLink
            to={'/login'}
            className={({ isActive }) =>
              isActive
                ? 'dark:text-white text-black text-xl font-medium font-cera-pro leading-none'
                : 'text-green text-xl font-medium font-cera-pro leading-none'
            }
          >
            Login
          </NavLink>
          <span className="dark:first-letter:text-white text-black text-lg font-medium font-cera-pro leading-none">
            |
          </span>
          <NavLink
            to={'/register'}
            className={({ isActive }) =>
              isActive
                ? 'dark:text-white text-black text-xl font-medium font-cera-pro leading-none'
                : 'text-green text-xl font-medium font-cera-pro leading-none'
            }
          >
            Register
          </NavLink>
        </div>
        {to ? <Login /> : <Register />}
        <div className="w-[100%] mt-[17px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[30%] h-[1px]  bg-[#e9e9e9]"></div>
            <Heading5 styles="dark:text-white">Or login with</Heading5>
            <div className="w-[30%] h-[1px]  bg-[#e9e9e9]"></div>
          </div>
          <div className="mt-[17px] py-[10px] rounded-[5px] border flex items-center gap-[10px] justify-center bg-inherit">
            <FcGoogle size={20} />
            <Heading5 styles="dark:text-white">Login with Google</Heading5>
          </div>
          <div className="mt-[17px] py-[10px] rounded-[5px] border flex items-center gap-[10px] justify-center bg-inherit">
            <FaFacebookF color="#3B5999" size={20} />
            <Heading5 styles="dark:text-white">Login with Facebook</Heading5>
          </div>
        </div>
      </div>
    </div>
  )
}
