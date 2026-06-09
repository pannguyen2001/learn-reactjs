import { useApi } from "@/hooks/useApi";
import { quoteService } from "@/apis/services/quoteService";
import logger from "@/helpers/logger";

export default function AxiosQuote() {
  const {
    data,
    loading,
    error,
  } = useApi(
    quoteService.getAll,
    {
      page: 1,
      limit: 10,
      query: "human",
    }
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  let quotes = data?.data?.data;
//   logger.info(quotes);

  return (
    <>
      {quotes.map((quote) => (
        <p key={quote.id}>
          {quote.content}
        </p>
      ))}
    </>
  );
}