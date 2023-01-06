USE breadFast;
CREATE TABLE IF NOT EXISTS customers (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       firstName VARCHAR(250) NOT NULL,
                       lastName VARCHAR(250) NOT NULL,
                       mail VARCHAR(250) NOT NULL,
                       password VARCHAR(250) NOT NULL,
                       phone INT NOT NULL,
                       company_name VARCHAR(250) NOT NULL,
                       date DATE NOT NULL,
                       isdeleted INT NOT NULL


);

CREATE TABLE IF NOT EXISTS products (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(250) NOT NULL,
                       date DATE NOT NULL,
                       price FLOAT NOT NULL,
                       categories VARCHAR (250) NOT NULL,
                       labels VARCHAR (250),
                       description VARCHAR (250),
                       isdeleted INT NOT NULL
);


CREATE TABLE IF NOT EXISTS categories (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(250) NOT NULL,
                       description VARCHAR(250) NOT NULL,
                       isdeleted INT NOT NULL
);

CREATE TABLE IF NOT EXISTS labels (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(250) NOT NULL,
                        description VARCHAR(250) NOT NULL,
                        color VARCHAR(250) NOT NULL,
                        isdeleted INT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       date DATE NOT NULL,
                       item_order_id INT NOT NULL,
                       total_price FLOAT NOT NULL
);


CREATE TABLE IF NOT EXISTS itemOrder (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        order_id INT NOT NULL,
                        product_id INT NOT NULL,
                        quantity INT NOT NULL,
                        total_price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS company (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           name VARCHAR(250) NOT NULL,
                           address VARCHAR(250) NOT NULL,
                           city INT NOT NULL,
                           country INT NOT NULL
);
