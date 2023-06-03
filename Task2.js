const fs = require('fs/promises');
const path = require('path');
const os = require('os');
const nodeos = require('node:os');
const readline = require('readline');
const axios = require('axios');

function Task2() {

    console.log('Operating System Information:');
    console.log('Platform:', os.platform());
    console.log('Type:', os.type());
    console.log('Release:', os.release());
    console.log('Hostname:', os.hostname());

    console.log('\nSystem Information:');
    console.log('Architecture:', os.arch());
    console.log('CPUs:', os.cpus().length);
    console.log('Total Memory:', formatBytes(os.totalmem()));
    console.log('Free Memory:', formatBytes(os.freemem()));
    console.log('Uptime:', formatUptime(os.uptime()));

}





function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log2(bytes) / 10);
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}


function formatUptime(seconds) {
    const uptime = {
        day: Math.floor(seconds / 86400),
        hour: Math.floor(seconds / 3600) % 24,
        minute: Math.floor(seconds / 60) % 60,
        second: seconds % 60
    };

    return Object.entries(uptime)
        .filter(([key, value]) => value > 0)
        .map(([key, value]) => `${value} ${key}${value !== 1 ? 's' : ''}`)
        .join(', ');
}




const functionName = process.argv[2];

if (functionName === 'Task2') {

    Task2()  // node Task2.js Task2

}
else {
    console.log('Invalid function name');
}

