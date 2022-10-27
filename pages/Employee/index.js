import React, { useMemo } from "react";
import {
  useFilters,
  useGlobalFilter,
  useGroupBy,
  usePagination,
  useRowSelect,
  useTable,
  useAsyncDebounce,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columns } from "./columns";
import styles from "/styles/Employee.module.css";
import { Icon } from "@iconify/react";
import Header from "../Component/common/header";
import SelectSearch from "react-select-search";
import { options } from "./options";
import regeneratorRuntime from "regenerator-runtime";

export default function Employee() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  function GlobalFilter({
    globalFilter,
    setGlobalFilter,
  }) {

    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      //problem : not focusing when rendering
      <input
        type="search"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    );
  }

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate])

      return (
        <>
          <input type={"checkbox"} ref={resolvedRef} {...rest}/>
        </>
      )
    }
  );

  const IndeterminateCheckbox1 = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <div className={styles.cb}>
          <label>
            <input type="checkbox" ref={resolvedRef} {...rest} />
            <span>Deselect All</span>
          </label>
        </div>
      )   
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    getToggleHideAllColumnsProps,
    state,
    setGlobalFilter,
    
    state: { pageIndex, pageSize},
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useGroupBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: "selection",

          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  );
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h2>Employees</h2>

          <button className={styles.transfer}>Employee Transfer</button>

          <button
            type="button"
            className={styles.butExport}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Export
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            data-bs-backdrop="static"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Export Employee Data
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className={styles.mSection}>
                    <label className={styles.mLabel}>Employment Status</label>
                    <select className="selectpicker">
                      <option>Mustard</option>
                      <option>Ketchup</option>
                      <option>Relish</option>
                    </select>
                  </div>
                  <div className={styles.mSection}>
                    <label className={styles.mLabel}>Employment Status</label>
                    <select className="selectpicker">
                      <option>Mustard</option>
                      <option>Ketchup</option>
                      <option>Relish</option>
                    </select>
                  </div>
                  <div className={styles.mSection}>
                    <label className={styles.mLabel}>Employment Status</label>
                    <SelectSearch
                      options={options}
                      value="sv"
                      name="language"
                      placeholder="Choose your language"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.butOption}>...</button>
          <button className={styles.butAdd}>Add Employee</button>
          <button className={styles.bulk}>Bulk Update</button>

          <a
            class="btn btn-warning dropdown-toggle"
            className={styles.butColumn}
            style={{
              backgroundColor: "#D1E0EE",
              border: "none",
              height: "27.2px",
              width: "70px",
              marginLeft: "20px",
              left: "20px",
              paddingLeft: "2px",
              lineHeight: "3px",
            }}
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Icon
              icon="humbleicons:columns-three-thirds"
              color="grey"
              fontSize={"20px"}
            />
          </a>
          <ul class="dropdown-menu" style={{ width: "240px" }}>
            <li>
              <h6 class="dropdown-header">Column displayed</h6>
            </li>
            <div>
              <IndeterminateCheckbox1 {...getToggleHideAllColumnsProps()} />{" "}
            </div>
            {allColumns.map((column) => (
              <li>
                <div key={column.Header}>
                  <label>
                    <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                    {column.Header}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.sBox}>
            <GlobalFilter
              // preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>
        <div className={styles.tableEdit}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroups => (
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {headerGroups.headers.map(column => (
                    <th
                      {...column.getHeaderProps({
                        
                      })}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps({
                            
                          })}
                        >
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <h2>Showing</h2>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <div className={styles.opt}>
            <h2>From</h2>
            <span>{data.length}</span>
          </div>
          <button
            className={styles.butLeft}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <Icon icon="bx:arrow-to-left" color="grey" fontSize={"20px"} />
          </button>
          <button
            className={styles.butLeft1}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <Icon icon="akar-icons:arrow-left" color="grey" />
          </button>
          <div className={styles.opt1}>
            <input
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
            <h2>From</h2>
            <span> {pageOptions.length} </span>
          </div>
          <button
            className={styles.butRight}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <Icon icon="akar-icons:arrow-right" color="grey" />
          </button>
          <button
            className={styles.butRight1}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <Icon icon="bx:arrow-to-right" color="grey" fontSize={"20px"} />
          </button>
        </div>
      </main>
    </div>
  );
}
