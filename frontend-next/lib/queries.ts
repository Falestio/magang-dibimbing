import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query GetNotes {
    notes {
      id
      title
      body
      createdat
    }
  }
`;

export const GET_NOTE = gql`
  query GetNote($id: String!) {
    note(id: $id) {
      id
      title
      body
      createdat
    }
  }
`;

export const ADD_NOTE = gql`
  mutation AddNote($title: String!, $body: String!) {
    addNote(title: $title, body: $body) {
      id
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: String!, $title: String!, $body: String!) {
    updateNote(id: $id, title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: String!) {
    deleteNote(id: $id)
  }
`;
