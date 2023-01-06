
/*DROP TABLE IF EXISTS todolists;
CREATE TABLE todolists (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
                         id INT AUTO_INCREMENT PRIMARY KEY ,
                         name VARCHAR(250) NOT NULL,
                         description TEXT NULL,
                         date DATETIME NULL DEFAULT NULL,
                         finished TINYINT NOT NULL DEFAULT '0',
                         started TINYINT NOT NULL DEFAULT '0',
                         id_todolist INT NOT NULL,
                         foreign key (id_todolist) references todolists(id)
);
*/
DROP TABLE IF EXISTS users;
CREATE TABLE users (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(250) NOT NULL
);
