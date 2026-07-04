import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy flat URLs
      { source: '/devices', destination: '/connect-devices', permanent: true },
      { source: '/dashboard', destination: '/dashboards', permanent: true },
      { source: '/resources', destination: '/resources/videos', permanent: true },
      // Previous platform/ URLs
      { source: '/platform', destination: '/connect-devices', permanent: true },
      { source: '/platform/devices', destination: '/connect-devices/arduino-library', permanent: true },
      { source: '/platform/dashboard', destination: '/dashboards', permanent: true },
      { source: '/platform/alerts', destination: '/alerts', permanent: true },
    ]
  },
}

export default withNextra(nextConfig)
