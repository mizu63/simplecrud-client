
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UbdateUser = ({ user }) => {
  const handleUpdateUser = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedUser = Object.fromEntries(formData.entries());

    console.log("Updated user:", updatedUser);
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button type="button" variant="outline">
            Update
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleUpdateUser}>
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
            <DialogDescription>
              Update user information.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue={user.name}
              />
            </Field>

            <Field>
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UbdateUser;
