import React from 'react'
// language
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// redux
import { useSelector } from 'react-redux'
// data
import { navbarMenus } from '../../../constants/navbarMenus'
// component
import { Button } from '../../common'
import { Logo } from '../../common'
// icon
import { HiOutlineLogout } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { BsCartDash } from 'react-icons/bs'
import { FaRegMoon } from 'react-icons/fa'
import { GrSun } from 'react-icons/gr'
// toast
import { ToastContainer } from 'react-toastify'

export const Navbar = ({ changeLang, changeTheme, theme }) => {
  const { t } = useTranslation()
  const flowers = useSelector((state) => state.flowers.items)
  console.log(flowers)

  const changeHandler = (e) => {
    changeLang(e.target.value)
  }
  return (
    <nav className=" py-[0px] flex sticky top-0 left-0 z-[5] bg-white dark:bg-slate-900 items-center justify-between border-b-[1px]">
      <div className="flex items-center w-[60px] h-[60px] rounded-[50%] overflow-hidden">
        <Logo />
      </div>
      <div className="flex gap-[50px]">
        {navbarMenus.map((menu) => (
          <NavLink key={menu.id} to={menu.link} className={'text-black dark:text-grey-2 text font-normal py-[25px]'}>
            {t(menu.name)}
          </NavLink>
        ))}
      </div>
      <select
        className="text-green border bg-transparent border-green my-[20px] p-[5px] rounded-[6px]"
        onChange={changeHandler}
      >
        <option value="en">en</option>
        <option value="uz">uz</option>
      </select>
      <button
        onClick={changeTheme}
        className="text-green border border-green w-[30px] h-[30px] flex items-center justify-center rounded-[6px]"
      >
        {theme ? <FaRegMoon /> : <GrSun />}
      </button>
      <ToastContainer autoClose={1000} theme="light" className="shadow-none mt-[80px] w-[170px]" />
      <div className="flex items-center gap-[30px]">
        <FiSearch className="text-black dark:text-white w-[20px] h-[20px] cursor-pointer" />
        <Link to={'shop/shopping-cart'} className="relative cursor-pointer">
          <BsCartDash className="text-black dark:text-white w-[24px] h-[24px]" />
          <span className="text-white text-12 font-medium flex items-center justify-center w-[12px] h-[12px] bg-green rounded-[50%] absolute top-0 right-0">
            {flowers.length}
          </span>
        </Link>
        <Link to={'login'}>
          <Button styles="gap-[4px] py-[8px] px-[17px]" svg={<HiOutlineLogout />}>
            loginBtn
          </Button>
        </Link>
      </div>
    </nav>
  )
}
