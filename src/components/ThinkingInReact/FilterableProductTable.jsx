import { useState } from 'react';
import logger from '@/helpers/logger';
import SearchBar from '@/components/ThinkingInReact/SearchBar';
import ProductTable from '@/components/ThinkingInReact/ProductTable';

// Source: [Thinking in react] https://react.dev/learn/thinking-in-react

export default  function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  logger.info(`filterText: ${filterText}, inStockOnly: ${inStockOnly}`)

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly} />

        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }
