import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center border bg-orange-400">
      <Link
        to="/"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline "
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
      </Link>
    </header>
  );
}
