export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#083164] text-white font-semibold">
            🎓
          </div>
          <div className="text-lg font-semibold text-[#083164]">
            Gryphon <span className="font-normal text-slate-500">Feedback System</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button className="hover:text-[#083164]">Features</button>
          <button className="hover:text-[#083164]">About</button>
          <button className="rounded-md bg-[#083164] px-4 py-2 text-white hover:bg-[#06284f]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
