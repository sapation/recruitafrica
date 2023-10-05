import { 
  CallToAction, 
  JobCategories, 
  Hero,
  Footer, 
  Process, 
  BlogList, 
  CallToAction2,
  Navigation
 } from '@/components';



export default function Home() {
  return (
    <main className="min-h-screen">
     <Navigation />
     <Hero/>
     <Process />
     <CallToAction />
     <JobCategories />
     <BlogList />
     <CallToAction2 />
     <Footer />
    </main>
  )
}
