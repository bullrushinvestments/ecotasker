import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoTasker',
  description: 'EcoTasker offers personalized sustainable task automation for businesses and individuals to reduce their carbon footprint while streamlining daily tasks through AI-driven software.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoTasker</h1>
      <p className="mt-4 text-lg">EcoTasker offers personalized sustainable task automation for businesses and individuals to reduce their carbon footprint while streamlining daily tasks through AI-driven software.</p>
    </main>
  )
}
