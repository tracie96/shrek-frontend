import React from "react";
import { useEffect, useState } from "react";

import { Tabs, Tab } from "react-bootstrap";
import Horror from "./horror_component";
import SciFI from "./scifi_component"
import ProgBooks from "./programming_component"
import History from "./history_component"
import Graphics from './graphics_component'
import Books from "../Home_Component/single_book_component";
export default function TabComponent({books}) {
    const [key, setKey] = useState("home");
    return (
        <main>
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 text-center">
                                <h2>All Courses</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="all-course section-padding30">
            <div class="container">
                <div class="row">
                    <div class="all-course-wrapper" style={{width:"100%"}}>
                        <div class="row mb-15">
                            <div class="col-lg-12">
                                <div class="properties__button mb-90">
                                    <nav>                                                                             
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            >
                                            <Tab eventKey="home" title="All">
                                                <Books books={books} loader={false}/>
                                            </Tab>
                                            <Tab eventKey="horror" title="Horror">
                                                <Horror books={books} />
                                            </Tab>
                                            <Tab eventKey="profile" title="Sci-fi">
                                                <SciFI books={books}/>
                                            </Tab>
                                            <Tab eventKey="contact" title="Programming" >
                                                <ProgBooks books={books} />
                                            </Tab>
                                            <Tab eventKey="history" title="History" >
                                                <History books={books} />
                                            </Tab>
                                            <Tab eventKey="graphics" title="Graphics" >
                                                <Graphics books={books} />
                                            </Tab>
                                            </Tabs>

                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
                                        <div class="row">

                              

                                           
                                        </div>
                                    </div>

                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    </main>
    )
}

