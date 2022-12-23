import { format } from "date-fns";

export const COLUMNS = [
	{
		Header: "No",
		Footer: "No",
		accessor: "No",
	},
	{
		Header: "Transaction ID",
		Footer: "Transaction ID",
		accessor: "Transaction_ID",
	},
    {
		Header: "Loan Name",
		Footer: "Loan Name",
		accessor: "Loan_Name",
	},
    {
		Header: "Employee",
		Footer: "Employee",
		accessor: "Employee",
	},
	{
		Header: "Loan Amount",
		Footer: "Loan Amount",
		accessor: "Loan_Amount",
	},
    {
		Header: "Installment",
		Footer: "Installment",
		accessor: "Installment",
	},
    {
		Header: "Interest",
		Footer: "Interest",
		accessor: "Interest",
    },
	{
		Header: "Effective  Date",
		Footer: "Effective Date",
		accessor: "Effective_Date",
         // Cell: ({ value }) => {
		// 	return format(new Date(value), "dd-MM-yyyy");
		// },
	},
];