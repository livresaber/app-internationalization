import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={1500}
      height={1000}
      viewBox="0 0 3 2"
      {...props}
    >
      <Path fill="#009246" d="M0 0h3v2H0z" />
      <Path fill="#fff" d="M1 0h2v2H1z" />
      <Path fill="#ce2b37" d="M2 0h1v2H2z" />
    </Svg>
  )
}

export default SvgComponent
