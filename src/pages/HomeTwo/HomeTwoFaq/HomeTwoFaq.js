import React from 'react';

const HomeTwoFaq = () => {
   return (
      <>
         <section className="faq__area p-relative pt-135 pb-120 grey-bg-12">
            <div className="faq__thumb" style={{ background: `url(assets/img/faq/faq-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                     <div className="faq__wrapper">
                        <div className="section__title section__title-3 mb-25 wow fadeInUp" data-wow-delay=".2s">
                           <span>Thinking</span>
                           <h2>Knowledge is <br /> the best investment</h2>
                        </div>

                        <div className="accordion" id="accordionExample">

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingOne">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       No rocket science included
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Personal Growth: Acquiring knowledge broadens your horizons and enhances personal growth. It helps you develop critical thinking skills, problem-solving abilities, and a deeper understanding of the world around you.
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingTwo">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Personal Fulfillment
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Learning and gaining knowledge can be intrinsically rewarding. It can lead to a sense of personal fulfillment and a deeper appreciation for the world's complexities.
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingThree">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Health and Well-being | Global Awareness
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Knowledge about health and well-being can lead to a healthier lifestyle, better decision-making regarding one's health, and a longer, more fulfilling life.
                                    <hr />
                                    Knowledge about global issues, cultures, and perspectives fosters empathy, tolerance, and a sense of global citizenship. It can contribute to a more interconnected and peaceful world.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoFaq;