import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const colleges = [
  { id: "icem", name: "ICEM" },
  { id: "vit", name: "VIT" },
  { id: "mit", name: "MIT" },
  { id: "pccoe", name: "PCCOE" },
];

export default function LandingPage() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#083164]/10 px-5 py-2 text-sm font-medium text-[#083164]">
            🔒 Secure & Anonymous Trainer Feedback Platform
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Elevate Training Excellence Through
            <span className="block mt-4 rounded-full bg-[#083164] px-6 py-3 text-white">
              Meaningful Feedback
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            Empower training organizations with a structured, anonymous, and
            insight-driven feedback system that helps trainers continuously
            improve learning outcomes.
          </p>
        </div>
      </section>

      {/* COLLEGE SELECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24 flex-1">
        <h2 className="mb-6 text-xl font-semibold text-slate-800">
          Select Your Institution
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colleges.map((college) => (
            <button
              key={college.id}
              className="group rounded-xl border bg-white p-6 shadow-sm transition hover:border-[#083164] hover:shadow-md text-left"
             onClick={() => navigate(`/login/${college.id}`)}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#083164]/10 text-[#083164] font-semibold">
                {college.name[0]}
              </div>

              <div className="text-lg font-medium text-slate-900">
                {college.name}
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Continue to login
              </div>
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
