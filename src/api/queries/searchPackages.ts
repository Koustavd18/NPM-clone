import type { PackageSummery } from "../types/packageSummery";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(text: string): Promise<PackageSummery[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${text}`
  );

  const data: SearchResponse = await res.json();
  return data.objects.map(
    ({ package: { name, version, description, keywords } }) => {
      return {
        name,
        version,
        description,
        keywords,
      };
    }
  );
}
