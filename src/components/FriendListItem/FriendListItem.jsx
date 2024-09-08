import css from '../FriendList/FriendList.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  const classNames = [css['friends-list-item-status']];

  if (isOnline) {
    classNames.push(css['friends-list-item-status-online']);
  } else {
    classNames.push(css['friends-list-item-status-offline']);
  }

  return (
    <li id={id} className={css['friends-list-item']}>
      <img
        src={avatar}
        alt={`${name} avatar`}
        className={css['friends-list-item-img']}
      />
      <p className={css['friends-list-item-name']}>{name}</p>
      <p className={classNames.join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
}
