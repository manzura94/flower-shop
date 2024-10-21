'use client';

import { Box, Button, Badge } from '@mui/material';
import Image from '@/node_modules/next/image';
import React, { useState } from 'react';
import logo from '@/public/icons/LogoWord.svg';
import search from '@/public/icons/search-icon.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomButton from './CustomButton';
import LogoutIcon from './Icons/LogOut';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('Home');
  const router = useRouter();
  const theme = useTheme();

  const handleClick = (buttonName: string) => {
    const page = buttonName.toLowerCase().replace(/\s+/g, '');
    setActiveButton(buttonName);
    if (buttonName === 'Home') {
      router.push('/');
    } else {
      router.push(`/home/${page}`);
    }
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
        padding: '3px',
        [theme.breakpoints.down(850)]: {
          borderBottom: 'none',
        },
      }}
    >
      <Box sx={{ cursor: 'pointer' }}>
        <Link href={'/'} onClick={() => setActiveButton('Home')}>
          <Image src={logo} height={35} width={150} alt={'logo-icon'} />
        </Link>
      </Box>
      <Box sx={{
        display: 'flex', gap: '50px',
        [theme.breakpoints.down('md')]: {
          gap: '10px',
        },
        [theme.breakpoints.down(850)]: {
          display: 'none', 
        },
      }}>
        {['Home', 'Shop', 'Plant Care', 'Blogs'].map((button) => (
          <Button
            key={button}
            color="inherit"
            onClick={() => handleClick(button)}
            sx={{
              position: 'relative',
              padding: '16px 10px',
              lineHeight: '1.5',
              height: '56px',
              borderRadius: 0,
              overflow: 'visible',
              fontWeight: activeButton === button ? '700' : '400',
              textTransform: 'capitalize',
              boxSizing: 'border-box',
              transition: 'font-weight 0.4s ease',
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
                backgroundColor: 'inherit',
                boxShadow: 'none',
              },
            }}
          >
            {button}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Box>
          <Image src={search} width={20} height={20} alt={'search icon'} />
        </Box>
        <Box>
          <Badge badgeContent={6} color="success">
            <ShoppingCartIcon sx={{ width: '29px', height: '24px' }} />
          </Badge>
        </Box>
        <Box>
          <CustomButton label="Login" leftIcon={<LogoutIcon />} />
        </Box>
      </Box>
    </Box>
  );
};
