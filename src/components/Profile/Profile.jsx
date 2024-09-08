import css from './Profile.module.css';

const getAge = age => {
  console.log('Now ur ${age} years old');
};

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css['div-profile']}>
      <div className={css['div-main-info']}>
        <img src={image} alt={`${name}'s avatar`} className={css.photo} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css['stats-values']}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css['stats-values']}>{stats.views}</span>
        </li>
        <li>
          <button onClick={() => getAge(51)}>HIIIIIII</button>
        </li>
        <li>
          <span>Likes</span>
          <span className={css['stats-values']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
