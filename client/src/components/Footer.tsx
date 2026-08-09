/**
 * Footer — Simple with brand identity
 */
export default function Footer() {
  return (
    <footer className="py-8 bg-blue-50/30 border-t border-blue-100/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/raissa-logo_e3b768df.jpeg"
              alt="Raíssa Alcoforado"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-script text-lg text-[#5B8DB8]">Psi. Raíssa Alcoforado</p>
              <p className="text-xs text-slate-500">Psicóloga Infantojuvenil · CRP 11/19565</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Raíssa Alcoforado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
