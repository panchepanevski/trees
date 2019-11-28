import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.article`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.text};
  display: flex;
  justify-content: space-between;
  padding: 13px;
  margin: 20px 10px 10px 10px;
  border: 1px solid #95a5a6;
  border-radius: 30px;
`;

function Tree({ id, title, description }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{id}</div>
      <div>{description}</div>
    </Container>
  );
}

Tree.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Tree;
