import React from 'react';

const Icon = ({ icon, alt, size }) => {
  return <img height={size} width={size} src={icon} alt={alt} />;
};

export default Icon;
