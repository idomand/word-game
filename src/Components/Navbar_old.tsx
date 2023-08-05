import { Link } from "react-router-dom";
import { RestartGame } from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import AuthButton from "./AuthButton";

export default function Header() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.GameData.userName);
  let userToShow;

  if (userName) {
    userToShow = userName;
  } else {
    userToShow = "player";
  }

  return (
    <header className="flex justify-center border-b-2 pb-2 ">
      <div className="justify-self-start bg-slate-200 p-4 ">
        <h2 className="text-xl font-bold">Hi {userToShow}</h2>
      </div>
      {/* <Link
        to="/"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        home
      </Link> */}
      <Link
        to="/GameBoard"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline "
        onClick={() => {
          dispatch(RestartGame());
        }}
      >
        Play
      </Link>
      <Link
        to="/score-board"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        Score board
      </Link>
      <Link
        to="/allWords"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        List of All Words
      </Link>{" "}
      <AuthButton />
    </header>
  );
}
