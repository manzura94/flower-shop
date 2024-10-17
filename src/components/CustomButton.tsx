import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  label: string;
  leftIcon?: React.ReactNode; 
  rightIcon?: React.ReactNode; 
}

const capitalizeFirstLetter = (text: string) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

function CustomButton({
  label,
  leftIcon,
  rightIcon,
  ...props
}: CustomButtonProps) {
  return (
    <Button 
      {...props} 
      startIcon={leftIcon} 
      endIcon={rightIcon} 
      variant="contained"
      sx={{ textTransform: 'none', background: '#46A358', color:'white', fontWeight:500, padding:'8px 17px' }} 
    >
      {capitalizeFirstLetter(label)} 
    </Button>
  );
};

export default CustomButton;
