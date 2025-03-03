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
-- Data for Name: helmets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (12, 'helmetKid', 'Blue', '1738089140314_img-2022-12-11-04-50-22-blue1_(1).png', 'Vega Buds Full', 2000, '7', 'S', 3, 'link');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (2, 'MT', 'Black', 'img-2024-11-06-01-34-38-thunder%20m%20black.png', 'MT Thunder 3 SV Solid', 10500, '4', 'M', 5, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891825/img-2024-11-06-01-34-38-thunder_m_black_rfpqjt.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (15, 'SHARK', 'White', 'img-2024-09-06-12-26-48-rhad%20white.png', 'Shark Skwal I3 Rhad', 52000, '5', 'L', 0, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891824/img-2024-09-06-12-26-48-rhad_white_tqag4i.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (14, 'SHARK', 'Black', 'img-2024-09-06-02-55-25-Molokai.png', 'Shark Ridill II Molokai', 32000, '4.5', 'L', 2, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891824/img-2024-09-06-02-55-25-Molokai_s1mbzw.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (16, 'Axxis', 'Green', 'img-2023-08-06-02-00-51-Scratch%205_3.png', 'Axxis Segment Scratch', 6500, '3', 'L', 13, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891823/img-2023-08-06-02-00-51-Scratch_5_3_xpcemf.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (19, 'AIROH', 'Green', 'img-2023-07-21-01-52-03-airoh-twist-2-0-lift-removebg-preview%20(1).png', 'Airoh Twist 2.0 Lift', 48000, '3.9', 'L', 3, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891823/img-2023-08-06-02-00-51-Scratch_5_3_xpcemf.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (13, 'IGNYTE Helmets', 'Black', 'ignyte.png', 'Ignyte IGN-4 Trever', 8500, '3.5', 'L', 10, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891821/ignyte_tu4hhi.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (18, 'AXOR Helmets', 'mix', 'img-2023-06-09-01-18-14-axorx.png', 'Axor X-Cross SC', 12000, '3.7', 'L', 10, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891821/img-2023-06-09-01-18-14-axorx_jylxpl.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (21, 'SteelBird', 'Black', 'img-2023-07-12-04-00-04-helmit-king-sb-34-zorro-vast-mat-.png', 'Steelbird SB-34 Vast', 4000, '3', 'L', 20, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891822/img-2023-07-12-04-00-04-helmit-king-sb-34-zorro-vast-mat-_vrqb1u.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (23, 'LS2', 'Red', 'img-2022-11-28-05-16-53-loop1.png', 'LS2 Stream Loop', 8900, '4', 'L', 8, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891821/img-2022-11-28-05-16-53-loop1_yji8ve.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (48, 'LS2', 'Black', 'img-2023-05-07-11-54-38-mono1.png', 'LS2 MX436 Pionner Solid', 12250, '4', 'L', 12, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891821/img-2023-06-09-01-18-14-axorx_jylxpl.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (52, 'Studds Helmets', 'Black', 'img-2023-07-12-03-39-01-51v-6-8s02L-removebg-preview.png', 'Studds Jet D5', 2450, '2', 'M', 7, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891822/img-2023-07-12-03-39-01-51v-6-8s02L-removebg-preview_vbj3zb.webp');
INSERT INTO public.helmets (id, brand, color, image_name, name, price, safety_rating, size, stock_quantity, image_link) VALUES (59, 'AXOR Helmets', 'Brown', 'img-2022-12-08-03-56-31-r2.png', 'Axor Jet Solid', 6900, '2', 'L', 12, 'https://res.cloudinary.com/dqtdcyoym/image/upload/v1740891821/img-2022-12-08-03-56-31-r2_b8rxvm.webp');


--
-- Name: helmets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.helmets_id_seq', 12, true);


--
-- PostgreSQL database dump complete
--

