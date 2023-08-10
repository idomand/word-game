import { Auth, googleProvider } from "../Firebase/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { LoginUser } from "../Redux/GameDataSlice";
import { useGetUserScoresAndWordsQuery } from "../Redux/APISlice";
import { useEffect, useState } from "react";

type Props = {};

export default function AuthButton({}: Props) {
  const userName = useAppSelector((state) => state.GameData.userName);
  const userId = useAppSelector((state) => state.GameData.userId);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetUserScoresAndWordsQuery();

  const [userTopScore, setUserTopScore] = useState(0);

  useEffect(() => {
    if (data) {
      data.forEach((element: any) => {
        console.log("userId", userId);
        console.log("element.userId", element.userId);
        if (element.userId === userId) {
          console.log("element", element);
          console.log("element.topScore", element.topScore);
          setUserTopScore(element.topScore);
        }
      });
    }
  }, [userId]);

  async function signInWithGooglePopup() {
    try {
      await signInWithPopup(Auth, googleProvider);
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

  async function logOutFunc() {
    try {
      await signOut(Auth);
      dispatch(
        LoginUser({
          userId: null,
          userName: null,
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {userName}-{userTopScore}
      {userName ? (
        <div className="">
          <button
            onClick={logOutFunc}
            type="button"
            className="flex cursor-pointer items-center    hover:underline"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={signInWithGooglePopup}
          type="button"
          className="flex cursor-pointer items-center    hover:underline"
        >
          Login
        </button>
      )}
    </>
  );
}
