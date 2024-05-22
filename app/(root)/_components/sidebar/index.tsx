// Components
import { SearchFilter } from "./search-filter";
import { CategoryFilter } from "./category-filter";
import { PriceFilter } from "./price-filter";

export const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-full w-[250px] flex-col border-r border-border bg-white py-8 px-4 gap-4">
      <h1 className="sr-only">Filter items being sold</h1>
      <SearchFilter />
      <CategoryFilter />
      <PriceFilter />
    </aside>
  );
};
