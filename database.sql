CREATE TABLE marca (
    "id" int NOT NULL GENERATED ALWAYS AS IDENTITY,
    nome varchar(100) NOT NULL,
    CONSTRAINT PK_8 PRIMARY KEY ("id")
);
CREATE TABLE cliente (
    "id" int NOT NULL GENERATED ALWAYS AS IDENTITY,
    nome varchar(100) NOT NULL,
    tipo char(1) NOT NULL,
    documento varchar(17) NOT NULL,
    celular varchar(14) NOT NULL,
    cnh varchar(15) NOT NULL,
    CONSTRAINT PK_41 PRIMARY KEY ("id")
);
CREATE TABLE veiculo (
    "id" int NOT NULL GENERATED ALWAYS AS IDENTITY,
    marcaId int NOT NULL,
    modelo varchar(100) NOT NULL,
    ano int NOT NULL,
    foto varchar(100) NOT NULL,
    placa varchar(7) NOT NULL,
    cor varchar(50) NOT NULL,
    valorDiaria decimal(18, 2) NOT NULL,
    CONSTRAINT PK_5 PRIMARY KEY ("id"),
    CONSTRAINT FK_20 FOREIGN KEY (marcaId) REFERENCES marca ("id")
);
CREATE INDEX FK_22 ON veiculo (marcaId);
CREATE TABLE locacao (
    "id" int NOT NULL GENERATED ALWAYS AS IDENTITY,
    veiculoId int NOT NULL,
    clienteId int NOT NULL,
    valorTotal decimal(18, 2) NOT NULL,
    inicio timestamp NOT NULL,
    fim timestamp NOT NULL,
    CONSTRAINT PK_36 PRIMARY KEY ("id"),
    CONSTRAINT FK_32 FOREIGN KEY (veiculoId) REFERENCES veiculo ("id"),
    CONSTRAINT FK_50 FOREIGN KEY (clienteId) REFERENCES cliente ("id")
);
CREATE INDEX FK_34 ON locacao (veiculoId);
CREATE INDEX FK_52 ON locacao (clienteId);