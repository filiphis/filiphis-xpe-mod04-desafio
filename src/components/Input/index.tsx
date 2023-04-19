import * as S from "./styles";

export type InputProps = {
  type?: string;
  placeholder?: string;
};

export const Input = ({
  type = "text",
  placeholder = "Placeholder Text",
}: InputProps) => (
  <S.Wrapper>
    <S.Input type={type} placeholder={placeholder}></S.Input>
  </S.Wrapper>
);
