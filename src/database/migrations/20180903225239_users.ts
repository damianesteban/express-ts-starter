import * as Knex from 'knex';

exports.up = function (knex: Knex) {
  return knex.schema.createTable('users', (usersTable) => {
    usersTable.increments();

    usersTable.string('email', 250).notNullable().unique();
    usersTable.string('password', 128).notNullable();

    usersTable.timestamp('created_at').notNullable();
  })
  .createTable('projects', (projectsTable) => {

    // Primary Key
    projectsTable.increments();
    // tslint:disable-next-line:max-line-length
    projectsTable.integer('userId').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    projectsTable.string('title').notNullable();
    projectsTable.string('imageUrlString', 250 ).notNullable();


    projectsTable.timestamp('created_at').notNullable();

  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable('users');
  return knex.schema.dropTable('projects'); 
};
