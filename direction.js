const DIRECTIONS = {

  gaokao: {

    name: "高考学习",

    file: "../data/gaokao.json"

  },

  cet: {

    name: "四六级考研",

    file: "../data/cet.json"

  },

  ielts: {

    name: "雅思托福",

    file: "../data/ielts.json"

  },

  travel: {

    name: "出国旅游",

    file: "../data/travel.json"

  },

  academic: {

    name: "学术专业",

    file: "../data/academic.json"

  }

}

function getCurrentDirection() {

  return (

    localStorage.getItem("zen1th_direction")

    || "ielts"

  )

}

function setCurrentDirection(direction) {

  localStorage.setItem(

    "zen1th_direction",

    direction

  )

}