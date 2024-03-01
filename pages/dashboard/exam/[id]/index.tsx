import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import { EcommerceAccountExamView } from 'sections/_e-commerce/view'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>

      <EcommerceAccountExamView />
    </>
  )
}

export default DashboardProfilePage
