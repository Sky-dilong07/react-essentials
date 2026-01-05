import { UserDetails } from './UserDetails'
import './App.css'
import { Alert } from './Alert'
import { NewButton } from './NewButton'


function App() {
  

  return (
    <div>
      <h1>React Compnonents </h1>
      <Alert />
      <NewButton />
     <UserDetails name="BruceWayne" Active={true} />
    </div>
  )
}

export default App
