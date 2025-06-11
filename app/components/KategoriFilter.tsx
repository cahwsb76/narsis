"use client";

type KategoriFilterProps = {
  kategoriList: string[];
  currentKategori: string;
};

export default function KategoriFilter({ kategoriList, currentKategori }: KategoriFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const searchParams = new URLSearchParams(window.location.search);
    if (value) {
      searchParams.set("kategori", value);
    } else {
      searchParams.delete("kategori");
    }
    searchParams.set("page", "1");
    window.location.search = searchParams.toString();
  };

  return (
    <select className="px-4 py-2 bg-gray-200 rounded" value={currentKategori} onChange={handleChange}>
      <option value="">Semua Kategori</option>
      {kategoriList.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
