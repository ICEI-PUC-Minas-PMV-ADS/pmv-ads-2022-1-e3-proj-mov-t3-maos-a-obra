--
-- File generated with SQLiteStudio v3.3.3 on qua mai 4 11:23:00 2022
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Acessa
CREATE TABLE Acessa (idUsuario INTEGER REFERENCES Usuario (idUsuario), idRelatorio INTEGER REFERENCES Relatorio (idRelatorio), idPrestadorServico INTEGER REFERENCES Prestador_Servico (idPrestador));

-- Table: Adiciona
CREATE TABLE Adiciona (idUsuario INTEGER REFERENCES Usuario (idUsuario), idRelatorio INTEGER REFERENCES Relatorio (idRelatorio), idPrestadorServico REFERENCES Prestador_Servico (idPrestador));

-- Table: Feedback
CREATE TABLE Feedback (idFeedback INTEGER PRIMARY KEY AUTOINCREMENT, idPrestador INTEGER REFERENCES Prestador_Servico (idPrestador), idServico INTEGER REFERENCES Servico (idServico));

-- Table: Gera
CREATE TABLE Gera (idRelatorio INTEGER PRIMARY KEY AUTOINCREMENT, idPrestadorServico INTEGER REFERENCES Prestador_Servico (idPrestador));

-- Table: Prestador_Servico
CREATE TABLE Prestador_Servico (idPrestador INTEGER PRIMARY KEY AUTOINCREMENT, nome STRING (60) NOT NULL, sexo BOOLEAN NOT NULL, profissao STRING (70) NOT NULL, endereco STRING (70) NOT NULL, email STRING (60) NOT NULL, idFeedback INTEGER);

-- Table: Relatorio
CREATE TABLE Relatorio (idRelatorio INTEGER PRIMARY KEY AUTOINCREMENT, dados STRING (50) NOT NULL, idFeedback STRING REFERENCES Prestador_Servico (idFeedback));

-- Table: Servico
CREATE TABLE Servico (idServico INTEGER PRIMARY KEY AUTOINCREMENT, dadosServico STRING (70) NOT NULL, dadosPrestador STRING (70) NOT NULL);

-- Table: Usuario
CREATE TABLE Usuario (idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, nome STRING (70) NOT NULL, profissao STRING (70) NOT NULL, email STRING (70) NOT NULL, endereco STRING (70) NOT NULL, sexo BOOLEAN NOT NULL, idFeedback INTEGER REFERENCES Prestador_Servico (idFeedback));

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
