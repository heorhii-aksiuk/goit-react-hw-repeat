import FriendListItem from './FriendListItem/FriendListItem'
import s from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  )
}
