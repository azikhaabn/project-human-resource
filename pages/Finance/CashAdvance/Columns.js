import { format } from "date-fns";

export const COLUMNS = [
	{
		Header: "Request ID",
		Footer: "Request ID",
		accessor: "Request_ID",
	},
	{
		Header: "Request Date",
		Footer: "Request Date",
		accessor: "Request_Date",
        // Cell: ({ value }) => {
		// 	return format(new Date(value), "dd-MM-yyyy");
		// },
	},
	{
		Header: "Date Of Use",
		Footer: "Date Of Use",
		accessor: "Date_Of_Use",
        // Cell: ({ value }) => {
		// 	return format(new Date(value), "dd-MM-yyyy");
		// },
	},
	{
		Header: "Employee",
		Footer: "Employee",
		accessor: "Employee",
	},
	{
		Header: "Policy",
		Footer: "Policy",
		accessor: "Policy",
	},
    {
		Header: "Purpose",
		Footer: "Purpose",
		accessor: "Purpose",
	},
    {
		Header: "Amount",
		Footer: "Amount",
		accessor: "Amount",
	},
    {
		Header: "Status",
		Footer: "Status",
		accessor: "Status",
	},
];