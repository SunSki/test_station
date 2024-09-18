"use client";
import Link from 'next/link';

export default function AccountPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">アカウント管理</h1>
      <div className="space-y-2">
        <Link href="/account/profile" className="block p-4 border rounded hover:bg-gray-100">
          プロファイル編集
        </Link>
        <Link href="/account/payment-methods" className="block p-4 border rounded hover:bg-gray-100">
          支払い方法管理
        </Link>
        <Link href="/logout" className="block p-4 border rounded hover:bg-gray-100">
          ログアウト
        </Link>
      </div>
    </div>
  );
}