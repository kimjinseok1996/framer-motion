import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1248px) {
    max-width: 90%;
    padding: 0;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
