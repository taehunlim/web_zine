import React from 'react';
import Layout from "../components/layout/Layout";

import {Col, Container, Row} from "react-bootstrap";

import newImg from '../assets/images/Monthly/page/news.jpg'

import story1 from "../assets/images/Monthly/page/story1.jpg";
import story2 from '../assets/images/Monthly/page/story2.jpg'
import story3 from '../assets/images/Monthly/page/story3.jpg'
import story4 from '../assets/images/Monthly/page/story4.png';



const Monthly = ({match}) => {

    const summ2 = (
        <h5>
            광해군이 폐위되고 인조가 즉위한 1623년, 인조반정이 성공하면서 조정의 외교 정책에도 큰 변화가 이루어졌다.
            명과 후금 사이에서 실리적인 입장을 취한 광해군의 중립외교 정책 대신에 친명배금(親明排金) 정책이 외교의 기본 방향이 되었고, 이것은 신흥 군사
            강국 후금(後金)을 자극했다. 1627년의 정묘호란과 1636년의 병자호란은 인조와 서인 정권의 외교 실책이 빚은 혹독한 대가였다.
            <br/> <br/> 글 신병주_건국대학교 사학과 교수
        </h5>
    )

    const btext = (
        <p className="post-excerpt">
            자연의 순리에 따라 어김없이 한 해가 가고 새로운 해가 밝았습니다.
            전쟁기념관을 사랑하고 자주 찾아주 시는 여러분과 함께 맞이한 신축년 아침 첫인사를 드립니다.
            여러분! 건강하게 새해 잘 맞이하셨지요? <br/> <br/>
            지난 한 해는 코로나19가 모든 것을 집어삼켰습니다. 우리의 일상생활 자체가 변화되는 시간이었습니다.
            전쟁기념관도 처음 겪는 상황에 당황스럽고 어려운 나날을 보냈습니다.
            그러나 오히려 새로운 시대의 패러 다임을 이해하고 준비하며 대처해나가는 의미 있는 시간이기도 했습니다.
            <br/> <br/>
            2020년에는 미래 30년의 전쟁기념관을 만들어나갈 비전체계를 정립하고 4대 전략목표를 설정하였습니다.
            그러나 무엇보다도 큰 변화는 조직문화의 혁신이었습니다. 전쟁기념관 존재의 의미와 정체성을 더욱 명확 히 하고,
            새로운 환경의 변화 속에서 생존하기 위해서는 가장 먼저 우리 자신부터 변화하지 않을 수 없었던 것입니다.
            특히 젊은 세대가 앞장서 변화와 혁신을 이끌었던 점이 자랑스럽습니다.
            <br/> <br/>
            2021년 새해에도 전쟁기념관은 변화와 혁신을 구현하는 데 역점을 둘 것입니다.
            우선, 온택트 시대에 맞춰 다양한 온라인 서비스를 개발하는 데 우리 구성원들의 창의성과 전문성이 최대한 발현되도록 할 것입니다.
            이를 통해 전쟁기념관의 특성과 장점을 발휘할 수 있는 온라인 콘텐츠를 개발하고 서비스를 확산하도록 하겠습니다.
            <br/> <br/>
            두 번째, 작년부터 구상해온 ‘전쟁기념관 복합문화플랫폼’ 사업에 착수합니다.
            전쟁과 군사를 주제로 하는 국내외 전문서적·기록물 및 역사·문학·미술·음악·영상작품을 수집·전시하고,
            문화교양 강좌·세미나 등 을 통해 지식을 공유하고 연구하며, 즐거움과 재미, 휴식을 누릴 수 있는 복합공간을 만들어나가겠습니다.
            <br/> <br/>
            세 번째, 대한민국의 대표적인 문화행사가 될 ‘유엔문화축제’의 원년이 되도록 할 것입니다.
            6·25전쟁 에 전투부대와 의료지원을 제공하였던 22개 유엔참전국과 함께하는 문화축제입니다. 함께 피를 흘리고 희생을 나누었던 참전국들을 기억하고 감사의 마음을 전하는 한편, 유엔과 참전국들의 역사와 문화를 소개·공유하며, 청소년과 관람객, 그리고 지역 시민과 함께 각종 문화예술행사를 진행하게 될 것입니다.
            <br/> <br/>
            네 번째, 전쟁기념관의 이미지를 강조하는 홍보·안내 상징물을 설치하고, 관람객을 위해 안전·편의 시설을 개선하며, 관람환경을 더욱 쾌적하게 만들어나가는 등 운영관리의 혁신도 게을리하지 않을 것입니다.
            전쟁기념관은 전쟁의 역사와 교훈을 통해 호국과 안보, 그리고 평화를 되새기는 역할을 다하며, 세계적인 전쟁·군사박물관으로 발돋움해나가겠습니다. 여러분의 아낌없는 관심과 격려를 부탁드립니다.
            신축년 새해, 여러분 모두의 가정에 건강과 행복이 넘쳐나기를 소망합니다. 감사합니다.
        </p>
    )

    const btext2 = (
        <p className="post-excerpt">
            명과 연결하여 후금에 적대적인 입장을 취하는 조선에 큰 불만을 가 졌던 후금의 집권자 홍타이지는 1627년 1월 8일 아민으로 하여금 조선 침공에 나서게 했다.
            정묘호란이 시작된 것이다. 기병과 보병을 합 한 후금의 3만 5천여 명 병력이 1월 13일 압록강을 넘었다.
            선봉에는 강홍립, 박난영 등 조선 출신 장수들과 통역관도 함께했다. 후금은 조선이 명나라를 도와 후금을 공격했다는 것.
            명나라 장군 모문룡에 대 한 지원을 계속한다는 것, 누르하치가 사망했을 때 조선에서 조문 사 절을 보내지 않았다는 것 등을 출병 이유로 들었다.
            후금군은 순식간 에 평안도 의주를 점령하고, 일주일 후에는 얼음을 타고 청천강을 건 너 안주로 내려왔다. 후금의 전격적인 침략에 조선의 조정은 당황했다.
            인조는 1월 27일 황급히 강화도로 피난길을 서둘렀다. 기마병이 주력인 후금군이 상륙 작전을 하는 것은 쉽지 않다고 판단했기 때문 이다.
            명나라 정벌에 총력을 기울여야 하는 후금도 더 이상의 공격은 무리라고 판단했고, 1627년 3월 형제 관계의 맹약을 맺은 후 철수하 였다.
            협상으로 전쟁은 일단 종결되었지만, 정묘호란 이후에도 후금 에 대한 강경책은 조정의 대세였다.
            이제껏 오랑캐라고 무시했던 후 금을 명나라와 동등하게 대우하여야 한다는 조처는 인조와 서인 정 권의 입장과 맞지 않았다.
            특히 후금이 통상적인 조건의 10배가 넘는 무역을 요구해 오자 인조의 분노는 폭발하였다. 1634년 인조는 “이기 고 짐은 병가의 상사이다.
            금(金)나라 사람이 강하긴 하지만 싸울 때 마다 반드시 이기지는 못할 것이며, 아군이 약하지만 싸울 때마다 반 드시 패하지도 않을 것이다”는 하교를 내리면서 전쟁을 결코 피하지 않을 것임을 선언하였다.
            신흥 강국 후금의 현실적인 군사력을 무시 하고 의리와 명분을 고집한 집권층의 외교 정책은 스스로 전쟁을 초 래한 꼴이 되었다.
            정묘호란 때 그렇게 당했으면서도 내부의 국방력 에 대한 철저한 점검이 없이 맞불 작전으로 후금과 전쟁을 불사하는 최악의 길을 택한 것이다.
        </p>
    )

    const btext3 = (
        <p className="post-excerpt">
            1636년(인조 14년) 4월 국세를 확장한 후금의 홍타이지(태종)는 스스로 황제라 칭하고, 국호를 청(淸)으로, 수도를 심양에 정하였다.
            청 태 종은 명나라 정벌에 앞서 그 배후가 될 수 있는 조선을 먼저 장악하 기 위해 군신 관계를 맺을 것을 요구해 왔다. 형제 관계를 넘은 무례 한 조처였다.
            후금은 명나라를 대신하여 자신이 중원과 북방의 강자 라고 확신하고 있었다. 조정에도 최명길처럼 청과 협상하자는 주화파 (主和派)들이 있었지만, 조정의 대세는 김상헌을 중심으로 하는 척화 파(斥和派)였다.
            <br/>1636년 11월 말 청 태종은 팔기(八旗)의 군사가 집결한 심양에서 자신이 직접군사를이끌고조선침략에나섰다.
            병력12만8천여명가 운데는 몽골족 3만과, 한족 2만이 포함되어 있었다. 12월 2일 심양을 출발한 청나라 군대는 12월 8일 마 부대가 이끄는 기병 6천여명 이 별다른 저항을 받지 않고 얼어붙은 압록강을 건넜다. 병자호란의 시작이었다.
            청군은 국경을 넘은 지 5일 만에 한양을 점령하였다. 인 조와 조정 대신들은 서둘러 강화도 피난길에 나섰지만, 청군의 선발 대가 양화진 방면으로 진출하는 바람에 강화도로 통하는 피난길도 차단되었다.
            1636년 12월 15일 인조 일행은 남한산성에서 청의 12만 대군에게 완전히 포위되었고, 청군은 포위망을 구축하고 장기전으 로들어갔다.성안에는1만4천여명이50여일을버틸수있는식 량을 비축하고 있을 뿐이었다.
            북문 근처에서 청과 조선 간의 교전이 벌어지기도 했으나, 청은 포위망을 구축하고 인조를 압박해 갔다. 망 월봉 아래에 홍이포(紅夷砲)를 설치해 놓고 산성과 행궁을 향해 포 격하는 전술을 펼쳤다.
            1637년 1월 22일에는 일부 왕족과 대신이 피 난을 간 강화도마저 함락되면서 조선의 사기는 극도로 떨어졌다. 1월 27일 청나라 군대는 포위망을 더욱 좁혀 산성 바로 앞까지 군사들을 진격시켰고 최후의 공격 준비를 갖추었다.
            청군은 성벽을 쉽게 기어 오르기 위해 목인(木人) 수십 개를 성벽 주변 각처에 갖추어 조선군 을 긴장시키면서 종일 위협적인 포격을 가하였다. 청군의 계속적인 공격과 식량 고갈은 주화파의 입지를 강화해주었다.
            성내에서는 중 신회의가 열렸고 장시간에 걸친 논란끝에 척화파의 반대에도 불구 하고 청이 요구한대로 인조가 성에서 나와 항복하자는 것으로 결론이 났다. 최명길이 인조의 지시를 받아 항복을 청하는 국서를 작성했다.
            최명길은 이후에도 청나라 진영을 오가며 전쟁의 종결을 선언하 는 협상을 성공시키는 데 주도적인 역할을 했다. 명분보다는 국익을 앞세운 것이었다.
            병자호란에 관한 최근 연구에서는 1637년 1월 16일 청군 진영에 천연두 환자가 발생했고, 이것으로 청나라가 조선 조정 을 강화 협상으로 끌어들였다는 견해가 제시되었다.
            현재의 코로나 19 사태와 관련하여 주목을 끌고 있는 연구이다.
        </p>
    )

    const btext4 = (
        <p className="post-excerpt">
            1637년 1월 30일 인조는 서문을 통해 남한산성을 내려왔다. 왕은 남 문으로 나와야 했지만, 청나라에서는 가장 빠른 서문으로 나올 것을 재촉했다
            . 왕의 의례복 대신에 남색의 융복(戎服) 차림을 해야 했던 것도 굴욕이었다. 삼전도(三田渡, 현재의 잠실 석촌호수 부근)에 마련 된 수항단(受降檀, 항복을 받아들이는 단)에서
            인조와 세자, 대신들 은 청 태종에게 ‘삼배구고두’(三拜九叩頭, 세 번 절하고 머리를 아홉 번 조아림)를 하는 치욕적인 항복 의식을 마쳤다. 이로써 청나라와 군신관계가맺어지고,
            명의연호대신에청의연호를사용할것,세 자와왕자를청나라에인질로보낼것등굴욕적인협상이맺어졌는 데, 이를 정축화약(丁丑和約)이라 한다.
            인조의 항복을 받은 청 태종 은 승전을 기념해 자신의 공적을 찬양하는 비석을 세우게 했다. ‘삼 전도비’의 원래 이름이 ‘대청황제공덕비(大淸皇帝功德碑)’인 것은
            청 나라 측에서 승전의 기억을 후대에까지 널리 기억시키게 하기 위해서였다. 백제를 멸망시킨 당나라 소정방이 부여의 정림사 석탑에 ‘대 당평백제비명(大唐平百濟碑銘)’을 쓴 것과도 유사한 장면이다.
            삼전도의 굴욕은 인조의 치욕으로만 그치지 않았다. 많은 조선인이 끌려가 남탑 거리의 노예시장에 팔려 나갔다. 군인이나 전투 요원과 는 달리 민간인으로 체포된 사람들을 피로인(被擄人)이라 하는데,
            최명길이 명나라 도독에게 보낸 문서에는 피로인의 숫자가 50만 명 으로 추정했다. 끝까지 척화를 주장하며 저항했던 홍익한, 윤집, 오 달제 등은 심양의 서문 밖에서 처형되었는데,
            훗날 삼학사로 불리며 충절의 상징이 되었다. 여성들의 비참한 사연은 환향녀(還鄕女)라는 말의유래에서도찾을수있다.우여곡절끝에겨우살아온여인들 에게는 정절을 지키지 못한 여인이라는 ‘화냥녀’라는 굴레가 씌어졌다.
            일부 양반들이 환향녀(당시는 속환녀라고 함)와의 이혼을 요구하 는 소동이 벌어지고, 이들을 회절강(回節江, 절개를 회복하는 강, 현 재의 홍제천)에 목욕시키는 촌극도 벌어졌다.
            패배한 전쟁에서 얼마 나 많은 백성이 희생되고, 치욕을 당해야 했는가를 역사는 기억하는 것이다. 병자호란 이후 민간에는 『박씨전』과 『임경업전』이 널리 전파 되었다.
            왕과 정치인 모두가 무기력하게 당했던 호란의 치욕적 패배 에좌절하고있던조선후기에전쟁영웅박씨부인과임경업장군을 주인공으로 한 소설이 유행한 것이다.
            현실에서 패한 전쟁은 가상의 공간에서나마 승리한 전쟁으로 승화되면서 조선인들의 울분을 풀어 주기도 했다.
        </p>
    )


    const Monthly = [
        {
            "id": "1",
            "title": "신년사",
            "sub": "새로운 패러다임을 선도하고 변화와 혁신을 구현하는 전쟁기념관",
            "summary": "",
            "contents": [
                {
                    "id": "1",
                    "images": newImg,
                    "htext": "",
                    "btext": btext
                }
            ]
        },
        {
            "id": "2",
            "title": "story",
            "sub": "병자호란의 치욕이 주는 역사적 교훈",
            "summary": summ2,
            "contents": [
                {
                    "id": "1",
                    "images": story1,
                    "htext": "병자호란의 전초전, 정묘호란",
                    "btext": btext2
                },
                {
                    "id": "2",
                    "images": story2,
                    "htext": "1636년 12월 병자호란의 시작",
                    "btext": btext3
                },
                {
                    "id": "3",
                    "images": story3
                },
                {
                    "id": "4",
                    "images": story4,
                    "htext": "삼전도의 굴욕과 병자호란의 교훈",
                    "btext": btext4
                }
            ]
        }
    ]


    const monthly = Monthly.find((p) => p.id === match.params.id)

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

                                            <span>{monthly.title}</span>
                                            <div className="monthly-grid-post__title">
                                                <h3
                                                    className="mt-3"
                                                >
                                                    {monthly.sub}
                                                </h3>
                                            </div>

                                            {monthly.summary
                                                ?
                                                <div className="monthly-grid-post__summary">
                                                    {monthly.summary}
                                                </div>
                                                : ""
                                            }
                                        </div>
                                        {monthly.contents &&
                                        monthly.contents.map((monthly, i) => (
                                            <div key={i}>
                                                {monthly.images ?
                                                    <div className="monthly-grid-post__image text-center space-mb--r50 space-mt--r100">
                                                        <img
                                                            className="img-fluid"
                                                            src={monthly.images}
                                                            alt="/"
                                                        />
                                                    </div> : ""
                                                }

                                                    <div className="monthly-grid-post__content">
                                                        <h2>
                                                            {monthly.htext}
                                                        </h2>
                                                        <p>
                                                            {monthly.btext}
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

export default Monthly;
