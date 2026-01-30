import "dotenv/config.js";

const PORT = NUMBER(process.env.PORT) || 3000;

async function main() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

main().catch((e) => {
  console.error("Startup error:", e);
  process.exit(1);
});