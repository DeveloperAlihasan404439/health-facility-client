
import './globals.css'
export const metadata = {
  title: 'health facility medical',
  description: 'health facility medical home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
