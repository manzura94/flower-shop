'use client';
import { Box, Button, Badge } from '@mui/material';
import Image from '@/node_modules/next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/public/icons/LogoWord.svg';
import searchImage from '@/public/icons/search-icon.svg';
import burgerInside from '@/public/icons/burgerInside.svg';
import CustomButton from './CustomButton';
import LogoutIcon from './Icons/LogOut';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from './Icons/SearchIcon';
import ShoppingCartIcon from './Icons/ShoppingCartIcon';
import { Login } from './Login';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

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

  useEffect(() => {
    const handleSizing = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener('resize', handleSizing);
    handleSizing();
    return () => window.removeEventListener('resize', handleSizing);
  }, []);

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
      {isMobile ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            alignSelf: 'center',
          }}
        >
          <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <TextField
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  height: '50px',
                  backgroundColor: '#F8F8F8',
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                  '& .MuiOutlinedInput-input': {
                    borderRadius: '15px',
                    width: '100%',
                  },
                },
              }}
              variant="outlined"
              placeholder="Find your plants..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              background: '#46A358',
              borderRadius: '14px',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={burgerInside}
              width={30}
              height={30}
              alt={'filter button inside'}
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ cursor: 'pointer' }}>
            <Link href={'/'} onClick={() => setActiveButton('Home')}>
              <Image src={logo} height={35} width={150} alt={'logo-icon'} />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '50px',
              [theme.breakpoints.down('md')]: {
                gap: '10px',
              },
              [theme.breakpoints.down(750)]: {
                display: 'none',
              },
            }}
          >
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
            <Box sx={{ cursor: 'pointer' }} onClick={() => setSearch(!search)}>
              <Image
                src={searchImage}
                width={20}
                height={20}
                alt={'search icon'}
              />
            </Box>
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => router.push('/home/shoppingcart')}
            >
              <Badge badgeContent={6} color="success">
                <ShoppingCartIcon />
              </Badge>
            </Box>
            <Box>
              <CustomButton
                label="Login"
                leftIcon={<LogoutIcon />}
                onClick={() => setOpen(true)}
              />
            </Box>
            <Login open={open} setOpen={setOpen} />
          </Box>
        </>
      )}
    </Box>
  );
};
