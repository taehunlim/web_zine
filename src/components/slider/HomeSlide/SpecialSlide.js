import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import {trimText} from '../../../utils'

import img1 from '../../../assets/images/Spe/special1.JPG';
import img2 from '../../../assets/images/Spe/special2.png';
import img3 from "../../../assets/images/Spe/special3.png";

SwiperCore.use([Navigation])


const SubSlideTwo = ({ spaceBottomClass }) => {

    const desc = [
        (
            // 1
            <div>
                헬기 동산 개막식 개최 등
            </div>
        ),
        (
            // 2
            <div>
                호국인물총서 2 발간
            </div>
        )
    ]


    const Spec = [
        {
            "id": "1",
            "images": img1,
            "title": "뉴스 브리핑",
            "desc": desc[0]
        },
        {
            "id": "2",
            "images": img2,
            "title": "기념관 이슈",
            "desc": desc[1]
        },
        {
            "id": "3",
            "images": img3,
            "title": "2021년 이달의 호국인물 선정",
            "desc": ""
        }
    ]

    return (
        <div
            className={`${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}>
                    <Row className="">
                        <Col lg={3}>
                            <div className="sub-intro space-mb-mobile-only--30">
                                <h2>MEMORIAL NEWS</h2>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="sub-slider-container">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    navigation
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        320: {
                                            slidesPerView: 2
                                        }
                                    }}
                                >
                                    {Spec &&
                                    Spec.map((slide, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="sub-grid-post">
                                                    <Link to={`/special/${slide.id}`}>
                                                        <div className="sub-grid-post__bg bg-img"
                                                             style={{ backgroundImage: `url(${slide.images})`}}
                                                        >
                                                        </div>
                                                        <div className="sub-caption">
                                                            <h2 className="name">{slide.title}</h2>
                                                            {slide.desc ?
                                                            <span className="subtext">
                                                                {trimText(slide.desc, 28)}
                                                            </span> : ""
                                                            }
                                                        </div>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default SubSlideTwo;
