import Counter from "../components/Counter";

type User = {
  id: number;
  name: string;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </div>
  );
}
