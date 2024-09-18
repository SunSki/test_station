"use client";

import { useEffect, useState } from 'react'

export default function MapPage() {
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [stations, setStations] = useState<Array<{ id: number, name: string, lat: number, lng: number, inventory: number }>>([]);

  useEffect(() => {
    // TODO: Fetch user location and stations data
    // Mock data for wireframe
    setUserLocation({ lat: 35.6895, lng: 139.6917 }); // Tokyo coordinates
    setStations([
      { id: 1, name: 'ステーションA', lat: 35.6900, lng: 139.7000, inventory: 5 },
      { id: 2, name: 'ステーションB', lat: 35.6950, lng: 139.7000, inventory: 2 },
      { id: 3, name: 'ステーションC', lat: 35.7000, lng: 139.7100, inventory: 0 },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">地図</h1>
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
        <p>インタラクティブマップがここに表示されます</p>
      </div>
      {stations.map((station) => (
        <div key={station.id} className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{station.name}</h2>
          <p>在庫数: {station.inventory}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">予約する</button>
        </div>
      ))}
    </div>
  );
}
