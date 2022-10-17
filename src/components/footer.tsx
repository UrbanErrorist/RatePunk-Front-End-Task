import {
  Box,
  Card,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => (
  <Card
    sx={{
      background: '#F8F4F9 0% 0% no-repeat padding-box',
      border: '1px solid #1F343E',
    }}>
    <Grid
      lg={12}
      xs={10}
      container
      spacing={1}
      sx={{ py: { xs: 3, md: 3 }, px: { xs: 2, md: 20 } }}
      justifyContent={'space-around'}
      mx={{ xs: 3, md: 10 }}>
      <Grid item sx={{}} lg={6}>
        <Grid container direction={'column'}>
          <Grid item>
            <img src="/assets/logo.svg" alt="Kitty Katty!" />
          </Grid>
          <Grid item pt={{ xs: 3, md: 10 }}>
            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal normal 16px/24px Noto Sans',
              }}>
              {
                'Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing youre getting the best deal!'
              }
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 5, md: 10 }}>
            <Typography
              sx={{
                color: '#6D7A80',
                font: 'normal normal normal 16px/24px Noto Sans',
              }}>
              {'© 2021 Ratepunk. All Rights Reserved.'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{}} lg={2}>
        <Grid container direction={'column'}>
          <Grid item>
            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal bold 20px/24px Noto Sans',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}>
              Quick Links
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 3, md: 10 }}>
            <Typography
              sx={{
                color: '#4EB3E3',
                font: 'normal normal normal 16px/24px Noto Sans',
                pb: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Price Comparison
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal normal 16px/24px Noto Sans',
                pb: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Chrome Extension
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal normal 16px/24px Noto Sans',
                pb: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              How It Works
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal normal 16px/24px Noto Sans',
                pb: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Ratepunk Blog
            </Typography>
            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal normal 16px/24px Noto Sans',
                pb: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{}} lg={3}>
        <Grid container direction={'column'}>
          <Grid item>
            <Typography
              sx={{
                color: '#1F343E',
                font: 'normal normal bold 20px/24px Noto Sans',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}>
              CONTACT
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 3, md: 10 }}>
            <Typography
              display={'inline'}
              sx={{
                color: '#4EB3E3',
                font: 'normal normal normal 16px/24px Noto Sans',

                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              <img src="/assets/email.svg" alt="email!" />
            </Typography>
            <Typography
              sx={{ font: 'normal normal normal 16px/24px Noto Sans', pb: 1 }}
              display={'inline'}>
              {' '}
              hi@ratepunk.com
            </Typography>

            <Grid item>
              <Typography
                sx={{
                  color: '#1F343E',
                  font: 'normal normal bold 20px/24px Noto Sans',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}>
                SOCIAL
              </Typography>

              <Typography
                display={'inline'}
                sx={{
                  color: '#4EB3E3',
                  font: 'normal normal normal 16px/24px Noto Sans',

                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    m: 0.5,
                    display: 'inline-block',

                    background: '#4EB3E3 0% 0% no-repeat padding-box',
                    border: '1px solid #1F343E',
                    borderRadius: '8px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}>
                  <img
                    style={{ top: 4, position: 'relative' }}
                    src="/assets/instagram.svg"
                    alt="email!"
                  />
                </Box>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    m: 0.5,
                    display: 'inline-block',

                    background: '#4EB3E3 0% 0% no-repeat padding-box',
                    border: '1px solid #1F343E',
                    borderRadius: '8px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}>
                  <img
                    style={{ top: 4, position: 'relative' }}
                    src="/assets/facebook.svg"
                    alt="email!"
                  />
                </Box>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    m: 0.5,
                    display: 'inline-block',

                    background: '#4EB3E3 0% 0% no-repeat padding-box',
                    border: '1px solid #1F343E',
                    borderRadius: '8px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}>
                  <img
                    style={{ top: 4, position: 'relative' }}
                    src="/assets/linkedin.svg"
                    alt="email!"
                  />
                </Box>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    m: 0.5,
                    display: 'inline-block',

                    background: '#4EB3E3 0% 0% no-repeat padding-box',
                    border: '1px solid #1F343E',
                    borderRadius: '8px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}>
                  <img
                    style={{ top: 4, position: 'relative' }}
                    src="/assets/twitter.svg"
                    alt="email!"
                  />
                </Box>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    m: 0.5,
                    display: 'inline-block',

                    background: '#4EB3E3 0% 0% no-repeat padding-box',
                    border: '1px solid #1F343E',
                    borderRadius: '8px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}>
                  <img
                    style={{ top: 4, position: 'relative' }}
                    src="/assets/instagram.svg"
                    alt="email!"
                  />
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default Footer;
