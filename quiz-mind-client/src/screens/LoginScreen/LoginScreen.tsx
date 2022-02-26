const LoginScreen = () => {
  return (
    <div
      className={`login-signup-screen flex flex-col justify-center items-center`}
    >
      <div className="bg-slate-50 p-12 flex flex-col justify-center items-center text-deepslate-400 rounded-xl">
        {/* <img src="../../assets/images/darklogo.png" alt="" className="w-24" /> */}
        <h4 className=" font-bold text-3xl">Sign in</h4>
        <h5 className="text-2xl">Sign into your account for full access</h5>
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          className="w-full border-2 border-blue-400 rounded-lg py-2 px-2 outline-none text-xl font-semibold mt-2 mb-2"
        />
        <input
          type="password"
          name=""
          id=""
          className="w-full border-2 border-blue-400 rounded-lg py-2 px-2 outline-none text-xl font-semibold mt-2 mb-4"
          placeholder="password"
        />
        <button className="bg-blue-400 w-full py-3 rounded-lg text-extrawhite-300  font-bold ">
          Sign in
        </button>
        <p className="mt-2">Don't have an account yet? Sign up</p>
      </div>
    </div>
  );
};

export default LoginScreen;
