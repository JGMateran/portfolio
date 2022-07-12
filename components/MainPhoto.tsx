import Image from 'next/image'

export function MainPhoto () {
  return (
    <div className="w-40 h-40 md:w-60 md:h-60 rounded-full rounded-full overflow-hidden">
      <Image
        src="/images/face.jpeg"
        width="240"
        height="240"
        alt="José Gregorio Materán"
      />
    </div>
  )
}
