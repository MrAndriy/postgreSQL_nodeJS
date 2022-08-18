create TABLE person (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
);
create TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    content VARCHAR,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);