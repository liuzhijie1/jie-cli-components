import LText from './components/LText/index'
import LImage from './components/LImage/index'
import LShape from './components/LShape/index'
import FinalPage from './components/FinalPage/index'

const components = [LText, LImage, LShape, FinalPage]

const install = (app: any) => {
  components.map((component) => {
    app.use(component)
  })
}

export { install, LText, LImage, LShape, FinalPage }

export default {
  install
}
