import React, { Component } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {withRouter} from './withRouter';


class HeaderComponent extends Component {
/**
 * constructor method for a React component that binds "this" to methods 
 * "GetCarbonDioxideData()", "GetOzoneData()", and "GetDataList()".
 * @param {*} props 
 */
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.GetCarbonDioxideData = this.GetCarbonDioxideData.bind(this);
        this.GetOzoneData = this.GetOzoneData.bind(this);
        this.GetDataList = this.GetDataList.bind(this);
        
    }
    /**
     * method  that navigates to a "/list" route using the "navigate()" function from the "props" object
     */
    GetDataList(){
        this.props.navigate('/list');
    }
    /**
     * method  that navigates to a "/CarbonDioxideData" route using the "navigate()" function from the "props" object
     */
    GetCarbonDioxideData(){
        this.props.navigate('/CarbonDioxideData');
    }
    GetOzoneData(){
        this.props.navigate('/dustparticalData');
    }

    /**
     * 
     * @returns  navigation bar with three buttons  "AQMS Complete Data", "Carbon Dioxide Data", and "Ozone Data"
     */
     
    render() {
        return (
            <div>
                  <header>
                       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                         <div><a href="https:.net" className="navbar-brand">Air Quality Management App</a></div>

                         
                                <MDBBtn rounded className='mx-2' color='secondary'onClick={this.GetDataList} active>
                                 AQMS Complete Data                               
                                 </MDBBtn>
                                                
                              <MDBBtn  rounded className='mx-2'  color='secondary'  onClick={this.GetCarbonDioxideData} active>
                                Carbon Dioxide Data
                                </MDBBtn>
                                <MDBBtn rounded className='mx-2' color='secondary'onClick={this.GetOzoneData} active>
                                 Ozone Data
                                </MDBBtn>
                               
                                
                                 
                                   
                        </nav>  
                   </header>
            </div>
        );
    }
}
/**
 * to make it available for use in other components.
 */
export default withRouter (HeaderComponent);