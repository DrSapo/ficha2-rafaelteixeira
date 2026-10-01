const http = require("http");

const PORT = 3000;

const cards = [
  { name: "TigerShark", type: "Selva", attack: 750, defense:600  },
  { name: "Star Dragon", type: "Água", attack: 950, defense: 800 },
  { name: "Dark IceLion", type: "Gelo", attack: 850, defense: 700 },
  { name: "UberJackal", type: "Areia", attack: 800, defense: 700 },
  { name: "Xue Hu", type: "Fogo", attack: 750, defense: 550 },
  
  
];
let contagem = cards.length.toString();
const items = cards.map(card => `<li>${card.name}</li>`).join("");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
if (req.url === "/") {

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>DrSapo</h1><p>Tenho: ${contagem} Cartas</p>`);

  return;
}
if(req.url === "/sobre"){

   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
   res.end("<h1>Rafa TGPSIU</h1>");

   return;
}
if (req.url === "/cartas")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
       
        res.end(items);
        return;
    }

if(req.url === "/agora"){
    const now = new Date().toLocaleString("pt-PT");
    res.end(`${now}`);
   return;
}

else{
res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
req.end("</h1>Not Found</h1>");
}
});




server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
