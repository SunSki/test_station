"use client";

import { useState } from 'react'
import { Lock, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement Supabase Auth login
    // const { user, error } = await supabase.auth.signIn({ email, password })
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">ログイン</h1>
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
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        ログイン
      </button>
      <p className="mt-4 text-center">
        アカウントをお持ちでないですか？ <Link href="/register" className="text-blue-500">登録</Link>
      </p>
      <p className="mt-2 text-center">
        <Link href="/password-reset" className="text-blue-500">パスワードを忘れましたか？</Link>
      </p>
    </div>
  );
}
