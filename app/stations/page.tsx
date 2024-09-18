"use client";
import Link from 'next/link'
import { useState } from 'react'

type Station = {
  id: number,
  name: string,
  address: string,
  distance: number,
  inventory: number,
}

export default function StationsPage() {
  const [stations, setStations] = useState<Station[]>([
    { id: 1, name: 'ステーションA', address: '東京都港区', distance: 1.2, inventory: 5 },
    { id: 2, name: 'ステーションB', address: '東京都渋谷区', distance: 2.5, inventory: 2 },
    { id: 3, name: 'ステーションC', address: '東京都新宿区', distance: 3.0, inventory: 0 },
  ]);

  const sortByDistance = () => {
    const sorted = [...stations].sort((a, b) => a.distance - b.distance);
    setStations(sorted);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ステーションリスト</h1>
      <button onClick={sortByDistance} className="mb-4 bg-gray-300 px-4 py-2 rounded">距離順に並び替え</button>
      <ul className="space-y-2">
        {stations.map(station => (
          <li key={station.id} className="p-4 border rounded">
            <Link href={`/stations/${station.id}`}>
                <h2 className="text-xl font-semibold">{station.name}</h2>
                <p>{station.address}</p>
                <p>距離: {station.distance} km</p>
                <p>在庫数: {station.inventory}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
