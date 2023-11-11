import { useParams } from "react-router-dom";
import { Link } from "../../components/common/Link.component";
import { Button } from "../../components/common/Button.component";

export const ErrorPage = () => {
  const { id } = useParams();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src={"https://http.cat/" + id ?? "404"} alt={id ?? "404"} />
      <Link to={"/"} className="py-4">
        <Button className="px-4 py-2">HOME</Button>
      </Link>
    </div>
  );
};
