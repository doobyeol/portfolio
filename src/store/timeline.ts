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
            text: `
                임시 오픈 ! 개발중 입니다.
            `,
            link: "",
            imgPath: "",
        },
    );

    const timelineList = ref<Array<ArticleType>>([
        {
            date: "2212011023",
            type: "career",
            title: "",
            text: "career test !",
            link: "",
            imgPath: "",
        },
        // {
        //     date: "2212011023",
        //     type: "blog",
        //     text: "입사 1주년 회고록을 써봤어요!",
        //     link: "https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고",
        //     imgPath: "/img/timeline/221130.png",
        // },
        { date: "2212011024", title: "", text: "Test !", imgPath: "",link: "", type:""},
        {
            date: "2212011023",
            type: "project",
            title: "",
            text: "프로젝트!",
            link: "",
            imgPath: "",
        },
    ]);

    const postList = ref<Array<ArticleType> | []>([]);


    const activeTab = ref('career');
    const moveTab = (typeNm: string) => {
        activeTab.value = typeNm;
    }

    const getPostList = async () => {
        const data:any = {
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
        };

        try {
            const postsResponse = await fetch('https://cors-anywhere.herokuapp.com/https://v2.velog.io/graphql', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' ,
                    'Origin': 'application/json' ,
                    },
                body: JSON.stringify(data)
            } );
            const postsData = await postsResponse.json();

            for (const post of postsData.data.posts) {
                console.log('post : ', post);
                timelineList.value.push({
                    date: post.released_at,
                    type: "blog",
                    title: `[ ${post.title } ]`,
                    text: `${post.short_description.substr(0, 25)}...`,
                    link: "https://velog.io/@doobyeol/" + post.url_slug,
                    imgPath: post.thumbnail,
                });
            }

            
            // return postsData.data;
            console.log('### postsData : ', postsData);
        } catch (e) {
            console.error(e);
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