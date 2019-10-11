-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-10-10 09:17:57.277

-- tables
-- Table: Categories
CREATE TABLE Categories (
    Categories_id integer NOT NULL CONSTRAINT Categories_pk PRIMARY KEY,
    Name text NOT NULL
);

-- Table: Comments
CREATE TABLE Comments (
    Comments_id integer NOT NULL,
    Text text NOT NULL,
    Persons_Persons_id integer NOT NULL,
    Posts_Posts_id integer NOT NULL,
    Posts_Type text NOT NULL,
    CONSTRAINT Comments_Persons FOREIGN KEY (Persons_Persons_id)
    REFERENCES Persons (Persons_id),
    CONSTRAINT Comments_Posts FOREIGN KEY (Posts_Posts_id)
    REFERENCES Posts (Posts_id)
);

-- Table: Followers
CREATE TABLE Followers (
    Follower_id integer NOT NULL,
    Followed_id integer NOT NULL,
    Date date NOT NULL
);

-- Table: Persons
CREATE TABLE Persons (
    Persons_id integer NOT NULL CONSTRAINT Persons_pk PRIMARY KEY,
    Image text NOT NULL,
    Role text NOT NULL,
    Username text NOT NULL,
    Email text NOT NULL,
    Password text NOT NULL,
    Tokens text NOT NULL,
    First_Name text NOT NULL,
    Last_Name text NOT NULL,
    Bio text NOT NULL,
    Other_Details text NOT NULL
);

-- Table: Posts
CREATE TABLE Posts (
    Posts_id integer NOT NULL CONSTRAINT Posts_pk PRIMARY KEY,
    Type text NOT NULL,
    Title text NOT NULL,
    Date date NOT NULL,
    Embedded_Link text NOT NULL,
    Text text NOT NULL,
    Categories_Categories_id integer NOT NULL,
    Persons_Persons_id integer NOT NULL,
    CONSTRAINT Posts_Categories FOREIGN KEY (Categories_Categories_id)
    REFERENCES Categories (Categories_id),
    CONSTRAINT Posts_Persons FOREIGN KEY (Persons_Persons_id)
    REFERENCES Persons (Persons_id)
);

-- Table: Posts_Images
CREATE TABLE Posts_Images (
    Posts_images_id integer NOT NULL,
    Image_names integer NOT NULL,
    Posts_posts_id integer NOT NULL,
    CONSTRAINT "Blogs-Pictures..._Posts" FOREIGN KEY (Posts_posts_id)
    REFERENCES Posts (Posts_id)
);

-- Table: Upvotes
CREATE TABLE Upvotes (
    Upvote integer NOT NULL CONSTRAINT Upvotes_pk PRIMARY KEY,
    Posts_Posts_id integer NOT NULL,
    CONSTRAINT Upvotes_Posts FOREIGN KEY (Posts_Posts_id)
    REFERENCES Posts (Posts_id)
);

-- End of file.
