-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "guideSlug" TEXT NOT NULL,
    "offerId" TEXT NOT NULL DEFAULT 'default',
    "purchasedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("guideSlug", "id", "purchasedAt", "userId") SELECT "guideSlug", "id", "purchasedAt", "userId" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
CREATE UNIQUE INDEX "Purchase_userId_guideSlug_offerId_key" ON "Purchase"("userId", "guideSlug", "offerId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
