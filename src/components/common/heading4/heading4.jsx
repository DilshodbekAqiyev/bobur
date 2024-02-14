import React from 'react'

export const Heading4 = (p) => {
  return <p className={`text-green text font-bold ${p.styles ? p.styles : ''}`}>{p.children}</p>
}
