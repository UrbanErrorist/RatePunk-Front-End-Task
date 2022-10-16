import {
  Card,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  DialogContent,
  TextField,
  Alert,
  Snackbar,
  useTheme,
} from '@mui/material';
import * as Yup from 'yup';
import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useEffect } from 'react';

interface EmailFormValues {
  email: string;
  submit?: boolean;
}

const styles = () => ({
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'yellow !important',
  },
});

const ReferralTextBox = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | null>('');
  const [email, setEmail] = React.useState<string | null>(null);
  const [referralLink, setReferralLink] = React.useState<string | null>(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitEmail = async (values: EmailFormValues) => {
    axios
      .put('/api/update_email', { ...values, id: values.email })
      .then((res: AxiosResponse) => {
        setOpen(true);
        setMessage(res.data.message);
        setError(false);
        getLastEmail();
        setReferralLink('https://ratepunk.com/referral');
      })
      .catch((err) => {
        setError(true);
        setOpen(true);
        setMessage(err.message);
      });
  };

  const getLastEmail = React.useCallback(async () => {
    await axios.get('/api/update_email').then((res) => {
      if (res.data) {
        setEmail(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getLastEmail();
  }, [getLastEmail]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required')
      .test(
        'is-valid',
        'Email already registered. Use different email!',
        (value) => {
          if (value) {
            return value.toLowerCase() !== email?.toLowerCase();
          }
          return false;
        },
      ),
  });

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
      <Formik
        initialValues={{
          email: '',

          submit: null,
        }}
        validationSchema={validationSchema}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting },
        ) => {
          try {
            await handleSubmitEmail(_values as unknown as EmailFormValues);
            setStatus({ success: true });
          } catch (err) {
            const error: string =
              err instanceof TypeError ? err.message : 'Unknown error';
            setStatus({ success: false });
            setErrors({ submit: error });
            setSubmitting(false);
          }
        }}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
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
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
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
                {errors.email}
              </Typography>
              {!referralLink ? (
                <>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      placeholder="Enter your email address"
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      defaultValue={values.email}
                      label={'Email'}
                      multiline={false}
                      required
                      rows={1}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        border: '1px solid #1F343E',
                        borderRadius: '8px',
                        '& fieldset': { border: 'none' },
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
                  <Grid
                    p={{ xs: 0, lg: 0 }}
                    pt={{ xs: 2, lg: 2 }}
                    container
                    direction={'column'}
                    justifyContent={'space-between'}>
                    <Button
                      type="submit"
                      disabled={Boolean(errors.submit) || isSubmitting}
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
                </>
              ) : (
                <Grid container>
                  <Grid container direction={'row'} item lg={10} xs={12}>
                    <Grid lg={1.5} item sx={{}} p={1}>
                      <img src="/assets/success.svg" alt="Kitty Katty!" />
                    </Grid>
                    <Grid lg={9} item sx={{}} p={1} pt={1.5}>
                      <Typography
                        sx={{
                          font: 'normal normal bold 16px/24px Noto Sans',
                          textTransform: 'none',

                          color: '#1F343E',
                        }}>
                        Your email is confirmed!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={10} xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      disabled
                      inputProps={{ disableUnderline: true }}
                      sx={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        borderRadius: { md: '8px 0px 0px 8px', xs: 2 },
                        border: '1px solid #1F343E',
                        '& fieldset': { border: 'none' },
                      }}
                      value={referralLink}></TextField>
                  </Grid>
                  <Grid item lg={2} xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        height: { lg: '58px', xs: '56px' },
                        background: '#4EB3E3 0% 0% no-repeat padding-box',
                        border: '1px solid #1F343E',
                        borderRadius: { md: '0px 8px 8px 0px', xs: 2 },
                        mt: { md: 0, xs: 2 },
                      }}>
                      Copy
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid
              p={{ xs: 2, lg: 8 }}
              pt={{ xs: 6, lg: 20 }}
              mb={{ xs: 2, lg: 0 }}
              pb={{ xs: 2, lg: 4 }}
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
          </form>
        )}
      </Formik>
      <Snackbar
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        open={open}>
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ReferralTextBox;
