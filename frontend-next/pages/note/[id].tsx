import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NOTE, UPDATE_NOTE } from "@/lib/queries";
import {
  Box,
  Input,
  Textarea,
  Container,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const NoteDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const toast = useToast();

  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
    skip: !id,
  });

  const [updateNote, { error: updateError }] = useMutation(UPDATE_NOTE);

  useEffect(() => {
    if (data?.note) {
      setTitle(data.note.title);
      setBody(data.note.body);
    }
  }, [data]);

  const handleSave = async () => {
    try {
      if (id) {
        await updateNote({
          variables: {
            id,
            title,
            body,
          },
        });
        toast({
          title: "Berhasil save",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.log("Error updating note:", error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSave]);

  if (!id) return <p>Waiting for note ID...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box position="relative" pt={10}>
      <IconButton
        aria-label="Back"
        icon={<ArrowBackIcon />}
        position="absolute"
        top={9}
        left={4}
        variant="ghost"
        _hover={{ bg: "gray.200" }}
        onClick={() => router.push("/")}
      />
      <Container maxW="container.md">
        {updateError && <p>Error updating note: {updateError.message}</p>}
        <Box p={0}>
          <Input
            variant="unstyled"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="lg"
            fontWeight="bold"
            fontSize="2xl"
            mb={4}
          />
          <Textarea
            variant="unstyled"
            placeholder="Mulai mengetik..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            minHeight="200px"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NoteDetail;
