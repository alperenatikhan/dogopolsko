import React from "react";
import DogoLogo from "./good_doggy.svg";
import FadeIn from "react-fade-in";

export default function Header() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "gold",
            fontSize: "2rem",
            margin: "2vh auto -0.5rem auto",
            fontFamily: "BioRhyme, serif",
            textShadow: "2px 2px 2px lightgray"
          }}
        >
          Dogs of Poland
        </h1>
        <FadeIn>
          {" "}
          <h2 style={{ width: "50vw", color: "dodgerblue", fontWeight: "400" }}>
            {" "}
            Przygarnij psa. Tak rodzą się przyjaźnie.{" "}
          </h2>
        </FadeIn>
        <img
          alt="site hero"
          src={DogoLogo}
          style={{
            height: "25vh"
          }}
        />
      </div>
    </section>
  );
}
