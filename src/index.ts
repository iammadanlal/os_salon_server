//loading modules
import express, { Application, Request, Response } from "express";

//express application
const app: Application = express();
const PORT = 4000 || process.env.PORT;


//Api routes
app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Hello World!",
    });
});

//
try {
    app.listen(PORT, (): void => {
        console.log(`Server is running on localhost:${PORT} to serve for hacktoberfest"`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}