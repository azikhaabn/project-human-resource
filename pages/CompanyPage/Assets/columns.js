import { format } from "date-fns";

export const COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
	},
	{
		Header: "Actions",
		Footer: "Actions",
		accessor: "actions",
	},
	{
		Header: "Employee",
		Footer: "Employee",
		accessor: "employee",
	},
	{
		Header: "Asset Category",
		Footer: "Asset Category",
		accessor: "asset_category",
	},
	{
		Header: "Serial Number",
		Footer: "Serial Number",
		accessor: "serial_number",
	},
	{
		Header: "Description",
		Footer: "Description",
		accessor: "description",
	},
	{
		Header: "Lend Date",
		Footer: "Lend Date",
		accessor: "lend_date",
		Cell: ({ value }) => {
			return format(new Date(value), "dd/MM/yyyy");
		},
	},
	{
		Header: "Return Date",
		Footer: "Return Date",
		accessor: "return_date",
	},
];
