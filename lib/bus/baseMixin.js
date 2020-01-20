import bus from "./index"

export const baseMixin = {
  created() {
    this.onEvents()
  },
  beforeDestroy() {
    this.offEvents()
  },
  methods: {

    onEvents() {
      if (this.eventList != undefined) {
        this.eventList.forEach(eventObj => {
          bus.$on(eventObj.event, eventObj.fun)
        })
      }
    },

    offEvents() {
      if (this.eventList != undefined) {
        this.eventList.forEach(eventObj => {
          bus.$off(eventObj.event)
        })
      }
    },
  }
}