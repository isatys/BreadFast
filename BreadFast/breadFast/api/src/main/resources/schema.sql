USE breadFast;

CREATE TABLE IF NOT EXISTS user (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name_role VARCHAR(250) NOT NULL,
                    firstname VARCHAR(250) NOT NULL,
                    lastname VARCHAR(250) NOT NULL,
                    email VARCHAR(250) NOT NULL,
                    password VARCHAR(250) NOT NULL,
                    phone INT NOT NULL,
                    company_name VARCHAR(250) NOT NULL,
                    createdAt DATE NOT NULL,
                    isdeleted BIT NOT NULL
    );

CREATE TABLE IF NOT EXISTS roles (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name_role VARCHAR(250) NOT NULL
    );

CREATE TABLE IF NOT EXISTS products (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       user_id INT NOT NULL,
                       product_name VARCHAR(250) NOT NULL,
                       image VARCHAR(250) NOT NULL,
                       createdAt DATE NOT NULL,
                       price DECIMAL(10, 2) NOT NULL,
                       category_name VARCHAR (250) NOT NULL,
                       label_name VARCHAR (250) NOT NULL,
                       description VARCHAR (250) NOT NULL,
                       isDeleted BIT NOT NULL
);


CREATE TABLE IF NOT EXISTS categories (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       category_name VARCHAR(250) NOT NULL,
                       description VARCHAR(250) NOT NULL,
                       product_name VARCHAR(250) NOT NULL,
                       isDeleted BIT NOT NULL
);



CREATE TABLE IF NOT EXISTS labels (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        label_name VARCHAR(250) NOT NULL,
                        description VARCHAR(250) NOT NULL,
                        color VARCHAR(250) NOT NULL,
                        product_name INT NOT NULL,
                        isDeleted BIT NOT NULL
);


CREATE TABLE IF NOT EXISTS company (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    company_name VARCHAR(250) NOT NULL,
                    address VARCHAR(250) NOT NULL,
                    city VARCHAR(250) NOT NULL,
                    logo VARCHAR(250) NOT NULL,
                    country VARCHAR(250) NOT NULL,
                    user_id INT NOT NULL,
                    createdAt DATE NOT NULL,
                    isDeleted BIT NOT NULL
    );

/*
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
);*/
