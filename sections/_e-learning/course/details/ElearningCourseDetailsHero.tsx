import { alpha, styled } from '@mui/material/styles'
import {
  Box,
  Link,
  Stack,
  Avatar,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Alert,
} from '@mui/material'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
// utils
import { bgGradient } from 'utils/helpers/cssStyles'
import { fShortenNumber } from 'utils/helpers/formatNumber'
// types
import { ICourseProps } from 'types/course'
// _mock
import _mock from '_mock'
// components
import Label from 'components/label'
import Image from 'components/image'
import Iconify from 'components/iconify'
import CustomBreadcrumbs from 'components/custom-breadcrumbs'

import type { Course } from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import Markdown from 'markdown-to-jsx'
import { useIntl } from 'react-intl'

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 50%`,
    endColor: `#aaa 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}))

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps
}

export default function ElearningCourseDetailsHero({ course }: Props) {
  const {
    bestSeller,
  } = course
  const intl = useIntl()
  const { details } = useSelector((state: RootState) => state.course)



  const isMdUp = useResponsive('up', 'md')

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        mt: 3
        // pb: { xs: 5, md: 10 },
      }}
    >
      <Container sx={{ overflow: 'hidden' }}>
        {details?.errorMessage && <Alert severity={details.errorMessage === 'فعال' ? 'success' : 'warning'} sx={{ mb: 3 }}>
          <div dangerouslySetInnerHTML={{
            __html:
              details.errorMessage
          }}></div></Alert>}
        {details?.country && details.country != 'IR' && <Alert severity={'warning'} sx={{ mb: 3 }}>
          لطفا در صورت استفاده از VPN، آن را غیر فعال کنید تا از عملکرد بهتر سایت و تعرفه نیم بهای اینترنت بهره‌مند شوید.
        </Alert>}
        {intl.formatMessage({ id: 'lang' }) === 'fa-IR' &&

          <CustomBreadcrumbs
            links={[
              { name: 'خانه', href: '/' },
              { name: 'دوره ها', href: '/courses' },
              { name: details.titleFa || '' },
            ]}
            sx={{
              mb: { xs: 6 },
            }}
          />}

        <Grid container spacing={{ xs: 5, md: 10 }} direction='row-reverse'>
          <Grid xs={12} md={5}>
            <Stack
              alignItems='center'
              justifyContent='center'
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <StyledOverlay />

              <Image
                alt='hero'
                src={details?.imageUrl as string}
                ratio={isMdUp ? '5/3' : '4/3'}
              />
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <Stack spacing={2} alignItems='flex-start'>
                {bestSeller && (
                  <Label
                    color='warning'
                    variant='filled'
                    sx={{ textTransform: 'uppercase' }}
                  >
                    Best Seller
                  </Label>
                )}

                <Link href={`/categories/${details.categoryId}`}>
                  <Typography variant='overline' sx={{ color: 'primary.main' }}>
                    {details?.category?.title}
                  </Typography>
                </Link>

                <Typography variant='h3' component='h1'>
                  {details?.titleFa}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                  {details?.description && (
                    <Markdown>{details?.description as string}</Markdown>
                  )}
                </Typography>
              </Stack>

              {/* <Stack
                  spacing={1.5}
                  direction='row'
                  alignItems='center'
                  divider={
                    <Divider orientation='vertical' sx={{ height: 20 }} />
                  }
                >
                  <Stack spacing={0.5} direction='row' alignItems='center'>
                    <Iconify
                      icon='carbon:star-filled'
                      sx={{ color: 'warning.main' }}
                    />
                    <Box sx={{ typography: 'h6' }}>
                      {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
                    </Box>

                    {reviews && (
                      <Link variant='body2' sx={{ color: 'text.secondary' }}>
                        ({fShortenNumber(reviews)} reviews)
                      </Link>
                    )}
                  </Stack>

                  <Stack direction='row' sx={{ typography: 'subtitle2' }}>
                    {fShortenNumber(students)}
                    <Box component='span' typography='body2' sx={{ ml: 0.5 }}>
                      students
                    </Box>
                  </Stack>
                </Stack> */}

              {/* <Stack direction='row' alignItems='center'>
                  <Avatar src={teachers[0]?.picture} />

                  <Typography variant='body2' sx={{ ml: 1, mr: 0.5 }}>
                    {teachers[0]?.name}
                  </Typography>

                  {!!teachers.length && (
                    <Link
                      underline='always'
                      color='text.secondary'
                      variant='body2'
                    >
                      + {teachers.length} teachers
                    </Link>
                  )}
                </Stack> */}

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Stack spacing={2}>
                {/* <Stack
                  direction='row'
                  flexWrap='wrap'
                  sx={{
                    '& > *': { my: 0.5, mr: 3 },
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    sx={{ typography: 'body2' }}
                  >
                    <Iconify icon='carbon:time' sx={{ mr: 1 }} />{' '}
                    {`${((details?.totalDuration as number) / 3600).toFixed(
                      0
                    )} ساعت`}
                  </Stack>

                  <Stack
                    direction='row'
                    alignItems='center'
                    sx={{ typography: 'body2' }}
                  >
                    <Iconify icon='carbon:document' sx={{ mr: 1 }} />
                    {`${lessonCount} درس`}
                  </Stack>
                </Stack> */}

                {/* <Stack
                    direction='row'
                    flexWrap='wrap'
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack
                      direction='row'
                      alignItems='center'
                      sx={{ typography: 'body2' }}
                    >
                      <Iconify
                        icon='carbon:content-delivery-network'
                        sx={{ mr: 1 }}
                      />
                      {typeof languages === 'string'
                        ? languages
                        : languages?.join(', ')}
                    </Stack>

                    <Stack
                      direction='row'
                      alignItems='center'
                      sx={{ typography: 'body2' }}
                    >
                      <Iconify icon='carbon:help' sx={{ mr: 1 }} />{' '}
                      {`${quizzes} Quizzes`}
                    </Stack>
                  </Stack> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
