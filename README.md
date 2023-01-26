# breadfast

How to start the project

API :
duplicate .env.example to .env ( with good credential )
npx prisma migrate dev --name init
npx prisma generate

npm run watch
pm2 start

Front :
duplicate .env.example to .env ( with good credential )
npx prisma generate
npm run watch
npm run watch:ssr
pm2 start

login : https://codepen.io/Mohuth/pen/QWgrPvp
landing : https://codepen.io/programmercloud/details/bGKKbzx
