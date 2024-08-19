import { useState } from "react";
import styled from "styled-components";
import Hover from "./hover";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "green" : "gray")};
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};
  transition: background-color 0.3s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ConditionalStyledComponent = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Container>
      <Button isActive={isActive}>{isActive ? "Active" : "Inactive"}</Button>
      <Hover />
    </Container>
  );
};

export default ConditionalStyledComponent;
