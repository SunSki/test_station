"use client";
import { useState } from 'react'

export default function SupportPage() {
  const [faq, setFaq] = useState([
    { question: 'どうやってバッテリーを借りられますか？', answer: 'ホーム画面から地図またはリストでステーションを選択してください。' },
    { question: '支払い方法は何がありますか？', answer: 'クレジットカードとモバイルペイメントをサポートしています。' },
  ]);

  const [contactMessage, setContactMessage] = useState('');

  const handleSend = () => {
    // TODO: Implement contact support via email or in-app messaging
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">カスタマーサポート</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <ul className="space-y-2">
          {faq.map((item, index) => (
            <li key={index} className="border rounded p-2">
              <p className="font-medium">Q: {item.question}</p>
              <p>A: {item.answer}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">お問い合わせ</h2>
        <textarea
          value={contactMessage}
          onChange={(e) => setContactMessage(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="メッセージを入力してください"
        ></textarea>
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">送信</button>
      </section>
    </div>
  );
}
