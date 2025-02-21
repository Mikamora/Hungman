import { ReactElement, useState } from "react";
import { Wrapper, Title, Subtitle, Body, Footer, ButtonContainer, BackButton } from "./styles";

interface ModalInterface {
    title: string;
    subtitle?: string;
    size: "s" | "m";
    bodyContent: ReactElement;
    footerContent?: ReactElement;
    footerButtons?: ReactElement;
    className?: string;
    id?: string;
    onOutsideClick?: () => void;
}

const Modal = ({ title, subtitle, size, className, id, bodyContent, footerContent, footerButtons } : ModalInterface) => {

  const [isActive, setIsActive] = useState(false);

  const onOutsideClick = () => {
    // exit the modal
    setIsActive(false);
  };

  return (
    <Wrapper $size={size} className={className} id={id}>
      <Title>{title.toUpperCase()}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Body>{bodyContent}</Body>
      <Footer>{footerContent}<ButtonContainer>{footerButtons ? footerButtons : <BackButton>BACK</BackButton>}</ButtonContainer></Footer>
    </Wrapper>
  );
};

export default Modal;
