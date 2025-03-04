CREATE DATABASE IF NOT EXISTS todolist;
USE todolist;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
INSERT INTO `todolist`.`todos`(`id`,`title`,`completed`)VALUES
(1,"Titulo 1",false),
(2,"Titulo 2",false),
(3,"Titulo 3",false);

select * from todolist.todos