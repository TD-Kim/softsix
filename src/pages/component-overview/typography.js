// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'components/MainCard';
import ComponentSkeleton from './ComponentSkeleton';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const columns = [
  { field: 'id', headerName: 'No', width: 90 },
  {
    field: 'title',
    headerName: '제목',
    headerAlign: 'center',
    width: 950,
    editable: true,
  },
  {
    field: 'writer',
    headerName: '작성자',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: '작성일',
    headerAlign: 'center',
    align: 'center',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'count',
    headerName: '조회수',
    headerAlign: 'center',
    align: 'center',
    sortable: true,
    width: 160,
    // valueGetter: (value, row) => `${row.title || ''} ${row.writer || ''}`,
  },
];

const rows = [
  {
    id: 1,
    writer: '관리자',
    title: '더욱 진화한 스마트 그늘막, 출시',
    createdAt: '2024-07-14 08:23:47',
    age: 14,
    count: 129,
  },
  {
    id: 2,
    writer: '관리자',
    title: '여름 맞이, 스마트 그늘막 서비스 출시',
    createdAt: '2024-08-02 14:10:55',
    age: 31,
    count: 11,
  },
  {
    id: 3,
    writer: '관리자',
    title: '스마트 그늘막, 스마트하게 여름을 즐기는 법',
    createdAt: '2024-08-19 19:04:12',
    age: 31,
    count: 9,
  },
  {
    id: 4,
    writer: '관리자',
    title: '스마트 그늘막 설치 서비스 제공 시작',
    createdAt: '2024-09-07 12:35:29',
    age: 11,
    count: 32,
  },
  {
    id: 5,
    writer: '관리자',
    title: '접이식 그늘막으로 바캉스를 준비하세요',
    createdAt: '2024-09-25 11:16:03',
    age: null,
    count: 48,
  },
  {
    id: 6,
    writer: '관리자',
    title: '스마트 그늘막 설치 방법과 관리 팁 안내',
    createdAt: '2024-10-03 16:47:18',
    age: 15,
    count: 67,
  },
  {
    id: 7,
    writer: '관리자',
    title: '새로운 접이식 그늘막, 간편한 사용법 안내',
    createdAt: '2024-10-17 17:55:39',
    age: 44,
    count: 55,
  },
  {
    id: 8,
    writer: '관리자',
    title: '접이식 그늘막, 이제 온라인으로 예약하세요',
    createdAt: '2024-10-22 13:28:59',
    age: 36,
    count: 86,
  },
  {
    id: 9,
    writer: '관리자',
    title: '스마트 그늘막 제품 및 서비스 가격 안내',
    createdAt: '2024-11-05 12:42:11',
    age: 65,
    count: 21,
  },
];

export default function ComponentTypography() {
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <Stack spacing={3}>
            <MainCard title=''>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  sorting: {
                    sortModel: [{ field: 'id', sort: 'desc' }],
                  },
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
              />
              {/* <Stack spacing={0.75} sx={{ mt: -1.5 }}>
                <Typography variant='h1'>Inter</Typography>
                <Typography variant='h5'>Font Family</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Regular</Typography>
                  <Typography variant='h6'>Medium</Typography>
                  <Typography variant='h6'>Bold</Typography>
                </Breadcrumbs>
              </Stack> */}
            </MainCard>
            {/* <MainCard title='Heading'>
              <Stack spacing={2}>
                <Typography variant='h1'>H1 Heading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 38px</Typography>
                  <Typography variant='h6'>Weight: Bold</Typography>
                  <Typography variant='h6'>Line Height: 46px</Typography>
                </Breadcrumbs>
                <Divider />

                <Typography variant='h2'>H2 Heading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 30px</Typography>
                  <Typography variant='h6'>Weight: Bold</Typography>
                  <Typography variant='h6'>Line Height: 38px</Typography>
                </Breadcrumbs>
                <Divider />

                <Typography variant='h3'>H3 Heading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 24px</Typography>
                  <Typography variant='h6'>Weight: Regular & Bold</Typography>
                  <Typography variant='h6'>Line Height: 32px</Typography>
                </Breadcrumbs>
                <Divider />

                <Typography variant='h4'>H4 Heading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 20px</Typography>
                  <Typography variant='h6'>Weight: Bold</Typography>
                  <Typography variant='h6'>Line Height: 28px</Typography>
                </Breadcrumbs>
                <Divider />

                <Typography variant='h5'>H5 Heading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 16px</Typography>
                  <Typography variant='h6'>
                    Weight: Regular & Medium & Bold
                  </Typography>
                  <Typography variant='h6'>Line Height: 24px</Typography>
                </Breadcrumbs>
                <Divider />

                <Typography variant='h6'>H6 Heading / Subheading</Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 14px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 22px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard>
            <MainCard title='Body 1'>
              <>
                <Typography variant='body1' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 14px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Body 2'>
              <>
                <Typography variant='body2' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Subtitle 1'>
              <>
                <Typography variant='subtitle1' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 14px</Typography>
                  <Typography variant='h6'>Weight: Medium</Typography>
                  <Typography variant='h6'>Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Subtitle 2'>
              <>
                <Typography variant='subtitle2' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Medium</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Caption'>
              <Stack spacing={1}>
                <Typography variant='caption'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard> */}
          </Stack>
        </Grid>
        {/* <Grid item xs={12} lg={6}>
          <Stack spacing={3}>
            <MainCard title='Alignment'>
              <>
                <Typography variant='body2' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Typography variant='body2' textAlign='center' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Typography variant='body2' textAlign='right'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </>
            </MainCard>
            <MainCard title='Gutter Bottom'>
              <>
                <Typography variant='body1' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Overline'>
              <Stack spacing={1.5}>
                <Typography variant='overline'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard>
            <MainCard title='Link'>
              <Stack spacing={1.5}>
                <Link href='#'>www.mantis.com</Link>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 12px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 20px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard>
            <MainCard title='Colors'>
              <>
                <Typography variant='h6' color='textPrimary' gutterBottom>
                  This is textPrimary text color.
                </Typography>
                <Typography variant='h6' color='textSecondary' gutterBottom>
                  This is textSecondary text color.
                </Typography>
                <Typography variant='h6' color='primary' gutterBottom>
                  This is primary text color.
                </Typography>
                <Typography variant='h6' color='secondary' gutterBottom>
                  This is secondary text color.
                </Typography>
                <Typography variant='h6' color='success' gutterBottom>
                  This is success text color.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{ color: 'warning.main' }}
                  gutterBottom
                >
                  This is warning text color.
                </Typography>
                <Typography variant='h6' color='error' gutterBottom>
                  This is error text color.
                </Typography>
              </>
            </MainCard>
            <MainCard title='Paragraph'>
              <>
                <Typography variant='body1' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 14px</Typography>
                  <Typography variant='h6'>Weight: Regular</Typography>
                  <Typography variant='h6'>Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title='Font Style'>
              <>
                <Typography
                  variant='body1'
                  gutterBottom
                  sx={{ fontStyle: 'italic' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography
                  variant='subtitle1'
                  gutterBottom
                  sx={{ fontStyle: 'italic' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography variant='h6'>Size: 14px</Typography>
                  <Typography variant='h6'>
                    Weight: Italic Regular & Italic Bold
                  </Typography>
                  <Typography variant='h6'>Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
          </Stack>
        </Grid> */}
      </Grid>
    </ComponentSkeleton>
  );
}
