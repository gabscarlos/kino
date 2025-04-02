import Container from "../templates/Container";
import Descricao from "../templates/Descricao";
import Flex from "../templates/Flex";
import Titulo from "../templates/Titulo";
import Generos from "./Generos";
import Nota from "./Nota";
import PosterDoFilme from "./PosterDoFilme";

interface CardFilmeDetalhadoProps {
  filme: FilmeDetalhado;
}

export default function CardFilmeDetalhado({ filme }: CardFilmeDetalhadoProps) {
  return (
    <Container>
      <Flex
        col
        className={`
                bg-neutral-950 rounded-lg mt-8
                p-4 md:p-8 lg:flex-row
            `}
      >
        <PosterDoFilme url={filme.linkImagemPoster} titulo={filme.titulo} />
        <Flex col className="m-3 ml-8 gap-4 lg:gap-8 text-xl items-start">
          <Titulo
            texto={filme.titulo}
            alinhar="center"
            className="lg:text-start my-0 lg:my-5"
          />
          <Descricao texto={filme.descricao} className="text-base mt-0" />
          <p>
            Lançamento:{" "}
            {new Intl.DateTimeFormat("pt-BR").format(
              new Date(`${filme.dataLancamento}`)
            )}
          </p>
          <p>Duração: {filme.duracao} min</p>
          <p>Título Original: {filme.tituloOriginal}</p>
          <Flex col className="justify-start items-start w-full">
            <Generos idFilme={filme.id} generosPadrao={filme.generos} grande/>
            <Nota nota={filme.nota} grande/>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
