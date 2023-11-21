import { useRouteError } from "react-router-dom";
import "./Errorpage.css"

const errorImage = "Images/404_error.png"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorimage">
      <img src={errorImage} alt="" />
      <button>Back</button>
    </div>
  );
}