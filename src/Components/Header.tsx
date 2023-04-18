import { Link } from "react-router-dom";
import { useAppDispatch } from "../Redux/ReduxHooks";
import { RestartGame } from "../Redux/GameDataSlice";
export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="flex justify-center ">
      <Link
        to="/"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline "
        onClick={() => {
          dispatch(RestartGame());
        }}
      >
        Play
      </Link>

      {/* <Link
        to="/score-board"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        Score board
      </Link> */}

      <Link
        to="/allWords"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        List of All Words
      </Link>
    </header>
  );
}
