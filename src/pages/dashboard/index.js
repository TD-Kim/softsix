// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import markerImg from 'assets/images/마커표시.png';
import MainCard from 'components/MainCard';

// import OrdersTable from './OrdersTable';
// import ReportAreaChart from './ReportAreaChart';
// import SaleReportCard from './SaleReportCard';
// import UniqueVisitorCard from './UniqueVisitorCard';

// assets

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem',
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none',
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container spacing={3} xs={12} lg={12} sx={{ height: '100%' }}>
      <Grid item xs={12} md={6} bg={6} lg={6}>
        <Grid container direction={'column'} spacing={3}>
          <Grid item xs={12} md={6} bg={6} lg={8}>
            <MainCard sx={{ textAlign: 'center', height: '100%' }}>
              <img
                src={markerImg}
                style={{ maxWidth: '400px', objectFit: 'contain' }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} bg={6} lg={4}>
            <Grid
              container
              spacing={3}
              sx={{ alignItems: 'stretch', height: '100%' }}
            >
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard sx={{ textAlign: 'center', height: '100%' }}>
                  test
                </MainCard>
              </Grid>
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard sx={{ textAlign: 'center', height: '100%' }}>
                  test
                </MainCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Stack spacing={3}>
          <MainCard sx={{ height: '60%', textAlign: 'center' }}>
            <img
              src={markerImg}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </MainCard>
          <MainCard>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard>test</MainCard>
              </Grid>
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard>test</MainCard>
              </Grid>
            </Grid>
          </MainCard>
        </Stack> */}
      </Grid>
      <Grid item xs={12} md={6} bg={6} lg={6}>
        <Stack spacing={3}>
          <MainCard title='Alignment' sx={{ height: '100%' }}>
            <>
              <Typography variant='body2' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='center' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='right'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </>
          </MainCard>
          <MainCard title='Alignment'>
            <>
              <Typography variant='body2' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='center' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='right'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </>
          </MainCard>
          <MainCard title='Alignment'>
            <>
              <Typography variant='body2' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='center' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant='body2' textAlign='right'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </>
          </MainCard>
        </Stack>
      </Grid>
    </Grid>
  );
}
