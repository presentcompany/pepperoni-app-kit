
React Native Starter Kit
===

This React Native Boilerplate is based off [Futurice React Native Starter Kit](https://github.com/futurice/pepperoni-app-kit).

The below setup is based on the steps required for a standard Present Company machine. For the complete `Futurice` setup documentation, visit [Setting up the Starter Kit](https://github.com/presentcompany/pepperoni-app-kit/blob/master/docs/SETUP.md).

## Setup

### Installation

Install react-native-cli

```
npm install -g react-native-cli
```

Install npm packages

```
npm install
```

Install Ruby

The starter kit requires `Ruby >= 2.2`. To check your version:

```
ruby -v
```

If you need to upgrade Ruby:

```
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.3.1
rbenv global 2.3.1
ruby -v
```

For iOS package managment we require [COCOAPODS](https://cocoapods.org/):

```
sudo gem install cocoapods
```

Install iOS packages

```
cd ios
pod repo update
pod install
```

Setup .env file in the root directory:

```
cp env.example.js env.js
```

### Build

As it currently stands, `npm start` runs the ios transformation and `hot module replacement` for `React`, however we still require `gulp watch` to run the sass compiler. Due to this, run the following:

```
gulp watch
```

This will run gulp sass and also run the shell command `npm start`. This will cause 2 terminal sessions to run concurrently.

If the above did not build/launch the ios simulator, you can also launch the application by running:

```
react-native run-ios
```

### Things to Note

For this application, to reload the app, press `Cmd + R` in the iOS Simulator, this will reload the `view` components.

To reload the `state` components, click the bottom right white circle to bring up the options and select `Clear state` then `Cmd + R`.

To view the console/JS Debugging, press `Cmd + D`. This will bring up the in-app dev menu. Select `Debug JS Remotely` and go to `http://localhost:8081/debugger-ui`. The `Developer Tools` window on this page will display all your `console.log` outputs.

## Reading Material

This repo encompasses several new features/ideas which are referenced below:

* [ES6 using Babel Compiler](https://babeljs.io/docs/learn-es2015/)
  * React Native uses ES6, which is the latest major update to Javascript and compiled using Babel
* [React](https://facebook.github.io/react/docs/tutorial.html)
	* The `v` in `mvc`
* [React Native](https://facebook.github.io/react-native/docs/tutorial.html)
  * A framework for building native apps using React
* [Redux](http://redux.js.org/)
  * A predictable state container for JavaScript apps
  * In particular - [Using with React](http://redux.js.org/docs/basics/UsageWithReact.html)
* [Architecture - General Setup](https://github.com/futurice/pepperoni-app-kit/blob/master/docs/ARCHITECTURE.md)
* [Architecture - Further reading on Modules/Containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.jiyrz5bc1)
