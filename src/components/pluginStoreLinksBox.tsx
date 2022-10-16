import { Card, Grid, Box, Typography, Rating } from '@mui/material';
import { FC } from 'react';

const PluginStoreLinksBox: FC = () => {
  return (
    <Card
      sx={{
        py: { md: 3, xs: 2 },

        background: '#45565E 0% 0% no-repeat',
      }}>
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        px={{ xs: 2, lg: 30 }}
        spacing={3}>
        <Grid item xs={12} lg={3.5} alignContent={'center'} mt={2}>
          <Box
            sx={{
              background: '#45565E 0% 0% no-repeat padding-box',
              border: '1px solid #1F343E',
              borderRadius: 3,
            }}>
            <Grid container p={1}>
              <Grid item px={{ xs: 2, md: 2 }}>
                <img width={40} src="/assets/chrome.svg" alt="chrome" />
              </Grid>
              <Grid item pt={0.5}>
                <Typography
                  sx={{
                    color: '#F8F4F9',
                    font: 'normal normal normal 16px/16px Noto Sans',
                  }}>
                  available in the
                </Typography>

                <Typography
                  sx={{
                    color: '#F8F4F9',
                    font: 'normal normal bold 20px/16px Gadugi',
                  }}>
                  chrome web store
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} lg={3.5} alignContent={'center'} mt={2}>
          <Box
            sx={{
              background: '#45565E 0% 0% no-repeat padding-box',
              border: '1px solid #1F343E',
              borderRadius: 3,
            }}>
            <Grid container p={1}>
              <Grid item px={{ xs: 2, md: 3 }}>
                <img width={40} src="/assets/apple.svg" alt="Kitty Katty!" />
              </Grid>
              <Grid item pt={0.5}>
                <Typography
                  sx={{
                    color: '#F8F4F9',
                    font: 'normal normal normal 16px/16px Noto Sans',
                  }}>
                  available in the
                </Typography>
                <Typography
                  sx={{
                    color: '#F8F4F9',
                    font: 'normal normal bold 20px/16px Gadugi',
                  }}>
                  apple app store
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          container
          xs={12}
          lg={4}
          textAlign={'center'}
          alignContent={'center'}
          direction={'column'}
          mt={2.5}>
          <Grid textAlign={'center'} item>
            <Typography>
              {' '}
              <Rating value={5} sx={{ color: 'white' }}></Rating>
            </Typography>

            <Typography
              textAlign={'center'}
              sx={{ color: 'white' }}
              display={'inline'}>
              Chrome Store reviews{' '}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PluginStoreLinksBox;
