import React from "react";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
    
        return (
          <>
            <section id="search-bar" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className='row'>
                   <div className="col-lg-10 mx-auto">
                       <form>
                           <div>
                               <div className="input-group">
                                  <input type="search" placeholder="Search for Dreams college and videos" class="form-control" />
                                    <div className="input-group-append">
                                     <div class="btn-group">
                                        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                         Action
                                        </button>
                                        <div class="dropdown-menu">
                                          <NavLink class="dropdown-item" to="#"><i className="fas fa-image mr-2"></i>Images</NavLink>
                                          <NavLink class="dropdown-item" to="#"><i className="fas fa-camera mr-2"></i>Photos</NavLink>
                                          <NavLink class="dropdown-item" to="#"><i className="fas fa-bezier-curve mr-2"></i>Vectors</NavLink>
                                        <div class="dropdown-divider"></div>
                                        <NavLink class="dropdown-item" to="#"><i className="fas fa-play-circle mr-2"></i>Videos</NavLink>
                                        </div>
                                      </div>
                                      <div className="input-group-append">
                                         <button type="submit" className="btn btn-link"><i className="fa fa-search"></i></button>
                                      </div>
                                    </div>
                               </div>
                           </div>
                       </form>
                   </div>
                </div>
            </div>        
            </section>
        
          </>

        );
};

export default SearchBar;