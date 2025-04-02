import Link from "next/link";
import Flex from "./Flex";
import Wrap from "./Wrap";

export default function Cabecalho() {
    return (
        <Wrap className="bg-neutral-950">
            <header className="p-4 px-auto">
                <Flex className="justify-around">
                    <Link
                        href="/"
                        className={`
                                font-bold px-3 py-2 bg-red-kino
                                flex gap-1 items-center justify-center rounded-lg
                            `}
                    >
                        <span className="text-xl">🍿</span>
                        
                        Kino
                    </Link>
                    <Link 
                        target="_blank"
                        href="https://www.themoviedb.org/"
                        className={`
                            font-bold px-4 hover:brightness-75
                        `}
                        >
                        The Movie DB
                    </Link>
                </Flex>
            </header>
        </Wrap>
    )
}