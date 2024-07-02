import { payments } from '@/helpers';

const fetchData = async () => {
  return payments;
};

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <h1>Home Page</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
