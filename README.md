# Template Node TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using `nvm`.

```bash
$ nvm use
```

- Install Dependencies.

```bash
$ pnpm install
```

- Create `.env` file for environment variables. `.env-sample` are the required environment variables.
- Run in **development** mode.

```bash
$ pnpm run dev
```

## Run in production mode

- **without Docker:**

- Build the application.

```bash
$ pnpm run build
```

- Run.

```bash
$ pnpm run start
```

- **with Docker:** Download `Docker` in your machine or server.

- Build the application.

```bash
$ docker build -t {image_name} .
```

- Run.

```bash
$ docker run -d -p {machine_port}:{container_port} --name {container_name} {image_name}
```
