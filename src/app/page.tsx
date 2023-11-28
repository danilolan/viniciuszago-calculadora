"use client"

import { ThemeProvider } from "@mui/material"
import { AppTheme } from "@/themes"
import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <ThemeProvider theme={AppTheme}>
      <main className="flex items-center justify-center text-primary w-full">
        <Calculator/>
      </main>
    </ThemeProvider>
  )
}
