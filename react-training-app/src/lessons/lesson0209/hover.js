import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: crimson;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Hover = () => {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
};

export default Hover;
