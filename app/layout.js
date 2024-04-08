import Sidebar from "@/ui/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Sairam Kaushik",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen px-5 lg:px-10">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
