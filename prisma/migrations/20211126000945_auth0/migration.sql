-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "email" TEXT,
    "last_login" DATETIME,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "salt" TEXT NOT NULL DEFAULT '',
    "auth0" TEXT
);
INSERT INTO "new_Account" ("created", "email", "id", "last_login", "password", "salt", "updated", "username") SELECT "created", "email", "id", "last_login", "password", "salt", "updated", "username" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
