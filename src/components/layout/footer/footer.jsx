import React from 'react'
import { Button, Heading3, Heading5, Logo } from '../../common'
// icon
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbMail } from 'react-icons/tb'
import { TbPhoneCall } from 'react-icons/tb'
import { CgFacebook } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-[23px] py-[27px] bg-grey dark:bg-slate-800'>
        <div className='pl-[31px]'>
          <Heading3>Subcribe our Newsletter</Heading3>
          <Heading5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur rerum aperiam dicta, libero explicabo earum expedita,
            doloremque ipsam optio assumenda? Suscipit, dolor cupiditate nulla.
          </Heading5>
        </div>
        <div className='pl-[31px]'>
          <form className='flex my-[18px]'>
            <input
              type='text'
              placeholder='Enter your email address...'
              className='w-[75%] py-[12px] px-[11px] rounded-[6px] text-black'
            />
            <Button styles='w-[25%] rounded-l-none'>Join</Button>
          </form>
        </div>

      </div>
      <div className='flex gap-[60px] items-center px-[23px] py-[27px] bg-[#46A3581A]'>
        <div className='flex gap-[12px] items-center'>
          <HiOutlineLocationMarker className='text-green w-[12.5px] h-[15px]' />
          <Heading5 styles='text-black'>
            {' '}
            Surxondaryo v. Termez Sh. TerDU{' '}
          </Heading5>
        </div>
        <div className='flex gap-[12px] items-center'>
          <TbMail className='text-green w-[16px] h-[15px]' />
          <Heading5 styles='text-black'>
            <a href='https://mail.google.com/mail/u/0/#inbox'>
              sardorboltayev0712@gmail.com
            </a>
          </Heading5>
          <TbMail className='text-green w-[16px] h-[15px]' />
          <Heading5 styles='text-black'>
            <a href='https://mail.google.com/mail/u/0/#inbox'>
              dilshodjonaqiyev@gmail.com
            </a>
          </Heading5>
        </div>
        <div className='flex gap-[12px] items-center'>
          <TbPhoneCall className='text-green w-[16px] h-[16px]' />
          <Heading5 styles='text-black'>91-969-07-12 , 88-969-88-84</Heading5>
        </div>
      </div>
      <div className='flex justify-between items-center px-[23px] py-[31px] bg-grey dark:bg-slate-800 border-b'>
        <div className='flex flex-col gap-[10px]'>
          <Heading3>My Account</Heading3>
          <Heading5>My Account</Heading5>
          <Heading5>Our stores</Heading5>
          <Heading5> Contact us</Heading5>
          <Heading5>Career</Heading5>
          <Heading5>Specials</Heading5>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <Heading3>Help & Guide</Heading3>
          <Heading5>Help Center</Heading5>
          <Heading5>How to Buy</Heading5>
          <Heading5>Shipping & Delivery</Heading5>
          <Heading5>Product Policy</Heading5>
          <Heading5>How to Return</Heading5>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <Heading3>Categories</Heading3>
          <Heading5>House Plants</Heading5>
          <Heading5>Potter Plants</Heading5>
          <Heading5>Seeds</Heading5>
          <Heading5>Small Plants</Heading5>
          <Heading5>Accessories</Heading5>
        </div>
        <div className='flex flex-col gap-[22px]'>
          <Heading3>Social Media</Heading3>
          <div className='flex gap-[10px]'>
            <a
              href='https://facebook.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <CgFacebook />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <BsInstagram />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <BsTwitter />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <FaLinkedinIn />
            </a>
          </div>
          <Heading3>We accept</Heading3>
          <img src='/img/collaborator.png' alt='' />
        </div>
      </div>
      <Heading5 styles='text-black py-[20px] text-center'>
        © 2021 GreenShop. All Rights Reserved.
      </Heading5>
    </div>
  )
}
