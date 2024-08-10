import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling
import AboutUs from './aboutUs'; // Adjust path if necessary
import Profile from './farmer_profile'; // Importing the Profile component

// Import the logo image
import krushiLogo from '../krushi_logo.jpg'; // Adjust the path based on the actual location
import farmer from '../farmer.png'; // Adjust the path based on the actual location

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <main>
                <section className="news-section">
                    <h1>Latest Agricultural News</h1>
                    <div className="row m-auto align-items-center">
                        {newsData.map((news, index) => (
                            <div className="col-12 col-md-12 col-lg-12" key={index}>
                                <div className="homebox">
                                    <div className="homebox-body">
                                        <h4 className="mb-1">
                                            <a href={news.link} className="font_size">
                                                <span className="leftarrow">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                </span>
                                                {news.title}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="gov-schemes-section">
                    <h1>Government Schemes</h1>
                    <div className="row m-auto align-items-center">
                        {govSchemesData.map((scheme, index) => (
                            <div className="col-12 col-md-12 col-lg-12" key={index}>
                                <div className="schemebox">
                                    <div className="schemebox-body">
                                        <h4 className="mb-1">
                                            <a href={scheme.link} className="font_size">
                                                <span className="leftarrow">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                </span>
                                                {scheme.title}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={krushiLogo} style={{ height: 70, width: 70, marginLeft: 50 }} alt="Krushi Logo" />
            </div>
            <ul className="nav-links" style={{ marginRight: 50 }}>
                <li style={{ margin: 20 }}><Link to="/">Home</Link></li>
                <li style={{ margin: 20 }}><Link to="/about">About Us</Link></li>
                <li style={{ margin: 20 }}><Link to="/add_product">Auction</Link></li>
                <li style={{ margin: 20 }}><Link to="/contact">Contact</Link></li>
                <li style={{ margin: 20 }}><Link to="/profile">Profile</Link></li>
                <li style={{ margin: 20 }}>
                    <Link to="/profile">
                        <img src={farmer} style={{ height: 50, width: 50, marginLeft: 20, backgroundColor: 'black', borderRadius: 30 }} alt="Farmer" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Krushi. All rights reserved.</p>
        </footer>
    );
};

// Complete news data
const newsData = [
    { title: 'Annual Report 2023-2024', link: '/en/whatsnew/37' },
    { title: 'Expression of Interest (EoI) for Developing Software for Integrated Command and Control Centre (ICCC) (Last Date of Application is 9/08/24)', link: '/en/whatsnew/33' },
    { title: 'Minimum Support Prices (MSP) of Kharif Crops for Kharif Marketing Season (KMS) 2024-25', link: '/en/whatsnew/32' },
    { title: 'Draft of National Policy on Farmer Producer Organizations', link: '/en/whatsnew/29' },
    { title: 'The revised Composition of Internal Complaint Committee (ICC) for prevention of Sexual Harassment of Women.', link: '/en/whatsnew/28' },
    { title: 'Inviting comments/suggestions of all stakeholders on draft Recruitment Rules in respect of technical posts of Credit Division, Department of Agriculture and Farmers Welfare (Proper).Reg', link: '/en/whatsnew/27' },
    { title: 'G20 OUTCOME DOCUMENTS', link: '/en/whatsnew/25' },
    { title: 'Framework for Voluntary Carbon Market in Agriculture Sector', link: '/en/whatsnew/23' },
    { title: 'Accreditation Protocol for Agroforestry Nurseries', link: '/en/whatsnew/24' },
    { title: 'Establishment of three CoEs in AI, call for proposals(CFP)- Regarding.', link: '/en/whatsnew/22' },
    { title: 'Concept Note to promote farmers for storage & eNWR trade via eNAM & other e-trading platforms - PM Kisan Bhai Scheme- Comments / Inputs -regards.', link: '/en/whatsnew/21' },
    { title: 'Inviting comments of stakeholders on draft Recruitment Rules for the technical posts pertaining to INM Division of Department of Agriculture and Farmers Welfare (Proper).', link: '/en/whatsnew/20' },
    { title: 'Minimum Support Price (MSP) for Rabi Crops for Marketing Season 2024-25', link: '/en/whatsnew/19' },
    { title: 'Selection for the post of Chairman cum Managing Director, National Seeds corporation Ltd. - a schedule B - Miniratna.', link: '/en/whatsnew/18' },
    { title: 'Invitation for Expression of Interest (EOI) from Start- Ups/Companies to work with the Ministry for leveraging agricultural innovations for farmers welfare in the selected fields.', link: '/en/whatsnew/17' },
    { title: 'Minimum Support Prices (MSP) for Kharif Crops for Marketing Season 2023-24', link: '/en/whatsnew/16' },
    { title: 'Call Centre Service with corrigendum - Per Seat Basis - Cloud Based Call Center Solution Onsite.', link: '/en/whatsnew/12' },
    { title: 'Draft RRs for the posts of Assistant Director (Hindi), Sr. Translator and Jr. Translator in Directorate of Extension under DA & FW.', link: '/en/whatsnew/9' },
    { title: 'Notification Price Policy for Raw Jute for 2023-24 season-Fixation of Minimum Support Price of Raw Jute for 2023-24 season.', link: '/en/whatsnew/3' },
    { title: 'MINIMUM SUPPORT PRICES (MSP) FOR RABI CROPS FOR RABI MARKETING SEASON (RMS) 2023-24', link: '/en/whatsnew/5' },
    { title: 'SEEKING COMMENTS/SUGGESTIONS OF STAKEHOLDERS FOR REVISION OF RECRUITMENT RULES FOR THE POST OF ADDITIONAL COMMISSIONER (EXTENSION), DA & FW (PROPER)', link: '/en/whatsnew/6' },
    { title: 'PRESENTATIONS OF RABI CAMPAIGN, 2022', link: '/en/whatsnew/8' },
    { title: 'SEEKING COMMENT ON DRAFT RRS OF ALL THE TECHNICAL POSTS OF CROPS DIVISION IN DA & FW.', link: '/en/whatsnew/7' },
    { title: 'Presentations of Rabi Campaign, 2022', link: '/en/whatsnew/4' },
];

// Complete government schemes data
const govSchemesData = [
    { title: 'Pradhan Mantri Fasal Bima Yojana', link: '/en/schemes/pm-fasal-bima-yojana' },
    { title: 'Soil Health Management Scheme', link: '/en/schemes/soil-health-management' },
    { title: 'National Food Security Mission', link: '/en/schemes/national-food-security-mission' },
    { title: 'Kisan Credit Card Scheme', link: '/en/schemes/kisan-credit-card' },
    { title: 'Rural Employment Generation Programme', link: '/en/schemes/rural-employment-generation' },
];

export default Home;
