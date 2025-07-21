-- Usuários
INSERT INTO tb_user(firstname, lastname, phone, email, address, password) VALUES ('Luiz', 'Monteiro', '9499994444', 'luiz@test.com', 'Rua XX, Cidade XX', '123456');
INSERT INTO tb_user(firstname, lastname, phone, email, address, password) VALUES ('Ana', 'Oliveira', '9488883333', 'ana@test.com', 'Rua YY, Cidade XX', '123456');

-- Veículos
INSERT INTO tb_vehicle(brand, model, vehicle_year, license_plate, chassis_number, current_mileage, owner_id) VALUES ('Toyota', 'Corolla', 2020, 'ABC-1234', '9BWZZ377VT004251', 45000, 1);
INSERT INTO tb_vehicle(brand, model, vehicle_year, license_plate, chassis_number, current_mileage, owner_id) VALUES ('Honda', 'Civic', 2018, 'XYZ-9876', '2HGFC2F59JH512345', 78000, 2);
INSERT INTO tb_vehicle(brand, model, vehicle_year, license_plate, chassis_number, current_mileage, owner_id) VALUES ('Nissan', 'Versa', 2019, 'LMN-3344', '3N1CN7AP6KL849321', 67000, 2);

-- Service order
INSERT INTO tb_service_order(problem_description, vehicle_condition, status, total, is_paid, client_id, vehicle_id) VALUES ('Bati o carro', 'todo quebrado', 2, 12000, false, 1, 1);
INSERT INTO tb_service_order(problem_description, vehicle_condition, status, total, is_paid, client_id, vehicle_id) VALUES ('Revisão', 'Seminovo', 1, 400, false, 2, 2);
INSERT INTO tb_service_order(problem_description, vehicle_condition, status, total, is_paid, client_id, vehicle_id) VALUES ('Trocar os pneus', 'Usado', 3, 1200, false, 2, 3);

-- ServiceItem (quanto a oficina cobra por cima do ProductItem)
INSERT INTO tb_service_item(name, unit_price, service_order_id) VALUES ('Troca de óleo', 79.90, 2);
INSERT INTO tb_service_item(name, unit_price, service_order_id) VALUES ('Para-choque', 1200.00, 1);
INSERT INTO tb_service_item(name, unit_price, service_order_id) VALUES ('pneus', 799.90, 3);

-- ProductItem
INSERT INTO tb_product_item(name, unit_price, service_order_id) VALUES ('Troca de óleo', 49.90, 2);
INSERT INTO tb_product_item(name, unit_price, service_order_id) VALUES ('Para-choque', 739.90, 2);
INSERT INTO tb_product_item(name, unit_price, service_order_id) VALUES ('pneus', 399.90, 2);
