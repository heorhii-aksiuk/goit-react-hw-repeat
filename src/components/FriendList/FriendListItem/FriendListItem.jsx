import s from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.name}>{name}</p>
    </li>
  )
}
