import React from "react";
import { NavLink } from "react-router-dom";

const CoursesLink = () => {
    
        return (
            <>  
            
              <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">MCA</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">M.Tech</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">BE/B.Tech</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">M.Sc</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">M.Phil</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">MBBS</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">MD</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">MS</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">B.Sc</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">BDS</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">BPharma</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">MPharma</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">M.ED</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">B.ED</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">LLB</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">Architect</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">Fashion Designing</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">Dance</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn btn-outline-warning margin-left">Singing</button></NavLink>
           
          </>

        );
};

export default CoursesLink;