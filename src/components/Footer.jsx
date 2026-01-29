export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Gryphon Trainer Feedback System
        </p>

        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <button className="hover:text-[#083164]">Privacy Policy</button>
          <button className="hover:text-[#083164]">Terms of Service</button>
          <button className="hover:text-[#083164]">Support</button>
        </div>
      </div>
    </footer>
  );
}
