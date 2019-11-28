import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  padding: 10px;
  width: 80%;
  margin: 20px;
  border: 1px solid #fed330;
  border-radius: 30px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid #1e272e;
    transition: 0.4s;
  }
`;

const DescriptionInput = styled.input`
  width: 80%;
  height: 200px;
  padding: 10px;
  border: 1px solid #fed330;
  border-radius: 30px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid #1e272e;
    transition: 0.4s;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 20px;
  border: 1px solid #fed330;
  border-radius: 11px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid #1e272e;
    transition: 0.4s;
  }
`;

function NewTree() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:3405/trees", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify({ title, description })
    });
    setTitle("");
    setDescription("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Add a tree</h1>
      <TitleInput
        autoFocus
        type="text"
        placeholder="Add the name of the tree"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <DescriptionInput
        type="text"
        placeholder="Add a description of the tree"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <Button>Submit</Button>
    </Form>
  );
}

export default NewTree;
