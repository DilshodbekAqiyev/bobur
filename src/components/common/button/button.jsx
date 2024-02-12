import { useTranslation } from 'react-i18next'

export const Button = (p) => {
  const { t } = useTranslation()
  return (
    <button
      className={`text-white bg-green text font-medium leading-2 flex items-center justify-center border border-transparent rounded-[6px] ${
        p.styles ? p.styles : ''
      }`}
      onClick={p.click}
    >
      {p.svg ? p.svg : ''}
      {t(p.children)}
    </button>
  )
}
