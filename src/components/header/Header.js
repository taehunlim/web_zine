import React, {useState, useEffect, Fragment} from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {
    IoIosSearch,
    IoIosPrint,
    IoIosMenu
} from 'react-icons/io';

const Header = () => {



    const printWindow = () => {
        document.getElementById('print-area'.innerHTML)
        window.print()
    }


    return (
        <Fragment>
            <header
                className="topbar-shadow"
                style={{backgroundColor: "#D0BEE6"}}
            >
                <Container className="wide">
                    <div
                        className="header-content d-flex align-items-center justify-content-between position-relative"
                        style={{height: "100px"}}
                    >
                        {/* logo */}
                        <div className="header-content d-flex align-items-center space-pr--15">

                            <Link
                                to="/"
                            >
                                <div>
                                    전쟁기념관 <br/> The War Memorial of Korea
                                </div>
                            </Link>
                        </div>

                        {/* icons */}
                        <div className="header-content__icons space-pl--15">
                            <ul className="d-none d-lg-block">
                                <li>
                                    <button
                                        onClick={() => {
                                            document
                                                .querySelector("body")
                                                .classList.add("overflow-hidden")
                                        }}
                                    >
                                        <IoIosSearch />
                                    </button>
                                </li>


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
                                            document
                                                .querySelector("body")
                                                .classList.add('overflow-hidden')
                                        }}
                                    >
                                        <IoIosMenu />
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </header>
        </Fragment>
    );
};

export default Header;
