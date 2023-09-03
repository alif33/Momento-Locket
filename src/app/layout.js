import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/providers/ReduxProvider ";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-[#FBFBFB]">
          <ReduxProvider>
            <Header/>
              {children}
            <Footer/>
          </ReduxProvider>
      </body>
    </html>
  )
}
