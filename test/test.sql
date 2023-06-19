SELECT *
FROM Users u
  LEFT JOIN Posts p ON u.id = p.user_id
  LEFT JOIN Likes l ON p.id = l.post_id;
-- 
SELECT `User`.*,
  `Posts`.`id` AS `Posts.id`,
  `Posts`.`user_id` AS `Posts.user_id`,
  `Posts`.`title` AS `Posts.title`,
  `Posts`.`content` AS `Posts.content`,
  `Posts`.`created_at` AS `Posts.created_at`,
  `Posts`.`updated_at` AS `Posts.updated_at`,
  `Posts`.`user_id` AS `Posts.user_id`
FROM (
    SELECT `User`.`id`,
      `User`.`nickname`,
      `User`.`password`,
      `User`.`created_at`,
      `User`.`updated_at`
    FROM `Users` AS `User`
    LIMIT 1
  ) AS `User`
  LEFT OUTER JOIN `Posts` AS `Posts` ON `User`.`id` = `Posts`.`user_id`;
--
SELECT `User`.`id`,
`User`.`nickname`,
`User`.`password`,
`User`.`created_at`,
`User`.`updated_at`,
`Posts`.`id` AS `Posts.id`,
`Posts`.`user_id` AS `Posts.user_id`,
`Posts`.`title` AS `Posts.title`,
`Posts`.`content` AS `Posts.content`,
`Posts`.`created_at` AS `Posts.created_at`,
`Posts`.`updated_at` AS `Posts.updated_at`,
`Posts`.`user_id` AS `Posts.user_id`,
`Posts->Likes`.`id` AS `Posts.Likes.id`,
`Posts->Likes`.`user_id` AS `Posts.Likes.user_id`,
`Posts->Likes`.`post_id` AS `Posts.Likes.post_id`,
`Posts->Likes`.`comment_id` AS `Posts.Likes.comment_id`,
`Posts->Likes`.`created_at` AS `Posts.Likes.created_at`,
`Posts->Likes`.`updated_at` AS `Posts.Likes.updated_at`,
`Posts->Likes`.`post_id` AS `Posts.Likes.post_id`,
`Posts->Likes`.`user_id` AS `Posts.Likes.user_id`
FROM `Users` AS `User`
  LEFT OUTER JOIN `Posts` AS `Posts` ON `User`.`id` = `Posts`.`user_id`
  LEFT OUTER JOIN `Likes` AS `Posts->Likes` ON `Posts`.`id` = `Posts->Likes`.`post_id`;