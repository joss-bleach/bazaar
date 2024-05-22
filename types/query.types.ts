export type QueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
