import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { Console } from "console";
import { useState } from "react";
import { useEffect} from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setpage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,

    })



    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage
                setpage(data);

            });

    }, [pageNumber]);

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };


    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>)

                    )
            }
                </div>
            </div>
        </>


    )
}

export default Listing;