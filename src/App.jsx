import './App.css';

import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

import userData from './userData.json';
import friendsList from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList list={friendsList} />
      <TransactionHistory items={transactions} />
    </>
  );
}
