CREATE DATABASE business;

-- into business databse

CREATE TABLE adminstration(
    admin_id uuid DEFAULT uuid_generate_v4(),
    admin_name VARCHAR (225) NOT NULL,
    admin_email VARCHAR (225) NOT NULL,
    admin_password VARCHAR (225) NOT NULL,
    PRIMARY KEY (admin_id)
);


CREATE TABLE customers(
    customer_order SERIAL,
    customer_id uuid DEFAULT uuid_generate_v4(),
    customer_name VARCHAR (225) NOT NULL,
    customer_email VARCHAR (225) NOT NULL,
    customer_password VARCHAR (225) NOT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE products(
    product_id uuid DEFAULT uuid_generate_v4(),
    product_name VARCHAR (225) NOT NULL,
    product_img TEXT NOT NULL,
    product_price VARCHAR (225) NOT NULL,
    product_details VARCHAR (500) NOT NULL,
    PRIMARY KEY (product_id)
);