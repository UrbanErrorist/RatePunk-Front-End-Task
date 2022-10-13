import { AccountCircle } from '@mui/icons-material';
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ResponsiveNavBar from '../src/components/navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Grid sx={{ backgroundColor: '#F8CC5D' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResponsiveNavBar></ResponsiveNavBar>
      <Grid container direction={'row'} justifyContent={'space-around'}>
        <Grid item sx={{}}>
          <Card
            sx={{
              m: 10,
              backgroundColor: '#F8F4F9',
              border: '1px solid #1F343E',
              borderRadius: '16px',
              width: '544px',
              height: '797px',
            }}>
            <Grid
              p={8}
              pb={5}
              container
              direction={'column'}
              justifyContent={'space-between'}>
              <Typography
                sx={{
                  font: 'normal normal normal 48px/72px Caveat Brush, cursive',

                  textTransform: 'uppercase',
                  color: '#1F343E',
                }}>
                REFER FRIENDS AND GET REWARDS
              </Typography>
            </Grid>
            <Grid
              p={8}
              pt={0}
              container
              direction={'column'}
              justifyContent={'space-between'}>
              <Typography
                sx={{
                  font: 'normal normal normal 20px/32px Noto Sans',

                  color: '#1F343E',
                }}>
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
              </Typography>
            </Grid>

            <Grid
              p={8}
              pt={0}
              container
              direction={'column'}
              justifyContent={'space-between'}>
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
                      <AccountCircle></AccountCircle>
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
              p={8}
              pt={0}
              container
              direction={'column'}
              justifyContent={'space-between'}>
              <Button>Copy</Button>
            </Grid>
          </Card>
        </Grid>
        <Grid item sx={{}}>
          <Card
            sx={{
              m: 10,
              backgroundColor: '#F8CC5D',
              boxShadow: 'none',
              width: '544px',
              height: '797px',
            }}></Card>
        </Grid>
      </Grid>

      {/* <Grid container direction={'row'}  justifyContent={"space-around"}>
        <Grid item  >
          <Card  sx={{m:10,background: "#F8F4F9 0% 0% no-repeat padding-box", width: "544px",
height: "797px"}}>
            <Grid item>REFER FRIENDS AND GET REWARDS</Grid>
            <Grid item>
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </Grid>{' '}
            <Grid item>
              <TextField></TextField>
            </Grid>
          </Card>
        </Grid>
        <Grid item   direction={'column'}>
          <Card>
            <Grid item container>
              {' '}
              <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                <img src="/assets/logo.svg" alt="Kitty Katty!" />
              </Grid>
              <Grid item container>
                <Grid item>STEP 1</Grid> <Grid item>INVITE FRIENDS</Grid>{' '}
                <Grid item>Refer friends with your unique referral link.</Grid>
              </Grid>
            </Grid>
            <Grid item container>
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </Grid>
            <Grid item container>
              <TextField></TextField>
            </Grid>
          </Card>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Home;
