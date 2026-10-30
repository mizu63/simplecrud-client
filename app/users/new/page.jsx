
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Addpage() {
  const router = useRouter();

  const handeladdneruser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newdata = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok && data.insertedId) {
        router.push("/users");
      } else {
        console.error("User add failed:", data.message);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handeladdneruser}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">
            Name
          </FieldLabel>
          <Input
            id="fieldgroup-name"
            name="name"
            placeholder="Jordan Lee"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="fieldgroup-email">
            Email
          </FieldLabel>
          <Input
            id="fieldgroup-email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>

        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>

          <Button type="submit">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
