import { sql, relations } from "drizzle-orm";
import { text, integer, sqliteTable,   } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  username: text('username').notNull(),
  role: text('role').notNull().default('employee'),
});


export const profile = sqliteTable('user_profile', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  lastname: text('lastname').notNull(),
  about: text('about').notNull(),
  image: text('image').notNull(),
  userId: text('user_id').references(() => users.id),
});


export const userInformation = sqliteTable('user_information', {
  id: text('id').primaryKey().notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
  postal: text('postal').notNull(),
  userId: text('user_id').notNull().references(()=> users.id)
});


export const profileImage = sqliteTable('profile_image', {
  id: text('id').primaryKey().notNull(),
  urlImage: text('url_image'),
  profileId: text('profileId').notNull().references(() => profile.id)
})


export const applyjobs = sqliteTable('applyjobs', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull().default(''),
  email: text('email').notNull().default(''),
  cv: text('cv').notNull().default(''),
  more_info: text('more_info'),
  userId: text('user_id').references(() => users.id),
  jobId: text('job_id')
});


export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey().notNull(),
  salary: integer('salary').notNull(),
  role: text('role').notNull(),
  place: text('place').notNull(),
  description: text('description').notNull(),
  job_type: text('type').notNull(),
  requirements_id: text('requirements_id').notNull(),
  userId: text('user_id').references(()=> users.id)
});



export const jobRequirements = sqliteTable('job_requirements', {
  id: text('id').primaryKey().notNull(),
  education: text('education'),
  job_level: text('job_level'),
  experience: text('experience'),
  duration: text('duration'),
  time_required: text('time_required')
})


export const notifications = sqliteTable('notifications', {
  id: text('id').primaryKey().notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  salary: text('salary').notNull(),
  status: text('status').notNull(),
  jobId: text('job_id').notNull(),
  userId: text('userId').notNull(),
})


// Relations 



// ------------ User Profile Relations ------------ //


// Relation between user and profile
export const userRelations = relations(users, ({ one }) => ({
  profile: one(profile),
}));


// Relation between user and userInformation
export const userInformationRelation = relations(users, ({ one }) => ({
  userInformation: one(userInformation)
}))


// Relation between profile and profileImages
export const profileImagesRelation = relations(profile, ({ one }) => ({
  profileImage: one(profileImage)
}))


// ------------ Jobs Relations ------------ //


export const jobsRelation = relations(jobs, ({ many }) => ({
  applyjobs: many(applyjobs)
}));

export const applyRelations = relations(applyjobs, ({ one }) => ({
    apply: one(jobs, {
      fields: [applyjobs.jobId],
      references: [jobs.id]
    })
}))





