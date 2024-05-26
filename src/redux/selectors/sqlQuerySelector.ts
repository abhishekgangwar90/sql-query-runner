import { RootState } from "@redux/store";

export const getQueryDashboardData = ({ queryDashboard }: RootState) => {
  return queryDashboard;
};

export const getAllDatabases = ({ queryDashboard }: RootState) => {
  return queryDashboard.databases;
};

export const getAllTables = ({ queryDashboard }: RootState) => {
  return queryDashboard?.tables;
};

export const getQueryHistory = ({ queryDashboard }: RootState) => {
  return queryDashboard?.history;
};

export const getSampleQueries = ({ queryDashboard }: RootState) => {
  return queryDashboard?.sampleQueries;
};
