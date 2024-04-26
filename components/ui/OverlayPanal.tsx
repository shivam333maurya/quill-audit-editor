import { IOverlayPanalPropsType } from "@/utils/interfaces/props-interfaces";

function OverlayPanal(props: IOverlayPanalPropsType) {
  const { children, className = "", showPanal = true } = props;

  return (
    <div
      className={`overlay-panal h-full bg-[#13161A] rounded-[4px] max-w-[24%] ${className.toString()} min-h-[360px] ${
        !showPanal ? "hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}

export { OverlayPanal };
