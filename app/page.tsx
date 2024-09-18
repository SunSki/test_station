import Link from 'next/link'
import { MapPin, List, CreditCard, User } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">ホーム</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/map" className="flex items-center p-4 border rounded hover:bg-gray-100">
          <MapPin size={24} className="mr-2" />
          <span>地図を見る</span>
        </Link>
        <Link href="/stations" className="flex items-center p-4 border rounded hover:bg-gray-100">
          <List size={24} className="mr-2" />
          <span>ステーションリスト</span>
        </Link>
        <Link href="/payment" className="flex items-center p-4 border rounded hover:bg-gray-100">
          <CreditCard size={24} className="mr-2" />
          <span>支払い</span>
        </Link>
        <Link href="/account" className="flex items-center p-4 border rounded hover:bg-gray-100">
          <User size={24} className="mr-2" />
          <span>アカウント</span>
        </Link>
      </div>
    </div>
  );
}
