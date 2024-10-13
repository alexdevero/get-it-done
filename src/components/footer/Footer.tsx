import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'

import type { FC } from 'react'

import { Link } from '@/components/shared/link/Link'

import { appName } from '@/constants/app'

export const Footer: FC = () => (
  <footer className="flex flex-col items-center justify-center gap-3 p-4">
    <ul className="flex gap-3">
      <li>
        <Link href="https://github.com/alexdevero" className="text-gray-500">
          <GitHubLogoIcon width={18} height={18} />
        </Link>
      </li>
      <li>
        <Link href="https://alexdevero.com" className="text-gray-500">
          <GlobeIcon width={18} height={18} />
        </Link>
      </li>
    </ul>

    <p className="text-sm text-gray-500">
      &copy; {new Date().getFullYear()} {appName}. Open-source licensed under
      MIT.
    </p>
  </footer>
)
