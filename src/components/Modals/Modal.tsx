import { ReactElement, useState } from "react";
import {
  Wrapper,
  Title,
  Subtitle,
  Body,
  Footer,
  ButtonContainer,
  CloseButton,
  Backdrop,
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
  onOutsideClick?: () => void;
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
  const [isActive, setIsActive] = useState(true);

  const onOutsideClick = () => {
    // exit the modal
    setIsActive(false);
  };

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
        >
          <Title>{title.toUpperCase()}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Body>{bodyContent}</Body>
          <Footer $isPresent={footerContentBool}>
            {footerContent}
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
