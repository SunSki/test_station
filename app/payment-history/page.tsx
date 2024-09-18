"use client";
import { useState } from 'react'

type Transaction = {
  id: number,
  date: string,
  station: string,
  amount: number,
  method: string,
}

export default function PaymentHistoryPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, date: '2023-10-01', station: 'ステーションA', amount: 500, method: 'クレジットカード' },
    { id: 2, date: '2023-09-25', station: 'ステーションB', amount: 300, method: 'モバイルペイメント' },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">支払い履歴</h1>
      <ul className="space-y-2">
        {transactions.map(tx => (
          <li key={tx.id} className="p-4 border rounded">
            <p>日付: {tx.date}</p>
            <p>ステーション: {tx.station}</p>
            <p>金額: ¥{tx.amount}</p>
            <p>支払い方法: {tx.method}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
