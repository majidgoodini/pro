// url:namatek.com/dashboard/mycourses
import { useMyQuery } from 'libs/redux/services/karnama'
import { ElearningCourseItem } from 'sections/_e-learning/course/item'
import Row from 'components/ui/Row'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Col from 'components/ui/Col'

import styles from './dashboard.module.scss'
import type { RootState } from 'libs/redux/store'
import { Alert } from '@mui/material'
import LoadingScreen from 'components/loading-screen/LoadingScreen'
import type { Course } from 'libs/redux/services/karnama'

const DashboardComponent = () => {
  const { data: courses, isLoading } = useMyQuery()
  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!accessToken) push('/')
  }, [accessToken])
  if (isLoading)
    return <LoadingScreen />
  return (
    <Row
      className={styles['dashboard']}
      justify='center'
      gutter={[16, 16]}
      wrap
    >
      {courses ? courses?.map(({ course, cachedUserCourseSeen }) => (
        <span style={{ width: "320px", marginInlineEnd: "1rem", marginBlockEnd: "1rem" }}>
          <ElearningCourseItem duration={cachedUserCourseSeen?.seenMinutes as number ?? 0} course={course as Course} vertical />
        </span>
      )) : <Alert severity="error">در حال حاضر آموزشی برای شما فعال نیست.</Alert>
      }
    </Row>
  )
}

export default DashboardComponent
