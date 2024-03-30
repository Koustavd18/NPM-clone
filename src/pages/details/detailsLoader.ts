import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";
import { getPackage } from "../../api/queries/getPackage";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  const { name } = params;

  if (!name) {
    throw new Error("Name of the package is required");
  }

  const details = await getPackage(name);

  console.log(details);

  return { details };
}
