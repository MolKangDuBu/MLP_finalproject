import { useMemo } from "react";
import "./styles.css";
import faker from "faker/locale/ko";
import Table from "./Table";

faker.seed(100);

function App() {
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name"
      },
      {
        accessor: "email",
        Header: "Email"
      },
      {
        accessor: "phone",
        Header: "Phone"
      }
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(53)
        .fill()
        .map(() => ({
          name: faker.name.lastName() + faker.name.firstName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber()
        })),
    []
  );

  return <Table columns={columns} data={data} />;
}

export default App;
