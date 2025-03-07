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
  onClose?: () => void;
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
    <Backdrop>
      <Wrapper $size={size} aria-modal={isActive} className={className} id={id}>
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
  );
};

export default Modal;
