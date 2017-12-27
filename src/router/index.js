import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeOne from '../pages/HomeOne'
import HomeTwo from '../pages/HomeTwo'
import HomeThree from '../pages/HomeThree'
import HomeFour from '../pages/HomeFour'
import AdmissionsList from '../pages/child/AdmissionsList'
import AdmissionsD from '../pages/child/AdmissionsD'
import Professional from '../pages/child/ProfessionalList'
import ProfessionalD from '../pages/child/ProfessionalD'
import Academic from '../pages/child/Academic'
import Teacher from '../pages/child/Teacher'
import AwardPolicy from '../pages/child/AwardPolicy'
import CampusView from '../pages/child/CampusView'
import Bibliography from '../pages/child/Bibliography'
import PromotionalVideo from '../pages/child/PromotionalVideo'
import VideoD from '../pages/child/VideoD'
import SchoolD from '../pages/child/SchoolD'
import Demo from '../pages/child/Demo'



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            meta:{ navShow: true, ishome: true, title: '首页'},
            components: {
                default: HomeOne,
                a: HomeTwo,
                b: HomeThree,
                c: HomeFour
            },
            children: [
                {
                    path: 'admissions',
                    meta:{ navShow: true, ishome: false, admissions: true, title: '招生快讯'},
                    component: AdmissionsList,
                    children:[
                        {
                            path: 'detail',
                            component: AdmissionsD,
                            meta:{navShow: false, admissions: false, title: '招生快讯详情'},
                            props: (route) => ({ query: route.query.q })
                            
                        }
                    ]
                },
                {
                    path: 'professional',
                    meta:{ navShow: true, ishome: false,professional: true, title: '专业目录'},
                    component: Professional,
                    children:[
                        {
                            path: 'detail',
                            component: ProfessionalD,
                            meta:{navShow: false, professional: false, title: '专业详情'},
                            props: (route) => ({ query: route.query.q })
                            
                        }
                    ]
                },
                {
                    path: 'academic',
                    meta:{ navShow: true, ishome: false,isacademic:true, title: '学院简介'},
                    component: Academic,
                    children:[
                        {
                            path: 'school',
                            meta:{ navShow: false, ishome: false,isacademic:false, title: '学院详情'},
                            component:SchoolD,
                            props: (route) => ({ query: route.query.q })
                        }
                    ]
                },
                {
                    path: 'teacher',
                    meta:{ navShow: false, ishome: false, title: '导师列表'},
                    component: Teacher
                },
                {
                    path: 'awardpolicy',
                    meta:{ navShow: false, ishome: false, title: '奖助政策'},
                    component: AwardPolicy
                },
                {
                    path: 'campusview',
                    meta:{ navShow: false, ishome: false, title: '学校风光'},
                    component: CampusView
                },
                {
                    path: 'bibliography',
                    meta:{ navShow: false, ishome: false, title: '参考书目'},
                    component: Bibliography
                },
                {
                    path: 'video',
                    meta:{ navShow: false, ishome: false,isvideo:true,title: '视频宣传'},
                    component: PromotionalVideo,
                    children:[
                        {
                            path: 'videodetail',
                            meta:{ navShow: false, ishome: false,isvideo:false,title: '视频详情'},
                            component:VideoD
                        }
                    ]
                },
                {
                    path: 'demo',
                    meta:{ navShow: false, ishome: false,isvideo:true,title: '视频宣传'},
                    component: Demo
                }
            ]
        },
        { path: '*', meta:{ navShow: true, ishome: true,title: '首页'},redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    // console.log(to)
    // console.log(from)
    next()
})

export default router;