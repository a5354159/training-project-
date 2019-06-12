//试卷管理模块
const groups = {


    questionManger: {
        groupName: "试题管理",
        groupIcon: require("../assets/jichuguanli.png")
    },
    userManger: {
        groupName: "用户管理",
        groupIcon: require("../assets/yonghu.png")
    },
    testManger: {
        groupName: "考试管理",
        groupIcon: require("../assets/jiaoxuekaoshiguanli-icon--copy.png")
    },
    classManger: {
        groupName: "班级管理",
        groupIcon: require("../assets/banjiguanli.png")
    },
    markingManger: {
        groupName: "阅卷管理",
        groupIcon: require("../assets/banjiguanli.png")
    }

};
//每一个管理下面的子模块 路由
const routerConfig = [{
        path: "/login",
        // redirect: "/login", //登录页面
        component: () =>
            import ("../page/login")
    },
    {
        path: "/home",
        component: () =>
            import ("../page/home"), //登陆之后首页
        children: [{
                path: "addQuestion", //添加试题
                component: () =>
                    import ("../page/home/addQuestion"),
                meta: {
                    title: "添加试题",
                    group: "questionManger"
                }
            }, {
                path: "classifyQusetion", //试题分类
                component: () =>
                    import ("../page/home/classifyQusetion"),
                meta: {
                    title: "试题分类",
                    group: "questionManger"
                }
            },

            {
                path: "lookQusetion", //查看试题
                component: () =>
                    import ("../page/home/lookQusetion"),
                meta: {
                    title: "查看试题",
                    group: "questionManger"
                }
            }, {
                path: "addUser", //添加用户
                component: () =>
                    import ("../page/home/addUser"),
                meta: {
                    title: "添加用户",
                    group: "userManger"
                }
            }, {
                path: "userShow", //用户展示
                component: () =>
                    import ("../page/home/userShow"),
                meta: {
                    title: "用户展示",
                    group: "userManger"
                }
            }, {
                path: "addTest", //添加考试
                component: () =>
                    import ("../page/home/addTest"),
                meta: {
                    title: "添加考试",
                    group: "testManger"
                }
            }, {
                path: "listTest", //考试列表
                component: () =>
                    import ("../page/home/listTest"),
                meta: {
                    title: "考试列表",
                    group: "testManger"
                }
            }, {
                path: "classManger", //班级管理
                component: () =>
                    import ("../page/home/classManger"),
                meta: {
                    title: "班级管理",
                    group: "classManger"
                }
            }, {
                path: "classroomManger", //教室管理
                component: () =>
                    import ("../page/home/classroomManger"),
                meta: {
                    title: "教室管理",
                    group: "classManger"
                }
            },
            {
                path: "studentManger", //学生管理
                component: () =>
                    import ("../page/home/studentManger"),
                meta: {
                    title: "学生管理",
                    group: "classManger"
                }
            },
            {
                path: "volumesManger", //待批班级
                component: () =>
                    import ("../page/home/volumesManger"),
                meta: {
                    title: "待批班级",
                    group: "markingManger"
                }
            }
        ]
    }

];
export function getMenuData() {
    const menus = []
    routerConfig[1].children.forEach(val => {
        // 查找改组在menus中是否存在
        let group = menus.find(item => item.groupName === groups[val.meta.group].groupName);
        if (group) {
            group.routes.push({
                path: routerConfig[1].path + '/' + val.path,
                title: val.meta.title
            });
        } else {
            menus.push({
                groupName: groups[val.meta.group].groupName,
                groupIcon: groups[val.meta.group].groupIcon,
                routes: [{
                    path: routerConfig[1].path + '/' + val.path,
                    title: val.meta.title
                }]
            })
        }

    });
    return menus;
}

export default routerConfig