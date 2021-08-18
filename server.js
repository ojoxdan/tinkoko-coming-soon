const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) =>{
    return res.json({
        yes:"no"
    })
}
);
const PORT = 9001 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT=${PORT}`);
});
