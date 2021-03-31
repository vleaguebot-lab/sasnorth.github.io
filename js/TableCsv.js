export default class {
    /**
     * 
     * @param {HTMLTableElement} root The table element which will display the CSV data.
     */
    constructor(root) {
        this.root = root;
        // console.log("I am constructed!");
    }

    /**
     * 
     * @param {string[]} headerColumns List of headings to be used
     */
    setHeader(headerColumns) {
        this.root.insertAdjacentHTML("afterbegin", 
            `<thead>
                <tr>
                    ${headerColumns.map(text => `<th>${text}</th>`).join("")}
                </tr>
            </thead>`
        );
    }

    /**
     * 
     * @param {string[][]} data A 2D array of data to be used as the table body
     */
    setBody(data) {
        const rowsHtml = data.map(row => {
            return
                `<tr>
                    ${ row.map(text => `<td>${ text }</td>` ).join("")}
                </tr>`
            ;
        });

        // // console.log(rowsHtml);
        // this.root.insertAdjacentHTML("beforeend", `
        //     <tbody>
        //         ${ rowsHtml.join("") }
        //     </tbody>
        // `);
    }
}