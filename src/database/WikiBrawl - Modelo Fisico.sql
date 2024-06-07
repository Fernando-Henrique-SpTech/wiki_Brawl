create database if not exists wikibrawl;
use wikibrawl;

create table wikibrawl.usuarios (
id int not null auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(30),
curtida char(5) default 'false',

constraint PK_Usuarios primary key (id)
);

create table wikibrawl.pagina (
id int not null auto_increment,
nome varchar(40),

constraint PK_Pagina primary key (id)
);

create table wikibrawl.paginaAcessada (
fkUsuarios int,
fkPagina int,
vizualizacao char(5) default 'false',
primary key (fkUsuarios, fkPagina),
constraint FK_paginaAcessada_Usuarios foreign key (fkUsuarios) references wikibrawl.Usuarios(id),
constraint FK_paginaAcessada_Pagina foreign key (fkPagina) references wikibrawl.Pagina(id)
);

insert into wikibrawl.usuarios(nome, email, senha) 
values	('Fernando','Fernando.123@gmail.com', 'Fernando@123'),
		('João', 'Joaolima@hotmail.com', 'Joaogames@123');
        
insert into wikibrawl.pagina(nome)
values 	("Shelly"),
		("Colt"),
        ("Poco"),
		("Corvo"),
        ("Spike");
        
insert into wikibrawl.paginaAcessada(fkUsuarios, fkPagina, vizualizacao)
values	(1, 1, 'true'),
		(1, 2, 'true'),
		(1, 3, 'true'),
		(1, 4, 'true'),
		(1, 5, 'true'),
		(2, 5, 'true');
                
select * from wikibrawl.usuarios;

-- Listagem de todas pessoas cadastradas e suas paginas acessadas
select * from wikibrawl.paginaAcessada as pg_A
inner join wikibrawl.usuarios as us
on pg_A.fkUsuarios = us.id;

-- Contagem de Paginas Acessadas por determinada pessoa
select count(vizualizacao)
from wikibrawl.paginaAcessada as pg_A
where pg_A.vizualizacao = "true" and pg_A.fkUsuarios = 3;

-- Contagem de Pessoas cadastradas
select distinct count(id)
from wikibrawl.usuarios; 

-- Contagem de curtidas
select count(curtida)
from wikibrawl.usuarios
where usuarios.curtida = "true";

select *
from wikibrawl.paginaAcessada as pg_A
inner join wikibrawl.usuarios as us
on pg_A.fkUsuarios = us.id
inner join wikibrawl.pagina as pg
on pg_A.fkPagina = pg.id;

select * from
wikibrawl.usuarios;
select * from
wikibrawl.paginaAcessada as pg_A;

select (select count(vizualizacao)
from wikibrawl.paginaAcessada as pg_A
where pg_A.vizualizacao = "true" and pg_A.fkUsuarios = 3) qntd_Cadastros,


(select distinct count(id)
from wikibrawl.usuarios) vizulizacao_Usuario 

from wikibrawl.usuarios as us
inner join wikibrawl.paginaAcessada as pg_A
on pg_A.fkUsuarios = us.id
;


	
select distinct (select count(vizualizacao) from wikibrawl.paginaAcessada as pg_A where pg_A.vizualizacao = "true" and pg_A.fkUsuarios = 4) vizulizacao_Usuario, 
count(id) qntd_Cadastros
from wikibrawl.usuarios as us;

drop table wikibrawl.paginaAcessada;
select * from wikibrawl.paginaAcessada;

