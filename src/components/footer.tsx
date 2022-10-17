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
      borderRadius: 0,
    }}>
    <Grid
      lg={12}
      xs={10}
      container
      spacing={1}
      sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 20 } }}
      justifyContent={{ md: 'space-around', xs: 'flex-start' }}
      mx={{ xs: 3, md: 10 }}>
      <Grid item sx={{}} lg={6}>
        <Grid container direction={'column'}>
          <Grid item>
            <img src="/assets/logo.svg" alt="Kitty Katty!" />
          </Grid>
          <Grid item pt={{ xs: 3, md: 3.5 }}>
            <Typography
              sx={{
                color: '#1F343E',

                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal normal 16px/20px Noto Sans',
                },
              }}>
              {
                'Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing youre getting the best deal!'
              }
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 5, md: 3.5 }}>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                color: '#6D7A80',
                font: 'normal normal normal 16px/24px Noto Sans',
              }}>
              {`© ${new Date().getFullYear()} Ratepunk. All Rights Reserved.`}
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
                font: {
                  md: 'normal normal normal 20px/24px Noto Sans',
                  xs: 'normal normal bold 16px/20px Noto Sans',
                },
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}>
              Quick Links
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 3, md: 4 }}>
            <Typography
              sx={{
                color: '#4EB3E3',
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1.5,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Price Comparison
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1.5,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Chrome Extension
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1.5,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              How It Works
            </Typography>

            <Typography
              sx={{
                color: '#1F343E',
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1.5,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              Ratepunk Blog
            </Typography>
            <Typography
              sx={{
                color: '#1F343E',
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1.5,
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
          <Grid item pt={{ xs: 3, md: 0 }}>
            <Typography
              sx={{
                color: '#1F343E',
                font: {
                  md: 'normal normal normal 20px/24px Noto Sans',
                  xs: 'normal normal bold 16px/20px Noto Sans',
                },
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}>
              CONTACT
            </Typography>
          </Grid>
          <Grid item pt={{ xs: 3, md: 4 }}>
            <Grid display={'inline'} pt={4}>
              <Typography
                display={'inline'}
                sx={{
                  color: '#4EB3E3',
                  font: 'normal normal normal 16px/24px Noto Sans',

                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}>
                <img height={15} src="/assets/email.svg" alt="email!" />
              </Typography>
            </Grid>

            <Typography
              sx={{
                font: {
                  md: 'normal normal normal 16px/24px Noto Sans',
                  xs: 'normal normal bold 13px/18px Noto Sans',
                },
                pb: 1,
                pl: 1,
              }}
              display={'inline'}>
              {' '}
              hi@ratepunk.com
            </Typography>

            <Grid item pt={{ xs: 5, md: 8 }}>
              <Typography
                pb={{ xs: 1, md: 2 }}
                sx={{
                  color: '#1F343E',
                  font: {
                    md: 'normal normal normal 20px/24px Noto Sans',
                    xs: 'normal normal bold 16px/20px Noto Sans',
                  },
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}>
                SOCIAL
              </Typography>

              <Grid
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
                    ml: 0,
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
                    src="/assets/tiktok.svg"
                    alt="email!"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item pt={{ xs: 5, md: 3.5 }}>
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' },
                color: '#6D7A80',
                font: 'normal normal normal 14px/21px Noto Sans',
              }}>
              {`© ${new Date().getFullYear()} Ratepunk. All Rights Reserved.`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default Footer;
