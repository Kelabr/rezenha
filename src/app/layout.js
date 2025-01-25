import "./globals.css";
import { GoogleProvider } from "@/context/GoogleContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <GoogleProvider>{children}</GoogleProvider>
      </body>
    </html>
  );
}
