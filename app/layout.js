import "./globals.css";
import localFont from "next/font/local";
import Navigation from "./components/navigation";

const myFont = localFont({
  src: "./my-font.woff2",
  display: "swap",
});

export const metadata = {
  title: "Request a trial | Endy Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
