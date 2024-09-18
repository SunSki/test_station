import { useState } from 'react'
import { CreditCard, Plus, Trash } from 'lucide-react'

type PaymentMethod = {
  id: number,
  type: string,
  details: string,
}

export default function PaymentMethodsPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>([
    { id: 1, type: 'クレジットカード', details: '**** **** **** 1234' },
    { id: 2, type: 'モバイルペイメント', details: 'Apple Pay' },
  ]);

  const addMethod = () => {
    // TODO: Implement add payment method
  };

  const removeMethod = (id: number) => {
    setMethods(methods.filter(method => method.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">支払い方法管理</h1>
      <ul className="space-y-2">
        {methods.map(method => (
          <li key={method.id} className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center">
              {method.type === 'クレジットカード' ? <CreditCard className="mr-2" /> : <span className="mr-2">💳</span>}
              <span>{method.details}</span>
            </div>
            <button onClick={() => removeMethod(method.id)} className="text-red-500">
              <Trash size={16} />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addMethod} className="mt-4 flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded">
        <Plus size={16} />
        <span>新しい支払い方法を追加</span>
      </button>
    </div>
  );
}
