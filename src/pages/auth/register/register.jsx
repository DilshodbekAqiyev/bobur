import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Button, Heading5 } from '../../../components/common'
import { API } from '../../../constants/api'
import { toast } from 'react-toastify'
import useLocalStorageUserID from '../../../hook/getUser/getUser'

export const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [passwordError, setPasswordError] = useState('')
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false)
  const navigate = useNavigate()
  const { setUserIDToLocalStorage } = useLocalStorageUserID()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserRegistration((prevUserRegistration) => ({
      ...prevUserRegistration,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (userRegistration.password.length > 0 && userRegistration.password.length < 8) {
      setPasswordError('Password must be more than 8 characters long')
    } else {
      setPasswordError('')
    }
  }, [userRegistration.password.length])

  const notifyToast = (message, success = true) =>
    toast(message, {
      autoClose: 2000,
      theme: 'light',
      className: `shadow-none border w-full text-white ${success ? 'bg-green-500' : 'bg-red-500'}`,
    })

  const handleRegister = async (e) => {
    e.preventDefault()

    if (
      !userRegistration.email ||
      !userRegistration.password ||
      !userRegistration.username ||
      !userRegistration.confirmPassword
    ) {
      notifyToast('Please fill in all fields', true)
      return
    }

    if (userRegistration.password !== userRegistration.confirmPassword) {
      setPasswordError('Passwords do not match')
      notifyToast('Passwords do not match', false)
      return
    }

    try {
      const existingUserResponse = await fetch(`${API}/users?email=${userRegistration.email}`)
      const existingUsers = await existingUserResponse.json()
      if (existingUsers.length > 0) {
        notifyToast('This email is already registered', false)
        return
      }

      const newUser = {
        id: uuidv4(),
        userName: userRegistration.username,
        email: userRegistration.email,
        password: userRegistration.password,
        likedGazals: [],
      }

      const response = await fetch(`${API}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      if (response.ok) {
        if (!isRegistrationSuccessful) {
          setRegistrationSuccessful(true)
          navigate('/')
          window.location.reload()
          setUserIDToLocalStorage(newUser.id)
          notifyToast('You have registered successfully')
        }
      } else {
        throw new Error('Failed to add a new user')
      }

      setUserRegistration({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      notifyToast('Failed to add a new user', false)
    }
  }

  return (
    <>
      <Heading5 styles="dark:text-white my-[20px]">Enter your details to register.</Heading5>
      <form className="w-[100%] flex flex-col gap-[17px]" onSubmit={handleRegister}>
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="Username"
          type="text"
          name="username"
          value={userRegistration.username}
          onChange={handleInputChange}
        />
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          value={userRegistration.email}
          onChange={handleInputChange}
        />
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="Password"
          type="password"
          name="password"
          value={userRegistration.password}
          onChange={handleInputChange}
        />
        <input
          className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={userRegistration.confirmPassword}
          onChange={handleInputChange}
        />
        {passwordError && <p className="text-red-600">{passwordError}</p>}
        <Button type="submit" styles="w-full py-[13px] mt-4">
          Register
        </Button>
      </form>
    </>
  )
}
