# Next.js Vulcanos WEB

How Docker works:

1. Create Images using `docker build . -t` command (this reads Dockerfile and generate the image)
2. You can either create containers individualy or use Docker-compose to create and wrap all images at once

To run locally, All 3 images must be already created. Recommended run `Docker-compose` in order to create a container
with all of them wrapped

```
docker-compose up -d
```

- argument -d means **detached** releases the console

## Environment variables setup

Rename file **.env.template** to **.env**

## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
