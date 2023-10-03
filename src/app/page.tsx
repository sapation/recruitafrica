"use client";
import { CallToAction, JobCategories, Hero, Process, BlogList } from '@/components';
import Navigation from '@/components/Navigation'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="min-h-screen">
     <Navigation />
     <Hero/>
     <Process />
     <CallToAction />
     <JobCategories />
     <BlogList />
    </main>
  )
}
