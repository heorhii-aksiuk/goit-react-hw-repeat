import generateColor from '../../utils/color-generator'
import s from './Statistic.module.css'

export default function Statistic({ title, stats }) {
  return (
    <div className={s.statistic}>
      {title && (
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{title}</h2>
        </div>
      )}
      <ul className={title ? s.stats : s.statsNoTitle}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={title ? s.item : s.itemNoTitle}
            style={{ backgroundColor: generateColor('abcdef') }}
            key={id}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
