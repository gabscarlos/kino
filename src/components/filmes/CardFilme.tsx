import { FilmSlate } from "@phosphor-icons/react";
import Flex from "../templates/Flex";
import ImagemComFallback from "../templates/ImagemComFallback";
import Titulo from "../templates/Titulo";
import Wrap from "../templates/Wrap";
import Generos from "./Generos";
import Nota from "./Nota";
import mergeClasses from "@/utils/mergeClasses";

interface CardFilmeProps {
  filme: Filme;
  className?: string;
}

export default function CardFilme({ filme, className }: CardFilmeProps) {
  return (
    <Wrap
      className={mergeClasses(`
                    rounded-2xl h-60 max-h-60 bg-black
                    border border-white/[0.2] group-hover:border-red-kino
                    relative z-20`, className)}
    >
      <ImagemComFallback 
        url={filme.linkImagemFundo} 
        imgAlt={`Imag`}
        className="opacity-40 group-hover:opacity-15 transition-all"
      >
        <FilmSlate className="w-1/2 h-2/3 transition-all text-zinc-900" />
      </ImagemComFallback>
      <Flex col className="h-60 z-50 justify-between py-10 px-2">
        <Titulo texto={filme.titulo} pequeno alinhar="left" className="m-auto"/>
        <Flex col className="justify-start items-start w-full">
          <Generos idFilme={filme.id}/>
          <Nota nota={filme.nota} />
        </Flex>
      </Flex>
    </Wrap>
  );
}
