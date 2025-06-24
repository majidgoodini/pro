import PlayComponent from 'containers/play'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'
import Script from 'next/script'

PlayPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function PlayPage() {
  return (
    <>
      <Head>
        <title>ویدیوها</title>
      </Head>

      <PlayComponent />
      <Script src="https://proback.namatek.com/js/hls.min.js" strategy="afterInteractive" />
    </>
  )
}

export default PlayPage
