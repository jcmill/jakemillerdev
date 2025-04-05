import IconEye from "./EyeSvg.js";
import useHoverImage from "../hooks/useHoverImage";

export default function ImageCurser() {
  useHoverImage();
  return (
    <div className="o-circle js-circle js-circle--invisible">
      <IconEye />
    </div>
  );
}
