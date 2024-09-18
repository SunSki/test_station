"use client";
import { useState } from 'react'
import { Lock, Mail, UserPlus } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = () => {
    // TODO: Implement Supabase Auth registration
    // const { user, error } = await supabase.auth.signUp({ email, password })
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">登録</h1>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="username">
          ユーザー名
        </label>
        <div className="flex items-center border rounded">
          <UserPlus className="ml-2" />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 outline-none"
            placeholder="ユーザー名"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          メールアドレス
        </label>
        <div className="flex items-center border rounded">
          <Mail className="ml-2" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 outline-none"
            placeholder="メールアドレス"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">
          パスワード
        </label>
        <div className="flex items-center border rounded">
          <Lock className="ml-2" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 outline-none"
            placeholder="パスワード"
          />
        </div>
      </div>
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        登録
      </button>
      <p className="mt-4 text-center">
        既にアカウントをお持ちですか？ <Link href="/login" className="text-blue-500">ログイン</Link>
      </p>
    </div>
  );
}
