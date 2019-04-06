exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wordList')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('wordList').insert([
        {
          name: 'Template Literals',
          definition:
            'Template literals are string literals allowing embedded expressions.',
          example: '`string text ${expression} string text`',
          description:
            'Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).',
          relevantLinks:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
        },
        {
          name: 'Regular Expressions',
          definition:
            'A regular expression is a sequence of characters that define a search pattern.',
          example: '(/[aeiou]/ig).test("Hello")',
          description:
            'In JavaScript, you can use the RegExp.prototype.test(), RegExp.prototype.exec(), and String.prototype.match(), to test if a regular expression matches any part of a string and to return the matching substrings.',
          relevantLinks:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp'
        },
        {
          name: 'Closure',
          definition:
            'A closure is the combination of a function and the lexical environment within which that function was declared.',
          example:
            'Closures allow us to access a variable in an inner function that was declared in the parent function.',
          description:
            "Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.",
          relevantLinks:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
        },
        {
          name: 'Object',
          definition:
            'Object refers to a particular instance of a class, where the object can be a combination of variables, functions, and data structures.',
          example: 'const object1 = {a: 1,b: 2,c: 3};',
          description:
            ' The object-oriented approach is an evolution of good design practices that go back to the very beginning of computer programming.',
          relevantLinks: [
            'https://en.wikipedia.org/wiki/Object_(computer_science)',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
          ]
        },
        {
          name: 'Function',
          definition:
            'A function is a group of statements that together perform a task',
          example:
            "function functionName(theObject) {theObject.name = 'Jessica';}",
          description:
            'Function-oriented design relies on identifying functions which transform their inputs to create outputs.',
          relevantLinks:
            'https://developer.mozilla.org/en-US/docs/Glossary/Function'
        }
      ]);
    });
};
