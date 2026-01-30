import "dotenv/config";

const PORT = NUMBER(process.env.PORT) || 3000;

async function main() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});