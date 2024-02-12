import {
  About,
  Hero,
  Information,
  Menu,
  Posts,
  Sort
} from '../../components/pages/home'
import { useTranslation } from 'react-i18next'
import { PlantsSwiper } from '../../components/pages/home/plantsSwiper/plantsSwiper'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className='flex items-center justify-center'>
        <Hero />
      </div>
      <About/>
      <div className='grid grid-cols-3 gap-[50px] grid-rows-[1fr,22fr]'>
        <Menu styles='row-span-full' />
        <Sort styles='col-span-2 flex items-center justify-between' />
        <div className='col-span-2'>
          <PlantsSwiper />
        </div>
      </div>
      <Information />
      <Posts />
    </div>
  )
}
