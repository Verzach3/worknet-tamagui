import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: text('id'),
  username: text('username').notNull(),
  role: text('role').notNull().default('employee'),
});


export const profile = sqliteTable('user_profile', {
  id: text('id'),
  name: text('name').notNull(),
  lastname: text('lastname').notNull(),
  about: text('about').notNull(),
  image: text('image').notNull(),
  user: text('user').notNull()
});


export const userInformation = sqliteTable('user_information', {
  id: text('id'),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
  postal: text('postal').notNull(),
});


export const applyjobs = sqliteTable('applyjobs', {
  id: text('id'),
  name: text('name').notNull().default(''),
  email: text('email').notNull().default(''),
  cv: text('cv').notNull().default(''),
  
});