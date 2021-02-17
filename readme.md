# Imprimatur JavaScript Developer Test

## Install

```bash
npm i
```

## What to do

1. In the src folder there is a search function empty.
2. Your task is to fill the function body to pass all tests written in jest.
3. The idea of this test project is to determine your skill level as a JavaScript developer.
4. The task is to write an object search function that can take an array of data (param data) objects, a search object (param query) and then return an array of results.
5. Please feel free to extend the test, if you would like to dempnstrate extensive knowledge about testing.

## Requirements

1.  Please note the time is not the case for this task, however we estimate, it should not take more then 45 mins to finish it.
2.  Please do not give up, if something is not finish (nobody knows everything), we can always discuss a possible solution.
3.  Please do not stop yourself from google anything, while doing this test project, please feel free to use it. It certainly will not count against you.
4.  Having any doubts or something is not clear for you, please write the comments, so we can discuss it with you, when seeing each other again. The best developers are people, who ask the questions and communicate.
5.  Use all the tools available to you such as IDEs and debuggers as required.
6.  Please try to write a clean code, that does not rely on any third party libraries or frameworks (just javascript).

Search objects are written in Mongo query language. For instance, given this example data object:

```json
[
  {
    "id": 1,
    "objectKey": {
      "settings": true
    }
  },
  {
    "id": 2,
    "objectKey": {
      "settings": false
    }
  }
]
```

You should be able to find any object where "objectKey" contains "settings": true using a query object like this:

```json
{
  "objectKey.settings": true
}
```

You will notice the dot notation in "objectKey.settings". This notation allows you to describe a path to the data you want to match.

Running the above query against the above data array should result in:

```json
[
  {
    "id": 1,
    "foo": {
      "bar": true
    }
  }
]
```

Good luck ;)
