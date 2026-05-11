import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Vezir Analiz', path: '/vezir', icon: '👑' },
    { name: 'Vortex Chat', path: '/chat', icon: '💬' },
    { name: 'Kütüphane', path: '/library', icon: '📚' },
    { name: 'Kasa (Vault)', path: '/vault', icon: '🔐' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#0a0a0b] border-r border-gray-800 p-6 flex flex-col">
      <h2 className="text-[#00aaff] font-bold text-2xl mb-10">VORTEX PRO</h2>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <div className="flex items-center gap-4 p-4 text-gray-400 hover:bg-[#111112] hover:text-white rounded-lg transition-all cursor-pointer mb-2">
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4 border-t border-gray-800 text-xs text-gray-500">
        Yüce Amon • 2026
      </div>
    </div>
  );
}