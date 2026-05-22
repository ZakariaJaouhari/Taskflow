import { Inter } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header
          style={{
            background: '#1B8C3E',
            color: 'white',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ margin: 0, fontWeight: 700 }}>TaskFlow</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/login" style={{ color: 'white' }}>
              Login
            </a>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
