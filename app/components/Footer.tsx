export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#F6E8F8] font-mono font-bold text-sm tracking-wider">
          TANZEEL.DEV
        </p>
        <p className="text-white/25 text-sm text-center">
          © 2025 Muhammad Tanzeel ur Rehman · Built with Next.js &amp; Tailwind
          CSS
        </p>
        <a
          href="#home"
          className="text-white/25 hover:text-[#F6E8F8] transition-colors text-sm font-medium"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
