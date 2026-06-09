import { useApi } from "@/hooks/useApi";
import { jokesService } from "@/apis/services/jokesService";
import logger from "@/helpers/logger";

export default function AxiosJoke() {
    const {
        data,
        loading,
        error,
    } = useApi(
        jokesService.getAll,
        {
            limit: 10,
            query: "science",
            inc: "categories,id,content",
            page: 1
        }
    );

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    let jokes = data?.data?.data;
    // logger.info(jokes);

    return (
        <>
            <h2> Jokes</h2>
            {jokes.map((joke, idx) => (
                <p key={idx}>{joke?.content ?? "No content"}</p>
            ))}
        </>
    );
}