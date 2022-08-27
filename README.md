

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

While working locally with both "next dev" and "next start" everything works smooth. My api responds with the body from the form's textarea at the "/new" page and writes it to /api/newfiles/file where another part of my application is expecting it. (/api/newfiles/file becomes essentially a script file that doesnt have an extension.) This is perfect however however I cant seem to get the file written to the /api folder (or any other folder for that matter with fs.writeFileSync) when I am deployed live to Vercel. Everything works fine with both "next dev" and "next start" at the http://localhost:3000 url. 

I was also hoping to use shell script file with fs notice (script.sh)
here is the error I am getting while deployed live.

I have been banging my head on this for a while now and could really use some help! Thanks in advance y'all.