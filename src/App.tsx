import { Profile } from './types/alltypes'
import Profilecard from './components/profilecard'
import jokedata from './data.json'
import './App.css'

function App() {
 

  return (
    <div className='container'>
      
      {
       jokedata.map((user: Profile) => {
            return(
              <Profilecard
              key={user.id}
              id ={user.id}
              name={user.name}
              age={user.age}
              profilepicture={user.profilepicture}
              bio={user.bio}  />
            )
})
      }
    </div>
  )
}

export default App
