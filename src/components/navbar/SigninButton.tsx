"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link className="hover:underline px-4 text-md text-gray-300 hover:text-yellow-500 capitalize animate-pulse" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="tracking-wider text-md text-gray-400 hover:text-red-500 capitalize animate-pulse" href={"/UserPost"}>
              Crear Post
            </Link>
          </li>
          <li>
            <Link className="text-slate-500 hover:text-sky-500 transition-colors flex items-center gap-2 animate-bounce" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="text-slate-500 hover:text-sky-500 transition-colors flex items-center gap-2 animate-bounce" href={"/profile"}>
              Perfil
            </Link>
          </li>
        </ul>
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} >
          Sign Out
        </button>
      </div>
    );
  }
  return (

    <li className="flex gap-4 ml-auto">
      <button className="hover:underline px-4 text-md text-gray-300 hover:text-yellow-500 capitalize animate-pulse" onClick={() => signIn()}>
        Sign In
      </button>
    </li>
  );
};

export default SigninButton;
