import { Heading5 } from '../../../common'
import { useTranslation } from 'react-i18next'
export const About = () => {
  const { t } = useTranslation()
  return (
    <div className="border-t-2 border-b-2 pt-[30px] pb-[30px] flex gap-8 mb-[30px]">
      <div className="w-[40%]">
        <img className="w-[100%]" src="/img/bobur.jpg" alt="Bobur" />
      </div>
      <div className="w-[50%]">
        <Heading5 styles="text-[12px]">{t('about')}</Heading5>
      </div>
    </div>
  )
}
