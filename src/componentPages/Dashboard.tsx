import { Footer, Navigation, Sidebar } from '@/components'
import Profile from './Profile'
import Education from './Education'
import Work from './Work'
import Referee from './Referee'

type Props = {}

function Dashboard({}: Props) {
  return (
    <main className="min-h-screen">
        <Referee />
     </main>
  )
}

export default Dashboard