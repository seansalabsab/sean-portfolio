import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <div className="
      fixed inset-0 z-[9999]
      flex items-center justify-center
      bg-white text-black
      dark:bg-black dark:text-white
      transition-colors duration-300
    ">
      <div className="flex flex-col items-center gap-5">
        {/* Animated Title */}
        <motion.h1 
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          Richard Sean Salabsab&apos;s Portfolio
        </motion.h1>

        {/* Animated Loading Bar Container */}
        <motion.div 
          className="
            w-40 h-1
            bg-black/20 dark:bg-white/20
            rounded overflow-hidden
          "
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          {/* Animated Loading Bar Fill */}
          <motion.div 
            className="
              h-full
              bg-black dark:bg-white
              rounded
            "
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </motion.div>

        {/* Optional: Animated Loading Text */}
        <motion.p
          className="text-sm text-black/60 dark:text-white/60 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen