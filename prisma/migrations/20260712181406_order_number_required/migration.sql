-- RedefineTables (SQLite ne supporte pas ALTER COLUMN ... SET NOT NULL directement)
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "guideSlug" TEXT NOT NULL,
    "offerId" TEXT NOT NULL DEFAULT 'default',
    "orderNumber" INTEGER NOT NULL,
    "purchasedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "withdrawalWaivedAt" DATETIME,
    CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO "new_Purchase" ("id", "userId", "guideSlug", "offerId", "orderNumber", "purchasedAt", "withdrawalWaivedAt")
SELECT "id", "userId", "guideSlug", "offerId", "orderNumber", "purchasedAt", "withdrawalWaivedAt" FROM "Purchase";

DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";

CREATE UNIQUE INDEX "Purchase_orderNumber_key" ON "Purchase"("orderNumber");
CREATE UNIQUE INDEX "Purchase_userId_guideSlug_offerId_key" ON "Purchase"("userId", "guideSlug", "offerId");

PRAGMA foreign_keys=ON;
