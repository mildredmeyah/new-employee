import React from 'react'
import '../components/display.css';
function displayEmployee(props){
    
    return(
        <div>
            {props.list.map((emp) =>(

                <div className='employee'>
                    <br></br>
                    <div className='list'>EMPLOYEE LIST</div>
                    <table>  
                        <thead>
                            <tr>
                                <td width={"800px"}>First Name</td>
                                <td>Last Name</td>
                                <td>Email Address</td>
                            </tr>
                        </thead>

                        <tbody>
                            
                        <td><div className="first">
                        <h4>{emp.firstname}</h4>
                        </div>
                        </td>


                        <td>
                            <div className="last">
                        <h4>{emp.lastname}</h4>
                        </div>
                        </td>

                        <td><div className="email">
                        <h4>{emp.email}</h4>
                        </div>
                        </td>

                        </tbody>
                         
                        </table>
                 


                </div>
            ))}
        </div>
    )
}
export default displayEmployee;