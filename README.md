[![npm version](https://badge.fury.io/js/emojione-picker.svg)](https://badge.fury.io/js/emojione-picker)

# Emoji Picker

Fork of
[emojione-picker](https://github.com/tommoor/emojione-picker)


I addressed this Issue:
[Add 'frequently used' section](https://github.com/tommoor/emojione-picker/issues/6)

I added another tab for the favourites emoticons, my hypothesis is that a remote web server ([http://localhost:3000](http://localhost:3000) in my example) gives the component an object containing the favourite emoticons.


## Development

##### Install dependencies and use watcher

```
npm install
npm run watch
```

##### Run mockup-server

```
cd /examples/mockup-server
npm install
node mock-server.js
```


Open `examples/index.html` in a browser to see a preview of the picker

## License

[MIT License](http://opensource.org/licenses/MIT)

Emojione is used under the [Creative Commons License (CC-BY 4.0)](http://emojione.com/licensing/) - If you use this component you should also include attribute to Emojione someone within your website or application to satisfy the terms of the license.
