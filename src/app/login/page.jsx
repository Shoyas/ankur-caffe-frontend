"use client";
import { useState } from "react";
import google from "../../asset/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);

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
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="my-4">
          <button
            className="flex gap-4 justify-center"
            disabled={loginProgress}
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
