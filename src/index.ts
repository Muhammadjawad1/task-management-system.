import app from "./app";

const PORT: number = 8080;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});