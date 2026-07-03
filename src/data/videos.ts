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
    title: 'This is how iotdatahub rw works',
    description:
      'Create your account, register your first device, and send your first sensor reading to the cloud.',
    youtubeId: 'X9JlxcwT24k',
    duration: '12:34',
    category: 'Getting Started',
    publishedAt: '2026-01-15',
  },
  {
    id: '2',
    title: 'Know how to connect your ESP32 to IoTDataHub',
    description:
      'Install the IoTDataHub library in Arduino IDE and connect an ESP32 to your channel.',
    youtubeId: 'X9JlxcwT24k',
    duration: '18:20',
    category: 'Hardware',
    publishedAt: '2026-02-03',
  },
  {
    id: '3',
    title: 'Control LED ON/OFF with Esp32 on iotdatahub platform',
    description:
      'Create line charts, gauges, and bar graphs to visualize real-time and historical sensor data.',
    youtubeId: 'OChPwPY2y0Y',
    duration: '15:45',
    category: 'Dashboard',
    publishedAt: '2026-02-20',
  },
  {
    id: '4',
    title: 'Sending Moisture Sensor Data to IoTDataHub with ESP8266',
    description:
      'Configure email, SMS, and webhook notifications when sensor values cross your thresholds.',
    youtubeId: 'lBemxIO5KOc',
    duration: '10:12',
    category: 'Alerts',
    publishedAt: '2026-03-08',
  },
]
