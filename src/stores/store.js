import { defineStore } from 'pinia'

export const useTimeStore = defineStore('store', {
  state: () => {
    return {
      defaultTime: {
        pomodoroSeconds: 1500, //default 25min on start
        get pomodoroMinutes() {
          return this.pomodoroSeconds / 60;
        },
        shortBreakSeconds: 300, //default 5min on start
        get shortBreakMinutes() {
          return this.shortBreakSeconds / 60;
        },
        longBreakSeconds: 1800, //default 30min on start
        get longBreakMinutes() {
          return this.longBreakSeconds / 60;
        }
      },
      activeTab: 'pomodoro'
    }
  },
  actions: {
    changeTimeValues(timeValue, timeType) {
      if(timeType === 'pomodoro') {
        this.defaultTime.pomodoroSeconds = timeValue;
      } else if(timeType === 'shortBreak') {
        this.defaultTime.shortBreakSeconds = timeValue;
      } else if(timeType === 'longBreak') {
        this.defaultTime.longBreakSeconds = timeValue;
      }
    },
    changeActiveTabValue(timeType) {
      this.activeTab = timeType;
    }
  },
  persist: true,
})