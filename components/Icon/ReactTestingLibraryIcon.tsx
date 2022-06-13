import Image from 'next/image'

export function ReactTestingLibrary () {
  return (
    <Image
      src="/images/octopus.png"
      width={40}
      height={40}
      alt="Octopus"
    />
  )
}
