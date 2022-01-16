import React from 'react';
import useSWR from "swr";
import { Loader, Alert, Modal, Button, Card } from "@mantine/core";
import { useEffect, useState } from "react";
import AlertIcon from "../alert.png";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Diagnosis() {
  const [emergency, setEmergency] = useState(false);
  const [counter, setCounter] = useState(0);
  const { data, error } = useSWR(
    `https://medisearch.deta.dev/get_illness${
      window.location.href.split("https://medisearch.scidroid.co/diagnosis")[1]
    }`,
    fetcher
  );

  useEffect(() => {
    if (data && counter < 1) {
      setEmergency(data.emergency);
      setCounter(counter + 1);
    }
  });

  if (!data) {
    return (
      <section
        style={{
          display: "flex",
        }}
      >
        <Loader
          style={{
            margin: "0 auto",
          }}
          color="red"
          size="xl"
        />
      </section>
    );
  }
  return (
    <>
      <Modal centered opened={emergency} onClose={() => setEmergency(false)}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <img
            src={AlertIcon}
            alt="alert"
            style={{
              width: "100px",
              height: "100px",
              margin: "0 auto",
              marginBottom: "20px",
            }}
          />
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "red",
              fontFamily: "sans-serif",
              textAlign: "center",
            }}
          >
            You need emergency help!
          </p>
          <Button component="a" size="xl" color="red" href="tel:911">
            Call emergency
          </Button>
        </section>
      </Modal>
      <section
        style={{
          width: "60%",
          minWidth: "450px",
          margin: "20px auto",
          fontFamily: "sans-serif",
        }}
      >
        {data.emergency && (
          <Alert
            title="You need to go to emergencies!"
            color="red"
            variant="filled"
            style={{
              width: "60%",
              minWidth: "300px",
              margin: "20px auto",
            }}
          >
            Your current diagnosis tells us you might need to get emergency
            attention.
          </Alert>
        )}
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          You might have
        </p>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {data.illnesses[0].name}
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",

            fontWeight: "bold",
          }}
        >
          You need to go to a {data.specialist.name}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {data.illnesses[0].description}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            margin: "20px",
          }}
        >
          Possible symptoms
        </p>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.symptoms.map((item) => (
            <Card>
              <h2 style={{ textAlign: "center" }}>{item.common_name}</h2>
              <h3 style={{ textAlign: "center" }}>{item.name}</h3>
            </Card>
          ))}
        </section>
      </section>
    </>
  );
}
