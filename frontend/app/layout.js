// app/layout.js
import './globals.css'; // Bu satır tüm sitenin stilini mühürler

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}