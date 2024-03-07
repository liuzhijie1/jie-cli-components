import { mapValues } from "lodash-es";

export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // postiion and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps = {
  // basic props - font styles
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

export const imageDefaultProps = {
  imageSrc: '',
  ...commonDefaultProps
}

export const componentsDefaultProps = {
  'l-text': {
    props: {
      text: '正文内容',
      ...textDefaultProps,
      fontSize: '14px'
    }
  },
  'l-image': {
    props: {
      ...imageDefaultProps
    }
  }
}

export const transformToComponentProps = (props) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
}

export default componentsDefaultProps