import { useTranslation } from 'react-i18next'
import { Heading5 } from '../../common'
import { Accordions } from '../home'
// accordion

export const WalksMade = () => {
  const { t } = useTranslation()

  const img1 = <img className='w-[100%] h-[100%]' src='/img/bobur_1.jpg' alt='' />
  const img2 = <img className='w-[100%] h-[100%]' src='/img/bobur_2.jpg' alt='' />
  const img3 = <img className='w-[100%] h-[100%]' src='/img/bobur_3.jpg' alt='' />
  const img4 = <img className='w-[100%] h-[100%]' src='/img/bobur_hindiston.jpg' alt='' />
  const img5 = <img className='w-[100%] h-[100%]' src='/img/bobur_kobul.jpg' alt='' />

  return (
    <div>
      <Accordions />
      <div>
        {/* 1 */}
        <div className='pt-[30px] pb-[30px] flex justify-between mb-[30px]'>
          <div className='w-[380px] h-[260px]'>{img1}</div>
          <div className='w-[60%]'>
            <Heading5 styles='text-[12px]'>{t('jang1')}</Heading5>
          </div>
        </div>
        {/* 2 */}
        <div className='border-t-2 pt-[30px] pb-[30px] flex justify-between items-start mb-[30px]'>
          <div className='w-[50%]'>
            <Heading5 styles='text-[12px]'>{t('jang2')}</Heading5>
          </div>
          <div className='w-[400px] h-[450px]'>{img2}</div>
        </div>
        {/* 3 */}
        <div className='border-t-2 pt-[30px] pb-[30px] flex justify-between mb-[30px]'>
          <div className='w-[430px] h-[360px]'>{img3}</div>
          <div className='w-[50%]'>
            <Heading5 styles='text-[12px]'>{t('jang3')}</Heading5>
          </div>
        </div>
        {/* 4 */}
        <div className='border-t-2 pt-[30px] pb-[30px] flex justify-between items-start mb-[30px]'>
          <div className='w-[50%]'>
            <Heading5 styles='text-[12px]'>{t('jang4')}</Heading5>
          </div>
          <div className='w-[430px] h-[320px]'>{img4}</div>
        </div>
        {/* 5 */}
        <div className='border-t-2 border-b-2 pt-[30px] pb-[30px] flex justify-between mb-[30px]'>
          <div className='w-[400px] h-[475px]'>{img5}</div>
          <div className='w-[50%]'>
            <Heading5 styles='text-[12px]'>{t('jang5')}</Heading5>
          </div>
        </div>
      </div>
    </div>
  )
}
