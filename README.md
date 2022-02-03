# Template Node TypeScript

1. Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.

2. Edit your VSCode `settings.json`.

```json
{
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.lintTask.enable": true
}
```

3. Install Dependencies.

```bash
$ yarn
```

4. Create `.env` file for environment variables. `.env-sample` are the required environment variables.
5. Run in **development** mode.

```bash
$ yarn dev
```

## Run in **production** mode.

- without Docker

1. Build the application.

```bash
$ yarn build
```

2. Run.

```bash
$ yarn start
```

- with Docker

1. Build the application.

```bash
$ docker build -t {image_name} .
```

2. Run.

```bash
$ docker run -d -p {machine_port}:{container_port} --name {container_name} {image}
```
