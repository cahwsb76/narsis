import { supabase } from "@/lib/supabase";
import LogoCard from "../components/LogoCard";
import { RawLogo, Logo } from "@/types/logo";

async function getData(page: number, pageSize: number): Promise<{ data: Logo[]; total: number }> {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase.from("logo").select("*", { count: "exact" }).range(from, to);

  if (error) throw error;

  const transformedData: Logo[] = data.map((item: RawLogo) => ({
    id: item.id,
    nama: item.nama,
    kategori: item.kategori,
    gambar: [item.gambar1, item.gambar2, item.gambar3, item.gambar4, item.gambar5, item.gambar6, item.gambar7, item.gambar8, item.gambar9, item.gambar10].filter(Boolean),
  }));

  return { data: transformedData, total: count || 0 };
}

export default async function GalleryPage() {
  const page = 1;
  const pageSize = 20;

  const { data, total } = await getData(page, pageSize);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📂 Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => (
          <LogoCard key={item.id} nama={item.nama} kategori={item.kategori} gambar={item.gambar} />
        ))}
      </div>

      <div className="flex justify-center mt-4 text-gray-500">Total: {total} data</div>
    </main>
  );
}
