import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoNest',
  description: 'EcoNest is an online marketplace that connects eco-conscious consumers with small businesses offering sustainable products. It also features a community forum for knowledge sharing and collaboration among sustainability enthusiasts.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoNest</h1>
      <p className="mt-4 text-lg">EcoNest is an online marketplace that connects eco-conscious consumers with small businesses offering sustainable products. It also features a community forum for knowledge sharing and collaboration among sustainability enthusiasts.</p>
    </main>
  )
}
