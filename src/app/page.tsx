"use client"

import { CircularProgress, ThemeProvider } from "@mui/material"
import { AppTheme } from "@/themes"
import Calculator from "@/components/Calculator"
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => setIsLoading(false), 500)

  return (
    <ThemeProvider theme={AppTheme}>
      <main className="flex items-center justify-center text-primary w-full">
        {
          isLoading && 
          <div className="z-10 w-screen h-screen bg-primary absolute flex items-center justify-center">
            <CircularProgress color="secondary" />
          </div>
        }
        <Calculator/>
      </main>
    </ThemeProvider>
  )
}
