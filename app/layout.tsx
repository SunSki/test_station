import '../styles/globals.css'
import Navbar from '../components/Navbar.tsx'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
