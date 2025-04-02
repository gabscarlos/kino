"use client"
import { FilmSlate } from "@phosphor-icons/react"
import ImagemComFallback from "../templates/ImagemComFallback"
import Wrap from "../templates/Wrap"

interface PosterDoFilmeProps {
    url: string
    titulo: string
}

export default function PosterDoFilme({url, titulo}: PosterDoFilmeProps) {
    return (
        <Wrap className={`
            h-72 w-48 md:h-96 md:w-80 lg:h-[700px] lg:min-w-[500px]
            relative overflow-hidden rounded-lg m-auto
        `}>
            <ImagemComFallback 
                url={url} 
                imgAlt={`Poster do filme ${titulo}`}
            >
                <FilmSlate className="w-1/2 h-2/3 text-slate-800"></FilmSlate>
            </ImagemComFallback>
        </Wrap>
    )
}