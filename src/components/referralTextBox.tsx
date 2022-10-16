import {
  Card,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@mui/material';

const ReferralTextBox = () => {
  return (
    <Card
      sx={{
        m: { xs: 2, sm: 2, md: 3, lg: 10 },

        backgroundColor: '#F8F4F9',
        border: '1px solid #1F343E',
        borderRadius: '16px',
        width: { lg: '544px', xs: 'auto' },
        height: 'auto',
      }}>
      <Grid
        p={{ xs: 2, lg: 8 }}
        pb={{ xs: 0, lg: 2 }}
        pt={{ xs: 3, lg: 1 }}
        container
        direction={'column'}
        justifyContent={'space-between'}>
        <Typography
          sx={{
            font: {
              md: 'normal normal normal 48px/72px Caveat Brush, cursive',
              xs: 'normal normal normal 32px/48px Caveat Brush',
            },

            textTransform: 'uppercase',
            color: '#1F343E',
          }}>
          REFER FRIENDS AND GET REWARDS
        </Typography>
      </Grid>
      <Grid
        p={{ xs: 2, lg: 8 }}
        pt={{ xs: 2, lg: 2 }}
        pb={{ xs: 2, lg: 4 }}
        container
        direction={'column'}
        justifyContent={'space-between'}>
        <Typography
          sx={{
            font: {
              md: 'normal normal normal 20px/32px Noto Sans',
              xs: 'normal normal normal 16px/24px Noto Sans',
            },

            color: '#1F343E',
          }}>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </Typography>
      </Grid>

      <Grid
        p={{ xs: 2, lg: 8 }}
        pt={{ xs: 0, lg: 0 }}
        pb={{ xs: 2, lg: 0 }}
        container
        direction={'column'}
        justifyContent={'space-between'}>
        <Typography
          sx={{
            font: 'normal normal normal 12px/24px Noto Sans',
            color: '#ED6F82',
            pb: 0.5,
          }}
          color={'error'}>
          Error State
        </Typography>
        <FormControl variant="outlined">
          <OutlinedInput
            placeholder="Enter your email address"
            sx={{
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              border: '1px solid #1F343E',
              borderRadius: '8px',
            }}
            id="outlined-adornment-weight"
            startAdornment={
              <InputAdornment position="end">
                <img src="/assets/email.svg" alt="Email" />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              sx: {
                color: '#6D7A80',
                pl: 2,
                font: 'normal normal normal 20px/20px Noto Sans',
              },
            }}
          />
        </FormControl>
      </Grid>

      <Grid
        p={{ xs: 2, lg: 8 }}
        pt={{ xs: 0, lg: 2 }}
        container
        direction={'column'}
        justifyContent={'space-between'}>
        <Button
          sx={{
            background: '#4EB3E3 0% 0% no-repeat padding-box',
            border: '1px solid #1F343E',
            borderRadius: '8px',
            opacity: 1,
            height: '64px',
          }}>
          <Typography
            sx={{
              font: 'normal normal bold 20px/32px Noto Sans',
              textTransform: 'none',

              color: '#FFFFFF',
            }}>
            Get Referral Link
          </Typography>
        </Button>
      </Grid>

      <Grid
        p={{ xs: 2, lg: 8 }}
        pt={{ xs: 6, lg: 4 }}
        mb={{ xs: 2, lg: 4 }}
        container
        direction={'column'}
        justifyContent={'space-between'}>
        <Typography
          sx={{
            font: 'normal normal normal 16px/32px Noto Sans',
            textTransform: 'none',

            color: '#6D7A80',
          }}>
          Limits on max rewards apply.
        </Typography>
      </Grid>
    </Card>
  );
};

export default ReferralTextBox;
