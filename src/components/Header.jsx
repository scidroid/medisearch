import React from "react";
import { Button } from "@mantine/core";
import { Link } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0.5rem 1rem",
      }}
    >
      <p
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          margin: 0,
          fontFamily: "sans-serif",
          boxShadow:
            "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 red",
        }}
      >
        MediSearch
      </p>
      {isAuthenticated ? (
        <Button
          onClick={() => logout()}
          variant="outline"
          color="red"
          size="md"
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => loginWithPopup()}
          variant="outline"
          color="red"
          size="md"
        >
          Login to start
        </Button>
      )}
    </header>
  );
}
