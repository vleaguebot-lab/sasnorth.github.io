import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
const tableCsv = new TableCsv(tableRoot);

tableCsv.setHeader(["ID", "Name", "Age"]);
tableCsv.setBody([
    [4500, "dom", 35],
    [4500, "dom", 35],
    [4500, "dom", 35]
]);