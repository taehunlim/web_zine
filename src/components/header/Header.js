import React, {useState, Fragment} from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {
    // IoIosSearch,
    IoIosPrint,
    IoIosMenu
} from 'react-icons/io';


// import MenuOverlay from "./elements/MenuOverlay";
import MobileMenu from "./elements/MobileMenu";


import img from '../../assets/images/logo-black.png'
import img2 from '../../assets/images/logo-center.png'


const Header = () => {


    const [ offCanvasMenu, setOffCanvasMenu ] = useState(false);
    const [ offCanvasMobileMenu, setOffCanvasMobileMenu ] = useState(false);
    // const [scroll, setScroll] = useState(0);
    // const [headerTop, setHeaderTop] = useState(0);
    // const [headerHeight, setHeaderHeight] = useState(0);
    //
    //
    // useEffect(() => {
    //     const header = document.querySelector("header");
    //     setHeaderTop(header.offsetTop);
    //     setHeaderHeight(header.offsetHeight);
    //     window.addEventListener("scroll", handleScroll);
    //     scroll > headerTop
    //         ? (document.body.style.paddingTop = `${headerHeight}px`)
    //         : (document.body.style.paddingTop = 0);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    //
    // const handleScroll = () => {
    //     setScroll(window.scrollY);
    // };

    const printWindow = () => {
        document.getElementById('print-area'.innerHTML)
        window.print()
    }


    return (
        <Fragment>
            <header className="topbar-shadow" style={{backgroundColor: "#FFD1E8"}}>
            {/*<header*/}
            {/*    className={`topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`}*/}
            {/*>*/}
                <Container className="">
                    <div
                        className="header-content d-flex align-items-center justify-content-between position-relative"
                    >
                        {/* logo */}
                        {/*<Col lg={4}>*/}
                        {/*    <div className="header-content__logo d-flex align-items-center space-pr--15">*/}

                        {/*        <Link to="/">*/}
                        {/*            <img src={img} alt="/" className="img-fluid"/>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}


                        <Col lg={4}>
                            <div className=" d-flex align-items-center space-pr--15">

                                <a href="https://www.warmemo.or.kr/front/main.do#" target="_blank" rel="noreferrer">
                                    <img src={img} alt="/" className="img-fluid" style={{width: "90%"}}/>
                                </a>
                            </div>
                        </Col>

                        <Col
                            lg={4}
                            className="text-center"
                        >
                            <Link to="/">

                               <Row className="justify-content-center">
                                   <Col lg={6} className="header-content__logo__image"
                                       >
                                       <img src={img2} alt="/" className="img-fluid"/>
                                   </Col>
                                   <Col lg={4}>
                                       <div className="header-content__logo">
                                           2021 January <br/>
                                           <div style={{fontWeight: "bold"}}>
                                               Vol.180
                                           </div>
                                       </div>
                                   </Col>

                               </Row>

                            </Link>
                            {/*<div className="text-center">Logo</div>*/}
                        </Col>




                        {/* icons */}
                        <Col lg={4}>
                            <div
                                className="header-content__icons space-pl--15"
                                style={{textAlign: "end"}}
                            >
                                <ul className="d-none d-lg-block">
                                    {/*<li>*/}
                                    {/*    <button*/}
                                    {/*        onClick={() => {*/}
                                    {/*            setOffCanvasSearch(true)*/}
                                    {/*            document*/}
                                    {/*                .querySelector("body")*/}
                                    {/*                .classList.add("overflow-hidden")*/}
                                    {/*        }}*/}
                                    {/*    >*/}
                                    {/*        <IoIosSearch />*/}
                                    {/*    </button>*/}
                                    {/*</li>*/}


                                    <li>
                                        <button
                                            onClick={() => {
                                                printWindow()
                                            }}
                                        >
                                            <IoIosPrint />
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => {
                                                setOffCanvasMenu(true)
                                            }}
                                        >
                                            <IoIosMenu />
                                        </button>
                                    </li>
                                </ul>
                                <ul className="d-block d-lg-none">
                                    <li>
                                        <button onClick={() => setOffCanvasMobileMenu(true)}>
                                            <IoIosMenu />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </div>
                </Container>
            </header>

            <MobileMenu
                active={offCanvasMenu}
                getActive={setOffCanvasMenu}
            />

            {/*<MenuOverlay*/}
            {/*    active={offCanvasMenu}*/}
            {/*    setActive={setOffCanvasMenu}*/}
            {/*/>*/}

            <MobileMenu
                active={offCanvasMobileMenu}
                getActive={setOffCanvasMobileMenu}
            />
        </Fragment>
    );
};

export default Header;
