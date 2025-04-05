import IconEye from "./EyeSvg.js";
import useHoverVideo from "../hooks/useHoverVideo";

export default function ImageCurser() {
  useHoverVideo();
  return (
    <div className="o-circle js-circle js-circle--invisible">
      <IconEye />
    </div>
  );
}
