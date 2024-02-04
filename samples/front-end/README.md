## Documentation

### Setup

- Install the dependencies for the application.

```bash
npm install
```

- Initialize husky to enable git hooks.

```bash
npx husky install
```

- Start the application.

```bash
npm run dev
```

- If you want to run your project (development-mode) inside docker container, you can use the following commands:

```bash
cd docker/development
docker-compose up --build
```

- Open [project-url](http://localhost:3000) with your browser to see the result.

- If you want to destroy the docker container, you can use the following commands:

```bash
docker-compose down -v
```

- If you want to run tests, you can use the following commands:

```bash
npm run test
```

- If you want to run individual tests, you can use the following commands:

```bash
npm run test src\\<your_path_to_test_case>\\file.spec.tsx
```
