"use client";
import { useState } from 'react'
import { CreditCard, Wallet } from 'lucide-react'

export default function PaymentPage() {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePayment = () => {
    // TODO: Implement payment processing with Supabase
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">支払い</h1>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="quantity">数量</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">支払い方法</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="credit"
            name="paymentMethod"
            value="credit"
            checked={paymentMethod === 'credit'}
            onChange={() => setPaymentMethod('credit')}
          />
          <label htmlFor="credit" className="ml-2 flex items-center">
            <CreditCard className="mr-1" /> クレジットカード
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="mobile"
            name="paymentMethod"
            value="mobile"
            checked={paymentMethod === 'mobile'}
            onChange={() => setPaymentMethod('mobile')}
          />
          <label htmlFor="mobile" className="ml-2 flex items-center">
            <Wallet className="mr-1" /> モバイルペイメント
          </label>
        </div>
      </div>
      <button
        onClick={handlePayment}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        支払い確認
      </button>
    </div>
  );
}
