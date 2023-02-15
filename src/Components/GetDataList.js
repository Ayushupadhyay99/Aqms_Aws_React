import React, { Component } from 'react';
import UserService from '../services/UserService';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


class GetDataList extends Component {
/**
 *constructor method for a React component that initializes 
 *the component's state with an empty array for the "particles" key
*/
    constructor(props){
        super(props)
        this.state = {
            users:[],
            /* 2 variables that  will be used to filter the data being displayed*/
            selectedFloor:"all",
            selectedFloorName:"All"
        }
    
     }
 /**
 * This is a React component lifecycle method componentDidMount()
 * that sets an interval for calling UserService.getOzoneData() every 1000 milliseconds
 *  and updating the component's state with the response data
 */ 
     componentDidMount(){
        this.interval = setInterval(() => {
            UserService.getList().then((response) => {
                this.setState({ users: response.data})
            });
        },1000);

         this.interval =  setInterval(()=>{
              UserService.sendEmail()
              console.log("Message sent");
         },60000);
    }
/**
 *  clear the interval in the componentWillUnmount() method to prevent memory leaks.
 */
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    handleChange = (event) => {
        this.setState({ selectedFloor: event });
      };

      
      handleSelect = (event) => {
        this.setState({ selectedFloorName: event });
      };

/**
 * 
 * @returns a table of  data
 */
    render() {

        const { users, selectedFloor,selectedFloorName } = this.state;
  
        let filteredItems = users;
        if (selectedFloor !== 'all') {
          filteredItems = users.filter(user => user.floor === selectedFloor);
        }

        return (
          
                 <div>

                      <h2>AQMS Data   </h2>
                      <div rounded className='mx-2' color='secondary'>
                     <MDBDropdown>
                      <MDBDropdownToggle color='secondary'> {selectedFloorName}</MDBDropdownToggle>
                      <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={()=>{this.handleChange("all");this.handleSelect("All Floor")}}>All Floor</MDBDropdownItem>
                      <MDBDropdownItem link onClick={()=>{this.handleChange("Floor1");this.handleSelect("Floor 1")}}>Floor 1 </MDBDropdownItem>
                      <MDBDropdownItem link onClick={()=>{this.handleChange("Floor2");this.handleSelect("Floor 2")}}>Floor 2</MDBDropdownItem>
                      <MDBDropdownItem link onClick={()=>{this.handleChange("Floor3");this.handleSelect("Floor 3")}}>Floor 3</MDBDropdownItem>
                      </MDBDropdownMenu>
                      </MDBDropdown>
                      </div>
                       
                <table id = 'Data List' className = "table table-striped ">
                    <thead>
                        <tr>

                            <td>Id</td>
                            <td> Ozone</td>
                            <td> CarbonDioxide</td>
                            <td> CarbonMonoxide</td>
                            <td> NitrogenDioxide</td>
                            <td> SulphureDioxide</td>
                            <td> Year</td>
                            <td> Month</td>
                            <td> Day</td>
                            <td> Floor</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            filteredItems.map(
                                user => 
                                <tr key = {user.id}>
                                     <td>{user.id}</td>  
                                     <td className={user.ozone > 200 ? 'text-danger' : " "}> {user.ozone}</td>   
                                     <td className={user.carbonDioxide > 70 ? 'text-danger' : " "}> {user.carbonDioxide}</td>   
                                     <td className={user.carbonMonoxide > 55 ? 'text-danger' : " "}> {user.carbonMonoxide}</td>
                                     <td className={user.nitrogenDioxide > 120 ? 'text-danger' : " "}> {user.nitrogenDioxide}</td>
                                     <td className={user.sulphureDioxide > 260 ? 'text-danger' : " "}> {user.sulphureDioxide}</td>
                                     <td> {user.year}</td>
                                     <td> {user.month}</td>
                                     <td> {user.day}</td>   
                                     <td> {user.floor}</td> 
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default GetDataList;