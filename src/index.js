const app = require.apply("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on Port 3000");
});