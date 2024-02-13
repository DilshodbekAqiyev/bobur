import { AccountDetails, Address, Downloads, Orders, Reports, Support, Wishlist } from './pages/account'
import { Account } from './pages/account/account'
import { Home } from './pages/home/home'
import { NotFound } from './pages/not-found/not-found'
import { Cart, Checkout, Shop } from './pages/shops'
import { Footer, Navbar, NavbarTop } from './components/layout'
import { Auth } from './pages/auth/auth'
import {ContactUS} from "./pages/contactus/contactus";
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import i18n from './locale/i18n'
import { WalksMade } from './components/pages/walksMade'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useLocalStorageUserID from './hook/getUser/getUser'

function App () {
  const [theme, setTheme] = useState(null)
  const [isRegistrated, setIsRegistrated] = useState(false)
  const { userID } = useLocalStorageUserID()
  const changeLang = (value) => i18n.changeLanguage(value)
  const changeTheme = () => setTheme(!theme)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme(false) : setTheme(true)
  }, [])

  useEffect(() => {
    if (userID) {
      setIsRegistrated(true)
    } else {
      setIsRegistrated(false)
    }
  }, [userID])

  useEffect(() => {
    !theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [theme])

  return (

    <div className="dark:bg-slate-900 bg-white">
      <div className="container dark:bg-slate-900 font-cera-pro">
        <NavbarTop />
        <Navbar changeLang={changeLang} changeTheme={changeTheme} theme={theme} isRegistrated={isRegistrated} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUS/>}>

          <Route path="/shop" element={<Shop />}>
            <Route path="/shop/shopping-cart" element={<Cart />} />
            <Route path="/shop/checkout" element={<Checkout />} />
          </Route>

          <Route path="/walksMade" element={<WalksMade />} />
          <Route path="/account" element={<Account />}>
            <Route path="shopping-details" element={<AccountDetails />} />
            <Route path="address" element={<Address />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<Support />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>

          <Route path="login" element={<Auth to={true} />} />
          <Route path="register" element={<Auth to={false} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </div>
  )
}

export default App
