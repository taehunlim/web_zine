import React from 'react';
import Layout from "../components/layout/Layout";


import {Col, Container, Row} from "react-bootstrap";
import img1 from "../assets/images/Sub/sub101.png";
import img2 from "../assets/images/Sub/sub102.jpg";

import img3 from "../assets/images/Sub/sub2.png";
import img4 from '../assets/images/Sub/sub201.png';
import img5 from '../assets/images/Sub/sub202.JPG';

import story2 from '../assets/images/Sub/sub301.jpg';

import story301 from '../assets/images/Sub/sub401.png'
import story302 from '../assets/images/Sub/sub402.jpg'
import story303 from '../assets/images/Sub/sub403.jpg'
import story304 from '../assets/images/Sub/sub404.jpg'
import story305 from '../assets/images/Sub/sub405.jpg'

import war from '../assets/images/Sub/sub5.jpg'
import war2 from '../assets/images/Sub/sub501.png'
import war3 from '../assets/images/Sub/sub502.png'
import war4 from '../assets/images/Sub/sub503.png'

import mobile from '../assets/images/Sub/sub601.png';

import gun1 from '../assets/images/Sub/sub7.JPG';
import gun2 from '../assets/images/Sub/sub701.png';
import gun3 from '../assets/images/Sub/sub702.jpg';
import gun4 from '../assets/images/Sub/sub703.png';

import news from "../assets/images/Spe/special1.JPG";
import news2 from "../assets/images/Spe/special102.jpg";
import news3 from "../assets/images/Spe/special103.png";
import news4 from "../assets/images/Spe/special104.jpg";
import news5 from "../assets/images/Spe/special105.png";
import news6 from "../assets/images/Spe/special106.png";
import news7 from "../assets/images/Spe/special107.png";
import tm from "../assets/images/Spe/special201.png";
import man from "../assets/images/Spe/special3.png";


