import Vue from 'vue'
import Router from 'vue-router'
import adminlogin from '@/components/admin/login'

import mj_main from '@/components/admin/common/main'
import mj_content from '@/components/admin/common/content'

import mj_question_type from '@/components/testQuestion/questionType'
import readme from '@/components/admin/readme'

// 用户
import mj_user from '@/components/admin/user/user'
// 菜单
import mj_menu from '@/components/admin/menu/menu'
//角色
import mj_role from '@/components/admin/role/role'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: adminlogin
    },
    {
      path: '/content',
      name: 'content',
      component: mj_content
    },
    {
      path: '/question',
      name: 'question',
      component: mj_question_type
    },
    {
      path: '/yhgl',
      name: 'yhgl',
      component: mj_user
    },
    {
      path: '/cdgl',
      name: 'cdgl',
      component: mj_menu
    },
    {
      path: '/jsgl',
      name: 'jsgl',
      component: mj_role
    },
    {
      path: '/readme',
      name: 'readme',
      component: readme
    }
  ]
})
