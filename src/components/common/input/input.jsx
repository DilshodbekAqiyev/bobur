export const Input = ({placeholder,type}) => {
  return (
    <input type={type?type:'text'} placeholder={placeholder} className="border w-full text-4 p-[13px] rounded-[6px] tracking-[1px] focus:text-green focus:border-green"/>
  )
}
