import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button, Heading5 } from '../../../components/common'
import { API } from '../../../constants/api'

export const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [passwordError, setPasswordError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserRegistration((prevUserRegistration) => ({
      ...prevUserRegistration,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (userRegistration.password.length < 8) {
      setPasswordError('Password must be more than 8 characters long')
    }
  }, [userRegistration.password.length])

  const handleRegister = async (e) => {
    e.preventDefault()

    if (userRegistration.password !== userRegistration.confirmPassword) {
      setPasswordError('Passwords do not match')
      return
    }

    setPasswordError('')

    const newUser = {
      id: uuidv4(),
      email: userRegistration.email,
      userName: userRegistration.username,
      password: userRegistration.password,
      favourite: [],
    }

    try {
      const response = await fetch(API + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      if (!response.ok) {
        throw new Error('Failed to add new user')
      }

      console.log('New user added:', newUser)

      setUserRegistration({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error('Error adding new user:', error)
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
      </form>
      <Button type="submit" styles="w-full py-[13px] mt-[30px]">
        Register
      </Button>
    </>
  )
}
