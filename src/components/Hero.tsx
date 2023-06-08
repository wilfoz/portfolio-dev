import { HiDownload } from "react-icons/hi";

export function Hero() {
  return (
    <section
      className="bg-gradient-to-tr 
        from-black
        to-gray-900
        text-white"
    >
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold">
              Wilerson{" "}
            </span>
            <span className="font-headline text-5xl font-light text-blue-400">
              A. Rufino
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
            Desenvolvedor Javascript && Python
          </h2>
          <p className="text-gray-400 my-6 text-center md:text-left">
            Desenvolvedor javascript e python apaixonado por criar experiências
            interativas e responsivas.
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#" className="underline font-bold text-white">
              Fale Comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="#"
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
}
