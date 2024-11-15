// material-ui
import {
  ApiOutlined,
  ControlOutlined,
  SunOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Grid, Stack, Typography } from '@mui/material';
import markerImg from 'assets/images/마커표시.png';
import IconTitle from 'components/IconTitle';
import MainCard from 'components/MainCard';
import './dashboardIndex.scss';

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
      <Grid item xs={12} md={6} bg={6} lg={6} sx={{ height: '100%' }}>
        {/* 좌측 영역 시작 */}
        <Grid container direction={'column'} spacing={3}>
          {/* 지도영역 시작 */}
          <Grid item xs={12} md={6} bg={6} lg={8}>
            <MainCard sx={{ textAlign: 'center', height: '100%' }}>
              <img
                src={markerImg}
                style={{ maxWidth: '500px', objectFit: 'contain' }}
              />
            </MainCard>
          </Grid>
          {/* 지도영역 끝 */}
          {/* 지도 하단 영역 시작 */}
          <Grid item xs={12} md={6} bg={6} lg={4}>
            <Grid
              container
              spacing={3}
              sx={{ alignItems: 'stretch', height: '100%' }}
            >
              {/* 기상 및 온도센서 영역 시작 */}
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard
                  sx={{ height: '100%' }}
                  title={
                    <IconTitle
                      Component={<SunOutlined />}
                      title={'기상 및 온도센서'}
                    />
                  }
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} lg={6}>
                      <MainCard>대기온도</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>상대습도</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>수평면일사량</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>평균풍속</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>강우감지</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>강설감지</MainCard>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
              {/* 기상 및 온도센서 영역 끝 */}
              {/* 제어상태 영역 시작 */}
              <Grid item xs={12} md={6} bg={6} lg={6}>
                <MainCard
                  sx={{ height: '100%' }}
                  title={
                    <IconTitle
                      Component={<ControlOutlined />}
                      title={'제어상태'}
                    />
                  }
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} lg={6}>
                      <MainCard>제어현황</MainCard>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <MainCard>On/Off</MainCard>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
              {/* 제어상태 영역 끝 */}
            </Grid>
          </Grid>
          {/* 지도 하단 영역 끝 */}
        </Grid>
        {/* 좌측 영역 끝 */}

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
          <MainCard
            title={
              <IconTitle Component={<WarningOutlined />} title={'장애감지'} />
            }
          >
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
          <MainCard
            title={<IconTitle Component={<ApiOutlined />} title={'설치현황'} />}
          >
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
