import React from 'react'
import { Card } from '../card/card'
import { plants } from '../../../../data/data'

export const Plants = ({styles}) => {
  return (
    <div className={`flex flex-wrap gap-[40px] ${styles}`}>
      {plants.map(plant=><Card key={plant.id} plant={plant}/>)}
    </div>
  )
}
