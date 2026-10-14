"use client"
import { useEffect } from "react";

export default function Tawk() {
  useEffect(() => {
    var s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/687ff2649e6e70191a1b4f39/1j0pslmr5";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null;
}
