// import "dotenv/config";
import createServer from "./server";

const startServer = () => {
    const app = createServer();
    const PORT: number = 5555;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
