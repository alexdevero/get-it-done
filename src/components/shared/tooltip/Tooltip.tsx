import * as TooltipRadix from '@radix-ui/react-tooltip'

import clsx from 'clsx'
import type { FC, PropsWithChildren, ReactNode } from 'react'

import styles from './Tooltip.module.css'

type Props = {
  content: ReactNode
}

export const Tooltip: FC<PropsWithChildren<Props>> = ({
  children,
  content,
}) => {
  return (
    <TooltipRadix.Provider delayDuration={200}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className={clsx(
              'color-zinc-850 select-none rounded bg-black px-2 py-3 text-sm leading-none shadow-sm',
              styles.tooltipContent
            )}
            sideOffset={5}
          >
            {content}
            <TooltipRadix.Arrow className="fill-black" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
