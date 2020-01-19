
let uid = 1

export function getUid () {
  return uid++
}

export function setUid (value) {
  uid = value
}

export default {
  getUid,
  setUid
}
