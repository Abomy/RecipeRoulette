## Prisma

### Run Migration

`npx prisma migrate dev`

####

After pulling to apply any migrations run:
`npx prisma migrate deploy`

### Run Generation

`npm run generate:prisma`

### Studio

`npx prisma studio`

### Storybook

Develop components without needing to put UI into specific state

`npm run storybook`

For added aliases edit .storybook/main.js
Lines 14:

> "'@components': path.resolve(\_\_dirname, '../components'),"
