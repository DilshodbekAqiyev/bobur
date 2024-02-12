import { Heading3, Heading5 } from '../../common'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FooterTop } from './components/footer-top'

export const Footer = () => {
  return (
    <div>
      <FooterTop />
      <div className='flex justify-between items-start px-[23px] py-[31px] bg-grey dark:bg-slate-800 border-b'>
        <div className='flex flex-col gap-[10px]'>
          <Heading3>My Account</Heading3>
          <Heading5>My Account</Heading5>
          <Heading5>Our stores</Heading5>
          <Heading5> Contact us</Heading5>
          <Heading5>Career</Heading5>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <Heading3>Help & Guide</Heading3>
          <Heading5>Help Center</Heading5>
          <Heading5>How to Buy</Heading5>
          <Heading5>Shipping & Delivery</Heading5>
          <Heading5>Product Policy</Heading5>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <div className='flex items-center gap-5'>
            <a
              href='https://instagram.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <BsInstagram />
            </a>
            <div>
              <Heading5 styles='text-[12px]'>
                <a href='https://www.instagram.com/_boltayev_0407/' target='_blank'>
                  _boltayev_0407
                </a>
              </Heading5>
              <Heading5 styles='text-[12px]'>
                <a href='https://www.instagram.com/dilshodbek.dev/' target='_blank'>
                  dilshodbek.dev
                </a>
              </Heading5>
            </div>
          </div>

          <div className='flex items-center justify-center gap-5'>
            <a
              href='https://linkedin.com'
              target='_blank'
              className='flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]'
            >
              <FaLinkedinIn />
            </a>
            <div>
              <Heading5 styles='text-[12px]'>
                <a href='https://www.linkedin.com/in/dilshodjon-aqiyev/' target='_blank'>
                  dilshodjon-aqiyev
                </a>
              </Heading5>
              <Heading5 styles='text-[12px]'>
                <a href='https://www.linkedin.com/in/sardor-boltayev-1144082b4/' target='_blank'>
                  sardor-boltayev
                </a>
              </Heading5>
            </div>
          </div>
        </div>
      </div>
      <Heading5 styles='text-black py-[17px] text-center'>© {new Date().getFullYear()} , KIDT - 122</Heading5>
    </div>
  )
}
