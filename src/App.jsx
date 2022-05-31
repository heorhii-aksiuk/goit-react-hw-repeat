import Profile from './components/Profile/Profile'
import Container from './components/Container/Container'
import user from './data/user/user.json'
import './App.css'

export default function App() {
  return (
    <>
      <Container>
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </>
  )
}
