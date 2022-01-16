import React from "react";
import hero from "../hero-image.svg";
import { Button } from "@mantine/core";
import { Link } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";

export default function Hero() {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img
        src={hero}
        alt="Hero image"
        style={{
          margin: "0 auto",
        }}
      />
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          Don't know why you feel bad?
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontFamily: "sans-serif",
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          With MediSearch you get real results with AI based on medical studies.
        </p>
        <div>
          {isAuthenticated ? (
            <Link href="/app">
              <Button
                style={{ margin: 10 + "px" }}
                component="a"
                variant="outline"
                color="red"
                size="md"
              >
                Enter to the app
              </Button>
            </Link>
          ) : (
            <Button
              style={{ margin: 10 + "px" }}
              onClick={() => loginWithPopup()}
              variant="outline"
              color="red"
              size="md"
            >
              Login to start
            </Button>
          )}
          <Button
            style={{ margin: 10 + "px" }}
            component="a"
            href="https://devpost.com/software/medisearch"
            variant="outline"
            color="blue"
            size="md"
          >
            Learn more
          </Button>
        </div>
      </article>
    </section>
  );
}
