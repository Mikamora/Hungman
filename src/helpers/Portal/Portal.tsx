import { ReactElement } from "react";
import { createPortal } from "react-dom";

interface PortalElementProps {
  Element: ReactElement;
  children?: never;
  id: string;
}

interface PortalChildrenProps {
  children: ReactElement;
  Element?: never;
  id: string;
}

type PortalProps = PortalElementProps | PortalChildrenProps;

const Portal = ({ Element, children, id }: PortalProps) => {
  const portalElement = document.getElementById(id);
  return portalElement ? (
    createPortal(Element ?? children, portalElement)
  ) : (
    <>{children}</>
  );
};

export default Portal;
