CREATE DATABASE PracticaDeIndicesBD2
SET dateformat ymd
use PracticaDeIndicesBD2

--Data creada por deepseek
-- Tabla 1: Clientes
CREATE TABLE clientes (
    cliente_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(20),
    fecha_registro DATE NOT NULL,
    direccion VARCHAR(200),
    ciudad VARCHAR(100),
    pais VARCHAR(100),
    codigo_postal VARCHAR(20)
);

-- Tabla 2: Productos
CREATE TABLE productos (
    producto_id INT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    costo DECIMAL(10,2) NOT NULL,
    categoria_id INT NOT NULL,
    stock INT NOT NULL,
    fecha_creacion DATE NOT NULL,
    proveedor_id INT NOT NULL)
;

-- Tabla 3: Pedidos
CREATE TABLE pedidos (
    pedido_id INT PRIMARY KEY,
    cliente_id INT NOT NULL,
    fecha_pedido DATETIME NOT NULL,
    fecha_entrega DATETIME,
    estado VARCHAR(50) NOT NULL,
    total DECIMAL(12,2) NOT NULL,
    metodo_pago VARCHAR(50),
    direccion_envio VARCHAR(200),
    ciudad_envio VARCHAR(100),
    empleado_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

-- Tabla 4: Detalles_Pedido (para relación muchos a muchos entre pedidos y productos)
CREATE TABLE detalles_pedido (
    detalle_id INT PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    descuento DECIMAL(5,2) DEFAULT 0,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);

create  index "idx_clientes" on "dbo"."clientes"("email")
create  index "idx_clientes_ciudad__pais" on "dbo"."clientes"("ciudad", "pais")