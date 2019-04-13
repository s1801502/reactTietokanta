


const printTables = (tableNames, columnNames) => {
    

    let obj = {
        names: [],
        columnNames: []

     };

    for (table of tableNames) {
        let arr = [];

        for (let column of columnNames) {
            if (table.table_name === column.table_name) {
                arr.push(column.Column_name);
            }
        }

        obj.names.push(table.table_name);
        obj.columnNames.push(arr);

    }
    return obj;
    
};

module.exports = printTables;