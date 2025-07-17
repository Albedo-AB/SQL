-- Usuarios
INSERT INTO usuarios (email, password_hash, username) VALUES
('playerone@email.com', '$2b$10$E...hash...', 'PlayerOne'),
('ninjagamer@email.com', '$2b$10$E...hash...', 'NinjaGamer'),
('pixelqueen@email.com', '$2b$10$E...hash...', 'PixelQueen');

-- Géneros
INSERT INTO generos (nombre, descripcion) VALUES
('RPG', 'Juegos de Rol con progresión de personajes.'),
('Action', 'Juegos centrados en desafíos físicos y de reacción.'),
('Adventure', 'Juegos con énfasis en la exploración y resolución de puzzles.'),
('Strategy', 'Juegos que requieren planificación y toma de decisiones.'),
('Open World', 'Juegos con un vasto mundo para explorar libremente.');

-- Plataformas
INSERT INTO plataformas (nombre, fabricante) VALUES
('PC', 'Multiple'),
('PlayStation 5', 'Sony'),
('Xbox Series X', 'Microsoft'),
('Nintendo Switch', 'Nintendo');

-- Videojuegos
INSERT INTO videojuegos (titulo, desarrollador, año_lanzamiento, precio, descripcion) VALUES
('The Legend of Zelda: Tears of the Kingdom', 'Nintendo EPD', 2023, 69.99, 'Secuela de Breath of the Wild, expandiendo Hyrule a los cielos.'),
('Elden Ring', 'FromSoftware', 2022, 59.99, 'Un vasto RPG de acción de mundo abierto con la mitología de George R. R. Martin.'),
('Cyberpunk 2077', 'CD Projekt Red', 2020, 49.99, 'Aventura de acción y rol en la megalópolis de Night City.'),
('Baldur''s Gate 3', 'Larian Studios', 2023, 59.99, 'Un RPG de nueva generación ambientado en el universo de Dungeons & Dragons.'),
('Starfield', 'Bethesda Game Studios', 2023, 69.99, 'El primer universo nuevo en 25 años de Bethesda Game Studios.');

-- Enlaces géneros ↔ videojuegos
INSERT INTO videojuego_generos (videojuego_id, genero_id) VALUES
(1, 1), (1, 3), (1, 5),
(2, 1), (2, 2), (2, 5),
(3, 1), (3, 2), (3, 5),
(4, 1), (4, 4),
(5, 1), (5, 5);

-- Enlaces plataformas ↔ videojuegos
INSERT INTO videojuego_plataformas (videojuego_id, plataforma_id) VALUES
(1, 4),
(2, 1), (2, 2), (2, 3),
(3, 1), (3, 2), (3, 3),
(4, 1), (4, 2),
(5, 1), (5, 3);

-- Reseñas
INSERT INTO reseñas (usuario_id, videojuego_id, puntuacion, comentario) VALUES
(1, 1, 10, 'Una obra maestra absoluta. La exploración es increíble.'),
(2, 1, 9, 'Fantástico, aunque a veces la construcción puede ser tediosa.'),
(1, 2, 10, 'El mejor juego de FromSoftware. Desafiante y gratificante.'),
(3, 2, 9, 'Un mundo inmenso y lleno de secretos. Me encantó.'),
(2, 3, 8, 'Tras los parches, es una experiencia RPG sólida y visualmente impactante.'),
(3, 4, 10, 'El RPG que he esperado toda mi vida. Infinitas posibilidades.');
