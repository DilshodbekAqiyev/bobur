import { useState, useEffect } from 'react'
import { API } from '../../../constants/api'
import useLocalStorageUserID from '../../../hook/getUser/getUser'
import { PlayerApp } from '../components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export const LikedGazals = () => {
  const [likedGazals, setLikedGazals] = useState([])
  const [gazals, setGazals] = useState([])
  const [user, setUser] = useState({})
  const { userID } = useLocalStorageUserID()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/gazals`)
        const data = await response.json()

        if (response.ok) {
          setGazals(data)
        } else {
          console.error('Failed to fetch gazals:', data.message || 'Unknown error')
        }
      } catch (error) {
        console.error('Error fetching gazals:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userID) {
          const response = await fetch(`${API}/users/${userID}`, {
            method: 'GET',
          })

          if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`)
          }

          const userData = await response.json()
          setUser(userData)
          setLikedGazals(userData.likedGazals || [])
        }
      } catch (error) {
        console.error('Error fetching users:', error.message || 'Unknown error')
      }
    }

    fetchUserData()
  }, [userID])

  const handleLike = (gazalId) => {
    const isLiked = likedGazals.includes(gazalId)
    const updatedLikedGazals = isLiked ? likedGazals.filter((id) => id !== gazalId) : [...likedGazals, gazalId]

    setLikedGazals(updatedLikedGazals)
    setUser((prevUser) => ({ ...prevUser, likedGazals: updatedLikedGazals }))
  }

  useEffect(() => {
    const putUserFavourite = async () => {
      try {
        if (userID) {
          await fetch(`${API}/users/${userID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
        }
      } catch (error) {
        console.error('Error updating user data:', error.message || 'Unknown error')
      }
    }

    putUserFavourite()
  }, [user, userID])

  const likedGazalsToShow = gazals.filter((gazal) => likedGazals.includes(gazal.id))

  return (
    <div>
      <div className="flex justify-between items-center px-2 py-1">
        <h2 className="text-[32px] mt-5 text-black dark:text-grey-2 leading font-bold pb-5">Liked Gazallar</h2>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-4 pb-5">
        {likedGazalsToShow.length !== 0 ? (
          likedGazalsToShow.map((gazal) => (
            <div key={gazal.id} className="border border-white rounded-md p-3 relative">
              <button className="absolute top-1 right-1 cursor-pointer">
                {likedGazals.includes(gazal.id) ? (
                  <AiFillHeart
                    className="text-black dark:text-white cursor-pointer"
                    onClick={() => handleLike(gazal.id)}
                    size={24}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-black dark:text-white cursor-pointer"
                    onClick={() => handleLike(gazal.id)}
                    size={24}
                  />
                )}
              </button>
              <PlayerApp src={gazal.src} name={gazal.name} id={gazal.id} />
            </div>
          ))
        ) : (
          <>
            <p className="text-black dark:text-white text-xl my-8">You don&apos;t have liked Gazals</p>
          </>
        )}
      </div>
    </div>
  )
}
