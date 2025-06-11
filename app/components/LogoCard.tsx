import React from "react";

type LogoCardProps = {
  nama: string;
  kategori: string;
  gambar: string[];
};

export default function LogoCard({ nama, kategori, gambar }: LogoCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-center font-semibold mb-2">
        {nama} <span className="text-gray-500">({kategori})</span>
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {gambar.map((url, idx) => (
          <img key={idx} src={`${url}?width=150&height=150&quality=80`} alt={`Logo ${idx}`} className="rounded object-cover w-full h-32" />
        ))}
      </div>
    </div>
  );
}
