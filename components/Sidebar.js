import Link from 'next/link';

const links = [
  { name: 'Dashboard', href: '/' },
  { name: 'Orders', href: '/orders' },
  { name: 'Products', href: '/products' },
  { name: 'Billing', href: '/billing' },
  { name: 'Sign In', href: '/signin' },
  { name: 'Sign Up', href: '/signup' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r">
      <div className="p-6 font-bold text-xl">Ecommerce Admin</div>
      <ul className="space-y-2 p-4">
        {links.map(link => (
          <li key={link.name}>
            <Link href={link.href} className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
