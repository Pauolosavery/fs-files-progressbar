
## Waiting for files to download

Have you already done a challenge with [progressbar] (RU) ? If not yet, we highly recommend that you return to it in your spare time!

When the user loads the page, the data from the server arrives at the client asynchronously and unevenly. Let's simulate this behavior using your project's file system. You have to write a progressbar that applies not to a statically set time but to the size of the "loaded" files. Unfortunately, you won't be able to link your web version of the progress bar (frontend / client) with working with files (backend / server) yet, but the progress bar can be implemented in the console form.


### How to synchronize multiple asynchronous functions with each other?
Check out the example below. This is **one of the ways** to synchronize the execution of asynchronous functions.

```js
function asyncFunction(flag, callback) {
  setTimeout(() => {
    callback(flag * 2);
  }, 100);
}

const flags = [1, 2, 3, 4, 5];

const totalCallbacksCount = flags.length;
let callbacksCalledCount = 0;
const results = [];

for (const flag of flags) {
  asyncFunction(flag, (result) => {
    callbacksCalledCount++;
    results.push(result);
    if (callbacksCalledCount === totalCallbacksCount) {
      doSomethingWithFlags(results);
    }
  });
}

function doSomethingWithFlags(results) {
  console.info('Results from all callbacks synchronized:', results);
}
```

### Release 0. Preparing of the files
At this stage, you need to create at least 10 files (the more, the more interesting). Fill these files with different amounts of information. It can be one word or 20 pages - it all depends on your interest. By the way, files can even be pictures but it will be better if they weigh a lot. Remember, the amount of information in each file must be different so that you end up with different file sizes. The files do not need to have the same extension.

**A piece of advice:** create files in separate directories so there is nothing but these files. In fact you have a folder named `files` which contains examples of such files. And be cautious when you try to open large files - your computer might freeze. To create files you can use the command `dd if=/dev/urandom of=filename.txt bs=500M count=1`.

### Release 1. Working with fs. Asynchronous version. 30 minutes
Now go to the directory when you have you text files (`files`) and get there meta information (total number, name, size, creation dates and etc)

You might need the following fs methods:
- fs.readdir(path, callback)
- fs.stat(path, callback)
  - stats.isFile()
  - stats.isDirectory()

In 30 minutes start move on to the next challenge.

### Release 2. Synchronous version

You might need the following fs methods:
- fs.readdirSync(path)
- fs.statSync(path)
  - stats.isFile()
  - stats.isDirectory()
 
### Release 3. Progressbar

Finally, based on the results you got about the file sizes, create your progressbar. Your progressbar will be filled up to the total size of all the available files. If you have a file with a size of 5Kb and the total size of all files is 10Kb, then your download bar should be 50% full after processing such a file (100% * (5Kb / 10Kb))

Make a progressbar in the **Terminal Console**. Not in the browser! It should increase with every new uploaded file.
### Release 4. Why use asynchrony? (optional)

Perhaps you finished the challenge but still did not understand why you needed asynchronous methods. In that case, let's make the app more realistic. When you start the program, an interactive console will open. If you press any button on the keyboard, the console will display: `You pressed the "x" key`. This is a kind of minimal interaction between a user and the app. Now start your file upload. If your implementation is asynchronous, then you may not even feel that the program is trying to load something. But if you use synchronous methods... Then you will be very unhappy that the program does not respond to your intense button presses for so long.

## Conclusion

Asynchrony is a good thing. Learn how to work with it, love it and don't offend it!

[progressbar]: https://github.com/Elbrus-Bootcamp/extra-algorithm-progressbar
