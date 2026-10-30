"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import UbdateUser from "./UbdateUser";
const UsersCard = ({ user }) => {
  const { _id } = user;
   const router = useRouter();

    const handleDeleteUser = async(id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        });

        const afterDelete = await res.json();
        console.log('after delete', afterDelete);
        if(afterDelete.deletedCount > 0){
            console.log('User deleted successfully');
            router.refresh();
        }
    }
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">


        <CardHeader>
          <CardAction>

          </CardAction>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>
            {user.email}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/users/${user._id}`} className="w-full">
            <Button className="w-full">View Event</Button>
          </Link>
        <UbdateUser user={user} />
          <Button
            variant="destructive"
            onClick={() => handleDeleteUser(_id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UsersCard;