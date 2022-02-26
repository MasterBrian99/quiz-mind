-- CreateTable
CREATE TABLE `user_login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_login_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `profile_url` LONGTEXT NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_profile_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user_login`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
