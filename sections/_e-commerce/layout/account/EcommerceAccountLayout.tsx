import { useState } from 'react'
import { Stack, Box } from '@mui/material'
import { NAV } from 'config-global'
import useResponsive from 'utils/hooks/useResponsive'
import EcommerceAccountMenu from './EcommerceAccountMenu'

type Props = {
  children: React.ReactNode
}

export default function EcommerceAccountLayout({ children }: Props) {
  const isMdUp = useResponsive('up', 'md')

  const [menuOpen, setMemuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMemuOpen(true)
  }

  const handleMenuClose = () => {
    setMemuOpen(false)
  }

  return (
    <>
      {/* <Container sx={{ my: 5 }}>
        <Typography variant='h3'>حساب کاربری</Typography>
      </Container> */}

      {/* {!isMdUp && (
        <Box
          sx={{
            py: 2,
            mb: 5,
            borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          <Container>
            <Button size='small' color='inherit' onClick={handleMenuOpen}>
              <Iconify icon='carbon:menu' />
            </Button>
          </Container>
        </Box>
      )} */}

      {isMdUp ?
        <Stack
          direction={{
            md: 'row',
          }}
          alignItems={{
            md: 'flex-start',
          }}
          sx={{
            px: 2,
            mt: 3,
            mb: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <EcommerceAccountMenu open={menuOpen} onClose={handleMenuClose} />

          <Box
            sx={{
              flexGrow: 1,
              px: { md: 6, xs: 2 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            {children}
          </Box>
        </Stack>
        : (

          <Stack
            direction={{
              md: 'row',
            }}
            alignItems={{
              md: 'flex-start',
            }}
            sx={{
              px: 2,
              mt: 3,
              mb: {
                xs: 8,
                md: 10,
              },
            }}
          >

            <Box
              sx={{
                flexGrow: 1,
                px: { md: 6, xs: 0 },
                width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
              }}
            >
              {children}
            </Box>
          </Stack>
        )
      }

    </>
  )
}
