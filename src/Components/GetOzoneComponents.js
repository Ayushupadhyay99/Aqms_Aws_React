import React, { Component } from "react";
import UserService from '../services/UserService';

class GetOzoneComponents extends Component {
/**
 *constructor method for a React component that initializes 
 *the component's state with an empty array for the "particles" key
*/
  constructor(props){
    super(props)
    this.state = {
        particles:[]
    }
 }

/**
 * This is a React component lifecycle method componentDidMount()
 * that sets an interval for calling UserService.getOzoneData() every 1000 milliseconds
 *  and updating the component's state with the response data
 */
 componentDidMount(){
    this.interval = setInterval(() => {
        UserService.getOzoneData().then((response) => {
            this.setState({ particles: response.data})
        });
    },1000);
}
/**
 *  clear the interval in the componentWillUnmount() method to prevent memory leaks.
 */
componentWillUnmount() {
    clearInterval(this.interval);
  }

/**
 * 
 * @returns a table of ozone data
 */
render() {
    return (
      
             <div>
                  <h3 className = "text-center"> Ozone Data</h3>
                  <table className = "table table-striped">
                <thead>
                    <tr>
                        
                        <td> ozone</td>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        this.state.particles.map((particle,index)=>
                            
                            <tr key = {index}> 
                                 <td className={particle > 200 ? 'text-danger' : " "}> {particle}</td>
                                  
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>

    )
}
}


export default GetOzoneComponents;
