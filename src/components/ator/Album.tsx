import { useEffect, useState } from "react"
import Titulo from "../templates/Titulo"
import Wrap from "../templates/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import Carrossel from "../templates/Carrossel"
import Image from "next/image"
import Flex from "../templates/Flex"
import Container from "../templates/Container"

interface AlbumProps {
    idAtor: string
}

export default async function Album({idAtor}: AlbumProps) {
    const {getImagensAtor} = useMovieAPI()
    const imagensResposta = await getImagensAtor(idAtor)
    const imagensPorSlide = 3
            let imagensRestantes = imagensResposta
            const imagens = []
            while(imagensRestantes.length > 0) {
                imagens.push(imagensRestantes.splice(0, imagensPorSlide))
            }
    if(imagens.length <= 0) return null
    return (
        <Wrap>
            <Titulo pequeno texto="Fotos do(a) Artista" className="w-full" alinhar="center"/>
            <Carrossel>
                {imagens.map((grupo: string[])=>{
                    return (
                        <Container>
                            <Flex className="justify-between w-full">
                                {grupo.map((linkImagem)=>{
                                    return (
                                        <Wrap key={linkImagem} className={`
                                            h-36 sm:h-52 md:h-96 lg:min-h-[600px]
                                            relative overflow-hidden rounded-lg
                                        `}>
                                            <Image src={linkImagem} alt="imagem do ator" className="object-cover" sizes="40vw" fill/>
                                        </Wrap>
                                    )
                                })}
                            </Flex>
                        </Container>
                    )
                })}
            </Carrossel>
        </Wrap>
    )
}