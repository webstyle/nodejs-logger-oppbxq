### Installation
Project requires Node.js x18 version or you can use nvm, project has `.nvmrc` file.

To install nodejs version use this command:
```bash
nvm use
```

Install dependencies:
```bash
npm install
```

Build command:
```bash
npm build
```

Run command:
```bash
npm start
```
or 
```bash
node dist/index.js --input ./app.log --output ./errors.json
```

I prepared extra script to generate large log file. To create large log file run following command:
```bash
node populateData.js
```
This command creates a new `app.large.log` file with size `2.78GB` and you can try to parse this file by running following command:
```bash
node dist/index.js --input ./app.large.log --output ./errors.json
```