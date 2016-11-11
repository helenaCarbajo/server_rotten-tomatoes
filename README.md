
## Rotten Tomatoes
In this exercise you will get started with a simple node application. The application will read from two files; one JSON file and one XML-file.

The files contains famous movie titles and some metadata about those movies. You are supposed to write an application that reads the data from the files and calculates the average rating of the movies. The data in the json-file stems from [IMDB](http://www.imdb.com/) whereas the xml-file stems from [Rotten Tomatoes](http://www.rottentomatoes.com/). One average is calculated for the Imdb data and one average for the Rotten tomatoes data. (The focus of this exercise is promises and callbacks, not calculating stuff)

Lets get started!

### Getting started guide
Before you begin, make sure you have an laboratory environment set up according to your course specification.

1. Start out by creating a package.json identifying your project. (Tip: `npm init`).
2. Create an app.js file in the root directory. (`touch app.js`)
3. Create an directory called "lib". (`mkdir lib`)
4. Create an directory in the lib-folder called "movies" (`mkdir lib/movies`)
5. Create an file called movieParser.js  in the lib directory (`touch lib/movieParser.js`)
6. Export a function from the movieParser.js and require it in app.js. Add `console.log("Hello World");` to the function in movieParser. Call the function from app.js and run the application using `node app.js`. If the console greets you with "Hello World" you are good to go. Otherwise, debug!
7. Copy the [json-file](movies.json) and the [xml-file](movies.xml) into the folder `./lib/movies`:
  * `wget -O ./lib/movies/movies.xml 'https://raw.githubusercontent.com/CS-LNU-Learning-Objects/the-node-platform-exercise-rotten-tomatoes/master/movies.xml'`
  * `wget -O ./lib/movies/movies.json 'https://raw.githubusercontent.com/CS-LNU-Learning-Objects/the-node-platform-exercise-rotten-tomatoes/master/movies.json'`
8. Find an npm-package that can convert xml to javascript objects. ([xml2js](https://www.npmjs.com/package/xml2js))
9. Add the package to your project. (`npm install xml2js --save`)

Now you are good to go.

In this exercise the main goal is to train your skills in handling callbacks and promises. The recommended path to follow is, therefore:

1. Solve the exercise using the fs-module (`var fs = require("fs");`) to read the content of the files and the module xml2js to convert the XML-content to js.
2. Wrap the fs-callback-interface behind a promise-module. I.e. create a module called `fs-promise.js` with functions returning promises. Make use of `Promise.all()` to be able to read the xml- and json-files in parallel.
3. Search the [npm library](https://www.npmjs.com/search?q=fs+promise) and discover that some one else already made a [promise wrapper](https://www.npmjs.com/package/fs-promise). Remove your fs-promise.js and use `fs-promise`instead. (`npm install fs-promise --save`)
4. Use the flow control module `co`(`npm install co --save`) together with generator functions and promises for an even slicker program flow.

#### Example use and output:
```shell
vagrant@precise32:/vagrant$ node app.js
Avarage rating IMDB: 9.08
Avarage rating Rotten Tomatoes: 94.8 %
```

### Bonus exercise
Using the built in time measurement tool `console.time("What I am measuring");` and corresponding `console.timeEnd("What I am measuring");` you can measure the execution time of parts of your code. Use that to analyze which parts of your code are the bottlenecks. How could that be avoided?
=======
# node-mongodb-vagrant
This is a boilerplate vagrant solution for students taking the course sevrer based web programming at the Linnaeus University, Kalmar, Sweden

Following stuff will be installed:
* node.js, latest stable (OBS not LTS) version
* npm (along with node.js)
* mongodb - noSQL database, latest version
* redis server - fast in memory server, version 3.0.6

To get this to work, you must have VirtualBox and Vagrant installed. Installers for VirtualBox are available at http://www.virtualbox.org, and installers for
Vagrant are available at http://www.vagrantup.com.

Clone this repo to a folder on your local system and give it a name of your own (my_project in this case)

    git clone https://github.com/1dv023/node-mongodb-vagrant.git my_project

go to that directory and start up the vagrant machine

    cd my_project
    vagrant up

The Vagrantfile will download and install the hashicorp/precise32 vagrant box if you don't
already have it.

After a few minutes, you should have a virtual dev environment with node, npm, mongodb and redis.
The port 8000 on the VM is forwarded to port 8000 on the localhost.

You can test out your environment by ssh'ing into your environment and running the sample script:

    vagrant ssh
    node app.js

## Important note about Installing NPM Packages

There are problems installing npm packages in a vagrant machine running Virtual Box on Windows. This goes for certain packages as "jade" and "express" which are trying to create symlinks during installation

This can cause problems when you're attempting to install certain packages via npm. For
example, the 'jade' and 'express' packages create symlinks during installation.

The best workaround for this is to install node packages in your shared folder with the
--no-bin-links flag, e.g.

    npm install express --no-bin-links

You can also try to install the package as globals if you need to execture the bin-file

    npm install jade -g

This vagrant images is tested on Mac OSX Yosemite with Virtual Box version 5.0.10 and Vagrant version 1.7.4
