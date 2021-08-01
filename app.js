const Hydra = require('hydra-synth')

const hydra = new Hydra({ detectAudio: false })

s0.initCam(1) // initialize a webcam in source buffer s0
src(s0).out(o0) // set the source of o0 to render the buffer containing the webcam
osc(Math.random(), 0.2, 0.8).kaleid(Math.random()).diff(o0).blend(o3).out(o1) // initialize a gradient in output buffer o1, composite with the contents of o0
render(o1) // render o1 to the screen
noise(10).out(o3)
shape(3,0.9)
  .mult(o0)
  .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5)
  .out(o1)