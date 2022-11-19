import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import BookItem from "../../components/BookItem";

import { searchBooks } from "../../services";

export const Books = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await searchBooks(search);
    setBooks(books.items);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Buscar un libro"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                variant="outlined"
              />
              <Box my={2}>
                <Button onClick={handleSearch} size="large" variant="contained">
                  Buscar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <BookItem books={books} />
    </Container>
  );
};

export default Books;
