import { IDatabase } from "@redux/slices/sqlQuerySlice";

export const MOCK_DB_DATA: Array<IDatabase> = [
  {
    id: 1,
    name: "Company",
    tables: [
      {
        id: 11,
        name: "Employee",
        schema: [
          {
            id: 111,
            key: "employeeID",
            type: "number",
          },
          {
            id: 112,
            key: "lastName",
            type: "string",
          },
          {
            id: 113,
            key: "firstName",
            type: "string",
          },
          {
            id: 114,
            key: "title",
            type: "string",
          },
          {
            id: 114,
            key: "titleOfCourtesy",
            type: "string",
          },
          {
            id: 115,
            key: "birthDate",
            type: "timestamp",
          },
          {
            id: 116,
            key: "hireDate",
            type: "timestamp",
          },
          {
            id: 117,
            key: "address",
            type: "string",
          },
        ],
        sampleQueries: [
          {
            id: 1121,
            query:
              "Select * from Company.Employee where name hireData > 1993-10-17",
          },
          {
            id: 1122,
            query:
              "Select * from Company.Employee where name birthData > 1970-10-17",
          },
          {
            id: 1123,
            query:
              "Select * from Company.Employee where name title = 'Sales Representative'",
          },
        ],
        queryHistory: [
          {
            id: 11211,
            query:
              "Select * from Company.Employee where name hireData > 1993-10-17",
          },
        ],
      },
      {
        id: 12,
        name: "Customer",
        schema: [
          {
            id: 121,
            key: "customerID",
            type: "number",
          },
          {
            id: 122,
            key: "companyName",
            type: "string",
          },
          {
            id: 123,
            key: "contactName",
            type: "string",
          },
          {
            id: 124,
            key: "contactTitle",
            type: "string",
          },
          {
            id: 124,
            key: "titleOfCourtesy",
            type: "string",
          },
          {
            id: 125,
            key: "phone",
            type: "number",
          },
          {
            id: 126,
            key: "fax",
            type: "number",
          },
          {
            id: 127,
            key: "address",
            type: "string",
          },
        ],
        sampleQueries: [
          {
            id: 1221,
            query: "Select * from Company.Customer where address = us",
          },
          {
            id: 1223,
            query:
              "Select * from Company.Customer where contactTitle = 'Sales Representative'",
          },
        ],
        queryHistory: [],
      },
    ],
  },
];
