import { motion } from "framer-motion"

export default function Details({ humidity, speed, pressure }) {

  const variants = {
    hidden: { opacity: 0, x: 0, y: -20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

  return (
    <motion.div 
      className="text-white border w-full max-h-[800px] flex items-center justify-between rounded-md px-4 md:px-8 py-6 backdrop-blur-sm bg-white/20"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">{humidity}%</h3>
        <p className="font-semibold md:text-3xl">humidity</p>
      </div>
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">{speed} MPH</h3>
        <p className="font-semibold md:text-3xl">wind speed</p>
      </div>
      <div>
        <h3 className="text-center font-light md:text-4xl md:mb-4">{pressure}</h3>
        <p className="font-semibold md:text-3xl">pressure</p>
      </div>
    </motion.div>
  )  
}