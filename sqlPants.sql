--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: pant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pant (id, brand, color, image_name, image_path, image_type, name, price, size, stock_quantity, image_link) VALUES (1, 'KAVACH', 'Blue', 'img-2023-03-24-04-28-34-jeans.png', NULL, NULL, 'Kavach Riding Denim', 8300, 'L', 5, NULL);
INSERT INTO public.pant (id, brand, color, image_name, image_path, image_type, name, price, size, stock_quantity, image_link) VALUES (3, 'KAVACH', 'Grey', 'img-2022-12-06-03-44-30-pant1.png', NULL, NULL, 'Kavach Pants', 14500, 'L', 4, NULL);
INSERT INTO public.pant (id, brand, color, image_name, image_path, image_type, name, price, size, stock_quantity, image_link) VALUES (4, 'Motowolf', 'Black', 'img-2023-03-24-04-42-16-motowolf-pants.png', NULL, NULL, 'Motowolf Riding Pants', 7000, 'M', 2, NULL);
INSERT INTO public.pant (id, brand, color, image_name, image_path, image_type, name, price, size, stock_quantity, image_link) VALUES (2, 'Motowolf', 'Blue', 'img-2024-11-08-11-40-06-mw%20combagt%20black.png', NULL, NULL, 'Motowolf Off-Track Pants', 8500, 'L', 3, NULL);


--
-- Name: pant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pant_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

