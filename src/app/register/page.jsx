"use client";

import Image from "next/image";
import google from "../../asset/google.png";
import { useState } from "react";
import Link from "next/link";
import IconEyeSlash from "./../../components/icons/IconEyeSlash";
import IconEye from "./../../components/icons/IconEye";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setUserCreated(false);
    setError(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>

      <form className="block max-w-sm mx-auto" onSubmit={handleRegisterSubmit}>
        <input
          type="email"
          placeholder="Enter email"
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
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        {userCreated && (
          <div className="text-center text-fontColor my-4">
            User is created. Now you can{" "}
            <Link className="underline text-primary" href={"/login"}>
              Login
            </Link>
          </div>
        )}
        {error && (
          <div className="text-center text-primary my-4">
            <span className="font-semibold">Getting Error:</span> Please Try
            again later
          </div>
        )}
        <div className="text-center text-fontColor my-4">
          <h1>or</h1>
        </div>
        <button
          className="flex gap-4 justify-center"
          disabled={creatingUser}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src={google} alt={"ankur-caffee"} width={24} height={24} />
          Login with Google
        </button>
        <div className="text-fontColor my-4 text-center">
          Have an existing account?{" "}
          <Link className="text-primary underline" href={"/login"}>
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
