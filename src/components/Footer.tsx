import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-white/10">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4 tracking-tight">Zainiddin Zidan</h4>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Frontend Developer & Linux Enthusiast focused on building clean and interactive web experiences.
            </p>
          </div>

          {/* Middle */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted">Links</h4>
            <div className="flex flex-col space-y-3 text-secondary text-sm">
              <a href="#about" className="hover:text-white transition-colors w-fit">About</a>
              <a href="#projects" className="hover:text-white transition-colors w-fit">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors w-fit">Contact</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted md:text-right">Socials</h4>
            <div className="flex flex-col space-y-3 text-secondary text-sm md:items-end">
              <a href="https://github.com/Zaenidanz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">GitHub</a>
              <a href="https://www.linkedin.com/in/zainiddin-zidan-637457336" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-muted">
          <p>© 2026 Zainiddin Zidan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Zainiddin Zidan | Web Developer</p>
        </div>
      </div>
    </footer>
  );
}
