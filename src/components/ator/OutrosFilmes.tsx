
import Container from "../templates/Container"
import ListaDeFilmes from "../filmes/ListaDeFilmes"
import useMovieAPI from "@/hooks/useMovieAPI"

interface OutrosFilmesProps {
    idAtor: string
}

export default async function OutrosFilmes({idAtor}: OutrosFilmesProps) {
    const {getFilmesDoAtor} = useMovieAPI()
    const filmes = await getFilmesDoAtor(idAtor)
    return (
        <Container>
            <ListaDeFilmes filmes={filmes} titulo="Participações anteriores:" />
        </Container>
    )
}