

### To install (I used pnpm )

```bash
pnpm install
pnpm run dev

# or
npm install
npm run dev

# or

yarn install
yarn dev
```
The api to write a new file is set up at the /new page.

While working locally from both "next dev" and "next start" I end up at http:localhost:3000 and everything works smooth. My api `pages/api/index.js` responds with the body from the form's textarea at the `pages/new` page and writes it to /`api/newfiles/file` where another part of my application is expecting it. (`/api/newfiles/file` becomes essentially a script file that doesnt have an extension.) This is perfect! however, I cant seem to get the file written to the `/api/newfiles` folder (or any other folder for that matter with fs.writeFileSync) when I am deployed live to Vercel. 

I was also hoping to use shell-js to fire off a shell script `script.sh`)
So i have really been banging my head trying to figure this one out!

here is the error I am getting while deployed live.

I have been banging my head on this for a while now and could really use some help! Thanks in advance y'all.