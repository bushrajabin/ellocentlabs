import { useRouteError } from "react-router-dom";
import "./Errorpage.css"
import { useNavigate } from "react-router-dom";
const errorImage = "Images/404_error.png"
export default function ErrorPage() {
  const navigate = useNavigate();
  const backHomePage = () => {
    navigate('/')
  }

  return (
    <div className="errorimage">
      <img src={errorImage} alt="" />
      <button onClick={backHomePage}>Back</button>
    </div>
  );
}