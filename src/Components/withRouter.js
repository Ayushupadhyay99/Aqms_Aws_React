import { useNavigate } from 'react-router-dom';


/** 
 * @param {*} Component 
 * @returns  returns a new component. 
 * The new component is wrapped with some additional functionality that allows it to navigate to different routes. 
 * The withRouter function takes a component as an argument and returns a new function called Wrapper. 
 * The Wrapper function takes props and returns the original component along with a navigate function as a prop. 
 * The navigate function can be used to programmatically navigate to different routes.
 */
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};