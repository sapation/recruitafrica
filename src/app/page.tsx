"use client";
import { Hero } from '@/components';
import Navigation from '@/components/Navigation'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="min-h-screen">
     <Navigation />
     <Hero/>
    </main>
  )
}
