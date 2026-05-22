CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS certificates;
DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    tech_stack VARCHAR(255),
    github_link VARCHAR(255),
    demo_link VARCHAR(255),
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE certificates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    image VARCHAR(255),
    issuer VARCHAR(255),
    year VARCHAR(20)
);

INSERT INTO projects (title, description, image, tech_stack, github_link, demo_link, category) VALUES
('Website Pakan Burung', 'Website toko pakan burung Dampit Kicaw yang menampilkan produk, informasi usaha, keranjang belanja, dan halaman admin untuk mengelola data produk berbasis database.', '/website-pakan-burung.png', 'PHP, HTML, CSS, MySQL, JavaScript', 'https://github.com/', 'https://example.com', 'Web App');

INSERT INTO certificates (title, image, issuer, year) VALUES
('Web Development Workshop', 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80', 'Tech Community', '2025'),
('UI/UX Design Fundamentals', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80', 'Digital Talent', '2025'),
('Database Management Training', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80', 'Campus Lab', '2024'),
('Organization Leadership Program', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80', 'Student Association', '2024');
