import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  selectedDB?: IDatabase;
  selectedTable?: ITable;
  databases: Array<IDatabase>;
  tables?: Array<ITable>;
  sampleQueries?: Array<IQueries>;
  history?: Array<IQueries>;
}

const INITIAL_STATE: IQuerySliceState = {
  databases: MOCK_DB_DATA,
};

const reducer = {
  setSelectedDB: (
    state: IQuerySliceState,
    action: PayloadAction<{ id: number }>
  ) => {
    const selectedDB = state.databases.filter(
      (db) => db.id === action.payload.id
    )?.[0];

    const tables = selectedDB.tables;

    return {
      ...state,
      selectedDB,
      tables,
    };
  },
  setSelectedTable: () => {},
};

const querySlice = createSlice({
  name: "querySlice",
  initialState: INITIAL_STATE,
  reducers: reducer,
});

export const { setSelectedDB, setSelectedTable } = querySlice.actions;
export default querySlice.reducer;
