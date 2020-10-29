import {
    signallingSelectList,
  } from '@/views/api'


  const state = {
    versions: [], // 平台版本
    courseWareList: [], // 课件指标
    lessonList: [], // 课堂指标
    performanceList: [], // 性能指标
    recordList: [], // 录制指标
    videoList: [], // 音频指标
    timeList: [], // 时间纬度
    roleList: [], // 角色
    signallingSelectList: [], // 信令指标
    classType: null, // 0大班课 2 小班课
  }


  const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    },
    TOGGLE_CLASSTYPE: (state, value) => {
      state.classType = value
    },
  }


  const actions = {
    getSignallingSelectList({ commit }) {
        signallingSelectList().then(res => {
          if (res.code === '0') {
            const data = {
              key: 'signallingSelectList',
              value: res.data,
            }
            commit('CHANGE_SETTING', data)
          }
        })
      },
    toggleClassTypeAction({ commit }, payload) {
        commit('TOGGLE_CLASSTYPE', payload)
    },
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  }
  