import './App.css';
import { Route, Routes,} from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent';
import GetCarbonDioxideComponent from './Components/GetCarbonDioxideComponent';
import GetOzoneComponents from './Components/GetOzoneComponents';
import GetDataList from './Components/GetDataList';
function App() {
  return (
    
   <div>
       <HeaderComponent />
         <div className="App">
           <Routes>     
                 <Route path = '/'  element = {<GetDataList/>}></Route>
                 <Route path = '/CarbonDioxideData'  element = {<GetCarbonDioxideComponent/>}></Route>
                 <Route path = '/dustparticalData'  element = {<GetOzoneComponents/>}></Route>
                 <Route path = '/list'  element = {<GetDataList/>}></Route>
            </Routes>
         </div>
         
   </div> 
  );
}
export default App;
