import { format } from "date-fns";

export const COLUMNS = [
	{
		Header: "Employee Name",
		Footer: "Employee Name",
		accessor: "Employee_Name",
	},
	{
		Header: "Type",
		Footer: "Type",
		accessor: "Type",
	},
	{
		Header: "Message",
		Footer: "Message",
		accessor: "Message",
	},
	{
		Header: "Start Date",
		Footer: "Start Date",
		accessor: "Start_Date",
        Cell: ({ value }) => {
			return format(new Date(value), "dd-MM-yyyy");
		},
	},
	{
		Header: "Expired Date",
		Footer: "Expired Date",
		accessor: "Expired_Date",
        Cell: ({ value }) => {
			return format(new Date(value), "dd-MM-yyyy");
		},
	},
	{
		Header: "Status",
		Footer: "Status",
		accessor: "Status",
	},
	{
		Header: "Action",
		Footer: "Action",
		accessor: "Action",
	},
];