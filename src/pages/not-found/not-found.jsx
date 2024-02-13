import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()
  return (
    <div className='text-center py-[100px]'>
      <h1 className='text-11 font-semibold leading-9 text-black uppercase'>
        {t("not")} <span className='text-green'>{t("found")}</span>
      </h1>
    </div>
  )
}
