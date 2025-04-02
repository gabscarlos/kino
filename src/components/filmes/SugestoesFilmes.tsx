"use client"
import Container from "../templates/Container"
import ListaDeFilmes from "./ListaDeFilmes"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestoesFilmesProps {
    idFilme: string
}

export default async function SugestoesFilmesProps({idFilme}: SugestoesFilmesProps) {
    const {getFilmesSimilares} = useMovieAPI()
    const filmes:Filme[] = await getFilmesSimilares(idFilme)
    return (
        <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
            <ListaDeFilmes filmes={filmes} titulo="Recomendações"/>
        </Container>
    )
}