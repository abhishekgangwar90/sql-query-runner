import { createSlice } from "@reduxjs/toolkit";

// mock DB DATA
import { MOCK_DB_DATA } from "../../mocks/mockDb";

export interface IQueries {
  id: number;
  query: string;
  result?: [];
}

export interface ITableSchema {
  id: number;
  key: string;
  type: string;
}

export interface ITable {
  id: number;
  name: string;
  schema: Array<ITableSchema>;
  sampleQueries: Array<IQueries>;
  queryHistory: Array<IQueries>;
}

export interface IDatabase {
  id: number;
  name: string;
  tables: Array<ITable>;
}

export interface IQuerySliceState {
  selectedDb: string | null;
  selectedTable: string | null;
  databases: Array<IDatabase>;
  tables: Array<ITable>;
  sampleQueries: Array<IQueries>;
  history: Array<IQueries>;
}

const INITIAL_STATE = {
  selectedDB: null,
  selectedTable: null,
  selectedQueryResult: [],
  databases: MOCK_DB_DATA,
  tables: MOCK_DB_DATA[0].tables,
  sampleQueries: MOCK_DB_DATA[0].tables[0].sampleQueries,
  history: MOCK_DB_DATA[0].tables[0].queryHistory,
};

const reducer = {
  setSelectedDB: () => {},
  setSelectedTable: () => {},
};

const querySlice = createSlice({
  name: "querySlice",
  initialState: INITIAL_STATE,
  reducers: reducer,
});

export const { setSelectedDB, setSelectedTable } = querySlice.actions;
export default querySlice.reducer;
