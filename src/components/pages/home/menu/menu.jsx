import React from 'react'
import { Button, Heading3, Heading5 } from '../../../common'
import { plantTypes } from '../../../../constants/plantTypes'

export const Menu = ({ styles }) => {
  return (
    <div className={`${styles}`}>
      <div className={`bg-grey dark:bg-slate-800 p-[24px] `}>
        <Heading3>Categories</Heading3>
        <ul className="flex flex-col ml-[12px] mt-[10px]">
          {plantTypes.map(
            (type, i) =>
              i < 9 && (
                <li
                  key={type.id}
                  className="flex items-center justify-between text-2 text-black  dark:text-white hover:text-green hover:font-bold transition leading-2 font-normal py-[10px]"
                >
                  <p>{type.type}</p>
                  <p>({type.count})</p>
                </li>
              )
          )}
        </ul>
        <Heading3>Price Range</Heading3>
        <div className=" ml-[12px] mt-[10px] mb-[45px]">
          <input type="range" className="h-[6px]" />
          <Heading5 styles="text-black my-[15px]">
            Price: <span className="text-green font-bold">$39 - $1230</span>
          </Heading5>
          <Button styles="py-[8px] px-[25px]">Filter</Button>
        </div>
        <Heading3>Size</Heading3>
        <ul className="ml-[12px]">
          {plantTypes.map(
            (type, i) =>
              i > 8 && (
                <li
                  key={type.id}
                  className="flex items-center justify-between text-2 text-black dark:text-white hover:text-green hover:font-bold transition leading-2 font-normal py-[10px]"
                >
                  <p>{type.type}</p>
                  <p>({type.count})</p>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="bg-[#96eca749] flex flex-col items-center">
        <img src="/img/superSale.png" alt="" />
        <Heading3 styles="text-7 mt-[7px]">UP TO 75% OFF</Heading3>
        <img src="/img/flower.png" alt="" />
      </div>
    </div>
  )
}
