import * as S from "./styles";

export type ButtonProps = {
  children: string;
  disabled?: boolean;
};

export const Button = ({ children, disabled = false }: ButtonProps) => (
  <S.Wrapper disabled={disabled}>{children}</S.Wrapper>
);
