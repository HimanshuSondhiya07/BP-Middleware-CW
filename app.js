const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    const start = Date.now();  // Record the start time
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url} - Request received`);

    res.on('finish', () => {
        const duration = Date.now() - start;  // Calculate duration
        console.log(`[${timestamp}] ${method} ${url} - Processed in ${duration}ms`);
    });

    next();  // Continue to the next middleware or route handler
});

// Test route
app.get('/', (req, res) => {
    res.send('Himanshu Sondhiya');
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
