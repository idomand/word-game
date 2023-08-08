import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { Auth, googleProvider } from "../Firebase/firebase-config";
import { LoginUser, RestartGame } from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import AuthButton from "../Components/AuthButton";
export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.GameData.userName);

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
    <section className="mt-5 flex flex-col items-center justify-center sm:mt-10  ">
      <div className="flex flex-col items-center justify-center rounded-lg  border-2 border-orange-400 px-7 py-8 sm:px-14 sm:py-16">
        <svg
          width="146"
          height="145"
          viewBox="0 0 146 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.474426"
            width="145.051"
            height="144.595"
            rx="36.2057"
            fill="url(#paint0_radial_15_46)"
          />
          <rect
            x="0.474426"
            width="145.051"
            height="144.595"
            rx="36.2057"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            d="M58.9896 51.1302C57.6137 51.1302 56.4951 50.1258 55.7044 48.9998C55.2755 48.3736 54.7393 47.8467 54.0958 47.4191C53.4677 46.9762 52.7323 46.6479 51.8897 46.4341C51.0624 46.205 50.1508 46.0905 49.155 46.0905C47.0102 46.0905 45.1794 46.6021 43.6627 47.6253C42.1613 48.6485 41.0123 50.1223 40.2157 52.0465C39.4343 53.9708 39.0437 56.2922 39.0437 59.0106C39.0437 61.7595 39.419 64.1114 40.1697 66.0662C40.9204 68.0211 42.0388 69.5177 43.5248 70.5562C45.0109 71.5947 46.857 72.1139 49.0631 72.1139C51.0088 72.1139 52.6251 71.8314 53.912 71.2664C55.2142 70.7013 56.187 69.8995 56.8305 68.861C58.2255 66.6094 57.8545 65.4248 55.2058 65.4248H53.7827C51.2777 65.4248 49.247 63.3941 49.247 60.889C49.247 58.384 51.2777 56.3532 53.7827 56.3532H63.6072C67.2003 56.3532 70.1131 59.266 70.1131 62.8591C70.1131 67.1353 69.2015 70.7929 67.3784 73.832C65.5707 76.8559 63.0735 79.1772 59.8868 80.7961C56.7156 82.3996 53.077 83.2014 48.9712 83.2014C44.3904 83.2014 40.3689 82.2317 36.9065 80.2921C33.4441 78.3526 30.7401 75.5883 28.7944 71.9994C26.8641 68.4105 25.8989 64.142 25.8989 59.1938C25.8989 55.3147 26.4888 51.8786 27.6684 48.8852C28.8634 45.8919 30.518 43.3644 32.6322 41.3027C34.7464 39.2257 37.1899 37.6603 39.9629 36.6065C42.7359 35.5375 45.708 35.003 48.8793 35.003C51.6675 35.003 54.2567 35.4001 56.6466 36.1942C59.0519 36.9731 61.1737 38.0879 63.0122 39.5388C64.8659 40.9743 66.3596 42.6772 67.4933 44.6473C69.3216 47.8242 66.3715 51.1302 62.706 51.1302H58.9896Z"
            fill="white"
          />
          <path
            d="M108.978 51.1302C107.602 51.1302 106.483 50.1258 105.692 48.9998C105.263 48.3736 104.727 47.8467 104.084 47.4191C103.456 46.9762 102.72 46.6479 101.878 46.4341C101.05 46.205 100.139 46.0905 99.143 46.0905C96.9982 46.0905 95.1674 46.6021 93.6507 47.6253C92.1493 48.6485 91.0003 50.1223 90.2037 52.0465C89.4223 53.9708 89.0317 56.2922 89.0317 59.0106C89.0317 61.7595 89.407 64.1114 90.1577 66.0662C90.9084 68.0211 92.0268 69.5177 93.5128 70.5562C94.9989 71.5947 96.845 72.1139 99.0511 72.1139C100.997 72.1139 102.613 71.8314 103.9 71.2664C105.202 70.7013 106.175 69.8995 106.818 68.861C108.214 66.6094 107.843 65.4248 105.194 65.4248H103.771C101.266 65.4248 99.2349 63.3941 99.2349 60.889C99.2349 58.384 101.266 56.3532 103.771 56.3532H113.595C117.188 56.3532 120.101 59.266 120.101 62.8591C120.101 67.1353 119.19 70.7929 117.366 73.832C115.559 76.8559 113.061 79.1772 109.875 80.7961C106.704 82.3996 103.065 83.2014 98.9592 83.2014C94.3784 83.2014 90.3569 82.2317 86.8945 80.2921C83.4321 78.3526 80.7281 75.5883 78.7824 71.9994C76.8521 68.4105 75.8869 64.142 75.8869 59.1938C75.8869 55.3147 76.4767 51.8786 77.6564 48.8852C78.8514 45.8919 80.506 43.3644 82.6202 41.3027C84.7343 39.2257 87.1779 37.6603 89.9509 36.6065C92.7238 35.5375 95.696 35.003 98.8672 35.003C101.656 35.003 104.245 35.4001 106.635 36.1942C109.04 36.9731 111.162 38.0879 113 39.5388C114.854 40.9743 116.348 42.6772 117.481 44.6473C119.31 47.8242 116.359 51.1302 112.694 51.1302H108.978Z"
            fill="white"
          />
          <path
            d="M35.5571 97.9832C32.1461 95.204 34.3583 90.7321 38.7582 90.7321C39.5525 90.7321 40.3264 90.8942 41.0584 91.2023C45.3522 93.0092 61.3561 99.4074 72.7265 99.4247C84.1463 99.4421 100.223 93.0372 104.571 91.2121C105.32 90.8977 106.112 90.7321 106.924 90.7321C111.482 90.7321 113.718 95.3841 110.129 98.1925C103.393 103.463 91.5195 109.592 72.7265 109.592C53.8011 109.592 42.0811 103.299 35.5571 97.9832Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_15_46"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(71.973 72.2973) rotate(45.8191) scale(100.813 100.822)"
            >
              <stop stopColor="#010318" />
              <stop offset="0.494792" stopColor="#FF2626" />
              <stop offset="1" stopColor="#FFF626" />
            </radialGradient>
          </defs>
        </svg>
        <h1 className="text-3xl font-bold">German Game</h1>

        <Link
          to="/GameBoard"
          className="mt-4 rounded-full border-2 border-orange-400 bg-orange-400 py-2 px-4 text-xl text-white transition-all  duration-500 hover:bg-white hover:text-orange-400 sm:mt-8 sm:py-4 sm:px-8 sm:text-3xl"
        >
          Play Now
        </Link>
      </div>

      <div className="mt-2 text-2xl">
        <AuthButton />
      </div>

      {/* <button onClick={signInWithGooglePopup} className="mt-2 text-2xl hover:underline sm:text-3xl ">
        Sign up
      </button> */}

      {/* <h1>welcome to the german artikel game</h1> 
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
      */}
    </section>
  );
}
