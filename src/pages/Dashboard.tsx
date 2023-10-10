import { Footer, Navigation, Sidebar } from '@/components'
import Profile from './profile'

type Props = {}

function Dashboard({}: Props) {
  return (
    <main className="min-h-screen">
        <Navigation />
        <div className=''>
            <Profile />
        </div>
        <Footer />
     </main>
  )
}

export default Dashboard