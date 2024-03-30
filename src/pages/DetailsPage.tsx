import { useParams } from "react-router-dom";
export default function DetailsPage() {
  const params = useParams();

  return <div> Details Page {params.name} </div>;
}
