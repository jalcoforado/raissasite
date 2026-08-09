/**
 * Footer — Simple, professional
 */
export default function Footer() {
  return (
    <footer className="py-8 bg-stone-50 border-t border-stone-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/raissa-logo_e3b768df.jpeg"
              alt="Raíssa Alcoforado"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-stone-800 text-sm">Raíssa Alcoforado</p>
              <p className="text-xs text-stone-500">Psicóloga Infantojuvenil · CRP 11/19565</p>
            </div>
          </div>
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Raíssa Alcoforado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

