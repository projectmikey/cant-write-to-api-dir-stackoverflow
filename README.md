

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
Hey everyone! I have been having a tough time writing form input to a seperate file in Javascript. However I have got my application working locally from both "next dev" and "next start" (I end up at http://localhost:3000) and everything works smooth. My api `pages/api/index.js` responds with the body from the form's textarea at the `pages/new` page and writes it to /`api/newfiles/file` where another part of my application is expecting it. (`/api/newfiles/file` becomes essentially a script file that doesnt have an extension.) This is perfect! however, I cant seem to get the file written to the `/api/newfiles` folder (or any other folder for that matter with fs.writeFileSync) when I am deployed live to Vercel. 

I was also hoping to use shell-js to fire off a shell script (`script.sh`)
So with this not working I have really been banging my head around trying to figure it out!

I am not an expert by any means at debugging the console log, but if I had to guess i would say it looks like there is some permissions problems with the file write. I am guessing Vercel is not accessing the filesystem the same way I am from my local environment. I could be way off and just missing something and am open to any suggestions or help!

I posted a repo with a demo I set up! feel free to take a look. 
https://github.com/projectmikey/projectmikey-cant-write-to-api-dir-stackoverflow

Thanks in advance y'all.