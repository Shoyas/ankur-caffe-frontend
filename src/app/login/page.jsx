"use client";

import { useState } from "react";
import google from "../../asset/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import IconEyeSlash from "./../../components/icons/IconEyeSlash";
import IconEye from "./../../components/icons/IconEye";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginProgress(true);
    await signIn("credentials", {
      email,
      password,
    });

    setLoginProgress(false);
  };
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      <form className="block max-w-sm mx-auto" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative text-fontColor">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconEyeSlash /> : <IconEye />}
          </div>
        </div>
        <button type="submit">Login</button>
        <div className="text-center text-fontColor my-4">
          <h1>or</h1>
        </div>
        <div className="my-4">
          <button
            type="button"
            className="flex gap-4 justify-center"
            disabled={loginProgress}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Image src={google} alt={"ankur-caffee"} width={24} height={24} />
            Login with Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
