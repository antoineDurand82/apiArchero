CREATE TABLE `weapons` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `attack` int,
  `attackSpeed` int,
  `level` int,
  `rarity` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_weapon` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `weaponId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `armors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `maxHp` int,
  `level` int,
  `rarity` varchar(255),
  `commonBuff` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_armor` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `armorId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `rings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `ringBuff` varchar(255),
  `level` int,
  `rarity` varchar(255),
  `commonBuff` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_ring` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `ringId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `pets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `level` int,
  `rarity` varchar(255),
  `commonBuff` varchar(255),
  `great_buff` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_pet` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `petId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `lockets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `maxHp` int,
  `level` int,
  `rarity` varchar(255),
  `commonBuff` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_locket` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `locketId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `bracelets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `attack` int,
  `level` int,
  `rarity` varchar(255),
  `commonBuff` varchar(255),
  `rareBuff` varchar(255),
  `epicBuff` varchar(255),
  `perfectEpicBuff` varchar(255),
  `legendaryBuff` varchar(255),
  `ancientLegendaryBuff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_bracelet` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `braceletId` int,
  `level` int,
  `rarity` varchar(255)
);

CREATE TABLE `heroes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `attack` int,
  `maxHp` int,
  `level` int,
  `first_buff` varchar(255),
  `second_buff` varchar(255),
  `third_buff` varchar(255),
  `fourth_buff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_hero` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `heroId` int,
  `level` int
);

CREATE TABLE `mobs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `attack` int,
  `maxHp` int,
  `linkImage` varchar(255)
);

CREATE TABLE `bosses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `attack` int,
  `maxHp` int,
  `linkImage` varchar(255)
);

CREATE TABLE `talents` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `level` int,
  `buff` varchar(255),
  `linkImage` varchar(255)
);

CREATE TABLE `user_talent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `talentId` int,
  `level` int
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `maxHp` int,
  `attack` int,
  `attackSpeed` int,
  `dodgeRate` int,
  `damageResistance` int,
  `healingRedHearts` int,
  `projectileResistance` int,
  `collisionResistance` int,
  `coinsDropped` int,
  `criticalDamageChance` int,
  `criticalDamage` int,
  `angelDoubleHealingChance` int
);

CREATE TABLE `upgrade_requirements` (
  `level` int,
  `gold` int,
  `scrolls` int,
  `cumGold` int,
  `cumScrolls` int
);

ALTER TABLE `user_weapon` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_weapon` ADD FOREIGN KEY (`weaponId`) REFERENCES `weapons` (`id`);

ALTER TABLE `user_armor` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_armor` ADD FOREIGN KEY (`armorId`) REFERENCES `armors` (`id`);

ALTER TABLE `user_ring` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_ring` ADD FOREIGN KEY (`ringId`) REFERENCES `rings` (`id`);

ALTER TABLE `user_pet` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_pet` ADD FOREIGN KEY (`petId`) REFERENCES `pets` (`id`);

ALTER TABLE `user_locket` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_locket` ADD FOREIGN KEY (`locketId`) REFERENCES `lockets` (`id`);

ALTER TABLE `user_bracelet` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_bracelet` ADD FOREIGN KEY (`braceletId`) REFERENCES `bracelets` (`id`);

ALTER TABLE `user_hero` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_hero` ADD FOREIGN KEY (`heroId`) REFERENCES `heroes` (`id`);

ALTER TABLE `user_talent` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `user_talent` ADD FOREIGN KEY (`talentId`) REFERENCES `talents` (`id`);
