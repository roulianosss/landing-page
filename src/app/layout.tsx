import './globals.css'


export const metadata = {
  title: 'Nojyk',
  description: 'Livraison de repas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
