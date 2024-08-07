const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const CameraRouter = jsonServer.router(path.resolve(__dirname, 'db_camera.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 823);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { user: username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;
        // console.log(users, req.body);
        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.sessionid) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);
server.use(CameraRouter);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
