import React, { useState, useEffect } from 'react';

export const MapComponent = () => {
    let apiKey = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228470.77992701295!2d67.29522851001707!3d37.265872956059816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f352dffc61512e5%3A0xa9327e0cb650584f!2z0KLQtdGA0LzQtdC30YHQutC40Lkg0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YI!5e1!3m2!1sru!2s!4v1707894948867!5m2!1sru!2s';
  return (
    <div >
      <iframe src={apiKey} className='w-[100%] h-[500px] mb-[50px] rounded-2xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

