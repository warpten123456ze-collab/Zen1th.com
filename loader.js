async function loadWordLibrary() {

  try {

    const direction =

      getCurrentDirection()

    const file =

      DIRECTIONS[direction].file

    const response =

      await fetch(file)

    const data =

      await response.json()

    return data.words

  } catch(error) {

    console.error(

      "词库加载失败:",

      error

    )

    return []

  }

}