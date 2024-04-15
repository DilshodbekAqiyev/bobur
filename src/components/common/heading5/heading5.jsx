export const Heading5 = (p) => {
  return <p className={`text-2 text-grey-1 leading-2 font-normal ${p.styles ? p.styles : ''}`}>{p.children}</p>
}
