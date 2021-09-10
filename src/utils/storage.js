
export default class Storage {
  constructor () {
    this.item = []
  }

  static getFromStorage = (arrName) => {
    if(localStorage.getItem(arrName) === null) {
      return []
    } else {
      this.item = JSON.parse(localStorage.getItem(arrName))
    }
    return arrName, this.item
  }

  static saveToStorage = (arrName, arr) => {
    localStorage.setItem(arrName, JSON.stringify(arr))
  }
}



