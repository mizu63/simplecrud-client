const DealitsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>User not found!</h1>;
  }

  const user = await res.json();

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default DealitsPage;