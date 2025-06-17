"use client";

<<<<<<< HEAD
import { useBalance } from "@repo/store/balance";
=======
import { useBalance } from "@repo/store/useBalance";
>>>>>>> main

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}