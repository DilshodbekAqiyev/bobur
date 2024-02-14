import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const PlayerApp = ({ src, name, id }) => {
  return (
    <div className="w-[450px] relative">
      <div>
        <h3 className="text-green text font-bold my-3">{name}</h3>
        <AudioPlayer src={src} volume={0.5} />
        <p>
          <Link to={`/gazallar/${id}`} className="text-black dark:text-white pt-2 pb-1 inline-block">
            View more...
          </Link>
        </p>
      </div>
    </div>
  )
}
