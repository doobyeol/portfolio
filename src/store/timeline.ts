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
            date: "2212011204",
            type: "fix",
            title: 'Skills and Languages',
            text: '',
            link: "",
            imgPath: "",
        },
    );

    const timelineList = ref<Array<ArticleType>>([
        {
            date: "221201210",
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
            date: "221201210",
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
        { date: "2212011024", title: "", text: "Test !", imgPath: "",link: "", type:""},
        {
            date: "2212011023",
            type: "introduction",
            title: "소개글",
            text:  `더 나은 서비스를 위해 더 나은 개발자가 되고자 노력합니다.
                    성장하는 재미를 즐깁니다.`,
            link: "",
            imgPath: "",
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