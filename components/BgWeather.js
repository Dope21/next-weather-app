import Image from 'next/image'
import callBackground from '../utils/callBackground'

export default function BgWeather({
  weather,
  time
}) {
  const timePhase = JSON.stringify(time).charAt(3)

  return (
    <div 
      className='absolute inset-0 transition-all'
    >
      <div className='absolute w-full h-full bg-black opacity-50 z-10' />      
      <Image 
        src={callBackground(weather, timePhase)}
        alt='weather'
        layout='fill'
        className='object-cover z-0'
        priority
      />
    </div>
  )
}