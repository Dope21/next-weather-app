import { motion } from 'framer-motion'

const Animate = ({ children, xy = 20, delay = 0, duration = 0, classname }) => {
  return (
    <motion.div
      className={classname}
      initial={{ opacity: 0, x: 0, y: xy }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: duration, type: 'easeInOut', delay: delay }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}

export default Animate
