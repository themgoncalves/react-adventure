#!/usr/bin/env node
const { spawn } = require('child_process');
const settings = require('../../configurations/application/settings');

const { host } = settings.ssr.server;
const { port } = settings.ssr.server;

const process = spawn('sh', ['./scripts/server/status.sh', `${host}:${port}`]);
process.stdout.on('data', data => console.log(data.toString()));
process.stderr.on('data', data => console.log(data.toString()));
process.stdout.on('exit', code => console.log(`Exit with code ${code.toString()}`));
