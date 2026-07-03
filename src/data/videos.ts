export type VideoTutorial = {
  id: string
  title: string
  description: string
  youtubeId: string
  duration: string
  category: string
  publishedAt: string
}

/** Static placeholder data — replace with database/API fetch later. */
export const videoTutorials: VideoTutorial[] = [
  {
    id: '1',
    title: 'Getting Started with IoTDataHub',
    description:
      'Create your account, register your first device, and send your first sensor reading to the cloud.',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '12:34',
    category: 'Getting Started',
    publishedAt: '2026-01-15',
  },
  {
    id: '2',
    title: 'Arduino & ESP32 Library Setup',
    description:
      'Install the IoTDataHub library in Arduino IDE and connect an ESP32 to your channel.',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '18:20',
    category: 'Hardware',
    publishedAt: '2026-02-03',
  },
  {
    id: '3',
    title: 'Building Your First Dashboard',
    description:
      'Create line charts, gauges, and bar graphs to visualize real-time and historical sensor data.',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '15:45',
    category: 'Dashboard',
    publishedAt: '2026-02-20',
  },
  {
    id: '4',
    title: 'Setting Up Smart Alerts',
    description:
      'Configure email, SMS, and webhook notifications when sensor values cross your thresholds.',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '10:12',
    category: 'Alerts',
    publishedAt: '2026-03-08',
  },
]