const Sub = ({match}) => {

    // id 1
    const summ1 = (
        <h5>
            1636년 12월 청나라 군대가 압록강을 넘었다. 청은 빠르게 진격했으나 조선 조정은 이 사실을 뒤늦게 알아챘다. 이럴 때를 대비해 준비한 피난처 강화도로 떠나려 했지만, 이미 청은 오늘날의 서울시 은평구에 진입한 상태였다. 한강은 얼어붙어 강화도로 들어갈 배를 띄울 수도 없었다. 턱밑까지 쫓아온 청을 피해 인조가 선택한 곳은 남한산성이었다. 이조판서 최명길이 청과 만나 시간을 끄는 동안 인조는
            겨우 남한산성에 도착할 수 있었다. 47일간 이어진 병자호란의 시작이었다.
            <br/><br/> 글 편집실 〡 사진 영화 {"<남한산성>, <최종병기 활>"}
        </h5>
    )

    const btext11 = (
        <div>
            김훈 작가의 동명 소설을 원작으로 한 영화 {"<남한산성>"}은 추위와 굶 주림, 적의 거센 압박과 무리한 요구 등 선택의 기로에 놓인채 치열하게 조선의 앞날을 논했던 남한산성에서의 47일을 담았다. 나라와 백성을 위하는 충심은 같았으나 이를 지키고자 했던 신념이 달랐던 두 신하를 중심으로 이야기가 펼쳐진다. 순간의 치욕을 참고 청과 화 친을 맺고 후일을 도모해야 한다는 주화파 이조판서 최명길(이병헌 분)과, 끝까지 청에 맞서 싸워 대의를 지켜야 한다는 척화파 예조판서 김상헌(김윤석 분)의 첨예한 대립은 관객을 몰입시킨다.
            <br/>
            주화파는 청과 화친하여 전쟁을 피해야 한다고 주장했다. 세력을 키 워 침략한 청에 맞서는 것이 무모하다고 판단했다. 당시 조선은 임진왜란과 정묘호란을 거치며 국력이 약해진 상태였고 수적으로나 군사 력에서 모두 열세였기 때문이다. 척화파는 명나라와의 의리를 위해 청과끝까지싸울것을주장했다. 청에 고개 숙이는 것은 임진왜란 당시 원군을 보내 조선을 도운 명나라를 배신하는 것이라고 생각했 다. 또 남한산성의 지리적 요건을 이용해 삼남 지방의 근왕병들이 도 착할 때까지 버티면 승산이 있다고 판단했다. 치열한 설전이 오가는 동안 식량은 바닥났고 강추위에 많은 백성과 군사들이 추위와 굶주 림으로 목숨을 잃는 지경에 이르렀다.
            <br/>
            해를 넘긴 1637년 1월, 청이 강화도를 점령하여 왕실 사람들과 대신 들이 포로로 잡혔다는 소식을 들은 조선은 청에 항복하기로 한다. 조선이 청의 신하가 되었다는 뜻으로 곤룡포가 아닌 신하의 옷을 입은
            인조는 삼전도(현 서울시 송파구 삼전동)로 향했다. 말에서 내려 청 태종에게 세 번 절하고 아홉 번 머리 를 조아리는 ‘삼배구고두례’를 함으로써 결국 청에 굴복했다.
            <br/>
            영화 {"<남한산성>"}에는 극적인 전개를 위해 역사적 사실과 다른 부분이 있다. 우선 영화에서는 근왕병이 남한산성에 오지 않지만, 실제로는 그렇지 않았다. 근왕병이 남한산성 부근까지 도착했으나 청과의 전투에서 크게 패배해 전세를 뒤집지 못한 것이다. 또 예조판서 김상헌도 자살하지 않았다. 실제로 목을 매
            자살하려 했으나 관리들이 발견해 실패했던 것이다.
        </div>
    )

    const btext12 = (
        <div>
            삼전도의 굴욕으로 조선은 명과 관계를 끊고 청의 신하가 됐다. 청은 소현세자와 봉림대군을 비롯해 대신들의 아들을 볼모로 잡았고 수많은 백성이 포로로 끌려갔다.
            <br/>
            영화 {"<최종병기 활>"}은 이 시점에서 시작된다. 가장 행복해야 할 혼인을 올리는 순간 자인(문채원 분)과 신랑 서군(김무열 분)이 청에 포로로 잡혀간다. 자인의 오빠 남이(박해일 분)는 동생을 구하기 위해 활 한 자루에 의지해 적의 중심으로 파고든다. 청으로 끌려간 수 많은 포로중 일부만 다시 조선으로 돌아올 수 있었다. 그중에서도 살아 돌아온 여성들은 온갖 냉대와 굴욕을 당했다. 고향으로 돌아온 여인이라는 뜻의 ‘환향녀(還鄕女)’라고 불렸으나 유교 국가였던 당시 조선의 풍토에서는 그들을 받아들이기 어려웠고, 환향녀는 이후 행실이나 몸가짐이 바르지 못한 여성을 빗대어서 표현하는 단어로 변질되기도 했다. 병자호란 연구의 권위자인 한명기 역사학자의 저서 『역사평설 병자호란』(푸른역사, 2013)에는 청을 탈출해 조선으로 향했던 포로 안단(安端)의 이야기가 실려있다. 청으로 끌려간지 40년 만에 가까스로 조선 국경에 이르렀지만 입국하게 해달라는 호소는 외면당한 채 다시 청으로 압송됐다.
            <br/>
            영화는 엔딩크레디트에서 신분과 성별을 막론하고 50만 명에 이르는 사람이 청나라로 끌려갔지만, 대다수가 돌아오지 못했음을 알리며 안타까움을 더한다.
        </div>
    )


    // id 2
    const btext21 = (
        <div>
            박물관은 유물을 중심으로 역사의 흐름을 연구하고 전시한다. 그러므로 문화유산으로서 유일성, 원본성이라는 가치를 지니는 유물은 박물관의 중심이라고 할 수 있다. ‘전쟁기념관’의 핵심 유물을 떠올리면 총, 탱크와 같은 무기가 연상된다. 하지만 전쟁역사의 흐름을 따라 거슬러 올라가다 보면 수많은 이가 전쟁역사의 증거를 담는 기록 물을 생산해왔다는 사실을 발견하게 된다. 총과 탱크 같은 유형의 유물 외에도 종이와 문서·사진·영상·음원 등 당시를 기록하는 다양한 유무형의 자료가 생산되어왔기 때문에 후대의 연구자들은 해당 자료 들의 사실관계를 밝히고 연구하며 역사적 사실을 증명하고 발전시킬 수 있었던 것이다. 이것이 바로 전쟁기념관이 유물 외에도 한반도의 전쟁역사를 증명하는 증거적·정보적 가치를 지니는 다양한 자료를 수집, 보존·연구하여 아카이브를 구축, 운영해야 하는 필연적인 이유 이기도 하다.
        </div>
    )

    const btext22 = (
        <div>
            전쟁기념관은 4차 산업혁명 시대 박물관 전략 확보를 위해 2016년 하반기 아카이브 구축 중장기계획을 수립했다. 이어 2017년부터는 인적자원 및 인프라 조성, 단계별 실행 전략을 확립하고 매뉴얼 수립, 아카이브 자료실(보존 수장고) 조성, 디지털 아카이브 관리 시스 템(DAMS) 구축, 아카이브 서비스 시스템 구축 등 단계별 사업을 추진해왔다. 아울러 내외부에 산재해 있는 자료의 조사와 수집, 저작권 조사, 아날로그 자료의 디지털화, 구술영상 아카이브 구축 사업 등을 함께 추진해왔다.
            <br/>
            전쟁기념관 아카이브는 현재 전담 인원 3명과 2개 공간(사무실, 자료실)을 확보해 운영 중이며, 향후 작업실(변환실, 정리실) 등 업무환 경을 추가로 조성할 예정이다. 전쟁기념관 각 부서에서 연구·전시· 교육·행사 등 고유 업무수행을 통해 제작된 자료의 원본 소스 등은 ‘디지털 아카이브 관리·운영’ 내규에 의거하여 디지털 아카이브 관리 시스템을 통해 아카이브 전담 부서인 자료관리팀으로 이관된다. 이 외에도 1989년 개관이후 축적된 내부 자료 및 외부기관 수집자료, 아카이브 콘텐츠 제작, 소장 사진·영상·음원·문서 등의 자료를 아카 이브 DB화하는 일은 자료관리팀이 주축이 되어 수행하고 있다. 2018년 3월 내부 디지털 아카이브 관리 시스템(DAMS) 개발완료 이후 구축된 DB는 2020년 12월 기준 13,859건 87,915점에 달한다.
        </div>
    )

    const btext23 = (
        <div>
            2020년 11월 전쟁기념관은 소장 아카이브 자료의 활용성 확대 및 온 택트 시대의 박물관 경쟁력 확보를 위하여 ‘전쟁기념관 오픈 아카이브’ 온라인 서비스 시스템을 개발했다. 그리고 구축된 아카이브 DB중
            일부를 우선 선별하여 독자적인 웹서비스 체계에 맞게 제공중이다. 전쟁·군사 관련 사진·필름, 영상, 인물, 구술자료, 일반유물 정보들은 소장자료 코너를 통해 서비스 중이며, 공공누리 유형마크가 부착된 자료에 한해 ‘공공저작물 자유이용 정책’에 따라 다운로드 및 활용이 가능하다.
            또 전쟁기념관에서 개최한 역대 전시와 관련된 정보 및 각종 산출물(도록, 포스터, 사진 등)을 열람할 수 있으며 상설전시 실의 구성과 전시 위치 별 유물 정보 등도 볼 수 있다.이외에도 개관 이후 축적해온 각종 연구·교육·해설 분야 발간자료의 원문 서비스를 제공하고 있으며 전쟁기념관
            개관 준비 단계에서부터 현재까지의 발 자취, 기념관에서 개최한 각종 행사 정보를 기념관역사 메뉴를 통해 확인할 수 있다. 이렇게 공개된 자료는 2020년 12월 기준 총 5,175건 18,264점이며 향후 순차적으로 서비스 공개 자료를 늘려갈 예정이다. 변화하는 디지털 서비스 환경에서 전쟁기념관이
            소장한 아카이브 자료를 개방하고 확산하는 것은 매우 중요한 과제이다. 공공정보의 민간 활용을 촉진하기 위한 많은 정책이 시행 되고 있으며 수 많은 박물관이 소장 자료를 디지털화하고 온라인을 통해 개방하는 등 아카이브 구축 및 서비스 과제를 적극적으로 시행해나가고 있다. 2016년
            최초의 아카이브 중장기 계획 수립이후 4년 이라는 짧지않은 시간동안 전쟁기념관 아카이브의 발자취를 돌아보면 그동안의 성과보다 앞으로 나아가야 할 목표의 무게가 훨씬 크다는 것을 알 수있다. 전문성과 다양성을 겸비한 고품질의 아카이브 DB 구축과 저작권 권리 확 보,
            국내외 유관기관과의 교류협력을 통한 양질의 아카이브 DB 확충, 변화하는 온라인 서비스 환경에서의 경쟁력 확보, 나아가 오픈 아카이브 서비스의 다국어 서비스, 오프라인 아카이브 센터 구축 등 수많 은 과제가 놓여 있다. 이러한 과제들을 하나씩 풀어나가는 과정을 통해
            전쟁기념관 아카이브는 전쟁·군사 분야의 국가적 역사 자원에서 한 발 더 나아가 시간과 공간을 넘어 시대와 세대를 잇는 촉진제 역할을 더욱 공고히 하게 될 것으로 기대된다.
        </div>
    )

    const btext24 = (
        <div>
            전쟁기념관은 2019년 3월 과학기술정보통신부·한국정보화진흥원의 예산, 기술지원을 받아 시공간의 제약을 뛰어넘어 관람객들이 스마트폰을 통해 언제 어디서나 손쉽게 전쟁기념관 전시안내 서비스를 받을 수 있는
            ‘국가기념관 스마트 전시안내’ 서비스를 개발했다. 2020년에는 코로나19로 인한 비대면 전시안내 서비스 활성화 및 이용자 편의 향상을 위해 ‘전쟁· 군사박물관 스마트 전시안내’로 명칭을 변경하고 디자인 및 일부 기능개선을 시행하여 리뉴얼 오픈하였다. 해당 서비스는 기존에 기기 대여를 통해 제공해온 음성 안내 서비스, QR코드 및 NFC 기술을 활용한 전시안내 서비스 등의 문제점을 보완하여 언제 어디서나 관람객이 스마트폰 애플리케이션을 설치하여 손쉽게 이용할 수 있도록 하였다. 특히 전국의 전쟁·군사 박물관이 공동으로 활용할 수 있는 플랫폼형 서비스로 개발되었으며 최초 전쟁기념관, 유엔평화기념관(부산) 전시실 대상 서비스 개발 이후 2020년 육군박물관을 신규 서비스 기관으로 선정하고 300여 종의 전시안내 콘텐츠를 탑재하였다. 앞으로도 전쟁기념관은 전국 전쟁·군사 박물관을 대상 으로 지속적으로 서비스를 확장해 나갈 예정이다.
        </div>
    )

    const btext25 = (
        <div>
            ‘전쟁·군사박물관 스마트 전시안내’ 앱은 전쟁기념관, 유엔평화기념관, 육 군박물관 등 3개 박물관 전시실과 복도에 설치된 299개 비콘(근거리 통신 기술)을 기반으로 관람객의 실시간 위치를 탐지하여 가까이에 있는 전시 품에 대한 안내를 자동으로 제공한다. 전시품에 대한 고화질 이미지와 설명문, 음성 안내 서비스 1,100여 건을 기본 제공하며, 일부 주요 전시품에 대해서는 증강현실(AR) 체험 콘텐츠와 영상 콘텐츠를 부가적으로 제공하여 관람객들이 더 쉽고 흥미롭게 전시를 관람할 수 있도록 하였다. AR 체 험 콘텐츠가 개발된 전시품 앞에서 해당 전시품을 스마트폰으로 인식하면 스토리텔링 영상 보기, 편지 읽기 등 다양한 증강현실 체험을 할 수 있다. AR 콘텐츠는 ‘이순신의 팔사품도’, ‘전선에서의 기록’ 등 10여 종이다. 또 청각장애인을 위해 70여 종의 수어 영상 콘텐츠를 제공하고 있다.
            <br/>
            전시안내 앱은 콘텐츠 체험 외에 나만의 전시 관람코스 만들기 서비스도 제공하고 있다. 방문 유형과 희망관람 시간, 관심 분야를 선택하면 1:1 맞춤형 관람코스를 제공받을 수 있으며, 월별·주제별 테마에 따라 전쟁기념 관 해설사가 추천하는 특화 주제 관람코스를 제공받을 수도 있다. 전시안 내 앱을 이용하려면 스마트폰 앱 스토어에서 ‘전쟁군사박물관’ 혹은 ‘전쟁 기념관’을 검색하여 ‘전쟁·군사박물관 전시안내’ 애플리케이션을 내려받아 사용하면 된다. 전시품 안내는 우리말과 영어로 서비스되어 외국인 관람 객도 이용할 수 있다.
        </div>
    )


    // id3
    const btext31 = (
        <div>
            2014년 개관하여 다양한 체험형 전시로 어린이들에게 전쟁의 역사와 나라의 소중함을 전달하고 있는 어린이박물관은 2020년 12월 3일, 6 주년을 맞이하여 축하 이벤트를 마련했다. 전쟁기념관 공식 인스타그램에 개관 6주년 축하 댓글을 올리는 형식으로 진행된 이벤트는 12 월 1일부터 7일까지 일주일 동안 무려 300여 건이 넘는 댓글이 올라 왔고 많은 사람이 어린이박물관 개관 6주년을 축하해주었다. 코로나 19로 인해 어린이들이 직접 박물관을 찾아올 수 없었기 때문에 많은 아쉬움이 남았지만 뜨거운 응원 메시지와 참여가 어린이박물관에 큰 힘이 되었다. 올해 개관 기념행사는 어린이들을 직접 만나고 웃으며 함께할 수 있는 즐거운 행사가 되기를 기대해본다.
        </div>
    )

    const btext32 = (
        <div>
            어린이박물관에서는 지난 11월 12일~12월 3일까지 야외 공간 개선 을 위한 아이디어 수집을 위해 어린이들이 참여하는 디자인 워크숍 ‘Re-play 프로젝트’를 진행하였다. 이 워크숍의 목적은 어린이의, 어린이에 의한, 어린이를 위한 박물관을 만드는 것으로, 어린이와 건축 가가 만나서 놀고 싶은 박물관을 디자인하는 것이었다. 워크숍은 초 등학생 18명과 EUS+ARCHITECTS의 지정우, 서민우 건축가의 협업 으로 진행되었다.
            <br/>원효초등학교 학생들을 대상으로 인터넷 접수를 통해 참가자를 모집 했으며, 매회 2시간씩 총 4차에 걸친 수업은 건축사무소에서 자체 제작한 체험꾸러미를 활용한 창작 교육 형태로, ‘줌(Zoom)’을 이용하여 온라인으로 진행되었다. 교육에 참여한 학생들은 2시간 동안 교육이 진행됐지만 ‘지루하지도 않고 흥미롭고 재미있었다’라는 반응을 보였다. 학생들이 만든 기발하고 참신한 작품들은 어린이박물관에 전시되어 아이들의 시선으로 제작된 놀이 공간에 대한 다양한 아이디어를 보여주고 있다.
            <br/>작품들은 1월 31일까지 전시 예정이며, 코로나19로 인해 휴관 할 수도 있어 관람을 원할 경우 반드시 문의를 해야 한다. 어린이박물관은 이 번 워크숍을 통해 얻은 결과물을 야외 공간 디자인 개선작업에 활용 할 계획이다. 이번 워크숍은 어린이들의 단순한 놀이모형 만들기 체 험으로 볼 수도 있지만, 다른 시각에서 보면 전문가와 비전문가, 어른 과 어린이, 설계자와 이용자가 협업을 통해 박물관 전시공간을 함께 고민하고 결과물을 만들었다는 데 큰 의미를 부여할 수 있다. 어린이 박물관은 앞으로도 어린이 관람객과 직접 소통할 수 있는 다양한 체 험 프로그램을 꾸준히 운영해나갈 예정이다.

        </div>
    )


    // id4
    const summ4 = (
        <h5>
            2019년 12월부터 시작된 코로나19는 우리의 일상을 바꿔놓았다. 경제, 사회, 교육,
            스포츠, 문화 등 모든 분야에서 우리의 행동을 변화시켰고, 마스크가 일상생활의 필수품으로 자리 잡는 등 사회 전반의 패러다임이 달라졌다. 박물관·미술관도 코로나19의 영향을 피해 갈 수 없었다. 이에 전쟁기념관도 시대적 흐름에 부합하고자 다양한 온라인 콘텐츠를 개발하고 있다.
            <br/><br/>글 홍성열_전쟁기념관 디지털 소통담당
        </h5>
    )

    const btext41 = (
        <div>
            코로나19 바이러스 확산 방지를 위해 첫 휴관을 시작했던 2020년 2 월 17일부터 지금까지, 전쟁기념관은 4차에 걸쳐 휴관과 개관을 반복 하며2020년 전체 기간중 절반 이상 문을 닫을 수 밖에 없었다. 휴관과 제한적 재개관으로 인해 2020년 전쟁기념관 방문자 수는 22만여 명으로 2019년과 비교하여 90% 이상 감소했다.
            <br/>
            그렇다면 문화예술기관의 휴관으로 관람객들은 공연·전시 관람 등 문화 욕구를 해소하지 못했을까? 전혀 그렇지 않다. 문화예술기관 은휴관기간에전시·공연등을접할수없는관람객들을위해서온 라인을 통해 다양한 콘텐츠를 제공했다. 국립중앙박물관, 국립현대 미술관 등은 기관별 특색 있는 콘텐츠를 온라인 SNS에 게시하여 관람객들이 직접 전시실을 찾아가는 것 보다 더 쉽게 원하는 콘텐츠에 접근할 수 있게 했다. 이미 많은 문화예술기관이 SNS 플랫폼을 활용해오고 있었으나, 코로나19는 각 기관의 디지털화 전략을 한 층 더 가속화시켰다.
        </div>
    )

    const btext42 = (
        <div>
            코로나19로 인한 온택트 트렌드가 대세인 지금, 전쟁기념관도 이러한 변화에 발맞춰 휴관으로 찾아오지 못하는 관람객들을 위해 공식 홈 페이지와 유튜브 등 SNS 플랫폼을 활용한 온라인 콘텐츠를 서비스 하고 있다. 몇몇 박물관보다 온라인 플랫폼 도입 시기가 조금 늦었고 콘텐츠의 절대적인 양도 적은 편이지만, 코로나19라는 비상시국의 짧은 시간 속에서도 다양한 콘텐츠를 제작하여 호평을 받고 있다. 특히 다른 문화예술기관에서는 할 수 없는, 전쟁기념관만이 보여줄 수 있는 특화된 콘텐츠를 발굴하고 제작하는 데 심혈을 기울였다.
            <br/>
            전쟁기념관은 현재 특별전시 소개 및 전시 영상 콘텐츠, 전시해설 및 유물해설 콘텐츠, 온라인 LIVE 교육 및 북한생활·문화 콘텐츠, 어린 이박물관 및 전시 소개, 오디오 북클럽 콘텐츠 등을 온라인으로 제공 하고있다.이중 가장 눈에띄는 콘텐츠는 단연 총기 유물 해설 콘텐츠다. 우리나라에서 총기는 쉽게 구할 수 없고 관리 또한 엄격하게 이루어지고 있기 때문에, 총기와 관련된 콘텐츠는 일반인들이 쉽게 접 할 수 없는 영역이다. 하지만 전쟁기념관은 대한민국 유일의 종합군 사박물관으로서 각종 총기류를 소장·전시하고 있기 때문에 일반인이 쉽게 접할 수 없는 총기 유물을 소재로 특화된 콘텐츠를 제작하여 선보일 수 있었다. 특히 1950년대 우리나라에서 생산된 ‘대한식 소총’ 과 ‘광복식 권총’을 소개한 영상은 주요 밀리터리 마니아들 사이에서 뜨거운 반응을 얻으며 기념관 콘텐츠 중 가장 많은 조회수를 기록하 고 있다. ‘전시해설’ 콘텐츠도 주목할 만하다. 전쟁기념관 전문 해설 사들이 주축이 되어 제작한 ‘온라인 전시해설’은 하나의 주제를 선정, 기념관 전시실의 유물과 연계하여 해설하는 프로그램으로 현재까지 14개 콘텐츠가 제작되었으며 앞으로도 계속 추가 콘텐츠가 활발하게 선보일 예정이다. 현재는 전시해설 외에 관련 쿠키영상도 함께 제공하여 보는 재미가 쏠쏠하다.
        </div>
    )

    const btext43 = (
        <div>
            전쟁기념관 내부 이야기 외에도 국내 유명 전적지, 기념물을 찾아 소개하는 콘텐츠도 제공하고 있다. ‘사심(史心) 가득한 답사여행’은 6·25전쟁 당시 한반도의 평화와 안전을 회복하기 위해 UN의 이름으로 우리나라를 도와준 참전국 기념비를 찾아 이와 관련된 이야기를 소개하는 프로그램이다. 현재는 파주시 문산읍의 미국군 참전기념비 편이 업로드되었으며, 이후 영연방 및 터키군 참전 기념비 소개를 준 비 중에 있다. ‘박물관을 탈출한 학예사들’은 전시실에서 단순 소개로만 끝나는 전투에 관한 이야기를 당시 촬영된 사진과 지도 등을 통해 자세히 알아보고, 직접 전투가 일어난 지역을 현장 답사해 치열하게 전개된 전투에 대한 생생한 경험을 할 수 있도록 기획한 프로그램이다.특히6 ·25전쟁 발발 70주년을 기념하여 전쟁 기간중 서울과 그 주변에서 일어난 5개 주요 전투에 대한 콘텐츠 제작이 시작되었다. 현재는그 첫번째로 미아리전투편이 제공되고 있다. 이 밖에도 온라인 플랫폼(NAVER band)을 활용한 LIVE 교육 프로그램인 ‘무관의 길’, ‘응답하라 우리영웅’, ‘효주쌤의 생생 북(北)토크’ 등 다양하고 흥미로운 콘텐츠가 지속적으로 업데이트되고 있다.
        </div>
    )

    const btext44 = (
        <div>
            온라인 콘텐츠는 단순히 만들어서 게시만 한다고 끝나지 않는다. 새로운 전시를 위해 유물을 수시로 교체하는 오프라인 박물관처럼, 온라인 콘텐츠도 지속적인 변화와 발전이 필요하다. 특히 관람객들이 콘텐츠에 흥미를 느끼며 다시 찾을 수 있도록 내용을 구성해야 한다.
            <br/>
            그래서 지난해 11월, 온라인 콘텐츠에 대한 중간평가를 위해 간담회 를 개최했다. 기념관 온라인 콘텐츠 관계자들이 모여 유관 박물관의 온라인 인기 콘텐츠를 분석하고, 콘텐츠 제작 중 직면했던 어려움과 시행착오 등을 공유함으로써 온라인 콘텐츠가 나아가야 할 방향에 대해 자유롭게 의견을 개진했다. 이날 간담회에서 나온 의견들을 토대로 온라인 콘텐츠 제작 활성화 및 발전 방안을 마련하여 앞으로좀 더 참신하고 흥미로운 온라인 콘텐츠를 선보일 수 있도록 준비하고 있다. 특히 전쟁기념관만의 고유 킬러 콘텐츠를 발굴하여 온라인 관 람객들의 관심을 지속적으로 유도할 수 있는 방안에 대해 고심하고 있다.
            <br/>
            전쟁기념관의 슬로건은 ‘4W’이다. 이는 ‘언제나(Whenever), 어디서나 (Wherever), 누구나(Whoever), 전쟁기념관(War Memorial of Korea)’ 을 뜻하는 것으로, 전쟁기념관의 다양한 전쟁·군사 콘텐츠를 ‘언제 나, 어디서나, 누구나’ 손쉽게 습득하고 체험할 수 있어야 한다는 뜻 이 담겨 있다. 코로나19로 인해 기념관 방문이 제한된 상황에서 관람객들은 1년 365일 24시간 언제나, 온라인 콘텐츠를 통해 전쟁기념관 을만날수있을것이다.
            <br/>
            전쟁기념관 온라인 콘텐츠는 이제 막 걸음마를 떼었다고 할 수 있다. 걸음마를 뗀 아이가 자연스럽게 걷고 뛸수 있도록 하기 위해, 콘텐츠 담당 학예사들은 수많은 시행착오를 겪으며 열정을 쏟고 있다. 지하철이나 버스와 같은 대중교통을 이용하면서 유튜브 채널이나 온라 인 SNS를 통해 전쟁기념관을 방문한다면 지금 이 순간에도 관람객들을 위해 온라인 콘텐츠 제작에 열을 올리고 있는 학예사들 에게큰 힘이 될 것이다.

        </div>
    )


    // id5
    const summ5 = (
        <h5>
            임진왜란을 경험하면서 조선의 국방 정책도 큰 변화가 이루어졌다. 기존 제승방략 체계의 단점을 절감한 조선은 평양성전투와 같은 명군과의 연합작전을 통해 일본과의 전투 경험이 풍부한 명군의 남병 전술을 도입하였다. 대부분 보병으로 구성되어 있었던 당시 명군은 조총과 호준포 등 가벼운 화기를 중심으로 무장하였다.
            일본군에 대응하는 명군의 전술을 본 조선은 그 전술과 운용방식을 도입하여 군사제도를 재편하였다.
            <br/><br/>글 최문주_전쟁기념관 학예연구사
        </h5>
    )

    const btext51 = (
        <div>
            조선은 먼저 명군의 전술이 담긴 척계광(戚繼光)의 『기효신서(紀效新 書)』를 입수하여 보급하면서 전력을 훈련하였다. 이와 아울러 화기를 전투의 승부를 가르는 중요한 무기로 보게 되었고, 접근하는 적을 화기로 제압할 수 있다는 인식도 확산되었다.
            <br/>
            임진왜란 이전까지만 해도 조선군의 원거리 공격 수단은 활이었지만, 아교와물소뿔등활을구성하는재료자체의한계로인한관리의 불편함, 숙련된 궁병을 양성하는 데 드는 시간이 길다는 활의 단점에 비해 조총은 발사 속도는 느리지만 강력한 위력을 갖추었고 무엇보다 병력의 훈련이 용이하다는 이점이 있었던 것으로 보인다. 이에 임진 왜란 초기부터 일본군에게서 노획한 조총을 소수 활용하였고, 이후 에는 투항한 왜군(降倭)을 통해 조총 제작 기술을 습득, 전쟁 중반부터는 조총을 자체적으로 제작하여 병력을 무장할 수 있을 정도가 되었다.
            <br/>
            이러한 노력과 함께 기존의 중앙군을 대체할 새로운 군사조직인 훈련도감을 창설하여 수도 방위와 군사교련을 담당하게 하였다. 당시 조총의 유효사거리는 약 200m 정도이며 조준사격이 가능한 거리는 100m 정도였는데, 발사 후 재장전까지 걸리는 시간이 약 15초에서 20초 정도로 길었으므로 공격하는 상대의 진영에 연속으로 사격하기위해서는원거리사격후반드시근접엄호를받을필요성이있었 다.이에비해활은발사속도가조총에비해빨라여러차례사격이 가능했으므로 장병기로 근접전을 담당하는 살수, 근거리를 목표로 활을 쏘는 사수, 원거리 사격을 수행하는 포수로 구성된 삼수병의 운 용이 완성되었다.
        </div>
    )

    const btext52 = (
        <div>
            조선은 건국 초부터 압록강과 두만강 일대의 여진족과 충돌하면서 평안도·함경도 일대 북방 방어체제를 다져왔다. 특히 누르하 치가 건주여진 세력을 규합하는 16세기 말부터는 방어거점으로 삼을 만한 진지와 보루를 축조하여 유사시 여진족의 침입을 막는 요충지로 삼을 수 있도록 이를 정비하였다
            <br/>
            하지만 여진족이 통합되어 후금이란 단일 국가로 변화하면서 북방 방어전략의 대대적인 개선은 반드시 필요하게 되었다. 1619년 사르후전투 후금이 군 사적 근거지를 명과의 최전선인 요동으로 이동함에 따라 후금군의 예상 침공 경로는기존의 압록강 중류 일대에서 평지가 대부분인 압록강 하구로 변화할 가능성이 커졌다. 이에 청천강 바로 남쪽의 안주를 핵심 방위거점으로 삼아 청군의 침공을 막아 내도록 하고, 청천강 이북에도 군사력을 보강하여 의주 일대의 방어 전력을 강화하도록 방침을 정하였다. 이러한 방어전략은 실제로 정묘호란 당시에 후금군의 진격을 붙잡아두면서 조선군이 반격 기회를 노림과 동시에 후금과의 강화협상을 진행할 수 있는 압력으로 유효하게 작용하였다.
            <br/>
            정묘호란이 후금과 조선 사이의 강화조약 체결로 마무리되면서 조선은 후금이 요구한 형제국 관계를 받아들였지만, 이전까지의 친명배금의 대외정책 기조 자체는 유지하려 하였고, 이에 따라 조선은 이괄의 난과 정묘호란의 피해로부터 군사력 복구를 모색해야 했다.
        </div>
    )

    const btext53 = (
        <div>
            1636년 청 태종 홍타이지는 국호를 대금에서 대청으로 고쳐 숭덕이 라는 연호를 사용하는 황제국임을 선언하였고, 이와 동시에 조선에는 사절을 보내 군신관계를 요구하였다. 조선 조정이 이를 거부하자 청은 그해 겨울 대규모 병력을 동원하여 2차 조선침공을 결정하였다.
            <br/>
            청의 중앙군은 황(黃), 백(白), 홍(紅), 남(藍)색의 깃발을 상징으로 삼아 편성된 팔기군(八旗軍)으로 조직되어 있었는데, 그중 병자호란 당시에는 만주족과 한족, 몽골족 병력으로 구성된 부대로 조선 침공을 개시하였다. 애초 최대1 4만명에 이르는 청군병력중 300명 정도의 선봉대는 중간의 요충지는 무시하고 의주에서 한성을 잇는 가도를 따라 곧바로 남하 하였는데, 이는 최단 시간 내에 한성에 도달하여 유사시 조선 조정이 피난할 가능성이 큰 강화도로 통하는 길을 미리 차단하려는 계획이었다.
            <br/>
            이러한 청군의 전략은 정묘호란의 전훈을 적극적으로 반영한 것으로, 평지의 읍성을 비우고 산성을 중심으로 농성전을 준비하던 조선 측의 의도를 회피함에 따라 조선군의 전체적인 방어 계획은 처음부 터 빗나가게 되었다.
            <br/>
            이에 따라 1636년 12월 8일 압록강을 도하한 청군 선봉대는 의주를 지나치고 그대로 안주 방면으로 남하하였고, 이어서 선봉부대를 따라 도하한 좌익군이 의주부윤 임경업의 지휘하에 백마산성에 병력 을 이동하여 농성을 벌이는 사이 의주성을 점령하였다. 청군은 백마 산성을 포위하고 공격을 시도하였으나 곧 이를 중단하고 백마산성의 병력을 그대로 남겨둔 채 남하하였다. 최대한 빠르게 한성을 향해 남하하는 청군 주력의 기동전술은 청천강을 사이에 둔 방어거점인 안주에서도 동일하게 반복되었다.
            <br/>
            청군 선봉대는 전쟁이 일어난지 겨우 5일만에 한성교 외에 도달하여 강화도로 가는 길목을 차단하였고, 같은 날 좌익군이 12월 14일에 황해도 봉산에 이르러 도원수 김자점의 부대와 교전을 치른 후 뒤따른 우익군이 정방산성에서 나와 토산까지 진출한 조선군 병력의 반수를 궤멸하였다. 이 시점에 조선군이 청의 침공에 대비하여 계획한 산성 중심의 방어체계는 허무하게 붕괴되고 말았다.
        </div>
    )

    const btext54 = (
        <div>
            청군의 침공 소식을 접한 조정은 비빈과 두왕자를 강화도로 먼저피 난하게 하였다. 인조 역시 청군 주력이 개성을 통과했다는 보고를 접한 시점에서 강화도로 움직이려 하였으나 이미 돈의문 밖 홍제원 일대까지 남하한 청군 선봉대가 강화도로 가는 길목을 차단한 상황이었다. 조정은 최명길이 마포까지 들어온 청군과 회담하는 사이에 한 강을 건너 남한산성으로 들어갔다.  남한산성에 들어간 다음 날 우회하여 강화도로 가는 것을 시도하긴했지만 이미 길이 얼어붙어 성 밖 로 움직일 수는 없게 되었다.
            <br/>
            인조와 조정의 신료들이 고립되기는 하였지만, 입성 시점에서 남한산 성의 방위는 청군의 공세를 막아내기에는 충분하였다. 전투 초반에는 조선군이 성 밖으로 나와 청군을 수차례 격퇴하는 데도 성공하였다. 하지만 외부에서 성내로 군량을 반입 하는데 실패한 후 이어 겨울철 추위로 인한 전투력 손실이 이어졌고, 여기에 남한산성을 구원하기 위하여 각지방에서 올라온 근왕병력은 통일된 지휘를 받지 못한채 청군에게 각개격파를 당하며 성 밖 전황은 갈수록 악화되었다. 오래 지나지 않아 청군은 남한산성을 완전히 포위한채 서양제대포인 홍이포(紅夷砲)로 성안을 포격하기 시작하였다.
            <br/>
            1637년 1월 22일, 청의 수군이 얼어붙은 바닷길을 통해 강화도에 상륙, 강화성을 함락했다는 보고는 남한산성 안의 조선군 사기를 꺾는 데 결정적인 요소로 작용하였다. 결국 1월 30일 인조가 성문을 열고 나와 삼전도에서 청 태종에게 항복하는 것으로 47일 동안의 항전은 막을 내렸다.
            <br/>
            정묘호란과 마찬가지로 병자호란은 청의 침공으로 시작되었으나, 흔히 사람들이 ‘조선이 전쟁을 준비하지 않고 척화만 주장하다가 청군의 공격에 항복하였다’라고 생각하는 것과 달리 전쟁 전부터 조선 역시 임진왜란과 정묘호란 당시의 적을 상대한 경험을 기반으로 청의 침공에 대비한 대책을 준비하고 있었다. 병자호란이 일어났을 때도 조선군은 가급적 계획한 대로 방어대책을 따르려 노력하였으나 실전에서는 예상에서 벗어난 적의 침공 계획에 제대로 대응하지 못하는 한계를 보이며 농성 끝에 항복하는 결말로 이어졌다.
        </div>
    )



    // id6
    const summ6 = (
        <h5>
            ‘오래 보아야 예쁘다. 너도 그렇다.’ 우리에게 널리 알려진 이 글귀는 온라인 전시에서는 이렇게 불려야 할 것
            같다. ‘자주 보아야 예쁘다. 너도 그렇다.’ <br/>코로나19는 우리의 삶뿐만 아니라 심미(審美) 방식에도 변화를 가져다주었다.
            <br/><br/>글 주남주_전쟁기념관 학예연구사
        </h5>
    )

    const btext61 = (
        <div>
            코로나19의 확산으로 외출 자체가 어려워진 요즘. 박물관으로 향하는 발걸음도 멈추었다. 코로나19가 확산되기 전까지 전시를 관람하기 위해서는 발이 부지런해야했다. 특별전을 관람하려면 하루에 한 군데를 다녀오는 것으로 만족해야 했겠지만, 온라인에서는 마음만 먹는다면 여러기관을 방문할 수 있다. 더군다나 온라인에서는 이동의 제약이없고,
            위험을 감수해야 할 염려도 없다. 지금은 발대신 손이 부지런 하면 어디든 방문할 수 있다. 온라인에서 특별전을 감상하기 위해 국립중앙박물관과 대한민국역사박물관으로 발걸음 대신 ‘손걸음’을 해보았다.
        </div>
    )

    const btext62 = (
        <div>
            먼저 국립중앙박물관 홈페이지를 방문했다. 확인해보니 두 종류의 특별전이 개최 중이었다. 하나는 ‘빛의 과학, 문화재의 비밀을 밝히다’로, 적외선·자외선 등 빛을 통해 눈으로 볼 수 없었던 문화재의 구조를 다루었다. 박물관에서 활용하는 과학기술을 통해 그동안 보지 못했던 문화재의 이면을 보여준다는 점에서 관람객들은 해당 문화재에 대한 이해의 폭을 넓힐 수. 있는데, 이 전시는 유튜브에서 총 12편의 영상으로 만나볼 수 있다.
            <br/>
            다른 하나의 전시는 ‘한겨울 지나 봄 오듯-세한歲寒 평안平安’이다. 1·2부로 구성되어 1부는 추사 김정희의 작품인 ‘세한도’, 2부는 ‘평안 감사향연도’를 중심으로 유물에 얽힌 이야기를 다양한 방식으로 풀어 낸다. 이 특별전은 겨울에 맞는 전시라 생각되며, 마치 코로나19로 인해 어려운 상황을 ‘세한’으로, 극복되길 바라는 예전의 일상과 희망을 ‘평안’으로 담아내고 있는 듯했다. 특히 2부의 ‘평안-어느 봄날의 기 억’은 미디어 특별전으로 기획되어, 실감전시를 앞세운 국립중앙박물 관에서 디지털 기술과 박물관이 만나는 지점을 만들어나가고 있다. 이 특별전은 유튜브에 오프닝·강연·퍼포먼스·특별영상·유물 영상 등으로 구성되어 있으며, 시간이 지나면서 영상이 하나씩 공개되고 있다.
            <br/>
            국립중앙박물관은 ‘온라인 전시관’이라는 코너를 따로 만들어 운영 중이다. 더불어 유튜브에도 특별전 영상을 올려놓았다. 한번에 공개 하지 않고 특정 날짜에 하나씩 공개하여 ‘N차 관람’ 및 채널 방문을 지속적으로 유도한다. 한편, 특별전 콘텐츠는 유물에 대한 해설로만 끝나지 않는다. 특별전 주제에 맞는 강연, 특별영상, 퍼포먼스와 같이 다양하게 구성되어 콘텐츠의 단순한 반복을 피했다.
        </div>
    )

    const btext63 = (
        <div>
            대한민국역사박물관에서도 두 종류의 특별전을 온라인에서 관람할 수 있었다. 첫째는 ‘녹슨 철망을 거두고’이다. 이 전시는 지난해 6·25 전쟁 70주년을 기념하여 그동안 잘 다루지 않았던 평범한 사람들의 이야기를 담았다. 대한민국역사박물관도 다양한 동영상을 제작 하여 온라인 콘텐츠로 관람객들을 맞이한다. 그렇지만 특별전 만큼은 VR 중심이다. VR을 통해 특별전시실 전체를 자유롭게 둘러볼 수 있으며,  도록도 내려받아 볼 수 있어 관람객에게 편의성까지 제공했다. 둘째는 ‘국제보도사진전 코로나19 현장을 가다’이다. 팝업창으로 전시 를 보여주는데, 사진전이라는 전시 형태를 고려한 듯하다. 이 특별전 은 코로나19로 전 세계가 고통받는 현실과 이를 극복하는 연대와 협력의 모습을 사진으로 보여준다.
            <br/>
            대한민국역사박물관의 특별전은 동영상 대신 웹페이지, VR로 관람 할 수 있다. 이러한 전시 형태는 이미 이전부터 온라인에 제공되었던 것이지만, 두 특별전 모두 시의성이 깊다는 점에서 의미가 있다. 6·25 전쟁 70주년과 코로나19의 대유행으로 기억될 2020년을 되돌아보게 한다.
        </div>
    )

    const btext64 = (
        <div>
            특별전 관람은 새로운 주제를 접할 수 있는 기회다. 그렇기에 박물관·미술관의 특별전 개최 소식은 손꼽아 기다리는 일이기도 하다. 하지만 코로나19의 확산으로 가보지 못해 아쉽게 지나쳐버린 전시도 있었다. 더군다나 지금은 사회적 거리두기 강화로 인해 그 기회마저 얻기 어려워졌다. 그렇지만 위기는 기회라고 하지 않았던가. 온라인 전시를 통해 여러 박물관·미술관의 특별전을 관람할 수 있게 되었으니 말이다. 더군다나 시간에 구애도 받지 않는다. 온라인 전시의 강화 로 박물관·미술관을 방문하기 위한 공간적·시간적 제약이 완화되고 있는 것이다. 변화하는 시대의 온라인 전시는 ‘오래’ 보기 보다는 ‘자 주’ 보기가 미덕이 될 수 있다.
            <br/>
            전쟁기념관도 온라인 전시 확대 기조에 발맞추기 위해 노력 중이다. 홈페이지에 ‘온라인 기념관’ 코너를 따로 마련하여 운영중이며, 온라인 콘텐츠 개발은 전 부서 차원에서 시도하고 있다. 전쟁기념관의 특성을 살려 온라인 콘텐츠가 제작된다면 다른 기관과 차별되는 강점을 가질 수 있을 것이라 확신한다.

        </div>
    )

    const summ7 = (
        <h5>
            소총은 군인 개개인이 적을 상대하여 자신을 지키고 승리를 거두는 데 필요한 가장 기본적인 무기이다. 군사기술이 크게 발달하여 수백 킬로미터 떨어진
            곳에 있는 적을 타격할 수 있는 세상에서도 결국 ‘적진에 깃발을 꽂아야’ 하는 군인이 찾게 되는 것은 역시 그의 손에 쥐어진 소총 한 자루이다. 이번 글에서는 기념관의 국군무기발전실에서 살펴볼 수 있는, 1948년 대한민국 정부수립 이래 우리 군의 손을 거쳐 간 소총들의 이야기를 간략히 소개하고자 한다.
            <br/><br/>글 고한빈_전쟁기념관 학예연구사
        </h5>
    )

    const summ8 = (
        <h5>
            호국인물총서 2
            <br/>『유방백세(遺芳百世), 어둠 속에서도 눈감지 않은 사람들』 발간
            <br/><br/>글 이재민_전쟁기념관 학예연구사
        </h5>
    )




    const Inside = [
        {
            "id": "1",
            "title": "전쟁과 문화",
            "sub": "영화 속에 담긴 병자호란 <남한산성>과 <최종병기 활>",
            "summary": summ1,
            "contents": [
                {
                    "id": "1",
                    "images": img1,
                    "htext": "주화파와 척화파의 첨예한 대립, <남한산성>",
                    "btext": btext11
                },
                {
                    "id": "2",
                    "images": img2,
                    "htext": "청으로 끌려간 백성들, <최종병기 활>",
                    "btext": btext12
                }
            ]
        },
        {
            "id": "2",
            "title": "기념관 이야기 1",
            "sub": "기억을 기록하는 아/카/이/브",
            "summary": "",
            "contents": [
                {
                    "id": "1",
                    "images": img3,
                    "htext": "",
                    "btext": btext21
                },
                {
                    "id": "2",
                    "images": "",
                    "htext": "전쟁·군사 정보의 산실",
                    "btext": btext22
                },
                {
                    "id": "3",
                    "images": "",
                    "htext": "열린 아카이브, 모두의 아카이브",
                    "btext": btext23
                },
                {
                    "id": "4",
                    "images": img4,
                    "htext": "스마트폰으로 만나는 전쟁·군사박물관",
                    "btext": btext24
                },
                {
                    "id": "5",
                    "images": img5,
                    "htext": "똑똑하고 흥미로운 전시 관람",
                    "btext": btext25
                }
            ]
        },
        {
            "id": "3",
            "title": "기념관 이야기 2",
            "sub": "이벤트와 디자인 워크숍으로 북적~ 어린이박물관 온라인에 모여라!",
            "summary": "어린이박물관은 개관 6주년 이벤트와 함께 야외 공간 개선 디자인 워크숍을 진행하면서 어린이와의 소통을 꾸준히 이어가고 있다.\n" +
                "물론 온라인으로 말이다. 응원 메시지로 가득한 개관 6주년 축하 댓글, 어린이들의 창의력이 돋보인 야외 공간 개선 디자인 워크숍은\n" +
                "온라인 박물관의 또 다른 가능성을 보여준 참신한 시도였다는 점에서 큰 의미를 부여할 수 있다.",
            "contents": [
                {
                    "id": "1",
                    "images": story2,
                    "htext": "개관 6주년 온라인 이벤트",
                    "btext": btext31
                },
                {
                    "id": "2",
                    "images": "",
                    "htext": "야외공간개선디자인워크숍 Re-play 프로젝트",
                    "btext": btext32
                }
            ]
        },
        {
            "id": "4",
            "title": "기념관 이야기 3",
            "sub": "온라인으로 찾아가는 2021 #전쟁기념관",
            "summary": summ4,
            "contents": [
                {
                    "id": "1",
                    "images": story302,
                    "htext": "",
                    "btext": btext41
                },
                {
                    "id": "2",
                    "images": story301,
                    "htext": "관람객을 찾아가는 온라인 콘텐츠",
                    "btext": btext42
                },
                {
                    "id": "4",
                    "images": story303,
                    "htext": "",
                    "btext": ""
                },
                {
                    "id": "3",
                    "images": story304,
                    "htext": "",
                    "btext": btext43
                },
                {
                    "id": "5",
                    "images": story305,
                    "htext": "지속적인 변화와 발전이 필요한 온라인 콘텐츠",
                    "btext": btext44
                }
            ]
        },
        {
            "id": "5",
            "title": "역사의 순간",
            "sub": "전시실에서 만나는 병/자/호/란",
            "summary": summ5,
            "contents": [
                {
                    "id": "1",
                    "images": war,
                    "htext": "임진왜란 이후 조선군의 무기와 운용",
                    "btext": btext51
                },
                {
                    "id": "2",
                    "images": war2,
                    "htext": "호란 시기의 북방 방어전략",
                    "btext": btext52
                },
                {
                    "id": "3",
                    "images": war3,
                    "htext": "청군의 기동전과 빗나간 방어전략",
                    "btext": btext53
                },
                {
                    "id": "4",
                    "images": war4,
                    "htext": "남한산성 항전과 삼전도의 굴욕",
                    "btext": btext54
                }
            ]
        },
        {
            "id": "6",
            "title": "박물관 탐방",
            "sub": "온라인 콘텐츠로 가까워지는 특별전",
            "summary": summ6,
            "contents": [
                {
                    "id": "1",
                    "images": mobile,
                    "htext": "",
                    "btext": btext61
                },
                {
                    "id": "2",
                    "images": "",
                    "htext": "국립중앙박물관의 특별전",
                    "btext": btext62
                },
                {
                    "id": "3",
                    "images": "",
                    "htext": "대한민국역사박물관의 특별전시",
                    "btext": btext63
                },
                {
                    "id": "4",
                    "images": "",
                    "htext": "온라인 전시로 더욱 가까워진 박물관",
                    "btext": btext64
                }
            ]
        },
        {
            "id": "7",
            "title": " 대한민국 소총 연대기 M1 소총부터 K2C1 자동 소총까지",
            "sub": "온라인 콘텐츠로 가까워지는 특별전",
            "summary": summ7,
            "contents": [
                {
                    "id": "1",
                    "images": gun1,
                },
                {
                    "id": "2",
                    "images": gun2,
                    "htext": "99식소총과M1소총",
                    "btext": "946년 1월, 미군정 아래에서 우리 군의 모태인 남조선국방경비대가 창설 되었을 당시 우리에게 처음 지급된 소총은 다름아닌 옛 일본군의 99식 보병총이었다." +
                        " 이름조차도 일본식 연호를 따서 지어진 이 총은 1945년 8월 일본이 항복하면서 남기고 간 것을 지급한, 말그대로 ‘일제의 잔재’였다. " +
                        "새로운 나라의 군인을 꿈꾸며 입대한 장병들은 일본 황실의 상징인 국화 무늬만 겨우 갈아내어 없앤 총을 받아들고 국력의 미비함을 통감해야 했을 것이다." +
                        "이렇듯 어려운 상황은 1948년 대한민국 정부 수립에 즈음하여 미국의 군사원조를 통해 개선되었다. 미국은 당시 주한미군이 보유하였던 미국의 M1 소총을 국군에게 제공하기 시작했다." +
                        " 이 소총은 제2차 세계대전 동안 당대 최고의 개인화기로 정평이나 있었다. 그러나 한국인 남성의 평균 신장이 겨우 160cm 초반에 머물던 당시, 길이가 110cm에 중량이 4.3kg이나 나가는" +
                        " M1 소총은 우리에게 결코 편안한 총이 아니었다. 그럼에도 국군은 6·25전쟁을 통하여 미국으로부터 제공된 22만 6천 정의 M1소총을 소중히 운용하였다. " +
                        "수 많은 참전자와 교련수업의 기억을 간직한 옛 세대의 ‘에무왕’은 30여 년간 우리 군의 전투력의 원천이 되었다."
                },
                {
                    "id": "3",
                    "images": gun3,
                    "htext": "베트남전쟁과 M16 소총",
                    "btext": "세월이 흘러 1965년, 국군은 창설 이래 최초의 해외파병인 베트남전 쟁의 길에 올랐다. 파병된 장병들은 베트남의 정글 속에서 분전하였지만 그들이 휴대한 M1소총은 이새로운 전장에 맞지않는 낡은 무기가 되어 있었다. " +
                        "상대인 북베트남군은 당시 소련과 중국으로부터 지원받은 AK-47 자동소총을 사용했는데, 크기가 작고 가벼우면서도 연발 사격이 가능한 이 총은 누가 보아도 우리의 소총보다 훌륭한 것이었다. 이처럼 최전선에서부터 구식 소총에 대한 불만이 제기됨에 따라, " +
                        "우리 육군은 베트남 주둔 미군으로부터 그들 사이에서도 이제 막 두각을 드러내기 시작한 신형 자동소총, 즉 M16 소총을 1967년부 터 지원받기 시작하였다. 나무 몸통의 소총에 익숙했던 병사들은 마치 SF영화에 나올 듯한 M16 소총의 외형과 성능에 감탄하였다." +
                        " 육군은 베트남에 파병된 부대에서부터 빠르게 M16 소총을 갖추어 나갔으며, 베트남전쟁이 끝난 1974년에는 아예 미국으로부터 면허 생산을 승인받아 M16A1 소총을 국내에서 제작하였다. " +
                        "이는 우리나라가 대량 생산한 최초의 총기였다. 최근까지도 후방이나 교육부대에서 이따금 씩 볼 수 있었던, ‘대한민국’ 글자가 음각된 M16A1 소총은 모두 이러한 방식으로 생산된 것이었다."
                },
                {
                    "id": "4",
                    "images": gun4,
                    "htext": "최초의국산소총,K2소총",
                    "btext": "이러한 과정과 별개로 우리 안에서는 우리의 체형과 전투환경에 부합하는 우리만의 소총을 제작하려는 노력이 진행되었다. 국방부는 6·25전쟁 중인 1951년부터 조병창을 통해 총기용 부품과 폭약을 제작하며 무기 개발에 대한 노하우를 쌓아왔고, " +
                        "1972년에는 국방과학 연구소를 중심으로 국산 소총을 설계하는 사업이 시작되었다. 이 과정에서 국산 M16A1 소총의 생산 경험은 우리에게 큰 자산이 되었다. 신형 소총의 설계는 1974년부터 1980년까지 장장 6년의 세월이 걸렸다. " +
                        "처음엔 M16A1 소총을 비롯한 다양한 외국산 소총을 모방하는 식으로 시제품을 만들었지만 이러한 과정을 통해 소총의 원리에 대한 이해가 깊어지자 점차 독자적인 디자인이 나타났다. 소총의 외형은 당시 우리 장병들에게 익숙한 M16A1 소총을 참고하되, " +
                        "내부는 AK- 47 소총과 비슷한 가스활대를 넣어 단순하면서도 신뢰성 높은 그들의 장점을 덧붙였다. 여기에 산악기동과 진지 공사가 잦은 우리군의 특성을 고려해 개머리판을 접을 수 있게 하였다. " +
                        "이처럼 독자성을 추구하는 와중에도 유사시 미군과 국군 사이에서 보급품을 교환할 수 있도록 상호간의 탄환과 탄알집이 호환되도록 설계하였다. 이것이 1984년 우리군의 신형 소총이자 최초의 독자개발 소총인 K2자동소총이다."
                },
                {
                    "id": "5",
                    "htext": "우리 소총의 미래는?",
                    "btext": "우리 군에서 한 소총이 제식으로 사용되었던 기간을 각각 헤아려보면 M1소총이 약 30여년, M16자동소총이 10여년, K2자동소총이 30여 년에 이른다. " +
                        "교체 주기를 생각해보면 지금이 차세대 소총을 논의하기에 최적의 시기라는 것을 짐작할 수 있다. 그렇다면 어쩌면 또 다시 수십년의 ‘임무’를 다하게될 차세대 소총은 어떤 것이 나올까? " +
                        "우리 소총의 미래는 아마도 현재의 모습과 크게 차이가 나지 않을 것이다. 개인화기의 발전은 이미 20세기를 거치며 ‘절정’에 다다랐기 때문에, 소총 자체의 혁신 보다는 이를 운용하는 방법의 발전이 전세계적인 추세이기 때문이다. " +
                        "이러한 맥락 속에서 2014년 첫 개발되어 현재 보급이 진행 중인 K2C1 소총은 우리 소총의 앞길을 예증한다고 볼 수 있다. 기본적으로는 K2 자동소총과 동일한 모델이되, 사수의 상황에 맞게 각종 광학장비와 손잡이 등을 달수 있는 레일이 " +
                        "총몸 곳곳에 추가되고 사수의 체형에 따라 길이 조절이 가능한 개머리판이 제공된다. 우리가 맞추어나가야 하는 무기에서, 우리에게 맞춰 나가는 무기로 발전한 소총개발의 역사가 우리군의 발전을 잘 요약하고 있다."
                }
            ]
        },
        {
            "id": "8",
            "title": "뉴/스/브/리/핑",
            "sub": "새로운 패러다임을 선도하고 변화와 혁신을 구현하는 전쟁기념관",
            "summary": "",
            "contents": [
                {
                    "id": "1",
                    "images": news,
                    "htext": "헬기 동산 개막식 개최",
                    "btext": "2020년 11월 26일 어린이박물관 옥상에 헬기 동산이 새롭게 조성되어 조촐한 개막식 이 열렸다. " +
                        "이곳에는 6·25전쟁 당시 운용했던 기종부터 현대 국군이 사용했던 기종의 헬기들을 역동적인 형태로 전시하고 있는데," +
                        " 기존 헬기에 대한 고증과 복원작업을 통해 관람객들에게 다채로운 볼거리를 제공해줄 것으로 기대된다.\n"
                },
                {
                    "id": "2",
                    "images": news2,
                    "htext": "전쟁기념관 가족친화 우수기관 획득",
                    "btext": "전쟁기념관은 2021년 여성가족부가 인증하는 ‘가족친화 우수기관’에 선정됐다. 가족친화 인증제도는 직원들이 일과 가정을 양립할 수 있도록 " +
                        "지원하기 위해 가족친화 제도 를 모범적으로 운영하는 기업과 공공기관을 대상으로 인증하는 제도이다. " +
                        "인증 심사는 2020년 7~8월에 이루어진 서류심사와 현장 심사를 거쳐 진행됐으며, 전쟁기념관은 지난 2017년에 이어 2021년에도 선정되었다." +
                        " 앞으로도 전쟁기념관은 직원들이 일과 가정생활이 조화롭게 균형을 이룰 수 있도록 직원 복지에 최선을 다할 것이다."
                },
                {
                    "id": "3",
                    "images": news3,
                    "htext": "온라인 전시해설 콘텐츠 ‘죽음도 갈라놓지 못한 사랑’",
                    "btext": "15회 차 영상으로 제작된 ‘죽음도 갈라놓지 못한 사랑’ 전시해설 콘텐츠는 3층 유엔실 에 전시되어 있는 유엔군 묘지에 대한 이야기를 주제로, " +
                        "제목에서도 느낄 수 있듯이 애 절한 부부의 사연을 담고 있다. 6·25전쟁에 참전했다가 전사한 호주 군인 케네스 존 휴머스턴 대위와 간호장교였던 그의 부인 낸시의 " +
                        "감동적인 사연을 전시해설로 담아낸 영상은 전쟁기념관 홈페이지와 유튜브에서 만나볼 수 있다."
                },
                {
                    "id": "4",
                    "images": news4,
                    "htext": "온라인 콘텐츠 <유물을 만나다>: 故 이건희 회장 기증 권총",
                    "btext": "전쟁기념관 온라인 콘텐츠 <유물을 만나다> 제3탄은 故 이건희 회장 기증 권총 영상을 제작하여 좋 은 반응을 얻고 있다." +
                        " 이번 영상의 주인공은 미국 재향군인회가 6·25전쟁 참전 기념으로 당시 사용 된 M1911A1 권총 모델을 토대로 특별 제작한" +
                        " 5백 정의 권총 중 제2호정이다. 이는 1994년 워싱턴의 참전기념비 건립 모금에 참여한 故 이건희 회장에게 기증한 것을 이 회장이 서욱 국방장관에게 다시 " +
                        "기증하여 전쟁기념관으로 오게 됐다. 총 손잡이는 호두나무로 제작되었고, 일부 부속은 금장으로 만들어졌으며, 손잡이에는 태극마크," +
                        " 총신에는 6·25전쟁 발발 일자, 휴전 일자, “자유 세계를 위하여”라는 영문이 각인되어 있다." +
                        " 세계에서 가장 많이 사용되는 권총이지만 특별한 의미를 담아 한정판으로 제작된 M1911A1 권총의 스토리를 담고 있는 영상은 " +
                        "홈페이지와 유튜브에서 만날 수 있다."
                },
                {
                    "id": "5",
                    "images": news5,
                    "htext": "이동전시모듈 ‘6·25전쟁과 무공훈장-가슴에 단 명예’ 순회전시",
                    "btext": "전쟁군사박물관 협력망 활성화를 위해 2020년 1월 제작한 이동전시모듈 ‘6·25전 쟁과 무공훈장-가슴에 단 명예’는" +
                        " 12월 10일부터 2021년 1월 말까지 경남 창녕 박 진전쟁기념관에서 전시된다. 무공훈장의 제정과 수여에 관련된 이야기부터 " +
                        "새로 발굴한 초기 무공훈장의 모습까지 만나볼 수 있는 이동전시모듈은 지난 1년 동안 협력망기관 4개 박물관을 대상으로 한 순회전시에서 많은 호평을 받았다. " +
                        "2021년 에는 6·25전쟁 참전부대를 주제로 한 전시패널 1종이 추가되어 총 2종이 순회전시를 통해 좀 더 많은 기관으로부터 호응을 받을 것으로 기대된다."
                },
                {
                    "id": "6",
                    "images": news6,
                    "htext": "소중한 유물을 기증해주셔서 감사합니다(2020년 7~12월)",
                    "btext": ""
                },
                {
                    "id": "7",
                    "images": news7,
                    "htext": "전쟁·군사 도서 및 기록물 기증받습니다",
                    "btext": "전쟁기념관은 전쟁·군사 관련 문화예술의 허브 역할을 위한 복합문화플랫폼 구축을 추진하고 있습니다. 전쟁·군사 주제를 다룬 다양한 분야의 국내외 도서와 기록물 등을 기증받고 있으니 많은 관심과 참여를 부탁드립니다.\n" +
                        "* 문의: 02-709-3227"
                },
            ]
        },
        {
            "id": "9",
            "title": "기념관 이슈",
            "sub": "",
            "summary": summ8,
            "contents": [
                {
                    "id": "1",
                    "images": tm,
                    "htext": "",
                    "btext": "전쟁기념관 호국인물총서 시리즈의 두 번째 권으로 『유방백세: 어둠 속에서도 눈감지 않은 사람들』이 발간되 었다. 이는 2020년 봉오동·청산리전투 100주년을 기념하여, 암흑과도 같았던 일제강점기 속에서 독립을 위해 목숨 바쳐 투쟁한 호국인물 26명이 걸어간 위대한 발자취를 다루고 있다."

                },
                {
                    "id": "2",
                    "btext": "‘꽃다운 이름 백세토록 전하리’라는 뜻을 지닌 제2권의 제목 ‘유방백세(遺芳百世)’는 독립운동가들이 먼저 간 동지들을 떠올릴 때 종종 인용했던 표현이다. 1948년 김구가 직접 쓴 것으로 현재 효창공원 내 삼의사 묘 기단에 새겨져있다.네글자는 한글자씩 각장의 맨 앞에 배치하여 " +
                        "장의 시작을 알림과 동시에 호국인물들의 희생과 헌신을 영원히 기억하겠다는 의미를 담고 있다. 호국인물총서 2에서 눈에 띄는 두드러진 특징은 최신의 연구 성과는 물론, 기존에 많이 알려지지 않았던 자료 및 고지도·위성지도 등을 참고하여 호국인물들의 공적을 집대성했다는 점이다. " +
                        "국내의 경우, 각종 고지도와 당시 신문기사, 현재의 표석 등 여러 자료를 활용하여 주요 공적을 입체적으로 확인할 수 있도록 했다. 국외의경우, 익숙지 않은 중국 동북 지역의 지도 자료를 제시함으로써 어렴풋이 알고 있었던 항일독립전쟁의 모습을 한눈에 파악할 수 있도록 심혈을 기울였다."
                },
                {
                    "id": '3',
                    "btext": "1년 가까이 자료를 조사하고 공적을 연구하고 호국인물 한분 한분의 삶을 재 조명하면서, 그들의 숭고한 희생 정신에 절로 고개가 숙여지고 감사했다. 모쪼록 이 책을 접하는 많은 사람이 호국인물들의 헌신과, 이를 바탕으로 오늘의 평화와 번영이 꽃피울 수 있었음을 기억 해주었으면 한다."
                }
            ]
        },
        {
            "id": "10",
            "title": "2021년 이달의 호국인물 선정",
            "sub": "",
            "summary": "전쟁기념관은 2021년 ‘이달의 호국인물’로 홍재근 육군일등병 등 12명을 선정했다. " +
                "특히 올해는 코로나19 관련, 기존의 대면 현양행사에 변화를 주어 온택트 시대에 부합하는 전시와 세미나," +
                " 영상 제작, 온라인 추모공간 신설 등 호국인물들의 공적과 숭고한 희생정신의 의미를 다양한 온오프라인 콘텐츠로 선보일 예정이다.",
            "contents": [
                {
                    "id": "1",
                    "images": man,
                }
            ]
        }
    ]

    const inside = Inside.find((p) => p.id === match.params.id)

    return (

        <Layout>
            <div className="space-mb--r100 space-mt--r100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                <Col>
                                    <div
                                        className="monthly-grid-post"
                                    >
                                        <div className="monthly-grid-post__title space-mb--r50">

                                            <span>{inside.title}</span>
                                            <div className="monthly-grid-post__title">
                                                <h3
                                                    className="mt-3"
                                                >
                                                    {inside.sub}
                                                </h3>
                                            </div>
                                            {inside.summary
                                                ?
                                                <div className="monthly-grid-post__summary">
                                                    {inside.summary}
                                                </div>
                                                : ""
                                            }
                                        </div>
                                        {inside.contents &&
                                        inside.contents.map((inside, i) => (
                                            <div key={i}>
                                                {inside.images ?
                                                    <div
                                                        className="monthly-grid-post__image text-center space-mb--r50 space-mt--r100"
                                                        style={ inside.htext || inside.btext ? {} : {marginBottom: "-50px"}}
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src={inside.images}
                                                            alt="/"
                                                        />
                                                    </div> : ""
                                                }


                                                <div className="monthly-grid-post__content">
                                                    <h2>
                                                        {inside.htext}
                                                    </h2>
                                                    <p className="post-excerpt">
                                                        {inside.btext}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>

    );
};

export default Sub;
