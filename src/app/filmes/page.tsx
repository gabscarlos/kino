import useMovieAPI from "@/hooks/useMovieAPI"
import Wrap from "@/components/templates/Wrap"
import Carrossel from "@/components/templates/Carrossel"
import CardFilmeEmDestaque from "@/components/filmes/CardFilmeEmDestaque"
import ListaDeFilmes from "@/components/filmes/ListaDeFilmes"

export default async function Filmes() {
    const { getUltimosFilmes } = useMovieAPI()
    const filmes: Filme[] = await getUltimosFilmes()

    return (
        <Wrap>
            <Carrossel slideAutomatico>
                {filmes.map((filme) => {
                    return (
                        <CardFilmeEmDestaque filme={filme} key={filme.id}/>
                    )
                })}
            </Carrossel>
            <ListaDeFilmes filmes={filmes} titulo="Últimos Filmes"/>
        </Wrap>
    )
}