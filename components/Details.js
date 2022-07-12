import Animate from './Animate'

export default function Details({ humidity, speed, pressure }) {
  return (
    <Animate
      classname="text-white border w-full max-h-[800px] flex items-center justify-between rounded-md px-4 md:px-8 py-6 backdrop-blur-sm bg-white/20"
      xy={-20}
      duration={0.8}
      delay={0.1}
    >
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">
          {humidity}%
        </h3>
        <p className="font-semibold md:text-3xl">humidity</p>
      </div>
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">
          {speed} MPH
        </h3>
        <p className="font-semibold md:text-3xl">wind speed</p>
      </div>
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">
          {pressure}
        </h3>
        <p className="font-semibold md:text-3xl">pressure</p>
      </div>
    </Animate>
  )
}
