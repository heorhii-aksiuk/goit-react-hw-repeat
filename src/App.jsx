import Container from './components/Container/Container'
import Profile from './components/Profile/Profile'
import Statistic from './components/Statistic/Statistic'
import FriendList from './components/FriendList/FriendList'

import user from './data/user.json'
import statistic from './data/statistic.json'
import friends from './data/friends.json'

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
      <Container>
        <Statistic title="Upload stats" stats={statistic}></Statistic>
      </Container>
      <Container>
        <Statistic stats={statistic}></Statistic>
      </Container>
      <Container>
        <FriendList friends={friends}></FriendList>
      </Container>
    </>
  )
}
