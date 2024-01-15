import '@/app/ui/global.css'
import { inter, noto_Sans_Mono } from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
