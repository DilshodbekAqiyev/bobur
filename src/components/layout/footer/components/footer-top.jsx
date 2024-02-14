import emailjs from '@emailjs/browser'
import { Heading3, Heading5 } from '../../../common'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const SERVICE_ID = 'service_y5mqva6'

export const FooterTop = () => {
  const [inputValue, setInputValue] = useState('')
  const { t } = useTranslation()

  const handleSubscription = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send(
        SERVICE_ID,
        'template_vqnv41e',
        {
          from_name: 'Boburiylar',
          reply_to: 'bu juda ajoyib habar',
          message:
            'bizni saytdan foydalanganingiz uchun raxmat \n bu saytdan hali ancha vaqt foydalanasiz degan umiddamiz',
          to_email: inputValue,
          to_name: inputValue,
        },
        '3KBXrKlCMY5m-hunh'
      )
      setInputValue('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex justify-between items-center px-[23px] py-[27px] bg-grey dark:bg-slate-800">
      <div>
        <Heading3>{t("subcrib1")}</Heading3>
        <Heading5>{t("subcrib2")}</Heading5>
      </div>
      <div>
        <form className="flex my-[18px] relative" onSubmit={handleSubscription}>
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-[450px] py-3 px-[11px] rounded-[8px] text-black pr-[80px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="text-white bg-green text font-medium leading-2 flex items-center justify-center border border-transparent absolute top-0 right-0 py-3 px-5 rounded-[8px] mt-[0.12px]"
            type="submit"
          >
            {t("join")}
          </button>
        </form>
      </div>
    </div>
  )
}
