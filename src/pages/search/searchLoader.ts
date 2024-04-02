import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummery } from "../../api/types/packageSummery";

export interface SearchLoaderResults {
  searchResults: PackageSummery[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResults> {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  if (!text) {
    throw new Error("Search text must be provided");
  }

  const result = await searchPackages(text);

  return {
    searchResults: result,
  };
}
