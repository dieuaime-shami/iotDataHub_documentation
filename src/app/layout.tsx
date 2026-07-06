import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Link from 'next/link'
import 'nextra-theme-docs/style.css'
import './globals.css'
import logo from '../../public/IOT_DATA_HUB.png'
import Image from 'next/image'

export const metadata = {
  title: {
    default: 'IoTDataHub Documentation',
    template: '%s – IoTDataHub Docs',
  },
  description:
    'Official documentation for IoTDataHub — connect devices, stream data, and build smart IoT dashboards.',
  icons: {
    icon: '../../public/IOT_DATA_HUB.png'
  }
}

const navbar = (
  <Navbar
    logo={
      <span className="iot-logo">
        <Image
          src={logo}
          alt=""
          width={96}
          height={96}
          priority
          sizes="(max-width: 640px) 36px, (max-width: 1024px) 56px, 72px"
          className="iot-logo-img"
        />
        IoTDataHub
      </span>
    }
    logoLink="/"
  >
    <div className="iot-nav-links">
      <Link
        href="https://www.iotdatahub.rw"
        className="iot-nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Platform ↗
      </Link>
      <Link href="https://www.iotdatahub.rw/pricing" className="iot-nav-link">
        Pricing
      </Link>
    </div>
  </Navbar>
)

const footer = (
  <Footer className="iot-footer">
    <div className="iot-footer-inner">
      <p>
        © {new Date().getFullYear()} IoTDataHub · IOT PIONEERS Ltd ·{' '}
        <a href="mailto:datahubiot@gmail.com">datahubiot@gmail.com</a>
      </p>
      <div className="iot-footer-links">
        <a href="https://www.iotdatahub.rw/" target="_blank" rel="noopener noreferrer">
          Platform
        </a>
        <a href="https://www.youtube.com/@IoTDataHub" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: { light: 36, dark: 36 },
          saturation: { light: 100, dark: 100 },
          lightness: { light: 55, dark: 55 },
        }}
        backgroundColor={{
          light: '#FBFCFE',
          dark: '#131B20',
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/iot-pioneers/iot-pioneer-docs"
          footer={footer}
          darkMode={true}
          nextThemes={{ defaultTheme: 'light', attribute: 'class' }}
          editLink={null}
          feedback={{ content: null, labels: 'feedback' }}
          copyPageButton={false}
          sidebar={{
            autoCollapse: true,
            defaultMenuCollapseLevel: 1,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
