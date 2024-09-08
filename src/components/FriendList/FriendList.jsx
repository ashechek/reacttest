import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({ list }) {
  const arrayHtmlCode = list.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul className={css['friends-list']}>{arrayHtmlCode}</ul>;
}
