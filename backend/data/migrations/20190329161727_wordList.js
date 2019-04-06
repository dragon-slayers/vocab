exports.up = function(knex, Promise) {
  return knex.schema.createTable('wordList', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl.text('definition');

    tbl.text('example');
    tbl.text('description');
    tbl.text('relevantLinks');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wordList');
};
