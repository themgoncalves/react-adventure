#!/usr/bin/env node
const { spawn } = require('child_process');
const colors = require('colors/safe');
const settings = require('../../configurations/application/settings');

const { host } = settings.ssr.server;
const { port } = settings.ssr.server;

/**
 * Cleaning the output folder
 */
function CleanOutputFolder() {
  console.log('Cleaning the previous build...');
  const clean = spawn('sh', ['./scripts/tasks/clean.sh', settings.ssr.server.staticFilesPath]);
  clean.stdout.on('data', data => console.log(data.toString()));
  clean.stderr.on('data', data => console.log(data.toString()));
  clean.on('exit', (code) => {
    console.log('Done!');
    StartServer();
  });
}

/**
 * Starting the Server
 */
function StartServer() {
  console.log(colors.green('Starting the server...'));
  const process = spawn('sh', ['./scripts/server/start.sh', (settings.ssr.enabled ? 'ssr' : 'csr'), host, port]);
  process.stdout.on('data', data => console.log(data.toString()));
  process.stderr.on('data', data => console.log(data.toString()));
  process.on('exit', (code) => {
    console.info(colors.blue('Connection to the server has been lost'));
    if (code > 0) {
      console.error(colors.red(`Exit with error: code ${code.toString()}`));
    } else {
      console.log(colors.yellow(`Exit without error`));
    }
  });
}

CleanOutputFolder();
