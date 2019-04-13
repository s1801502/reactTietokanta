import React from 'react';

const Data = ({ info }) => {
    let arr = [];
    let columns = 0;
    let a = [];


    a = Object.keys(info['0']).map(item => {
        columns++;
        return <td key={Math.random()}><strong>{item}</strong></td>

    });


    arr.push(<tr key={Math.random()}>{a}</tr>);

    for (let field in info) {
        a = [];
        a = Object.values(info[field]).map(item => {
            return <td key={Math.random()}>{item}</td>;
        });

        arr.push(<tr key={Math.random()}>{a}</tr>);

    }



    return (
        <div className="result">
            <table align="center">
                <thead>
                    <tr><th colSpan={columns}><h1 className="header">The Result</h1></th></tr>
                    <tr><td><p></p></td></tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>

            </table>

        </div>
    );
};

export default Data;