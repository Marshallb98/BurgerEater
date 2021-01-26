create database burgers_db;

use burgers_db;

create table burgers (
    id integer auto_increment not null,
    burger_name varchar(50),
    devoured boolean,
    primary key (id)
);