import clsx from 'clsx'

type SwitchProps = {
  active?: boolean,
  onClick?: any
}

export function Switch ({
  active = false,
  onClick = () => {}
}: SwitchProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'focus:outline-none focus-visible:ring-2 w-10 h-6 p-1 rounded-full duration-150 hover:cursor-pointer',
        {
          'bg-slate-700': !active,
          'bg-blue-500': active
        }
      )}
    >
      <div
        className={clsx(
          'w-4 h-4 bg-white rounded-full duration-150',
          {
            'translate-x-full': active
          }
        )}
      />
    </button>
  )
}
