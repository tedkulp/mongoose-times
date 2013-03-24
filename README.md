mongoose-times - Customizable timestamp keys for [Mongoose](https://github.com/LearnBoost/mongoose)
==============

[![Build Status](https://secure.travis-ci.org/nicholasconfer/mongoose-times.png?branch=master)](https://travis-ci.org/nicholasconfer/mongoose-times)

Plugin for [Mongoose](https://github.com/LearnBoost/mongoose) that adds `createDate` and `lastUpdateDate` date properties to your Schema.  The property names `createDate` and `lastUpdateDate` can be customized and the properties automatically generate timestamps when saving a document in mongoose.

## Installation

`npm install mongoose-times`

## Usage

Below are [CoffeeScript](https://github.com/jashkenas/coffee-script) and Javascript Examples

The examples below create a message model that will include `createDate` and `lastUpdateDate` properties in their schema.  Those properties will have timestamps that are automatically generated and updated when you save your document.

```CoffeeScript
mongoose = require "mongoose"
timestamps = require "mongoose-times"

ExampleMessageSchema = new Schema {
  message: String
}

ExampleMessageSchema.plugin timestamps

exampleMessage = mongoose.model "ExampleMessage", ExampleMessageSchema
```

```Javascript
var mongoose = require("mongoose"),
    timestamps = require("mongoose-times");

var ExampleMessageSchema = new Schema({
  message: String
});

ExampleMessageSchema.plugin(timestamps);

var exampleMessage = mongoose.model("ExampleMessage", ExampleMessageSchema);
```

## License

(The MIT License)

Copyright (c) 2013 Nicholas Confer &lt;nicholasconfer@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.