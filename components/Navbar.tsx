'use client'
import Link from 'next/link'

import { MenuItem } from '../types'

interface NavbarProps {
  menuItems: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-32 py-5 dark:bg-black">
      <div>
        {menuItems &&
          menuItems.map((menuItem, key) => (
            <Link
              key={key}
              className={`font-inter  mr-4 hover:text-black dark:hover:text-white ${
                menuItem?._type === 'home'
                  ? 'font-semibold text-black dark:text-white'
                  : 'text-gray-600'
              }`}
              href={menuItem?.href}
            >
              {menuItem.title}
            </Link>
          ))}
      </div>
    </div>
  )
}

function resolveHref(menuItem: MenuItem) {}
