import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export const Accordions = () => {
  const { t } = useTranslation();

  const accordionStyle = {
    border: '1px solid rgb(203 213 225)',
    borderRadius: '8px',
    marginBottom: '25px',
    marginTop: '25px',
  };

  const summaryStyle = {
    backgroundColor: 'rgb(15 23 42)',
    borderBottom: '1px solid #ddd',
    color:"rgb(100 116 139)",
    paddingTop:"10px",
    paddingBottom:"10px",
  };
  const detailesStyle ={
     backgroundColor: 'rgb(15 23 42)',
     color:"rgb(100 116 139)",
  }

  const accordionData = [
    { id: 1, header: `${t("lorem1")}`, content: `${t("jang1")}` },
    { id: 2, header: `${t("lorem2")}`, content: `${t("jang2")}` },
    { id: 3, header: `${t("lorem3")}`, content: `${t("jang3")}` },
    { id: 4, header: `${t("lorem4")}`, content: `${t("jang4")}` },
    { id: 5, header: `${t("lorem5")}`, content: `${t("jang5")}` },
  ];

  return (
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
  );
};
