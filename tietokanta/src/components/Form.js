import React, { useState } from 'react';


const Form = ({ setConnected, setDb }) => {

    const [error, setError] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            host: e.target.host.value,
            user: e.target.user.value,
            password: e.target.password.value,
            database: e.target.database.value
        };

        

        setDb(data.database);

        

        await fetch('http://localhost:3001/form-data-url',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                method: 'POST',
                body: JSON.stringify(data)
            }
        )
            .then(status => status.json())
            .then(response => {

                if (response[0] !== -1)
                    setConnected(true);

                else
                    setError(response[1].code);

                    

            }).catch(err => {
                console.log(err);
            });

    }


    return (
        <div className="sideBySide">
            <form onSubmit={handleSubmit}>
                <table className="w3-card-4 form w3-text-red">
                    <tbody>
                        <tr><td className="formItem"><label htmlFor="host">Host:</label></td>
                            <td className="formItem"><input name="host" className="w3-card-4" /></td></tr>


                        <tr><td className="formItem"><label htmlFor="user">User:</label></td>
                            <td className="formItem"><input name="user" className="w3-card-4" /></td>
                        </tr>



                        <tr><td className="formItem"><label htmlFor="password">Password:</label></td>
                            <td className="formItem"><input name="password" className="w3-card-4" /></td>
                        </tr>


                        <tr><td className="formItem"><label htmlFor="database">Database:</label></td>
                            <td className="formItem"><input name="database" className="w3-card-4" /></td>
                        </tr>


                        <tr><td colSpan="2" className="w3-center"><input type="submit" value="Submit" className="w3-card-4 w3-button w3-hover-blue submit" /></td></tr>

                    </tbody>
                </table>
            </form>
            <h2>{error}</h2>
        </div>
    );
}

export default Form;