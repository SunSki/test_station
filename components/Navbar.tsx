import Link from 'next/link';
import { Home, Map, List, User, CreditCard, Bell, HelpCircle, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between p-4">
        <div className="flex space-x-4">
          <Link href="/" className="flex items-center space-x-1">
            <Home size={20} />
            <span>ホーム</span>
          </Link>
          <Link href="/map" className="flex items-center space-x-1">
            <Map size={20} />
            <span>地図</span>
          </Link>
          <Link href="/stations" className="flex items-center space-x-1">
            <List size={20} />
            <span>ステーションリスト</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/payment-history" className="flex items-center space-x-1">
            <CreditCard size={20} />
            <span>支払い履歴</span>
          </Link>
          <Link href="/account" className="flex items-center space-x-1">
            <User size={20} />
            <span>アカウント</span>
          </Link>
          <Link href="/notifications" className="flex items-center space-x-1">
            <Bell size={20} />
            <span>通知</span>
          </Link>
          <Link href="/support" className="flex items-center space-x-1">
            <HelpCircle size={20} />
            <span>サポート</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-1">
            <Settings size={20} />
            <span>設定</span>
          </Link>
          <Link href="/logout" className="flex items-center space-x-1">
            <LogOut size={20} />
            <span>ログアウト</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
