import { Card, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => (
  <Card
    sx={{
      height: { xs: 'auto', md: 400 },
      background: '#F8F4F9 0% 0% no-repeat padding-box',
      border: '1px solid #1F343E',
    }}>
    <Grid
      lg={4}
      xs={10}
      container
      sx={{ py: { xs: 3, md: 3 } }}
      justifyContent={'space-between'}
      mx={{ xs: 3, md: 30 }}>
      <Grid item sx={{}}>
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
    </Grid>
  </Card>
);

export default Footer;
