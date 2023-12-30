import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from "../lib/queries";
import {
  Box,
  Text,
  Heading,
  Container,
  IconButton,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp));
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

type Note = {
  id: string;
  title: string;
  body: string;
  createdat: string;
};

const NotesList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const [deleteNote] = useMutation(DELETE_NOTE, {
    update(cache, { data: { deleteNote } }) {
      cache.modify({
        fields: {
          notes(existingNotesRefs, { readField }) {
            return existingNotesRefs.filter(
              (noteRef: any) => deleteNote !== readField("id", noteRef)
            );
          },
        },
      });
    },
  });

  const handleDelete = async (noteId: string) => {
    try {
      await deleteNote({ variables: { id: noteId } });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data.notes.length === 0) {
    return <Text>Tidak ada catatan</Text>;
  }

  return (
    <div>
      {data.notes.map((note: Note) => (
        <NextLink key={note.id} href={`/note/${note.id}`} passHref>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            mb={4}
            borderRadius="md"
            position="relative"
          >
            <Heading fontSize="xl">{note.title}</Heading>
            <Text mt={4}>{note.body}</Text>
            <Text mt={4} color="gray.600">
              {formatDate(note.createdat)}
            </Text>
            <IconButton
              aria-label="Delete note"
              icon={<DeleteIcon />}
              position="absolute"
              top={2}
              right={2}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                handleDelete(note.id);
              }}
            />
          </Box>
        </NextLink>
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const router = useRouter();
  const [addNote] = useMutation(ADD_NOTE, {
    update(cache, { data: { addNote } }) {
      const existingNotes = cache.readQuery({ query: GET_NOTES });
      cache.writeQuery({
        query: GET_NOTES,
        // @ts-ignore
        data: { notes: [addNote, ...existingNotes.notes] },
      });
    },
  });

  const handleAddNote = async () => {
    try {
      const { data } = await addNote({
        variables: {
          title: "",
          body: "",
        },
      });
      const newNoteId = data.addNote.id;
      router.push(`/note/${newNoteId}`);
    } catch (error) {
      console.error("Error creating a new note:", error);
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={6}
      >
        <Heading fontSize="x-large">Daftar Catatan</Heading>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          onClick={handleAddNote}
        >
          Tambah Catatan
        </Button>
      </Box>
      <NotesList />
    </Container>
  );
};

export default HomePage;
