import localFont from "next/font/local";

export const archivo = localFont({
  src: [
    {
      path: "./fonts/Archivo-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
})



