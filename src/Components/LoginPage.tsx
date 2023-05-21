import React from "react";
import { Auth, googleProvider } from "../Firebase/firebase-config";

import { signInWithPopup, signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";

import { LoginUser } from "../Redux/GameDataSlice";

type Props = {};

export default function LoginPage({}: Props) {
  const userName = useAppSelector((state) => state.userName);
  const dispatch = useAppDispatch();
  async function signInWithGooglePopup() {
    try {
      const response = await signInWithPopup(Auth, googleProvider);
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

  async function logOutFunc() {
    try {
      const response = await signOut(Auth);
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
    <section>
      {userName ? (
        <div className="mx-auto my-2 flex w-1/3 flex-col items-center justify-center border-4 bg-white">
          <h2>logout</h2>
          <div>
            <div className="max-w-sm px-6 sm:px-0">
              <button
                onClick={logOutFunc}
                type="button"
                className="dark:focus:ring-[#4285F4]/55 m-2  inline-flex w-full items-center justify-between rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
              >
                <svg
                  className="mr-2 -ml-1 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                LogOut<div></div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto my-2 flex w-1/3 flex-col items-center justify-center border-4 bg-white">
          <h2>login with google</h2>
          <div>
            <div className="max-w-sm px-6 sm:px-0">
              <button
                onClick={signInWithGooglePopup}
                type="button"
                className="dark:focus:ring-[#4285F4]/55 m-2  inline-flex w-full items-center justify-between rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
              >
                <svg
                  className="mr-2 -ml-1 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign up with Google<div></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
