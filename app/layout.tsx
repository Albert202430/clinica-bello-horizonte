import Header from './components/Header'; // Ajusta la ruta según dónde creaste la carpeta
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header /> {/* El Header se renderiza arriba de todo */}
        <main>{children}</main>
      </body>
    </html>
  );
}