import { payments } from '@/helpers';
import { DataTable } from './data-table';
import { columns } from './columns';

const fetchData = async () => {
  return payments;
};

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
