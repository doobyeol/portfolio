import { defineStore } from 'pinia'
import { json } from 'stream/consumers';
import { ref, onBeforeMount, reactive, computed } from "vue";

export interface ArticleType {
  date: string | undefined
  type: string | undefined
  title: string | undefined
  text: string | undefined
  link: string | undefined
  imgPath: string | undefined
}

export const useTimelineStore = defineStore('timelineStore', () => {

    const fixedArticle = ref(
        {
            date: "20221124",
            type: "fix",
            title: 'Skills and Languages',
            text: '',
            link: "",
            imgPath: "",
        },
    );

    const timelineList = ref<Array<ArticleType>>([
        {
            date: "20221124",
            type: "career",
            title: `㈜에스피에이치 (클라우드팀 사원)
                    2021.07 - 현재`,
            text: `
            1. GS 칼텍스 상권분석 WEB (2022.08 ~ )
            - 기술스택 : Vue, javascript, Java, Spring Boot, postgreSQL
            - Google Map 기반 서비스 개발
            - Google Map UI 관련 더블 버퍼링을 사용한 성능 개선
            - 관리자 페이지 개발
            - Azure OAuth SSO 개발
            - 판매실적/점두가 통계 쿼리 작성
            \n
            2. Kagos 자산관리 솔루션 WEB ( 2022.01 ~ 2022.07 )
            - 기술스택 : Vue, Javascript, Java, Spring Boot, postgreSQL
            - Spring Security + JWT 로그인 개발
            - Okta SAML SSO 개발
            - Tableau 토큰기반 SSO 로그인, 화면 연동 개발
            - Vue Slot을 사용한 공통 레이아웃 개발
            - 공통 Vue 컴포넌트 개발
            - Frontend 공통 API 모듈 개발
            \n
            3. LG 하이케어 상황실 시스템 WEB (2021.08 ~ 2021.12)
            - 기술스택 : JSP, jQuery, Java, Spring, postgreSQL
            - Tmap 기반 실시간 모니터링 알림 서비스 개발
            `,
            link: "",
            imgPath: "",
        },
        {
            date: "20221124",
            type: "career",
            title: `㈜에이트원 (연구개발팀 사원)
                    2018.10 - 2020.02 (1년 5개월)`,
            text: `
            1. 안전보건공단 위기탈출안전점검 APP (2018.03 ~ 2019.03)
            - 기술스택 : HTML, CSS, Javascript, JSP
            - UI&UX 디자인 & 퍼블리싱
            \n
            2. 안전보건공단 현장배송서비스 WEB (2019.03 ~ 2019.07)
            - 기술스택 : HTML, CSS, Javascript, JSP
            - UI&UX 디자인 & 퍼블리싱
            \n
            3. 삼성전자 중장비 APP / CMS WEB (2019.08 ~ 2019.12)
            - 기술스택 : HTML, CSS, Javascript, JSP
            - UI&UX 디자인 & 퍼블리싱
            \n
            4. 솔트웍스 프로젝트 매니지먼트 WEB (2019.10 ~ 2020.02)
            - 기술스택 : HTML, CSS, Javascript, JSP
            - UI&UX 디자인 & 퍼블리싱
            \n
            5. 안전보건공단 위기탈출안전보건 APP (2019.12 ~ 2020.02)
            - 기술스택 : HTML, CSS, Javascript, JSP
            - UI&UX 디자인 & 퍼블리싱`,
            link: "",
            imgPath: "",
        },
        { date: "20221124", title: "", text: "Test !", imgPath: "",link: "", type:""},
        {
            date: "20221210",
            type: "introduction",
            title: "소개글",
            text:  `더 나은 서비스를 위해 더 나은 개발자가 되고자 노력합니다.
                    성장하는 재미를 즐깁니다.`,
            link: "",
            imgPath: "",
        },
        {
            date: "20221211",
            type: "introduction",
            title: "기록은 곧 자산이 된다!",
            text:  `입사 후 꾸준히 업무일지를 작성했다. 학원 다닐때에도 그날 그날 배운걸 블로그에 정리하던 습관이 있었기 때문에 업무일지도 자연스레 쓰게 됐다. 
            주로 맡은 업무의 기능 단위로 작성하고 해당 기능을 개발하면서 생각한 플로우, 참고한 레퍼런스, 중요한 기능 설명, 개발하면서 겪은 어려운 점과 그걸 어떻게 해결했는지에 대한 과정을 기록 한다. 
            이렇게 작성해두면 나중에 내가 개발했던 기능들을 다시 봐야할 때 업무일지를 참고하여 금방 파악하기가 쉽고 중요한 기능들을 잊지 않고 재사용 할 수 있다.`,
            link: "",
            imgPath: "/img/introduction/introduction_01.png",
        },
        {
            date: "20221211",
            type: "introduction",
            title: "TIL & 회고록 작성하기",
            text:  `개발자는 죽기전까지도 공부를 해야 한다고 하던가.. 그만큼 개발 트렌드를 놓쳐선 안되는 것도 있다. 나는 뭔가 공부하고 깨달은게 있을때 마다 회고록을 작성했다. 회고록을 작성하면 좋은 점은 내가 이만큼 공부했구나, 내가 이만큼 성장했구나를 볼 수 있고 성취감 덕분에 더 열심히 하게 된다는 것!`,
            link: "https://velog.io/@doobyeol/series",
            imgPath: "/img/introduction/introduction_02.png",
        },
        {
            date: "20221211",
            type: "introduction",
            title: "아무리 검색해도 안나오는 에러들은 꼭 기록을 해두어야 한다. 그리고 자주 겪는 에러들도 마찬가지!",
            text:  `에러의 발생 원인과 해결 방법을 기록하면 나중에 같은 에러를 겪었을 때 바로 해결방법은 안떠오르더라도 아! 이거 겪어본 에러야! 하면서 이전에 기록해둔 블로그와 노션을 참고하여 금방 해결할 수 있었다.`,
            link: "https://velog.io/@doobyeol?tag=error",
            imgPath: "/img/introduction/introduction_03.png",
        },
        {
            date: "20221211",
            type: "introduction",
            title: "결과보다는 경험의 가치를 아는 사람이 되고 싶다!",
            text:  `이유없이 나를 좋아해주고 응원해주는 가족, 친구, 동료들에게 무엇이든 잘 해내는 모습으로 보답하고 싶었다. 나도 그들에게 좋은 영향을 주고 싶었던 마음이 컸다.
            하지만 점점 완벽을 추구하게 되면서, 스스로 많은 부담을 지게 했던 것 같다.
            그래서 이제는 그런 욕심 모두 내려놓고! 결과보다 중요한 것은 언제나 경험이라는 것을 믿기 시작했다.
            경험을 두려워하지 않고 즐긴다면 무엇이든 해낼 수 있다.
            그리고 그런 긍정적인 에너지들이 나를 믿어주고 지켜봐주는 이들에게도 분명 좋은 영향을 줄 수 있을 것이라 믿는다.
            그래서 나는 결과보다 경험의 가치를 아는 사람이 되고자 한다!`,
            link: "",
            imgPath: "/img/introduction/introduction_04.png"
        },
        {
            date: "20221211",
            type: "introduction",
            title: "서른살 전에 풀스택 개발자가 되자!",
            text:  `처음 개발자가 되겠다고 다짐했을 때 서른 전에 풀스택 개발자가 되자는 당찬 포부를 가졌었는데 (ㅋㅋ) 풀스택 개발자.. 그거 그렇게 쉽게 되는게 아니더라.. 그래서 차근차근 단계를 밟아 나아가는 중이다. 
            퍼블리셔 출신이라 그런지 내게 프론트 개발자 할거냐고 물어보는 분들이 계셨는데 사실.. 프론트보다 백엔드가 좀 더 즐겁다. 
            화면을 동적으로 개발하는 프론트는 눈으로 보는 재미가 있지만, 그에 비해 백엔드는 추상적이고 어렵다는 느낌이 강했다.
            그래서 백엔드 공부를 집중적으로 시작했는데, 추상적이라고 느꼇던 개념들이 눈에 보이기 시작했다. 점점 더 알아갈수록, 어렵다고 느꼈던 벽이 허물어지고 얻게 되는 성취감들이 정말 짜릿한 것 같다..!`,
            link: "",
            imgPath: "/img/introduction/introduction_05.png"
        },
        {
            date: "20221211",
            type: "introduction",
            title: "Hello, New World!",
            text:  `세계선배 잘 지내시나요?.. 아프리카는 덥고 모기도 많죠?.. 건강 잘 챙기시구요..
            세계선배 저.. 개발자가 되었어요.
            선배가 옆에서 백엔드는 말이야..프론트는 말이야..하며 알려주셨을때 정말 재밌었는데,
            저 개발공부 열심히 해서 이제 진짜 개발자가 되었어요.
            저에게 새롭고 재밌는 세상을 알려주셔서 감사합니다. 항상 마음 속에 이 은혜와 감사함이 둥둥 떠다녀요.
            정말 정말 감사드리고, 늘 행복하시길 바랍니다! 🌻`,
            link: "",
            imgPath: "",
        },
        {
            date: "20221211",
            type: "project",
            title: `[ Portfolio ] 개인 포트폴리오 사이트
                    2022.11 - 2022.12 (1개월)`,
            text:  `
                기술스택 : 
                - FRONT : Vite + Vue3, Typescript, CSS

                Github : https://github.com/doobyeol/portfolio
            `,
            link: "https://doobyeol.github.io/",
            imgPath: "/img/project/portfolio.png",
        },
        {
            date: "20221211",
            type: "project",
            title: `[ LoL Ground ] LoL Members 전적 간편 조회
                    2022.11 (1개월)`,
            text:  `
                토이프로젝트 Front Devlop

                기술스택 : 
                - FRONT : Vite + Vue3, Vuetify, Javascript

                Github : https://github.com/doobyeol/lol-ground/tree/doobyeol
            `,
            link: "https://returntrue.tk/",
            imgPath: "/img/project/lol_ground.png",
        },
        {
            date: "20221211",
            type: "project",
            title: `[ 행복박물관 ] 행복을 전시하는 행복박물관 DEMO
                    2022.07 - 2022.10 (3개월)`,
            text:  `
                토이프로젝트

                기술스택 : 
                - BACK : Spring, JAVA, My Batis, Swagger, Spring Security, JWT, RESTful API, Spring Cloud Config, AWS EC2
                - FRONT : Vue2, Vuetify, Javascript

                2023년 JPA, Vue3, Typescript로 마이그레이션 예정

            `,
            link: "https://github.com/doobyeol/happiness-museum",
            imgPath: "/img/project/happiness_museum.png",
        },
        {
            date: "20221211",
            type: "project",
            title: `[ 서울메이트 ] 실시간 채팅 웹 서비스
                    2021.04 - 2021.05 (1개월)`,
            text:  `
                    비트캠프 웹개발자 양성과정 파이널 개인 프로젝트

                    1. 기술스택 : 
                    - BACK : Node.js, Oracle, 
                    - FRONT : EJS, HTML5 , CSS3, JavaScript

                    2. 구현 기능
                    - Node 서버 구축 및 DB연동
                    - 유저간의 매칭이 되었을때 채팅 활성화
                    - 새로운 메세지 수 시각적 알림
                    - 최신 메세지 실시간 미리보기
                    - 메세지 도착 시간을 현재 시각 기준으로 방금전, n분전, n시간전, n일전...으로 표기
                    - 신고하기 기능으로 관리자가 채팅 내용 모니터링
                    - 채팅방 나가기

                    Github : https://github.com/doobyeol/SeoulMateChat
                    기능시현 : https://www.youtube.com/watch?v=pWZ4pJBUc0c
                    프로젝트 후기 : https://blog.naver.com/doobyeol

            `,
            link: "https://github.com/doobyeol/SeoulMate",
            imgPath: "/img/project/seoulmate_02.png",
        },
        {
            date: "20221211",
            type: "project",
            title: `[ 서울메이트 ] 쉐어하우스 & 하우스메이트 매칭 플랫폼
                    2021.04 - 2021.05 (1개월)`,
            text:  `
                    비트캠프 웹개발자 양성과정 파이널 팀프로젝트

                    1. 기술스택 : 
                    - BACK : JAVA, JSP, Spring, My Batis, Oracle, Node.js, 
                    - FRONT : EJS, HTML5 , CSS3, JavaScript
                    - ETC : Kakao Map, Git

                    2. 담당 구현 기능
                    - Main 페이지 전체 기능 
                    (검색, 매칭 미리보기, 내주변 쉐어하우스 미리보기)
                    - 로그인 & 로그아웃
                    - 카카오맵 API 클러스터러, 오버레이 기능
                    - 하우스메이트 조회 화면 페이징, 검색필터
                    - Node.js 실시간 채팅 서버 구축
                    (실시간 채팅, DB연동, 채팅방 나가기, 신고하기 기능)
                    - 프로젝트 전체 UI설계 & 퍼블리싱

                    Github : https://github.com/doobyeol/SeoulMate
                    기능시현 : https://youtu.be/XGxMIWEITew
                    프로젝트 후기 : https://blog.naver.com/doobyeol

            `,
            link: "https://github.com/doobyeol/SeoulMate",
            imgPath: "/img/project/seoulmate_01.png",
        },
    ]);

    const activeTab = ref('introduction');
    const moveTab = (typeNm: string) => {
        activeTab.value = typeNm;
    }

    function getTodayDate() {
        let today = new Date();
        const year = today.getFullYear();
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ("0" + today.getDate()).slice(-2);

        return `${year}${month}${day}`;
    }

    const getPostList = async () => {
        if (timelineList.value.filter((content) => content.type == 'blog').length > 0) {
            return
        }
        let url = 'https://proxy.cors.sh/https://v2.velog.io/graphql';
        const data = JSON.stringify({
            query: `
                query Posts($cursor: ID, $username: String, $temp_only: Boolean, $limit: Int) {
                    posts(cursor: $cursor, username: $username, temp_only: $temp_only, limit: $limit) {
                        id
                        title
                        short_description
                        thumbnail
                        user {
                            username
                            profile {
                                thumbnail
                            }
                        }
                        url_slug
                        released_at
                        updated_at
                        comments_count
                        tags
                        likes
                    }
                }
            `,
            variables: {"username": "doobyeol", "limit": 100},
        });

        try {
            // initPosts();
            const postsResponse = await fetch(url, { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' ,
                    'Origin': 'application/json' ,
                },
                body: data
            } );
            const postsData = await postsResponse.json();
            console.log('########## postsData', postsData.data);
            
            pushPostsResponse(postsData.data.posts);

        } catch (e) {
            console.log(e);
            url = 'https://cors-anywhere.herokuapp.com/https://v2.velog.io/graphql';
            
            try {
                const postsResponse = await fetch(url, { 
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json' ,
                        'Origin': 'application/json' ,
                    },
                    body: data
                } );
                const postsData = await postsResponse.json();
                console.log('########## postsData', postsData.data);
                pushPostsResponse(postsData.data.posts);

            } catch(e) {
                console.log(e);
                timelineList.value.push({
                    date: getTodayDate(),
                    type: "blog",
                    title: `[ 블로그에 놀러오세요! ]`,
                    text: `경험을 기록합니다.`,
                    link: "https://velog.io/@doobyeol",
                    imgPath: "/img/timeline/blog_info.PNG",
                });
            }
        }
    }

    function pushPostsResponse(posts:any) {
        for (const post of posts) {
            timelineList.value.push({
                date: post.released_at,
                type: "blog",
                title: `[ ${post.title } ]`,
                text: `${post.short_description.substr(0, 25)}...`,
                link: "https://velog.io/@doobyeol/" + post.url_slug,
                imgPath: post.thumbnail,
            });
        }
    }

    return {
        timelineList,
        activeTab,
        moveTab,
        fixedArticle,
        getPostList
    }
})