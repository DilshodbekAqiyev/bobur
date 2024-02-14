import { About, Hero } from '../../components/pages/home'
import { useTranslation } from 'react-i18next'
import { Gazallar } from '../gazallar'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="flex items-center justify-center">
        <Hero />
      </div>
      <About />
      <Gazallar />
    </div>
  )
}
