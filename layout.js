
import './globals.css'

export const metadata = {
  title: 'Organika Agendas',
  description: 'Agendas y planners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
