import { format } from "date-fns";

export const ColumnsViewBalance = [
    {
        Header: "Employee",
        accessor: "employee",
    },
    {
        Header: "Start Date",
        accessor: "start_date",
        Cell: ({ value }) => {
			return format(new Date(value), "yyy-MM-dd");
		},
    },
    {
        Header: "End Date",
        accessor: "end_date",
        Cell: ({ value }) => {
			return format(new Date(value), "yyy-MM-dd");
		},
    },
    {
        Header: "Balance",
        accessor: "balance",
    },
    {
        Header: "Type",
        accessor: "type",
    },
    {
        Header: "Transaction ID",
        accessor: "transaction_id",
    },
    {
        Header: "status",
        accessor: "status",
    },
]