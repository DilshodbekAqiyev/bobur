import { useState, useEffect } from 'react'

const useLocalStorageUserID = () => {
  const [userID, setUserID] = useState('')

  useEffect(() => {
    const storedUserID = localStorage.getItem('userID')
    if (storedUserID) {
      setUserID(storedUserID)
    }
  }, [])

  const setUserIDToLocalStorage = (newUserID) => {
    setUserID(newUserID)
    localStorage.setItem('userID', newUserID)
  }

  const clearUserIDFromLocalStorage = () => {
    setUserID('')
    localStorage.removeItem('userID')
  }

  return { userID, setUserIDToLocalStorage, clearUserIDFromLocalStorage }
}

export default useLocalStorageUserID
