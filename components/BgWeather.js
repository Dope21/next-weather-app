import Image from 'next/image'

export default function BgWeather({
  weather,
  timezone
}) {

  // const imageSrc = ''
  // const time = ''

  return (
    <div className='absolute inset-0'>
      <div className='absolute w-full h-full bg-black opacity-50 z-10' />      
      <Image 
        src={'/images/weathers/day/clounds.jpg'}
        alt='weather'
        layout='fill'
        className='object-cover z-0'
        priority
      />
    </div>
  )
}