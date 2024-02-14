import { Heading3 } from '../../../common'
import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export const Fact = () => {
  const { t } = useTranslation()
  const accordionStyle = {
    border: '1px solid #46A358',
    borderRadius: '8px',
    marginBottom: '25px',
    marginTop: '25px',
  }

  const summaryStyle = {
    backgroundColor: 'rgb(15 23 42)',
    borderBottom: '1px solid #46A358',
    color: 'rgb(100 116 139)',
    paddingTop: '10px',
    paddingBottom: '10px',
  }
  const detailesStyle = {
    backgroundColor: 'rgb(15 23 42)',
    color: 'rgb(100 116 139)',
  }

  const accordionData = [
    { id: 1, header: `${t('factname1')}`, content: `${t('fact1')}` },
    { id: 2, header: `${t('factname2')}`, content: `${t('fact2')}` },
    { id: 3, header: `${t('factname3')}`, content: `${t('fact3')}` },
    { id: 4, header: `${t('factname4')}`, content: `${t('fact4')}` },
    { id: 5, header: `${t('factname5')}`, content: `${t('fact5')}` },
    { id: 6, header: `${t('factname6')}`, content: `${t('fact6')}` },
    { id: 7, header: `${t('factname7')}`, content: `${t('fact7')}` },
    { id: 8, header: `${t('factname8')}`, content: `${t('fact8')}` },
    { id: 9, header: `${t('factname9')}`, content: `${t('fact9')}` },
    { id: 10, header: `${t('factname10')}`, content: `${t('fact10')}` },
  ]

  return (
    <div className='mb-[40px] border-b-2 pb-[40px] pt-6'>
      <Heading3 style="pb-6" > <span className='text-[30px] leading-6'> {t('thema')} </span></Heading3>
      <div>
        {accordionData.map(({ id, header, content }) => (
          <Accordion key={id} style={accordionStyle} slotProps={{ transition: { unmountOnExit: true } }}>
            <AccordionSummary style={summaryStyle} id={`panel-header-${id}`} aria-controls={`panel-content-${id}`}>
              <Typography>{header}</Typography>
            </AccordionSummary>
            <AccordionDetails style={detailesStyle}>
              <Typography>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
