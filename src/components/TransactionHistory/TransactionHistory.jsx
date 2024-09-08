import css from './TransactionHistory.module.css';

import TransactionHistoryItem from './TransactionsHistoryItem.jsx';

export default function TransactionHistory({ items }) {
  const arrayHtmlCode = items.map(transaction => (
    <TransactionHistoryItem
      key={transaction.id}
      type={transaction.type}
      amount={transaction.amount}
      currency={transaction.currency}
    />
  ));

  return (
    <table className={css['table']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{arrayHtmlCode}</tbody>
    </table>
  );
}
