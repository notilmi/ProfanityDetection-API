import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Profanity Detection",
  description: "Stop Letting Profanity Took Over Your App😡💢",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" />
        <Header />
        <Box
          sx={{
            maxWidth: "1280px",
            mr: "auto",
            ml: "auto",
            p: { xs: 2, md: 2 },
            mt: { xs: 4, md: 0 },
            mb: "12dvh",
          }}
        >
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
