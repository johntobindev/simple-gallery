let showOverlay,
    hideOverlay,
    handlePrev,
    handleNext,
    html = ''

const max = 23;

// Create thumbnail elements dynamically
for (let i = 1; i <= max; i++)
  html += `
    <div
      class="thumbnail"
      style="background-image: url('./images/thumbs/zoo-${i}.jpg')"
      onclick="showOverlay(${i})"
    >
      <div class="thumbnail-spacer"></div>
    </div>
  `

document.addEventListener('DOMContentLoaded', () => {
  // Insert thumbnail elements on load
  document.getElementById('container').innerHTML = html

  let selected = 1
  let overlayActive = false

  const overlayElem = document.getElementById('overlay')
  const overlayImageElem = document.getElementById('overlay-image')

  showOverlay = imageNumber => {
    selected = imageNumber
    overlayActive = true
    overlayElem.classList.add('is-active')
    overlayImageElem.src = `./images/compressed/zoo-${imageNumber}.jpg`
  }

  hideOverlay = () => {
    overlayElem.classList.remove('is-active')
    overlayActive = false
  }

  handlePrev = () => {
    if (selected === 1) return
    showOverlay(--selected)
  }

  handleNext = () => {
    if (selected === max) return
    showOverlay(++selected)
  }

  document.onkeydown = e => {
    if (overlayActive) {
      // Left arrow
      if (e.keyCode == '37') handlePrev()
      // Right arrow
      else if (e.keyCode == '39') handleNext()
      // Esc
      else if (e.keyCode == '27') hideOverlay()
    }
  }
})