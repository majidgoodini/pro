// url:namatek.com/dashboard/Exam
import { Alert, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { EcommerceAccountLayout } from '../layout'
import {
  DistinctedPlayLog,
  useGetDistinctedPlayLogsQuery,
} from 'libs/redux/services/karnama'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Button from 'components/ui/Button'
import Iconify from 'components/iconify/Iconify'
import LoadingScreen from 'components/loading-screen/LoadingScreen'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
dayjs.extend(jalaliday);


function EcommerceAccountExam() {
  const { data, isLoading } = useGetDistinctedPlayLogsQuery()

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <EcommerceAccountLayout>


      <Row style={{ flexWrap: 'wrap' }}>

        <Col xxs={24} md={18}>
          <Typography variant='h4' sx={{ mb: 3 }}>
            آزمون و مدرک
          </Typography>
          <Typography variant='body1' sx={{ mb: 3 }}>
            برای شرکت در آزمون بایستی حداقل 70% آموزش را مشاهده کرده باشید و از طریق دکمه "ورود" به سامانه آزمون‌گیر نماتک وارد شوید.
          </Typography>
          <Typography variant='body1' sx={{ mb: 3 }}>
            معیار قبولی در آزمون نمره بالای 70% است، در نظر داشته باشید در صورتی که در آزمون مردود شوید تا 2 ماه اجازه آزمون مجدد نخواهید داشت.
          </Typography>
          <Typography variant='h5' sx={{ mb: 3 }}>
            همچنین به موارد زیر توجه کنید:
          </Typography>
          <Typography variant='body1' sx={{ mb: 3 }}>
قبل از آزمون از پایدار بودن اینترنت خود مطمئن شوید.<br/>
هرگونه فیلترشکن، پروکسی یا وی پی ان را قطع کنید.<br/>
ترجیحا با سیستم کامپیوتر یا لپ تاپ در آزمون شرکت کنید.<br/>
</Typography>
        </Col>
        <Col xxs={24} md={6}>

          <img src="https://cdn.namatek.com/Certificate.jpg"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Col>
      </Row>
      
        <Button className='mt-2' btnType='primary' href="/dashboard/aexam">ورود به سامانه آزمون </Button>
        {/* <Button className='mt-2' btnType='primary' href="http://my.namatek.com/" target='_blank'>ورود به سامانه آزمون قدیم</Button>*/}
        {data && data.length ? <>
        <h3 className='mb-1 mt-3'><Iconify
          icon={'cil:chart'}
          width={24}
          marginRight={0.5} />
          میزان مشاهده هربسته</h3>
        <TableContainer >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>دوره</TableCell>
                <TableCell >مشاهده(دقیقه)</TableCell>
                <TableCell >درصد مشاهده</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} key={row.courseId} >
                  <TableCell component="th" scope="row">
                    {row.titleFa}
                  </TableCell>
                  <TableCell >{row.seenMinutes?.toLocaleString()}</TableCell>
                  <TableCell >{((row.seenMinutes as number) * 100 / (row.totalMinutes as number)).toFixed()}%</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </> :
        null
      }

    </EcommerceAccountLayout >
  )
}

export default EcommerceAccountExam
