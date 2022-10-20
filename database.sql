-- LOGIN

-- BEGIN TRANSACTION; --this is for Docker

CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email text UNIQUE NOT NULL
);

-- COMMIT; --this is for Docker


-- USERS 
-- BEGIN TRANSACTION; --this is for Docker

CREATE TABLE users (
	id serial PRIMARY KEY,
	name VARCHAR(100),
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);

-- COMMIT; --this is for Docker


-- Test users
-- BEGIN TRANSACTION; --this is for Docker

INSERT into users (name, email, entries, joined ) values ('a', 'a@a.com', 5, '2020-01-01');
INSERT into login (hash, email) values ('hashed-password_here', 'a@a.com');

-- COMMIT; --this is for Docker