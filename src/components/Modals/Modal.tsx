import { ReactElement, useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Title,
  Subtitle,
  Body,
  Footer,
  ButtonContainer,
  CloseButton,
  Backdrop,
  FooterContentContainer,
} from "./styles";
import Portal from "../../helpers/Portal/Portal";

interface ModalInterface {
  title: string;
  subtitle?: string;
  size: "s" | "m" | "l";
  bodyContent: ReactElement;
  footerContent?: ReactElement;
  footerButtons?: ReactElement;
  className?: string;
  id?: string;
  onClose?: () => void;
  portalElement?: string;
}

const Modal = ({
  title,
  subtitle,
  size,
  className,
  id,
  bodyContent,
  footerContent,
  footerButtons,
  onClose,
  portalElement,
}: ModalInterface) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      isActive &&
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive]);

  const closeModal = () => {
    setIsActive(false);
    onClose && onClose();
  };

  const footerContentBool = !!footerContent;

  return (
    <Portal id={portalElement ?? "modal"}>
      <Backdrop>
        <Wrapper
          $size={size}
          aria-modal={isActive}
          className={className}
          id={id}
          ref={modalRef}
        >
          <Title>{title.toUpperCase()}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Body>{bodyContent}</Body>
          <Footer $isPresent={footerContentBool}>
            <FooterContentContainer>{footerContent}</FooterContentContainer>
            <ButtonContainer>
              {footerButtons ? (
                footerButtons
              ) : (
                <CloseButton onClick={closeModal}>CLOSE</CloseButton>
              )}
            </ButtonContainer>
          </Footer>
        </Wrapper>
      </Backdrop>
    </Portal>
  );
};

export default Modal;
