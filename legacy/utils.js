
const checkPointCollision = (pointX, pointY, boxPos, boxSize) => {
  if (
    pointX > boxPos.x - boxSize.x / 2 &&
    pointX < boxPos.x + boxSize.x / 2
  ) {
    if (
      pointY > boxPos.y - boxSize.y / 2 &&
      pointY < boxPos.y + boxSize.y / 2
    ) {
      return true
    }
  }

}

const mouseButtonHandler = (mouse, button, clickCallBack = {}, hoverCallBack = {}) => {
  mouse.click = event => {
    const position = mouse.position
    // Check if the mouse is clicked on the button
    if (checkPointCollision(position.x, position.y, button.position, button.scale)) {
      clickCallBack()
    }
  }
  mouse.mousemove = event => {
    const position = mouse.position
    // Check if the mouse is hovering over the button
    if (checkPointCollision(position.x, position.y, button.position, button.scale)) {
      hoverCallBack(true)
      return
    }
    hoverCallBack(false)
  }
}

export default mouseButtonHandler
