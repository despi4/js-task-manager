import express from 'express';
import path from 'path';


export function createApp() {
    const app = express();

    app.get("/health", (req, res) => res.json({ ok: true}));

    return app;
}