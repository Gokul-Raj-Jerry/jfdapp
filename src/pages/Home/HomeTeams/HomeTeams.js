import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';
import { FaPlus } from 'react-icons/fa';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTeams = () => {
   return (
      <>
         <section className="team__area pt-30 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>Fullstack Synergy: Where Animations Come Alive and Designs Tell Stories</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
                     <div className="team__more d-flex justify-content-sm-end mb-85">
                        <Link to="/team" className="z-btn z-btn-border">View all<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleTeam image="1" name="GOKUL RAJ" title="Founder & CEO" />
                  <SingleTeam image="2" name="Jacob Jayraj" title="Vice President" />
                  <SingleTeam image="3" name="HARISH M" title="Director" />
                  <SingleTeam image="4" name="Ganesh Kumar" title="Animator" />
                  <SingleTeam image="5" name="Sunil Kumar" title="Creative head" />
                  <SingleTeam image="6" name="Sujith Kumar" title="Project Manager" />

                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__item team__item-add p-relative text-center fix mb-30" >
                        <div className="team__add">
                           <Link to="/team"><i > <FaPlus /> </i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTeams;