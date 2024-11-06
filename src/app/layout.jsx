import localFont from "next/font/local";
import "../assets/css/main.css";
import { WeatherProvider } from "@/components/weather-provider";

const nunitoRegular = localFont({
  src: "../assets/fonts/Nunito-Regular.ttf",
  variable: "--font-nunito-regular",
  /* weight: "100 900", */
});
const nunitoMedium = localFont({
  src: "../assets/fonts/Nunito-Medium.ttf",
  variable: "--font-nunito-medium",
  /* weight: "100 900", */
});

const nunitoSemiBold = localFont({
  src: "../assets/fonts/Nunito-SemiBold.ttf",
  variable: "--font-nunito-semibold",
  /* weight: "100 900", */
});

const nunitoBold = localFont({
  src: "../assets/fonts/Nunito-Bold.ttf",
  variable: "--font-nunito-bold",
  /* weight: "100 900", */
});

const nunitoExtraBold = localFont({
  src: "../assets/fonts/Nunito-ExtraBold.ttf",
  variable: "--font-nunito-extrabold",
  /* weight: "100 900", */
});

export const metadata = {
  title: "Original Peças Agrícolas",
  description: "Site da Original Peças Agrícolas",
  icons: {
    icon: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/logo192.png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#129E53",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <WeatherProvider>
        <body
          className={`${nunitoRegular.variable} ${nunitoMedium.variable} ${nunitoSemiBold.variable} ${nunitoBold.variable} ${nunitoExtraBold.variable}`}
        >
          {children}
        </body>
      </WeatherProvider>
    </html>
  );
}
