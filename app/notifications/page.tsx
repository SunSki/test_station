"use client";
import { useState } from 'react'
import { Bell, BellOff } from 'lucide-react'

type Notification = {
  id: number,
  type: string,
  message: string,
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'payment', message: '支払いが確認されました。' },
    { id: 2, type: 'inventory', message: 'お気に入りのステーションの在庫が少なくなっています。' },
  ]);

  const toggleNotification = (id: number) => {
    // TODO: Implement toggle notification settings
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">通知</h1>
      <ul className="space-y-2">
        {notifications.map(n => (
          <li key={n.id} className="flex items-center justify-between p-4 border rounded">
            <span>{n.message}</span>
            <button onClick={() => toggleNotification(n.id)} className="text-blue-500">
              {n.type === 'payment' ? <Bell size={20} /> : <BellOff size={20} />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
