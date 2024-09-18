"use client";
import { useEffect } from 'react'

type ErrorProps = {
  error: Error,
  reset: () => void,
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">エラーが発生しました。</h1>
      <p className="mb-4">もう一度お試しください。</p>
      <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">再試行</button>
    </div>
  );
}
