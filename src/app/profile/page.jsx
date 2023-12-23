"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const session = useSession();
  const userInfo = session?.data?.user;
  const userImg = userInfo?.image;
  const { status } = session;
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (status === "authenticated") {
      setUserName(userInfo?.name);
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleProfile = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-4xl mb-4 text-primary">Profile</h1>
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-8">
          <div>
            <Image
              className="rounded-full mb-2"
              src={userImg}
              alt={"ankur-caffee"}
              width={100}
              height={100}
            />
            <button type="submit">Change</button>
          </div>
          <form className="grow" onSubmit={handleProfile}>
            <input
              type="text"
              placeholder="Name"
              defaultValue={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              disabled={true}
              defaultValue={userInfo?.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
