import Svg, { Path, Circle, G, Use } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#2C2C6F"
      viewBox="-45 -20 90 60"
      {...props}
    >
      <Path fill="#FFF" d="M-45-30h90v60h-90z" />
      <Path fill="#F15B25" d="M-45-30h90v20h-90z" />
      <Path fill="#006934" d="M-45 10h90v20h-90z" />
      <Circle r={9.25} />
      <Circle r={8} fill="#fff" />
      <Circle r={1.6} />
      <G id="d">
        <G id="c">
          <G id="b">
            <G id="a">
              <Path d="M0-8l.3 4.814L0-.802l-.3-2.384z" />
              <Circle cy={-8} r={0.35} transform="rotate(7.5)" />
            </G>
            <Use xlinkHref="#a" transform="scale(-1)" />
          </G>
          <Use xlinkHref="#b" transform="rotate(15)" />
        </G>
        <Use xlinkHref="#c" transform="rotate(30)" />
      </G>
      <Use xlinkHref="#d" transform="rotate(60)" />
      <Use xlinkHref="#d" transform="rotate(120)" />
    </Svg>
  )
}

export default SvgComponent
