import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Heading5, Button } from '../../../components/common'
import { API } from '../../../constants/api'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(API + '/users')
      const users = await response.json()

      const user = users.find((u) => u.email === email && u.password === password)

      if (user) {
        localStorage.setItem('userID', user.id)
        navigate('/')
        console.log('Login successful:', user)
      } else {
        console.error('Invalid credentials')
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return (
    <>
      <Heading5 styles="dark:text-white my-[20px]">Enter your email and password to login.</Heading5>
      <form className="w-[100%] flex flex-col gap-[17px]" onSubmit={handleLogin}>
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="flex justify-end mt-[14px] w-[100%]">
          <NavLink to="/" className="text-green text-sm font-normal mb-[17px] font-cera-pro leading-none">
            Forgot Password?
          </NavLink>
        </div>
        <Button type="submit" styles="w-full py-[14px]">
          Login
        </Button>
      </form>
    </>
  )
}
