import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

const Container = ({ children,className }: { children: ReactNode, className?: string; }) => {
  return (
      <section className={cn('max-w-[1440px] w-[95%] mx-auto',className)}>
          {children}
    </section>
  )
}

export default Container