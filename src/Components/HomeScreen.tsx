import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { RestartGame } from "../Redux/GameDataSlice";
import { Link } from "react-router-dom";
import { Auth, googleProvider } from "../Firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { LoginUser } from "../Redux/GameDataSlice";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.userName);
  async function signInWithGooglePopup() {
    try {
      await signInWithPopup(Auth, googleProvider);
      console.log("Auth.currentUser", Auth.currentUser);
      if (Auth.currentUser) {
        dispatch(
          LoginUser({
            userId: Auth.currentUser.uid,
            userName: Auth.currentUser?.displayName,
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center border-2">
      <h1>welcome to the german artikel game</h1>
      <p>would you like to login or or have a quick free play</p>
      <div className="m-4 flex flex-col">
        <div className=" flex ">
          login:
          <button
            onClick={signInWithGooglePopup}
            type="button"
            className="ml-2 flex cursor-pointer items-center bg-slate-400 hover:bg-orange-300 hover:underline"
          >
            Sign in<div></div>
          </button>
        </div>

        <div className="mt-2 flex ">
          free play:
          <Link
            to="/GameBoard"
            className="ml-2 flex cursor-pointer items-center bg-slate-400 hover:bg-orange-300 hover:underline "
            onClick={() => {
              dispatch(RestartGame());
            }}
          >
            Play
          </Link>
        </div>
      </div>
    </section>
  );
}
