import { GrLocation } from 'react-icons/gr'
import { TfiEmail } from 'react-icons/tfi'
import { MdPhoneInTalk } from 'react-icons/md'
import { Heading3 } from '../../components/common'
import { MapComponent } from './map'
import { useTranslation } from 'react-i18next'

export const ContactUS = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="flex py-[30px] bg-white dark:bg-slate-800 mt-[40px] mb-[40px] rounded-xl p-[20px] text-[20px] ">
        <div className="w-[30%] mr-[50px] bg-slate-800 dark:bg-white p-[20px] rounded-[14px] shadow-xl">
          <GrLocation className=" mx-auto  mb-[20px] text-[green]" size={54} />
          <p className="text-center mb-[20px] text-grey-1">{t('fakultet')}</p>
          <TfiEmail className=" mx-auto  mb-[20px] text-[green]" size={54} />
          <p className="text-center mb-[20px] text-grey-1">dilshodbekwork@gmail.com</p>
          <MdPhoneInTalk className=" mx-auto  mb-[20px] text-[green]" size={54} />
          <p className="text-center text-grey-1">+998 (88)-969-88-84</p>
          <p className="text-center text-grey-1">+998 (94)-851-78-81</p>
          <p className="text-center mb-[20px] text-grey-1">+998 (91)-969-07-12</p>
        </div>
        <div className="br-[10px] bg-slate-800 dark:bg-white p-[20px] rounded-[14px] w-[70%] shadow-xl">
          <Heading3 styles="pb-[20px] text-[32px] mt-[10px] text-grey-1">{t('just')}</Heading3>
          <p className="text-[16px] mb-[20px] text-grey-1">{t('justabout')}</p>
          <form action="">
            <div className=" flex gap-[20px] pb-[20px]">
              <div className="w-[50%]">
                <label htmlFor="" className="block text-grey-1 pb-[10px]">
                  {t('yourname')}{' '}
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className=" block border w-full  text-4 p-[13px] rounded-[6px] tracking-[1px]  focus:text-black focus:border-black"
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="" className="block text-grey-1 pb-[10px]">
                  {t('yournumber')}{' '}
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-black focus:border-black"
                />
              </div>
            </div>
            <label htmlFor="" className="block pb-[10px] text-grey-1">
              {' '}
              {t('email')}{' '}
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-black focus:border-black mb-[20px]"
            />
            <label htmlFor="" className=" block  pb-[10px] text-grey-1">
              {t('message')}
            </label>
            <textarea
              placeholder="Message"
              className=" mb-[20px] border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-black focus:border-black"
            />
          </form>
          <button className="text-white  bg-green text font-medium leading-2 flex items-center justify-center border border-transparent rounded-[6px] p-[15px]">
            {t('sendmessage')}{' '}
          </button>
        </div>
      </div>
      <div className="">
        <MapComponent />
      </div>
    </div>
  )
}
