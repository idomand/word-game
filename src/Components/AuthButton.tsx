import { Auth, googleProvider } from "../Firebase/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { LoginUser } from "../Redux/GameDataSlice";

type Props = {};

export default function AuthButton({}: Props) {
  const userName = useAppSelector((state) => state.GameData.userName);
  const dispatch = useAppDispatch();

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
