import React from 'react';
import { Textarea, Select, Input, InputWrapper, Button } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useLocation } from "wouter";

export default function InputForm() {
  const [location, setLocation] = useLocation();

  const form = useForm({
    initialValues: {
      prompt: "",
      sex: "",
      age: 1,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        setLocation(
          `/diagnosis?prompt=${values.prompt}&sex=${values.sex}&age=${values.age}`
        )
      )}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        minWidth: "450px",
        margin: "20px auto",
      }}
    >
      <Textarea
        placeholder="Describe your symptoms and how you feel"
        label="Describe how you feel"
        description="Describe your symptoms and how you feel"
        size="md"
        required
        style={{
          margin: "20px",
        }}
        {...form.getInputProps("prompt")}
      />
      <Select
        transition="pop-top-left"
        transitionDuration={200}
        transitionTimingFunction="ease"
        placeholder="Select your sex"
        label="What is your sex?"
        description="We need this for te most accurate results"
        size="md"
        required
        data={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        style={{
          margin: "20px",
        }}
        {...form.getInputProps("sex", { type: "select" })}
      />
      <InputWrapper
        style={{
          margin: "20px",
        }}
        id="input-age"
        required
        label="Your age"
        description="Your age help us to determinate your possible illness"
      >
        <Input
          id="input-age"
          {...form.getInputProps("age", { type: "number" })}
          placeholder="Your age"
          size="md"
        />
      </InputWrapper>
      <Button
        type="submit"
        color="red"
        size="md"
        style={{
          margin: "0 auto",
        }}
      >
        Search
      </Button>
    </form>
  );
}
