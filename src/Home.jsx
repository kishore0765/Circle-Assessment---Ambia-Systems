import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="/assessment">
        <button className="start-btn">
          Start
        </button>
      </Link>
    </div>
  );
}