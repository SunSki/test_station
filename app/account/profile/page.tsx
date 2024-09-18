"use client";
import { useState } from 'react'

export default function ProfileEditPage() {
  const [username, setUsername] = useState('ユーザー名');
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // TODO: Implement profile update with Supabase
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">プロファイル編集</h1>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="username">ユーザー名</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="新しいパスワード"
        />
      </div>
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        保存
      </button>
    </div>
  );
}
