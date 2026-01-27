const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p className="text-sm text-black/60 dark:text-white/60">
          © 2026 Richard Sean Salabsab. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/salabsab-richard-sean-0a4a293a8/" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/seansalabsab" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.facebook.com/sean.salabsab.04" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
