import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

const BookItem = ({ books }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
      {books.length>0 &&
            books.map((book)=>(
                <Grid item xs={12} sm={4} >
                <Card>
                    <CardMedia
                      component="img"
                      width={200}
                      height={300}
                      image={book.volumeInfo?.imageLinks?.thumbnail}
                    />
                    <CardContent>
                      <Box>
                        <Typography>{book.volumeInfo.title}</Typography>
                      </Box>
                    </CardContent>
                </Card>
                </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default BookItem;
