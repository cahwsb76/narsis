import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Selamat Datang!</h1>
        <p className="text-xl text-white">Di halaman web saya, semoga kamu menemukan yang terbaik!</p>
      </div>
    </div>
  );
}
