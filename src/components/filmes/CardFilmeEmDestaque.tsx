import Link from "next/link"
import Container from "../templates/Container"
import Descricao from "../templates/Descricao"
import Flex from "../templates/Flex"
import Titulo from "../templates/Titulo"
import PosterDoFilme from "./PosterDoFilme"

interface CardFilmeEmDestaqueProps {
    filme: Filme,
    className?: string
}

export default function CardFilmeEmDestaque({filme, className}: CardFilmeEmDestaqueProps) {
    return (
        <Container className={className}>
            <Flex className="gap-8 flex-col-reverse lg:flex-row">
                <Flex col className="flex-1 items-start">
                    <Titulo alinhar="left" texto={filme.titulo}/>
                    <Descricao texto={filme.descricao} className="text-xl text-justify"/>
                    <Link href={`/filmes/${filme.id}`}
                        className={`
                                px-3 py-2 bg-red-kino font-semibold
                                rounded-lg hover:brightness-75
                            `}
                    >
                        Mais Detalhes
                    </Link>
                </Flex>
                <PosterDoFilme url={filme.linkImagemPoster} titulo={filme.titulo}/>
            </Flex>
        </Container>
    )
}