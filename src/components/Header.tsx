'use client';
import { Box, Button, Badge } from '@mui/material';
import Image from '@/node_modules/next/image';
import React, { useState } from 'react';
import logo from '../../public/LogoWord.svg';
import search from '../../public/search-icon.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomButton from './CustomButton';
import LogoutIcon from './Icons/LogOut';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('Home');

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #46A35880',
        padding:'3px'
      }}
    >
      <Box sx={{ cursor: 'pointer',marginRight: '100px' }}>
        <Image src={logo} height={35} width={150} alt={'logo-icon'} />
      </Box>
      <Box sx={{display:'flex', gap:'50px'}}>
        {['Home', 'Shop', 'Plant Care', 'Blogs'].map((button) => (
          <Button
            key={button}
            color="inherit"
            onClick={() => handleClick(button)}
            sx={{
              position: 'relative',
              padding: '16px 0',
              height: '56px',
              borderRadius: 0,
              overflow: 'visible',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-3px',
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor:
                  activeButton === button ? '#46A358' : 'transparent',
              },
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'inherit',
              },
            }}
          >
            {button}
          </Button>
        ))}
      </Box>
      <Box sx={{display:'flex', alignItems: 'center', gap:'30px'}}>
        <Box>
          <Image src={search} width={20} height={20} alt={'search icon'} />
        </Box>
        <Box>
          <Badge badgeContent={6} color="success">
            <ShoppingCartIcon
             sx={{width: '29px', height: '24px'}} />
          </Badge>
        </Box>
        <Box>
        <CustomButton 
        label="Login" 
        leftIcon={<LogoutIcon/>} 
      />
        </Box>
      </Box>
    </Box>
  );
};
