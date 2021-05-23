import { ContentContainerProps as Props } from 'interfaces'
import clsx from 'clsx'

export const ContentContainer = ({ alignment = 'left', children }: Props) => {
  const alignmentClass =
    alignment === 'center'
      ? 'text-center'
      : alignment === 'right'
      ? 'text-right'
      : 'text-left'
  return (
    <div className={clsx('px-10 py-10 bg-white rounded-lg', alignmentClass)}>
      {children}
    </div>
  )
}
