import { Card, Grid, Typography } from '@mui/material';

const InfomaticsBox = () => {
  return (
    <Card
      sx={{
        m: { xs: 0, sm: 0, md: 8, lg: 8 },
        mt: { xs: 4, sm: 4, md: 0, lg: 10 },
        mb: { xs: 4, sm: 4, md: 8, lg: 8 },
        backgroundColor: '#F8CC5D',
        boxShadow: 'none',
        width: { lg: '544px', xs: 'auto' },
        height: { lg: '797px', xs: 'auto' },
      }}>
      <Grid container direction={'column'}>
        <Grid
          mt={{ xs: 2, lg: 10 }}
          container
          direction={'row'}
          sx={{ justifyContent: 'center' }}>
          <Grid item lg={4}>
            <img src="/assets/invite.svg" alt="invite" />
          </Grid>
          <Grid
            container
            sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
            direction={'row'}
            item
            lg={8}
            xs={12}>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal bold 16px/24px Gadugi',
                  textTransform: 'uppercase',
                  letterSpacing: '1.28px',
                  color: '#4EB3E3',
                }}>
                Step 1
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 32px/40px Caveat Brush',
                  textTransform: 'uppercase',
                  letterSpacing: '0px',
                  color: '#1F343E',
                }}>
                INVITE FRIENDS{' '}
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              lg={10}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 16px/24px Noto Sans',
                  letterSpacing: '0px',
                  textTransform: 'none',
                  color: '#1F343E',
                }}>
                Refer friends with your unique referral link.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          mt={{ xs: 2, lg: 10 }}
          container
          direction={'row'}
          sx={{ justifyContent: 'center' }}>
          <Grid
            mt={{ xs: 4, m: 4, md: 0, lg: 0 }}
            item
            lg={4}
            sx={{ display: { xs: 'block', md: 'none' } }}>
            <img src="/assets/collect-coins.svg" alt="coins" />
          </Grid>
          <Grid
            container
            sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
            direction={'row'}
            item
            lg={8}
            xs={12}>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal bold 16px/24px Gadugi',
                  textTransform: 'uppercase',
                  letterSpacing: '1.28px',
                  color: '#4EB3E3',
                }}>
                Step 2
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 32px/40px Caveat Brush',
                  textTransform: 'uppercase',
                  letterSpacing: '0px',
                  color: '#1F343E',
                }}>
                COLLECT COINS
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              lg={10}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 16px/24px Noto Sans',
                  letterSpacing: '0px',
                  textTransform: 'none',
                  color: '#1F343E',
                }}>
                Get 1 coin for each friend that installs our extension using
                your referral link.
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }} item lg={4}>
            <img src="/assets/collect-coins.svg" alt="coins" />
          </Grid>
        </Grid>

        <Grid
          mt={{ xs: 2, lg: 10 }}
          container
          direction={'row'}
          sx={{ justifyContent: 'center' }}>
          <Grid item lg={4} mt={{ xs: 4, m: 4, md: 0, lg: 0 }}>
            <img src="/assets/voucher.svg" alt="invite" />
          </Grid>
          <Grid
            container
            sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
            direction={'row'}
            item
            lg={8}
            xs={12}>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal bold 16px/24px Gadugi',
                  textTransform: 'uppercase',
                  letterSpacing: '1.28px',
                  color: '#4EB3E3',
                }}>
                Step 3
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 32px/40px Caveat Brush',
                  textTransform: 'uppercase',
                  letterSpacing: '0px',
                  color: '#1F343E',
                }}>
                GET VOUCHER
              </Typography>
            </Grid>
            <Grid
              item
              mt={{ xs: 1.5, sm: 1.5, md: 0, lg: 0 }}
              textAlign={{ xs: 'center', md: 'left' }}
              lg={10}
              xs={12}>
              <Typography
                sx={{
                  font: 'normal normal normal 16px/24px Noto Sans',
                  letterSpacing: '0px',
                  textTransform: 'none',
                  color: '#1F343E',
                }}>
                Redeem for a $20 hotel booking voucher once you collect 20
                coins.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InfomaticsBox;
