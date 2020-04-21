CREATE TABLE `weapons` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `attack` int,
  `attack_speed` int,
  `level` int,
  `rarity` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_weapon` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `weapon_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `armors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `max_hp` int,
  `level` int,
  `rarity` varchar(255),
  `common_buff` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_armor` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `armor_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `rings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `ring_buff` varchar(255),
  `level` int,
  `rarity` varchar(255),
  `common_buff` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_ring` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `ring_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `pets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `level` int,
  `rarity` varchar(255),
  `common_buff` varchar(255),
  `great_buff` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_pet` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `pet_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `lockets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `max_hp` int,
  `level` int,
  `rarity` varchar(255),
  `common_buff` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_locket` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `locket_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `bracelets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `attack` int,
  `level` int,
  `rarity` varchar(255),
  `common_buff` varchar(255),
  `rare_buff` varchar(255),
  `epic_buff` varchar(255),
  `perfect_epic_buff` varchar(255),
  `legendary_buff` varchar(255),
  `ancient_legendary_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_bracelet` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `bracelet_id` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `heroes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `attack` int,
  `max_hp` int,
  `level` int,
  `first_buff` varchar(255),
  `second_buff` varchar(255),
  `third_buff` varchar(255),
  `fourth_buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_hero` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `hero_id` int,
  `level` int
);

CREATE TABLE `mobs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `attack` int,
  `max_hp` int,
  `link_image` varchar(255)
);

CREATE TABLE `bosses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `attack` int,
  `max_hp` int,
  `link_image` varchar(255)
);

CREATE TABLE `talents` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `level` int,
  `buff` varchar(255),
  `link_image` varchar(255)
);

CREATE TABLE `user_talent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `talent_id` int,
  `level` int
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `max_hp` int,
  `attack` int,
  `attack_speed` int,
  `dodge_rate` int,
  `damage_resistance` int,
  `healing_red_hearts` int,
  `projectile_resistance` int,
  `collision_resistance` int,
  `coins_dropped` int,
  `critical_damage_chance` int,
  `critical_damage` int,
  `angel_double_healing_chance` int
);

CREATE TABLE `upgrade_requirements` (
  `level` int,
  `gold` int,
  `scrolls` int,
  `cum_gold` int,
  `cum_scrolls` int
);

ALTER TABLE `user_weapon` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_weapon` ADD FOREIGN KEY (`weapon_id`) REFERENCES `weapons` (`id`);

ALTER TABLE `user_armor` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_armor` ADD FOREIGN KEY (`armor_id`) REFERENCES `armors` (`id`);

ALTER TABLE `user_ring` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_ring` ADD FOREIGN KEY (`ring_id`) REFERENCES `rings` (`id`);

ALTER TABLE `user_pet` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_pet` ADD FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`);

ALTER TABLE `user_locket` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_locket` ADD FOREIGN KEY (`locket_id`) REFERENCES `lockets` (`id`);

ALTER TABLE `user_bracelet` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_bracelet` ADD FOREIGN KEY (`bracelet_id`) REFERENCES `bracelets` (`id`);

ALTER TABLE `user_hero` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_hero` ADD FOREIGN KEY (`hero_id`) REFERENCES `heroes` (`id`);

ALTER TABLE `user_talent` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_talent` ADD FOREIGN KEY (`talent_id`) REFERENCES `talents` (`id`);
