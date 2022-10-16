import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import * as React from 'react';

const pages = ['Chrome Extension', 'Price Comparison', 'Blog'];

const ResponsiveNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  0;
  return (
    <AppBar
      position="static"
      sx={{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #1F343E',

        opacity: 1,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container direction={'row'} justifyContent={'space-between'}>
            <Grid
              container
              sx={{ display: { xs: 'none', md: 'flex' }, py: 3 }}
              justifyContent={'space-between'}
              mx={30}>
              <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                <img src="/assets/logo.svg" alt="Kitty Katty!" />
              </Grid>

              <Grid pt={0.6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box>
                  {pages.map((item) => (
                    <Typography
                      m={2}
                      display={'inline'}
                      sx={{
                        textAlign: 'center',
                        fontSize: '20px/32px',

                        fontWeight: 'normal',
                        letterSpacing: '0px',
                        color: '#434A54',
                        opacity: 1,
                      }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>

            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <img src="/assets/logo.svg" alt="Kitty Katty!" />
            </Grid>

            <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ mt: -0.5 }}>
                <img src="/assets/menu.svg" alt="Kitty Katty!" />
              </IconButton>
            </Grid>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {' '}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;
