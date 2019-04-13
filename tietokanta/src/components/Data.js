import React from 'react';

const Data = ({info}) => {
    
    const {body, names, columnNames, database} = info;
    let arr = [];
    let maxlen = 0;
    

    for (let table in names) {
        if (columnNames[table].length > maxlen)
            maxlen = columnNames[table].length;
    
    }
    
    for (let table in names) {

        arr.push(<tr key={names[table]}  className="resultLarger header w3-blue w3-card-4"><td colSpan={maxlen} align="center">Table: {names[table]}</td></tr>)
        let a = [];
        for (let column in columnNames[table]) {
            a.push(<td key={columnNames[table][column]}><strong>{columnNames[table][column]}</strong></td>)
        }
        arr.push(<tr key={Math.random()}>{a}</tr>);
        

        for (let i in body[table]) {
            a = [];
            for (let e in body[table][i]) {
                a.push(<td key={e} >{body[table][i][e]}</td>);
            }
            arr.push(<tr key={Math.random()}>{a}</tr>);
        }

        arr.push(<tr key={Math.random()}><td><p></p></td></tr>);
        arr.push(<tr key={Math.random()}><td><p></p></td></tr>);
      
    }

    return (
        <div className="result">
            <table align="center">
                <thead>
                <tr><th colSpan={maxlen}><h1 className="header">Content of database: <span className="w3-text-red">{database}</span></h1></th></tr>
                </thead>
                
                <tbody>
                    <tr><td><p></p></td></tr>
                    {arr}
                </tbody>
                
            </table>
            
        </div>
    );
};

export default Data;