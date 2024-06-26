import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#0039a6" d="M0 160h640v320H0z" />
        <Path fill="#d52b1e" d="M0 320h640v160H0z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
