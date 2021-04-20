  /* eslint-disable */

export default {
  functional: true,
  props: {
    row: Object,
    render:Function
  },
  render:(h,data) => {
    return data.props.render(h,data)
  }
}