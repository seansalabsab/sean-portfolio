import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import ProfileCard from '../components/ProfileCard'
import GradientText from '../components/GradientText'
import fbProfile from '../assets/FBprofile.png'
import profileJpg from '../assets/profile.jpg'
import threeN8 from "../assets/3n8SS.png"
import noteNudge from "../assets/NotNudgeSS.png"
import botaniSnap from "../assets/BotaniSnapSS.png"
import furPal from "../assets/FurPalSS.png"

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // Update this array with your own projects
  const projects = [
    {
      id: 1,
      title: "THESIS/Capstone: 3n8 Analytics",
      description: "3n8 Analytics is an AI-powered web application designed to help users analyze and visualize complex datasets with ease. Built using React for the frontend and Tailwind CSS for styling, the platform offers an intuitive interface for data exploration. Key features include interactive charts, real-time data updates, and customizable dashboards. The integration of AI algorithms allows users to gain deeper insights through predictive analytics and automated data processing. This project showcases my skills in modern web development, data visualization, and AI integration.",
      tags: ["Vite+React", "JavaScript", "TailwindCSS", "Python Flask", "AI Integration", "Firebase"],
      image: threeN8,
      repository: "https://github.com/PapiAiron/Causal-Forecasting-and-Simulation-for-3N8-Consumer-Consumer-Goods-Trading.git",
    },
    {
      id: 2,
      title: "Note Nudge",
      description: "Note Nudge is a productivity web application designed to help users manage their tasks and notes efficiently. Built with React and styled using Tailwind CSS, the app features a clean and user-friendly interface. Key functionalities include creating, editing, and organizing notes, setting reminders, and categorizing tasks with tags. The application also supports dark mode for comfortable use in low-light environments. Note Nudge aims to enhance user productivity by providing a seamless experience for task management and note-taking.",
      tags: ["React", "Tailwind", "Firebase"],
      image: noteNudge,
      repository: "https://github.com/seansalabsab/Taskdumpster.git",
    },
    {
      id: 3,
      title: "Botani-Snap AI",
      description: "Botani-Snap AI is an innovative web application that leverages AI technology to provide users with a seamless experience for plant identification and care. Built using React for the frontend and Tailwind CSS for styling, the platform offers an intuitive interface for users to upload images of plants and receive detailed information about their species, care requirements, and potential health issues. The application integrates advanced image recognition algorithms to accurately identify plant species and provides personalized recommendations based on user preferences and environmental conditions.",
      tags: ["React", "JavaScript", "Firebase", "Python", "AI Integration"],
      image: botaniSnap,
      repository: "https://github.com/yourprofile/project3",
    },
    {
      id: 4,
      title: "FurPal",
      description: "FurPal is a pet care trackin Android application designed to help pet owners manage their pets' health and well-being. Built with Android Studio, the app features a clean and user-friendly interface. Key functionalities include creating, editing, and organizing pet profiles, setting reminders for vaccinations and check-ups, and categorizing pets with tags.",
      tags: ["Android Studio", "Java", "SQLite"],
      image: furPal,
      repository: "https://play.google.com/store/apps/details?id=com.groupfour.furpal&hl=en",
    },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    setDarkMode(savedTheme === "dark")

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"))
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Store refs in window for navbar access
  useEffect(() => {
  window.scrollToSection = (ref, offset = 90) => {
    if (!ref?.current) return

    const elementTop =
      ref.current.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    })
  }
    window.sectionRefs = { homeRef, projectsRef, aboutRef, contactRef }
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <>
      {/* Home Section */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-16 sm:pt-12 md:pt-0"
      >
        <motion.div 
          className="text-center relative z-10 flex flex-col items-center max-w-2xl w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="scale-[0.9] sm:scale-100 origin-top"
            variants={scaleIn}
          >
            <ProfileCard
              name="Richard Sean Salabsab"
              title="Frontend Developer"
              handle="seansalabsab"
              status="Online"
              contactText="Contact Me"
              avatarUrl={fbProfile}
              miniAvatarUrl={profileJpg}
              showUserInfo
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.scrollToSection(window.sectionRefs?.contactRef)}
              showIcon
              showBehindGlow
              behindGlowColor="hsla(208, 100%, 70%, 0.6)"
              customInnerGradient="linear-gradient(145deg,hsla(208, 40%, 45%, 0.55) 0%,hsla(310, 60%, 70%, 0.27) 100%)"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={5}
              showBorder={false}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 mt-6 sm:mt-8"
            >
              Hi, I'm Richard Sean Salabsab
            </GradientText>
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-gray-700 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            I'm a Computer Science student at Laguna University based in Victoria, Laguna. I'm passionate about building clean, beautiful, and functional web applications, and I also work as a part-time Computer Technician.
          </motion.p>
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="scroll-mt-[7rem] min-h-screen flex flex-col items-center justify-center relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl w-full">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-black dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Project cards */}
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/30 dark:bg-white/10 border border-black/20 dark:border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/15 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Image placeholder */}
                <div className="w-full aspect-video bg-gradient-to-br from-black/10 to-black/20 dark:from-white/10 dark:to-white/20 flex items-center justify-center overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-l"
                />
                </div>
                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 dark:text-white/70 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        title={`Technology: ${tag}`}
                        className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-black/10 dark:bg-white/20 rounded-full text-black/80 dark:text-white/80 font-medium cursor-help"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 sm:px-6 py-2 bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30 rounded-lg text-xs sm:text-sm text-black/80 dark:text-white/80 font-semibold transition-all duration-200"
                    >
                      View Repository →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* About Me Section */}
      <section
        ref={aboutRef}
        className="min-h-screen flex flex-col items-center justify-center relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl w-full">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-black dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                I'm Richard Sean Salabsab, a Computer Science student from Victoria, Laguna, with a strong focus on frontend web development and modern user interfaces.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                Alongside my studies, I work as a self-employed computer and electronics technician, providing repair services for computers, laptops, and mobile devices. This work helps support my college expenses while strengthening my technical problem-solving and hands-on diagnostic skills.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                I also take on freelance frontend development projects, collaborating with friends, classmates, and referrals to build functional and visually engaging web applications. Through both technical and development work, I value reliability, continuous learning, and delivering practical solutions.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                Outside of technology, I enjoy playing the guitar and performing with my classmates. Our band placed <strong>2nd Runner-Up</strong> in the Battle of the Bands during Laguna University's 17th and 19th Founding Anniversary celebrations (2023 and 2025), experiences that strengthened my teamwork, discipline, and creative expression.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                I am also an avid video game enthusiast, with interests in both story-driven and competitive titles such as Ghost of Tsushima, God of War (2018 & Ragnarök), Red Dead Redemption 2, Subnautica, Valorant, CS2, Dota 2, and Forza Horizon 4 and many more. These games have sharpened my strategic thinking, communication skill, adaptability, and attention to detail.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed"
                variants={fadeIn}
              >
                In support of my technical background, I participated in the <strong>12th IT Skills Olympics (2023)</strong> at the University of Makati, competing in the PC Assembly and Disassembly category, an experience that reinforced my practical knowledge in computer hardware and system components.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="min-h-screen flex flex-col items-center justify-center relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl w-full">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-black dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h2>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <motion.h3 
                className="text-lg sm:text-xl font-semibold mb-4 text-black dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get in Touch
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-black/70 dark:text-white/70 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Feel free to reach out to me at any time. I'm always interested in hearing about new projects and opportunities.
              </motion.p>
              <motion.div 
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">Email</p>
                  <a href="mailto:your@email.com" className="text-sm sm:text-base text-black dark:text-white font-semibold hover:underline break-all">
                    richardseansalabsab@gmail.com
                  </a>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">Phone (SMART)</p>
                  <a href="mailto:your@email.com" className="text-sm sm:text-base text-black dark:text-white font-semibold hover:underline break-all">
                    +63 929 217 5411
                  </a>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">Location</p>
                  <p className="text-sm sm:text-base text-black dark:text-white font-semibold">
                    Victoria, Laguna
                  </p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mb-2">
                    Documents
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="SALABSAB-ResumeS.pdf"
                      download="SALABSAB-ResumeS.pdf"
                      className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-4 py-2 text-sm sm:text-base font-semibold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                      Download Resume
                    </a>

                    <a
                      href="SALABSAB-CV.pdf"
                      download="SALABSAB-CV.pdf"
                      className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-4 py-2 text-sm sm:text-base font-semibold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                      Download CV
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home