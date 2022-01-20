set NODE_ENV=development
ts-node-dev --respawn --transpile-only src/server.ts
@REM nodemon src/server.js --trace-warnings